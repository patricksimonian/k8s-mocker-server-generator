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

export function createcoordination_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/coordination.k8s.io/v1/leases
   * list or watch objects of kind Lease
   */
  router.get('/apis/coordination.k8s.io/v1/leases', async (req, res, next) => {
    try {
      await handleGet-Apis-Coordination.K8s.Io-V1-Leases(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
   * partially update the specified Lease
   */
  router.patch('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Coordination.K8s.Io-V1-Namespaces-_namespace-Leases-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
   * read the specified Lease
   */
  router.get('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Coordination.K8s.Io-V1-Namespaces-_namespace-Leases-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
   * replace the specified Lease
   */
  router.put('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Coordination.K8s.Io-V1-Namespaces-_namespace-Leases-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
   * delete a Lease
   */
  router.delete('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Coordination.K8s.Io-V1-Namespaces-_namespace-Leases-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/coordination.k8s.io/v1/watch/leases
   * watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/coordination.k8s.io/v1/watch/leases', async (req, res, next) => {
    try {
      await handleGet-Apis-Coordination.K8s.Io-V1-Watch-Leases(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
   * list or watch objects of kind Lease
   */
  router.get('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', async (req, res, next) => {
    try {
      await handleGet-Apis-Coordination.K8s.Io-V1-Namespaces-_namespace-Leases(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
   * create a Lease
   */
  router.post('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', async (req, res, next) => {
    try {
      await handlePost-Apis-Coordination.K8s.Io-V1-Namespaces-_namespace-Leases(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
   * delete collection of Lease
   */
  router.delete('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', async (req, res, next) => {
    try {
      await handleDelete-Apis-Coordination.K8s.Io-V1-Namespaces-_namespace-Leases(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/coordination.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/coordination.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Coordination.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases
   * watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases', async (req, res, next) => {
    try {
      await handleGet-Apis-Coordination.K8s.Io-V1-Watch-Namespaces-_namespace-Leases(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/coordination.k8s.io/
   * get information of a group
   */
  router.get('/apis/coordination.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Coordination.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name
   * watch changes to an object of kind Lease. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Coordination.K8s.Io-V1-Watch-Namespaces-_namespace-Leases-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/coordination.k8s.io/v1/leases
 */
async function handleget_Apis_Coordination_K8s_Io_V1_Leases(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing coordination.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.coordination_k8s_io>(
    storage, 
    'coordination.k8s.io',
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
 * Handler for PATCH /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
 */
async function handlepatch_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching coordination.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.coordination_k8s_io>(
      storage, 
      'coordination.k8s.io',
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
 * Handler for GET /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
 */
async function handleget_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting coordination.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('coordination.k8s.io', name, namespace) as models.coordination_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('coordination.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
 */
async function handleput_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.coordination_k8s_io;
  
  logger.info(`Updating coordination.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('coordination.k8s.io', name, resource, namespace) as models.coordination_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
 */
async function handledelete_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting coordination.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('coordination.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `coordination.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('coordination.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/coordination.k8s.io/v1/watch/leases
 */
async function handleget_Apis_Coordination_K8s_Io_V1_Watch_Leases(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing coordination.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.coordination_k8s_io>(
    storage, 
    'coordination.k8s.io',
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
 * Handler for GET /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
 */
async function handleget_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting coordination.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('coordination.k8s.io', name, namespace) as models.coordination_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('coordination.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
 */
async function handlepost_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.coordination_k8s_io;
  
  logger.info(`Creating coordination.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.coordination_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
 */
async function handledelete_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting coordination.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('coordination.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `coordination.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('coordination.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/coordination.k8s.io/v1/
 */
async function handleget_Apis_Coordination_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing coordination.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.coordination_k8s_io>(
    storage, 
    'coordination.k8s.io',
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
 * Handler for GET /apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases
 */
async function handleget_Apis_Coordination_K8s_Io_V1_Watch_Namespaces__namespace_Leases(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting coordination.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('coordination.k8s.io', name, namespace) as models.coordination_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('coordination.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/coordination.k8s.io/
 */
async function handleget_Apis_Coordination_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing coordination.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.coordination_k8s_io>(
    storage, 
    'coordination.k8s.io',
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
 * Handler for GET /apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name
 */
async function handleget_Apis_Coordination_K8s_Io_V1_Watch_Namespaces__namespace_Leases__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting coordination.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('coordination.k8s.io', name, namespace) as models.coordination_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('coordination.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}
