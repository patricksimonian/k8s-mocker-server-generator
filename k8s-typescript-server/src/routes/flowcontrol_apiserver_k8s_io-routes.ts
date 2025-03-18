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

export function createflowcontrol_apiserver_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
   * delete a PriorityLevelConfiguration
   */
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
   * partially update the specified PriorityLevelConfiguration
   */
  router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
   * read the specified PriorityLevelConfiguration
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
   * replace the specified PriorityLevelConfiguration
   */
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
   * list or watch objects of kind FlowSchema
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
   * create a FlowSchema
   */
  router.post('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
    try {
      await handlePost-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
   * delete collection of FlowSchema
   */
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
    try {
      await handleDelete-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
   * read status of the specified PriorityLevelConfiguration
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
   * replace status of the specified PriorityLevelConfiguration
   */
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
   * partially update status of the specified PriorityLevelConfiguration
   */
  router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
   * read status of the specified FlowSchema
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
   * replace status of the specified FlowSchema
   */
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
   * partially update status of the specified FlowSchema
   */
  router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas
   * watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Watch-Flowschemas(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations
   * watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Watch-Prioritylevelconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
   * delete a FlowSchema
   */
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
   * partially update the specified FlowSchema
   */
  router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
   * read the specified FlowSchema
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
   * replace the specified FlowSchema
   */
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Flowschemas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/
   * get information of a group
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
   * list or watch objects of kind PriorityLevelConfiguration
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
   * create a PriorityLevelConfiguration
   */
  router.post('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
    try {
      await handlePost-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
   * delete collection of PriorityLevelConfiguration
   */
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
    try {
      await handleDelete-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Prioritylevelconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name
   * watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Watch-Prioritylevelconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name
   * watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Flowcontrol.Apiserver.K8s.Io-V1-Watch-Flowschemas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
 */
async function handledelete_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('flowcontrol.apiserver.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `flowcontrol.apiserver.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
 */
async function handlepatch_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.flowcontrol_apiserver_k8s_io>(
      storage, 
      'flowcontrol.apiserver.k8s.io',
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
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('flowcontrol.apiserver.k8s.io', name, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
 */
async function handleput_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.flowcontrol_apiserver_k8s_io;
  
  logger.info(`Updating flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('flowcontrol.apiserver.k8s.io', name, resource, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing flowcontrol.apiserver.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.flowcontrol_apiserver_k8s_io>(
    storage, 
    'flowcontrol.apiserver.k8s.io',
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
 * Handler for POST /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
 */
async function handlepost_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.flowcontrol_apiserver_k8s_io;
  
  logger.info(`Creating flowcontrol.apiserver.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
 */
async function handledelete_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('flowcontrol.apiserver.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `flowcontrol.apiserver.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('flowcontrol.apiserver.k8s.io', name, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
 */
async function handleput_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.flowcontrol_apiserver_k8s_io;
  
  logger.info(`Updating flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('flowcontrol.apiserver.k8s.io', name, resource, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status
 */
async function handlepatch_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.flowcontrol_apiserver_k8s_io>(
      storage, 
      'flowcontrol.apiserver.k8s.io',
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
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('flowcontrol.apiserver.k8s.io', name, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
 */
async function handleput_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.flowcontrol_apiserver_k8s_io;
  
  logger.info(`Updating flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('flowcontrol.apiserver.k8s.io', name, resource, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status
 */
async function handlepatch_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.flowcontrol_apiserver_k8s_io>(
      storage, 
      'flowcontrol.apiserver.k8s.io',
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
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Flowschemas(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing flowcontrol.apiserver.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.flowcontrol_apiserver_k8s_io>(
    storage, 
    'flowcontrol.apiserver.k8s.io',
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
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing flowcontrol.apiserver.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.flowcontrol_apiserver_k8s_io>(
    storage, 
    'flowcontrol.apiserver.k8s.io',
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
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Prioritylevelconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing flowcontrol.apiserver.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.flowcontrol_apiserver_k8s_io>(
    storage, 
    'flowcontrol.apiserver.k8s.io',
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
 * Handler for DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
 */
async function handledelete_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('flowcontrol.apiserver.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `flowcontrol.apiserver.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
 */
async function handlepatch_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.flowcontrol_apiserver_k8s_io>(
      storage, 
      'flowcontrol.apiserver.k8s.io',
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
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('flowcontrol.apiserver.k8s.io', name, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
 */
async function handleput_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.flowcontrol_apiserver_k8s_io;
  
  logger.info(`Updating flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('flowcontrol.apiserver.k8s.io', name, resource, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing flowcontrol.apiserver.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.flowcontrol_apiserver_k8s_io>(
    storage, 
    'flowcontrol.apiserver.k8s.io',
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
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing flowcontrol.apiserver.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.flowcontrol_apiserver_k8s_io>(
    storage, 
    'flowcontrol.apiserver.k8s.io',
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
 * Handler for POST /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
 */
async function handlepost_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.flowcontrol_apiserver_k8s_io;
  
  logger.info(`Creating flowcontrol.apiserver.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
 */
async function handledelete_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('flowcontrol.apiserver.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `flowcontrol.apiserver.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Prioritylevelconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('flowcontrol.apiserver.k8s.io', name, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name
 */
async function handleget_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Flowschemas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting flowcontrol.apiserver.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('flowcontrol.apiserver.k8s.io', name, namespace) as models.flowcontrol_apiserver_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('flowcontrol.apiserver.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}
