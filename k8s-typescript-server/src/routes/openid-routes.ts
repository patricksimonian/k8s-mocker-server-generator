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

export function createopenidRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /openid/v1/jwks/
   * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
   */
  router.get('/openid/v1/jwks/', async (req, res, next) => {
    try {
      await handleGet-Openid-V1-Jwks-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /openid/v1/jwks/
 */
async function handleget_Openid_V1_Jwks_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing openids in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.openid>(
    storage, 
    'openid',
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
