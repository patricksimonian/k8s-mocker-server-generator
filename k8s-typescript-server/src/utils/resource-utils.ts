import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import express from 'express';

/**
 * Helper function to fetch a list of resources with pagination
 */
export async function fetchResourceList<T = any>(
  storage: Storage, 
  resourceType: string,
  namespace: string, 
  options: {
    limit?: number;
    continueToken?: string;
    labelSelector?: string;
    fieldSelector?: string;
  }
): Promise<{ kind: string; apiVersion: string; metadata: any; items: T[] }> {
  const { limit, continueToken, labelSelector, fieldSelector } = options;
  
  try {
    const resources = await storage.listResources(resourceType, namespace, labelSelector);
    
    return {
      kind: `${resourceType}List`,
      apiVersion: 'v1',
      metadata: {
        resourceVersion: Date.now().toString(),
        continue: ''
      },
      items: resources as T[]
    };
  } catch (error) {
    logger.error(`Error listing ${resourceType}s:`, error);
    throw error;
  }
}

/**
 * Helper function to validate a resource before creation/update
 */
export async function validateResource(resource: any): Promise<void> {
  // Basic validation
  if (!resource.metadata || !resource.metadata.name) {
    throw {
      code: 'VALIDATION_FAILED',
      message: 'Resource must have metadata.name'
    };
  }
  
  // Additional validation logic can be added here
}

/**
 * Helper function to apply a patch to a resource
 */
export async function applyPatch<T = any>(
  storage: Storage,
  resourceType: string,
  namespace: string,
  name: string,
  patchData: any
): Promise<T> {
  try {
    // Get the current resource
    const current = await storage.getResource(resourceType, name, namespace);
    
    // Apply the patch (simple merge for now)
    const patched = {
      ...current,
      ...patchData,
      metadata: {
        ...current.metadata,
        ...patchData.metadata
      }
    };
    
    // Update with the patched resource
    return await storage.updateResource(resourceType, name, patched, namespace) as T;
  } catch (error) {
    logger.error(`Error patching ${resourceType}:`, error);
    throw error;
  }
}

/**
 * Helper function to handle common resource errors
 */
export function handleResourceError(error: any, res: express.Response): void {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Failure',
      message: error.message,
      reason: 'NotFound',
      code: 404
    });
  } else if (error.code === 'ALREADY_EXISTS') {
    res.status(409).json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Failure',
      message: error.message,
      reason: 'AlreadyExists',
      code: 409
    });
  } else if (error.code === 'VALIDATION_FAILED') {
    res.status(400).json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Failure',
      message: error.message,
      reason: 'BadRequest',
      code: 400
    });
  } else {
    throw error;
  }
}

/**
 * Helper function to create a standard 404 response for a resource
 */
export function createNotFoundResponse(resourceType: string, name: string, namespace: string): any {
  return {
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Failure',
    message: `${resourceType} "${name}" not found in namespace "${namespace}"`,
    reason: 'NotFound',
    details: {
      name: name,
      kind: resourceType
    },
    code: 404
  };
}
