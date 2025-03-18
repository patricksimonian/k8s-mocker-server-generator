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

export function createapiregistration_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * DELETE /apis/apiregistration.k8s.io/v1/apiservices
   * delete collection of APIService
   */
  router.delete('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apiregistration.K8s.Io-V1-Apiservices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiregistration.k8s.io/v1/apiservices
   * list or watch objects of kind APIService
   */
  router.get('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiregistration.K8s.Io-V1-Apiservices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/apiregistration.k8s.io/v1/apiservices
   * create an APIService
   */
  router.post('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
    try {
      await handlePost-Apis-Apiregistration.K8s.Io-V1-Apiservices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiregistration.k8s.io/v1/watch/apiservices
   * watch individual changes to a list of APIService. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apiregistration.k8s.io/v1/watch/apiservices', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiregistration.K8s.Io-V1-Watch-Apiservices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiregistration.k8s.io/
   * get information of a group
   */
  router.get('/apis/apiregistration.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiregistration.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiregistration.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/apiregistration.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiregistration.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiregistration.k8s.io/v1/watch/apiservices/:name
   * watch changes to an object of kind APIService. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/apiregistration.k8s.io/v1/watch/apiservices/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiregistration.K8s.Io-V1-Watch-Apiservices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiregistration.k8s.io/v1/apiservices/:name/status
   * read status of the specified APIService
   */
  router.get('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiregistration.K8s.Io-V1-Apiservices-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apiregistration.k8s.io/v1/apiservices/:name/status
   * replace status of the specified APIService
   */
  router.put('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Apiregistration.K8s.Io-V1-Apiservices-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apiregistration.k8s.io/v1/apiservices/:name/status
   * partially update status of the specified APIService
   */
  router.patch('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apiregistration.K8s.Io-V1-Apiservices-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apiregistration.k8s.io/v1/apiservices/:name
   * read the specified APIService
   */
  router.get('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apiregistration.K8s.Io-V1-Apiservices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apiregistration.k8s.io/v1/apiservices/:name
   * replace the specified APIService
   */
  router.put('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Apiregistration.K8s.Io-V1-Apiservices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apiregistration.k8s.io/v1/apiservices/:name
   * delete an APIService
   */
  router.delete('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apiregistration.K8s.Io-V1-Apiservices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apiregistration.k8s.io/v1/apiservices/:name
   * partially update the specified APIService
   */
  router.patch('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apiregistration.K8s.Io-V1-Apiservices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for DELETE /apis/apiregistration.k8s.io/v1/apiservices
 */
async function handledelete_Apis_Apiregistration_K8s_Io_V1_Apiservices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apiregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apiregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apiregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apiregistration.k8s.io/v1/apiservices
 */
async function handleget_Apis_Apiregistration_K8s_Io_V1_Apiservices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing apiregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apiregistration_k8s_io>(
    storage, 
    'apiregistration.k8s.io',
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
 * Handler for POST /apis/apiregistration.k8s.io/v1/apiservices
 */
async function handlepost_Apis_Apiregistration_K8s_Io_V1_Apiservices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.apiregistration_k8s_io;
  
  logger.info(`Creating apiregistration.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.apiregistration_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/apiregistration.k8s.io/v1/watch/apiservices
 */
async function handleget_Apis_Apiregistration_K8s_Io_V1_Watch_Apiservices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing apiregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apiregistration_k8s_io>(
    storage, 
    'apiregistration.k8s.io',
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
 * Handler for GET /apis/apiregistration.k8s.io/
 */
async function handleget_Apis_Apiregistration_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing apiregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apiregistration_k8s_io>(
    storage, 
    'apiregistration.k8s.io',
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
 * Handler for GET /apis/apiregistration.k8s.io/v1/
 */
async function handleget_Apis_Apiregistration_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing apiregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apiregistration_k8s_io>(
    storage, 
    'apiregistration.k8s.io',
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
 * Handler for GET /apis/apiregistration.k8s.io/v1/watch/apiservices/:name
 */
async function handleget_Apis_Apiregistration_K8s_Io_V1_Watch_Apiservices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apiregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apiregistration.k8s.io', name, namespace) as models.apiregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apiregistration.k8s.io/v1/apiservices/:name/status
 */
async function handleget_Apis_Apiregistration_K8s_Io_V1_Apiservices__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apiregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apiregistration.k8s.io', name, namespace) as models.apiregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apiregistration.k8s.io/v1/apiservices/:name/status
 */
async function handleput_Apis_Apiregistration_K8s_Io_V1_Apiservices__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apiregistration_k8s_io;
  
  logger.info(`Updating apiregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apiregistration.k8s.io', name, resource, namespace) as models.apiregistration_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/apiregistration.k8s.io/v1/apiservices/:name/status
 */
async function handlepatch_Apis_Apiregistration_K8s_Io_V1_Apiservices__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apiregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apiregistration_k8s_io>(
      storage, 
      'apiregistration.k8s.io',
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
 * Handler for GET /apis/apiregistration.k8s.io/v1/apiservices/:name
 */
async function handleget_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apiregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apiregistration.k8s.io', name, namespace) as models.apiregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apiregistration.k8s.io/v1/apiservices/:name
 */
async function handleput_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apiregistration_k8s_io;
  
  logger.info(`Updating apiregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apiregistration.k8s.io', name, resource, namespace) as models.apiregistration_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apiregistration.k8s.io/v1/apiservices/:name
 */
async function handledelete_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apiregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apiregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apiregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apiregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/apiregistration.k8s.io/v1/apiservices/:name
 */
async function handlepatch_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apiregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apiregistration_k8s_io>(
      storage, 
      'apiregistration.k8s.io',
      namespace, 
      name, 
      patchData
    );
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}
