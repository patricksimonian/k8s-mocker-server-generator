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

export function createauthorization_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * POST /apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews
   * create a LocalSubjectAccessReview
   */
  router.post('/apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews', async (req, res, next) => {
    try {
      await handlePost-Apis-Authorization.K8s.Io-V1-Namespaces-_namespace-Localsubjectaccessreviews(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/authorization.k8s.io/v1/subjectaccessreviews
   * create a SubjectAccessReview
   */
  router.post('/apis/authorization.k8s.io/v1/subjectaccessreviews', async (req, res, next) => {
    try {
      await handlePost-Apis-Authorization.K8s.Io-V1-Subjectaccessreviews(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/authorization.k8s.io/v1/selfsubjectaccessreviews
   * create a SelfSubjectAccessReview
   */
  router.post('/apis/authorization.k8s.io/v1/selfsubjectaccessreviews', async (req, res, next) => {
    try {
      await handlePost-Apis-Authorization.K8s.Io-V1-Selfsubjectaccessreviews(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/authorization.k8s.io/
   * get information of a group
   */
  router.get('/apis/authorization.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Authorization.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/authorization.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/authorization.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Authorization.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/authorization.k8s.io/v1/selfsubjectrulesreviews
   * create a SelfSubjectRulesReview
   */
  router.post('/apis/authorization.k8s.io/v1/selfsubjectrulesreviews', async (req, res, next) => {
    try {
      await handlePost-Apis-Authorization.K8s.Io-V1-Selfsubjectrulesreviews(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for POST /apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews
 */
async function handlepost_Apis_Authorization_K8s_Io_V1_Namespaces__namespace_Localsubjectaccessreviews(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.authorization_k8s_io;
  
  logger.info(`Creating authorization.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.authorization_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /apis/authorization.k8s.io/v1/subjectaccessreviews
 */
async function handlepost_Apis_Authorization_K8s_Io_V1_Subjectaccessreviews(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.authorization_k8s_io;
  
  logger.info(`Creating authorization.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.authorization_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /apis/authorization.k8s.io/v1/selfsubjectaccessreviews
 */
async function handlepost_Apis_Authorization_K8s_Io_V1_Selfsubjectaccessreviews(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.authorization_k8s_io;
  
  logger.info(`Creating authorization.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.authorization_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/authorization.k8s.io/
 */
async function handleget_Apis_Authorization_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.authorization_k8s_io>(
    storage, 
    'authorization.k8s.io',
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
 * Handler for GET /apis/authorization.k8s.io/v1/
 */
async function handleget_Apis_Authorization_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.authorization_k8s_io>(
    storage, 
    'authorization.k8s.io',
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
 * Handler for POST /apis/authorization.k8s.io/v1/selfsubjectrulesreviews
 */
async function handlepost_Apis_Authorization_K8s_Io_V1_Selfsubjectrulesreviews(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.authorization_k8s_io;
  
  logger.info(`Creating authorization.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.authorization_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}
