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

export function createcomponentstatusesRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /api/v1/componentstatuses
   * list objects of kind ComponentStatus
   */
  router.get('/api/v1/componentstatuses', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Componentstatuses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/componentstatuses/:name
   * read the specified ComponentStatus
   */
  router.get('/api/v1/componentstatuses/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Componentstatuses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /api/v1/componentstatuses
 */
async function handleget_Api_V1_Componentstatuses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing componentstatusess in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.componentstatuses>(
    storage, 
    'componentstatuses',
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
 * Handler for GET /api/v1/componentstatuses/:name
 */
async function handleget_Api_V1_Componentstatuses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting componentstatuses ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('componentstatuses', name, namespace) as models.componentstatuses;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('componentstatuses', name, namespace));
      return;
    }
    throw error;
  }
}
