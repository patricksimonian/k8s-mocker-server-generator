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

export function createpolicyRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/policy/v1/watch/poddisruptionbudgets
   * watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/policy/v1/watch/poddisruptionbudgets', async (req, res, next) => {
    try {
      await handleGet-Apis-Policy-V1-Watch-Poddisruptionbudgets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
   * list or watch objects of kind PodDisruptionBudget
   */
  router.get('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
    try {
      await handleGet-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
   * create a PodDisruptionBudget
   */
  router.post('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
    try {
      await handlePost-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
   * delete collection of PodDisruptionBudget
   */
  router.delete('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
    try {
      await handleDelete-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/policy/
   * get information of a group
   */
  router.get('/apis/policy/', async (req, res, next) => {
    try {
      await handleGet-Apis-Policy-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
   * partially update the specified PodDisruptionBudget
   */
  router.patch('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
   * read the specified PodDisruptionBudget
   */
  router.get('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
   * replace the specified PodDisruptionBudget
   */
  router.put('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
   * delete a PodDisruptionBudget
   */
  router.delete('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/policy/v1/
   * get available resources
   */
  router.get('/apis/policy/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Policy-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets
   * watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
    try {
      await handleGet-Apis-Policy-V1-Watch-Namespaces-_namespace-Poddisruptionbudgets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
   * read status of the specified PodDisruptionBudget
   */
  router.get('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
   * replace status of the specified PodDisruptionBudget
   */
  router.put('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
   * partially update status of the specified PodDisruptionBudget
   */
  router.patch('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Policy-V1-Namespaces-_namespace-Poddisruptionbudgets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/policy/v1/poddisruptionbudgets
   * list or watch objects of kind PodDisruptionBudget
   */
  router.get('/apis/policy/v1/poddisruptionbudgets', async (req, res, next) => {
    try {
      await handleGet-Apis-Policy-V1-Poddisruptionbudgets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name
   * watch changes to an object of kind PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Policy-V1-Watch-Namespaces-_namespace-Poddisruptionbudgets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/policy/v1/watch/poddisruptionbudgets
 */
async function handleget_Apis_Policy_V1_Watch_Poddisruptionbudgets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing policys in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.policy>(
    storage, 
    'policy',
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
 * Handler for GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
 */
async function handleget_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting policy ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('policy', name, namespace) as models.policy;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('policy', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
 */
async function handlepost_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.policy;
  
  logger.info(`Creating policy ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.policy;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
 */
async function handledelete_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting policy ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('policy', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `policy "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('policy', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/policy/
 */
async function handleget_Apis_Policy_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing policys in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.policy>(
    storage, 
    'policy',
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
 * Handler for PATCH /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
 */
async function handlepatch_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching policy ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.policy>(
      storage, 
      'policy',
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
 * Handler for GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
 */
async function handleget_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting policy ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('policy', name, namespace) as models.policy;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('policy', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
 */
async function handleput_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.policy;
  
  logger.info(`Updating policy ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('policy', name, resource, namespace) as models.policy;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
 */
async function handledelete_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting policy ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('policy', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `policy "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('policy', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/policy/v1/
 */
async function handleget_Apis_Policy_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing policys in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.policy>(
    storage, 
    'policy',
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
 * Handler for GET /apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets
 */
async function handleget_Apis_Policy_V1_Watch_Namespaces__namespace_Poddisruptionbudgets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting policy ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('policy', name, namespace) as models.policy;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('policy', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
 */
async function handleget_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting policy ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('policy', name, namespace) as models.policy;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('policy', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
 */
async function handleput_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.policy;
  
  logger.info(`Updating policy ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('policy', name, resource, namespace) as models.policy;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status
 */
async function handlepatch_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching policy ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.policy>(
      storage, 
      'policy',
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
 * Handler for GET /apis/policy/v1/poddisruptionbudgets
 */
async function handleget_Apis_Policy_V1_Poddisruptionbudgets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing policys in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.policy>(
    storage, 
    'policy',
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
 * Handler for GET /apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name
 */
async function handleget_Apis_Policy_V1_Watch_Namespaces__namespace_Poddisruptionbudgets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting policy ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('policy', name, namespace) as models.policy;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('policy', name, namespace));
      return;
    }
    throw error;
  }
}
