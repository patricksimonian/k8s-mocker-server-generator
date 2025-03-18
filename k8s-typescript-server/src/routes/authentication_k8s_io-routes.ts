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

export function createauthentication_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * POST /apis/authentication.k8s.io/v1/selfsubjectreviews
   * create a SelfSubjectReview
   */
  router.post('/apis/authentication.k8s.io/v1/selfsubjectreviews', async (req, res, next) => {
    try {
      await handlePost-Apis-Authentication.K8s.Io-V1-Selfsubjectreviews(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/authentication.k8s.io/v1/tokenreviews
   * create a TokenReview
   */
  router.post('/apis/authentication.k8s.io/v1/tokenreviews', async (req, res, next) => {
    try {
      await handlePost-Apis-Authentication.K8s.Io-V1-Tokenreviews(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/authentication.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/authentication.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Authentication.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/authentication.k8s.io/
   * get information of a group
   */
  router.get('/apis/authentication.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Authentication.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for POST /apis/authentication.k8s.io/v1/selfsubjectreviews
 */
async function handlepost_Apis_Authentication_K8s_Io_V1_Selfsubjectreviews(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.authentication_k8s_io;
  
  logger.info(`Creating authentication.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.authentication_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /apis/authentication.k8s.io/v1/tokenreviews
 */
async function handlepost_Apis_Authentication_K8s_Io_V1_Tokenreviews(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.authentication_k8s_io;
  
  logger.info(`Creating authentication.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.authentication_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/authentication.k8s.io/v1/
 */
async function handleget_Apis_Authentication_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing authentication.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.authentication_k8s_io>(
    storage, 
    'authentication.k8s.io',
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
 * Handler for GET /apis/authentication.k8s.io/
 */
async function handleget_Apis_Authentication_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing authentication.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.authentication_k8s_io>(
    storage, 
    'authentication.k8s.io',
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
