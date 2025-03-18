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

export function createnodesRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * PATCH /api/v1/nodes/:name/status
   * partially update status of the specified Node
   */
  router.patch('/api/v1/nodes/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Nodes-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/nodes/:name/status
   * read status of the specified Node
   */
  router.get('/api/v1/nodes/:name/status', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Nodes-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/nodes/:name/status
   * replace status of the specified Node
   */
  router.put('/api/v1/nodes/:name/status', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Nodes-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/nodes/:name
   * delete a Node
   */
  router.delete('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Nodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/nodes/:name
   * partially update the specified Node
   */
  router.patch('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Nodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/nodes/:name
   * read the specified Node
   */
  router.get('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Nodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/nodes/:name
   * replace the specified Node
   */
  router.put('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Nodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/nodes/:name/proxy/:path
   * connect PUT requests to proxy of Node
   */
  router.put('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Nodes-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/nodes/:name/proxy/:path
   * connect POST requests to proxy of Node
   */
  router.post('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Nodes-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/nodes/:name/proxy/:path
   * connect DELETE requests to proxy of Node
   */
  router.delete('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Nodes-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * OPTIONS /api/v1/nodes/:name/proxy/:path
   * connect OPTIONS requests to proxy of Node
   */
  router.options('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      await handleOptions-Api-V1-Nodes-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * HEAD /api/v1/nodes/:name/proxy/:path
   * connect HEAD requests to proxy of Node
   */
  router.head('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      await handleHead-Api-V1-Nodes-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/nodes/:name/proxy/:path
   * connect PATCH requests to proxy of Node
   */
  router.patch('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Nodes-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/nodes/:name/proxy/:path
   * connect GET requests to proxy of Node
   */
  router.get('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Nodes-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * HEAD /api/v1/nodes/:name/proxy
   * connect HEAD requests to proxy of Node
   */
  router.head('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      await handleHead-Api-V1-Nodes-_name-Proxy(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/nodes/:name/proxy
   * connect PATCH requests to proxy of Node
   */
  router.patch('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Nodes-_name-Proxy(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/nodes/:name/proxy
   * connect GET requests to proxy of Node
   */
  router.get('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Nodes-_name-Proxy(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/nodes/:name/proxy
   * connect PUT requests to proxy of Node
   */
  router.put('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Nodes-_name-Proxy(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/nodes/:name/proxy
   * connect POST requests to proxy of Node
   */
  router.post('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Nodes-_name-Proxy(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/nodes/:name/proxy
   * connect DELETE requests to proxy of Node
   */
  router.delete('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Nodes-_name-Proxy(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * OPTIONS /api/v1/nodes/:name/proxy
   * connect OPTIONS requests to proxy of Node
   */
  router.options('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      await handleOptions-Api-V1-Nodes-_name-Proxy(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/nodes
   * list or watch objects of kind Node
   */
  router.get('/api/v1/nodes', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Nodes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/nodes
   * create a Node
   */
  router.post('/api/v1/nodes', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Nodes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/nodes
   * delete collection of Node
   */
  router.delete('/api/v1/nodes', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Nodes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for PATCH /api/v1/nodes/:name/status
 */
async function handlepatch_Api_V1_Nodes__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching nodes ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.nodes>(
      storage, 
      'nodes',
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
 * Handler for GET /api/v1/nodes/:name/status
 */
async function handleget_Api_V1_Nodes__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting nodes ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('nodes', name, namespace) as models.nodes;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('nodes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/nodes/:name/status
 */
async function handleput_Api_V1_Nodes__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.nodes;
  
  logger.info(`Updating nodes ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('nodes', name, resource, namespace) as models.nodes;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/nodes/:name
 */
async function handledelete_Api_V1_Nodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting nodes ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('nodes', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `nodes "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('nodes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/nodes/:name
 */
async function handlepatch_Api_V1_Nodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching nodes ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.nodes>(
      storage, 
      'nodes',
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
 * Handler for GET /api/v1/nodes/:name
 */
async function handleget_Api_V1_Nodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting nodes ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('nodes', name, namespace) as models.nodes;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('nodes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/nodes/:name
 */
async function handleput_Api_V1_Nodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.nodes;
  
  logger.info(`Updating nodes ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('nodes', name, resource, namespace) as models.nodes;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PUT /api/v1/nodes/:name/proxy/:path
 */
async function handleput_Api_V1_Nodes__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.nodes;
  
  logger.info(`Updating nodes ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('nodes', name, resource, namespace) as models.nodes;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /api/v1/nodes/:name/proxy/:path
 */
async function handlepost_Api_V1_Nodes__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.nodes;
  
  logger.info(`Creating nodes ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.nodes;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/nodes/:name/proxy/:path
 */
async function handledelete_Api_V1_Nodes__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting nodes ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('nodes', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `nodes "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('nodes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for OPTIONS /api/v1/nodes/:name/proxy/:path
 */
async function handleoptions_Api_V1_Nodes__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for HEAD /api/v1/nodes/:name/proxy/:path
 */
async function handlehead_Api_V1_Nodes__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for PATCH /api/v1/nodes/:name/proxy/:path
 */
async function handlepatch_Api_V1_Nodes__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching nodes ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.nodes>(
      storage, 
      'nodes',
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
 * Handler for GET /api/v1/nodes/:name/proxy/:path
 */
async function handleget_Api_V1_Nodes__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting nodes ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('nodes', name, namespace) as models.nodes;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('nodes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for HEAD /api/v1/nodes/:name/proxy
 */
async function handlehead_Api_V1_Nodes__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for PATCH /api/v1/nodes/:name/proxy
 */
async function handlepatch_Api_V1_Nodes__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching nodes ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.nodes>(
      storage, 
      'nodes',
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
 * Handler for GET /api/v1/nodes/:name/proxy
 */
async function handleget_Api_V1_Nodes__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting nodes ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('nodes', name, namespace) as models.nodes;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('nodes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/nodes/:name/proxy
 */
async function handleput_Api_V1_Nodes__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.nodes;
  
  logger.info(`Updating nodes ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('nodes', name, resource, namespace) as models.nodes;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /api/v1/nodes/:name/proxy
 */
async function handlepost_Api_V1_Nodes__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.nodes;
  
  logger.info(`Creating nodes ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.nodes;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/nodes/:name/proxy
 */
async function handledelete_Api_V1_Nodes__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting nodes ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('nodes', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `nodes "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('nodes', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for OPTIONS /api/v1/nodes/:name/proxy
 */
async function handleoptions_Api_V1_Nodes__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for GET /api/v1/nodes
 */
async function handleget_Api_V1_Nodes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing nodess in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.nodes>(
    storage, 
    'nodes',
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
 * Handler for POST /api/v1/nodes
 */
async function handlepost_Api_V1_Nodes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.nodes;
  
  logger.info(`Creating nodes ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.nodes;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/nodes
 */
async function handledelete_Api_V1_Nodes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting nodes ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('nodes', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `nodes "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('nodes', name, namespace));
      return;
    }
    throw error;
  }
}
