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

export function creatediscovery_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/discovery.k8s.io/
   * get information of a group
   */
  router.get('/apis/discovery.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Discovery.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/discovery.k8s.io/v1/watch/endpointslices
   * watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/discovery.k8s.io/v1/watch/endpointslices', async (req, res, next) => {
    try {
      await handleGet-Apis-Discovery.K8s.Io-V1-Watch-Endpointslices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/discovery.k8s.io/v1/endpointslices
   * list or watch objects of kind EndpointSlice
   */
  router.get('/apis/discovery.k8s.io/v1/endpointslices', async (req, res, next) => {
    try {
      await handleGet-Apis-Discovery.K8s.Io-V1-Endpointslices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/discovery.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/discovery.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Discovery.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices
   * watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices', async (req, res, next) => {
    try {
      await handleGet-Apis-Discovery.K8s.Io-V1-Watch-Namespaces-_namespace-Endpointslices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
   * list or watch objects of kind EndpointSlice
   */
  router.get('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', async (req, res, next) => {
    try {
      await handleGet-Apis-Discovery.K8s.Io-V1-Namespaces-_namespace-Endpointslices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
   * create an EndpointSlice
   */
  router.post('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', async (req, res, next) => {
    try {
      await handlePost-Apis-Discovery.K8s.Io-V1-Namespaces-_namespace-Endpointslices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
   * delete collection of EndpointSlice
   */
  router.delete('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', async (req, res, next) => {
    try {
      await handleDelete-Apis-Discovery.K8s.Io-V1-Namespaces-_namespace-Endpointslices(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name
   * watch changes to an object of kind EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Discovery.K8s.Io-V1-Watch-Namespaces-_namespace-Endpointslices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
   * read the specified EndpointSlice
   */
  router.get('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Discovery.K8s.Io-V1-Namespaces-_namespace-Endpointslices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
   * replace the specified EndpointSlice
   */
  router.put('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Discovery.K8s.Io-V1-Namespaces-_namespace-Endpointslices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
   * delete an EndpointSlice
   */
  router.delete('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Discovery.K8s.Io-V1-Namespaces-_namespace-Endpointslices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
   * partially update the specified EndpointSlice
   */
  router.patch('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Discovery.K8s.Io-V1-Namespaces-_namespace-Endpointslices-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/discovery.k8s.io/
 */
async function handleget_Apis_Discovery_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing discovery.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.discovery_k8s_io>(
    storage, 
    'discovery.k8s.io',
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
 * Handler for GET /apis/discovery.k8s.io/v1/watch/endpointslices
 */
async function handleget_Apis_Discovery_K8s_Io_V1_Watch_Endpointslices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing discovery.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.discovery_k8s_io>(
    storage, 
    'discovery.k8s.io',
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
 * Handler for GET /apis/discovery.k8s.io/v1/endpointslices
 */
async function handleget_Apis_Discovery_K8s_Io_V1_Endpointslices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing discovery.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.discovery_k8s_io>(
    storage, 
    'discovery.k8s.io',
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
 * Handler for GET /apis/discovery.k8s.io/v1/
 */
async function handleget_Apis_Discovery_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing discovery.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.discovery_k8s_io>(
    storage, 
    'discovery.k8s.io',
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
 * Handler for GET /apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices
 */
async function handleget_Apis_Discovery_K8s_Io_V1_Watch_Namespaces__namespace_Endpointslices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting discovery.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('discovery.k8s.io', name, namespace) as models.discovery_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('discovery.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
 */
async function handleget_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting discovery.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('discovery.k8s.io', name, namespace) as models.discovery_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('discovery.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
 */
async function handlepost_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.discovery_k8s_io;
  
  logger.info(`Creating discovery.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.discovery_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
 */
async function handledelete_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting discovery.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('discovery.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `discovery.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('discovery.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name
 */
async function handleget_Apis_Discovery_K8s_Io_V1_Watch_Namespaces__namespace_Endpointslices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting discovery.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('discovery.k8s.io', name, namespace) as models.discovery_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('discovery.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
 */
async function handleget_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting discovery.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('discovery.k8s.io', name, namespace) as models.discovery_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('discovery.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
 */
async function handleput_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.discovery_k8s_io;
  
  logger.info(`Updating discovery.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('discovery.k8s.io', name, resource, namespace) as models.discovery_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
 */
async function handledelete_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting discovery.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('discovery.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `discovery.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('discovery.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
 */
async function handlepatch_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching discovery.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.discovery_k8s_io>(
      storage, 
      'discovery.k8s.io',
      namespace, 
      name, 
      patchData
    );
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}
