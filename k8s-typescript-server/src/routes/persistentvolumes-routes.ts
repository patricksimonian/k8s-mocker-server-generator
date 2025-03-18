import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { 
  fetchResourceList, 
  validateResource, 
  applyPatch, 
  handleResourceError,
  createNotFoundResponse
} from '../utils';

// Import all models to ensure we have what we need
import * as models from '../models';

export function createpersistentvolumesRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * PUT /api/v1/persistentvolumes/:name/status
   * replace status of the specified PersistentVolume
   */
  router.put('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Persistentvolumes-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/persistentvolumes/:name/status
   * partially update status of the specified PersistentVolume
   */
  router.patch('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Persistentvolumes-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/persistentvolumes/:name/status
   * read status of the specified PersistentVolume
   */
  router.get('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Persistentvolumes-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/persistentvolumes
   * list or watch objects of kind PersistentVolume
   */
  router.get('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Persistentvolumes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/persistentvolumes
   * create a PersistentVolume
   */
  router.post('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Persistentvolumes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/persistentvolumes
   * delete collection of PersistentVolume
   */
  router.delete('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Persistentvolumes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/persistentvolumes/:name
   * read the specified PersistentVolume
   */
  router.get('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Persistentvolumes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/persistentvolumes/:name
   * replace the specified PersistentVolume
   */
  router.put('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Persistentvolumes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/persistentvolumes/:name
   * delete a PersistentVolume
   */
  router.delete('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Persistentvolumes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/persistentvolumes/:name
   * partially update the specified PersistentVolume
   */
  router.patch('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Persistentvolumes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for PUT /api/v1/persistentvolumes/:name/status
 */
async function handleput_Api_V1_Persistentvolumes__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.persistentvolumes;
  
  logger.info(`Updating persistentvolumes ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('persistentvolumes', name, resource, namespace) as models.persistentvolumes;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/persistentvolumes/:name/status
 */
async function handlepatch_Api_V1_Persistentvolumes__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching persistentvolumes ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.persistentvolumes>(
      storage, 
      'persistentvolumes',
      namespace, 
      name, 
      patchData
    );
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /api/v1/persistentvolumes/:name/status
 */
async function handleget_Api_V1_Persistentvolumes__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting persistentvolumes ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('persistentvolumes', name, namespace) as models.persistentvolumes;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('persistentvolumes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/persistentvolumes
 */
async function handleget_Api_V1_Persistentvolumes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing persistentvolumess in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.persistentvolumes>(
    storage, 
    'persistentvolumes',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for POST /api/v1/persistentvolumes
 */
async function handlepost_Api_V1_Persistentvolumes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.persistentvolumes;
  
  logger.info(`Creating persistentvolumes ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.persistentvolumes;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/persistentvolumes
 */
async function handledelete_Api_V1_Persistentvolumes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting persistentvolumes ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('persistentvolumes', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `persistentvolumes "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('persistentvolumes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/persistentvolumes/:name
 */
async function handleget_Api_V1_Persistentvolumes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting persistentvolumes ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('persistentvolumes', name, namespace) as models.persistentvolumes;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('persistentvolumes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/persistentvolumes/:name
 */
async function handleput_Api_V1_Persistentvolumes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.persistentvolumes;
  
  logger.info(`Updating persistentvolumes ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('persistentvolumes', name, resource, namespace) as models.persistentvolumes;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/persistentvolumes/:name
 */
async function handledelete_Api_V1_Persistentvolumes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting persistentvolumes ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('persistentvolumes', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `persistentvolumes "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('persistentvolumes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/persistentvolumes/:name
 */
async function handlepatch_Api_V1_Persistentvolumes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching persistentvolumes ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.persistentvolumes>(
      storage, 
      'persistentvolumes',
      namespace, 
      name, 
      patchData
    );
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}
