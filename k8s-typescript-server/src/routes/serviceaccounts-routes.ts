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

export function createserviceaccountsRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /api/v1/serviceaccounts
   * list or watch objects of kind ServiceAccount
   */
  router.get('/api/v1/serviceaccounts', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Serviceaccounts(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /api/v1/serviceaccounts
 */
async function handleget_Api_V1_Serviceaccounts(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing serviceaccountss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.serviceaccounts>(
    storage, 
    'serviceaccounts',
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
