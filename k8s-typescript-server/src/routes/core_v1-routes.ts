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

export function createcore_v1Routes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /api/v1/
   * get available resources
   */
  router.get('/api/v1/', async (req, res, next) => {
    try {
      await handleGet-Api-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /api/v1/
 */
async function handleget_Api_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing core_v1s in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.core_v1>(
    storage, 
    'core_v1',
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
