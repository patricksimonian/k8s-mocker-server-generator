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

export function createnode_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/node.k8s.io/v1/watch/runtimeclasses/:name
   * watch changes to an object of kind RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/node.k8s.io/v1/watch/runtimeclasses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Node.K8s.Io-V1-Watch-Runtimeclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/node.k8s.io/v1/watch/runtimeclasses
   * watch individual changes to a list of RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/node.k8s.io/v1/watch/runtimeclasses', async (req, res, next) => {
    try {
      await handleGet-Apis-Node.K8s.Io-V1-Watch-Runtimeclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/node.k8s.io/v1/runtimeclasses
   * delete collection of RuntimeClass
   */
  router.delete('/apis/node.k8s.io/v1/runtimeclasses', async (req, res, next) => {
    try {
      await handleDelete-Apis-Node.K8s.Io-V1-Runtimeclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/node.k8s.io/v1/runtimeclasses
   * list or watch objects of kind RuntimeClass
   */
  router.get('/apis/node.k8s.io/v1/runtimeclasses', async (req, res, next) => {
    try {
      await handleGet-Apis-Node.K8s.Io-V1-Runtimeclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/node.k8s.io/v1/runtimeclasses
   * create a RuntimeClass
   */
  router.post('/apis/node.k8s.io/v1/runtimeclasses', async (req, res, next) => {
    try {
      await handlePost-Apis-Node.K8s.Io-V1-Runtimeclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/node.k8s.io/v1/runtimeclasses/:name
   * read the specified RuntimeClass
   */
  router.get('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Node.K8s.Io-V1-Runtimeclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/node.k8s.io/v1/runtimeclasses/:name
   * replace the specified RuntimeClass
   */
  router.put('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Node.K8s.Io-V1-Runtimeclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/node.k8s.io/v1/runtimeclasses/:name
   * delete a RuntimeClass
   */
  router.delete('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Node.K8s.Io-V1-Runtimeclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/node.k8s.io/v1/runtimeclasses/:name
   * partially update the specified RuntimeClass
   */
  router.patch('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Node.K8s.Io-V1-Runtimeclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/node.k8s.io/
   * get information of a group
   */
  router.get('/apis/node.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Node.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/node.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/node.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Node.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/node.k8s.io/v1/watch/runtimeclasses/:name
 */
async function handleget_Apis_Node_K8s_Io_V1_Watch_Runtimeclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting node.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('node.k8s.io', name, namespace) as models.node_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('node.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/node.k8s.io/v1/watch/runtimeclasses
 */
async function handleget_Apis_Node_K8s_Io_V1_Watch_Runtimeclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing node.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.node_k8s_io>(
    storage, 
    'node.k8s.io',
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
 * Handler for DELETE /apis/node.k8s.io/v1/runtimeclasses
 */
async function handledelete_Apis_Node_K8s_Io_V1_Runtimeclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting node.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('node.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `node.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('node.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/node.k8s.io/v1/runtimeclasses
 */
async function handleget_Apis_Node_K8s_Io_V1_Runtimeclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing node.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.node_k8s_io>(
    storage, 
    'node.k8s.io',
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
 * Handler for POST /apis/node.k8s.io/v1/runtimeclasses
 */
async function handlepost_Apis_Node_K8s_Io_V1_Runtimeclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.node_k8s_io;
  
  logger.info(`Creating node.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.node_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/node.k8s.io/v1/runtimeclasses/:name
 */
async function handleget_Apis_Node_K8s_Io_V1_Runtimeclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting node.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('node.k8s.io', name, namespace) as models.node_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('node.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/node.k8s.io/v1/runtimeclasses/:name
 */
async function handleput_Apis_Node_K8s_Io_V1_Runtimeclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.node_k8s_io;
  
  logger.info(`Updating node.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('node.k8s.io', name, resource, namespace) as models.node_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/node.k8s.io/v1/runtimeclasses/:name
 */
async function handledelete_Apis_Node_K8s_Io_V1_Runtimeclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting node.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('node.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `node.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('node.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/node.k8s.io/v1/runtimeclasses/:name
 */
async function handlepatch_Apis_Node_K8s_Io_V1_Runtimeclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching node.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.node_k8s_io>(
      storage, 
      'node.k8s.io',
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
 * Handler for GET /apis/node.k8s.io/
 */
async function handleget_Apis_Node_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing node.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.node_k8s_io>(
    storage, 
    'node.k8s.io',
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
 * Handler for GET /apis/node.k8s.io/v1/
 */
async function handleget_Apis_Node_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing node.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.node_k8s_io>(
    storage, 
    'node.k8s.io',
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
