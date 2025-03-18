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

export function createapiextensions_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions
   * watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiextensions.K8s.Io-V1-Watch-Customresourcedefinitions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions
   * list or watch objects of kind CustomResourceDefinition
   */
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/apiextensions.k8s.io/v1/customresourcedefinitions
   * create a CustomResourceDefinition
   */
  router.post('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      await handlePost-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions
   * delete collection of CustomResourceDefinition
   */
  router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiextensions.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/apiextensions.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiextensions.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiextensions.k8s.io/
   * get information of a group
   */
  router.get('/apis/apiextensions.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiextensions.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
   * read the specified CustomResourceDefinition
   */
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
   * replace the specified CustomResourceDefinition
   */
  router.put('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
   * delete a CustomResourceDefinition
   */
  router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
   * partially update the specified CustomResourceDefinition
   */
  router.patch('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
   * read status of the specified CustomResourceDefinition
   */
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
   * replace status of the specified CustomResourceDefinition
   */
  router.put('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
   * partially update status of the specified CustomResourceDefinition
   */
  router.patch('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apiextensions.K8s.Io-V1-Customresourcedefinitions-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name
   * watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiextensions.K8s.Io-V1-Watch-Customresourcedefinitions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions
 */
async function handleget_Apis_Apiextensions_K8s_Io_V1_Watch_Customresourcedefinitions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing apiextensions.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apiextensions_k8s_io>(
    storage, 
    'apiextensions.k8s.io',
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
 * Handler for GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions
 */
async function handleget_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing apiextensions.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apiextensions_k8s_io>(
    storage, 
    'apiextensions.k8s.io',
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
 * Handler for POST /apis/apiextensions.k8s.io/v1/customresourcedefinitions
 */
async function handlepost_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.apiextensions_k8s_io;
  
  logger.info(`Creating apiextensions.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.apiextensions_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions
 */
async function handledelete_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apiextensions.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apiextensions.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apiextensions.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiextensions.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apiextensions.k8s.io/v1/
 */
async function handleget_Apis_Apiextensions_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing apiextensions.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apiextensions_k8s_io>(
    storage, 
    'apiextensions.k8s.io',
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
 * Handler for GET /apis/apiextensions.k8s.io/
 */
async function handleget_Apis_Apiextensions_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing apiextensions.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apiextensions_k8s_io>(
    storage, 
    'apiextensions.k8s.io',
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
 * Handler for GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
 */
async function handleget_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apiextensions.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apiextensions.k8s.io', name, namespace) as models.apiextensions_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiextensions.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
 */
async function handleput_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apiextensions_k8s_io;
  
  logger.info(`Updating apiextensions.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apiextensions.k8s.io', name, resource, namespace) as models.apiextensions_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
 */
async function handledelete_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apiextensions.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apiextensions.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apiextensions.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiextensions.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
 */
async function handlepatch_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apiextensions.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apiextensions_k8s_io>(
      storage, 
      'apiextensions.k8s.io',
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
 * Handler for GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
 */
async function handleget_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apiextensions.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apiextensions.k8s.io', name, namespace) as models.apiextensions_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiextensions.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
 */
async function handleput_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apiextensions_k8s_io;
  
  logger.info(`Updating apiextensions.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apiextensions.k8s.io', name, resource, namespace) as models.apiextensions_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status
 */
async function handlepatch_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apiextensions.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apiextensions_k8s_io>(
      storage, 
      'apiextensions.k8s.io',
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
 * Handler for GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name
 */
async function handleget_Apis_Apiextensions_K8s_Io_V1_Watch_Customresourcedefinitions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apiextensions.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apiextensions.k8s.io', name, namespace) as models.apiextensions_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiextensions.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}
