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

export function createModel_well_knownRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /.well-known/openid-configuration/
   * get service account issuer OpenID configuration, also known as the 'OIDC discovery doc'
   */
  router.get('/.well-known/openid-configuration/', async (req, res, next) => {
    try {
      await handleGet-.Well-Known-Openid-Configuration-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /.well-known/openid-configuration/
 */
async function handleget__Well_Known_Openid_Configuration_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing .well-knowns in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.Model_well_known>(
    storage, 
    '.well-known',
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
