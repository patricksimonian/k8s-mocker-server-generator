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

export function createscheduling_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * DELETE /apis/scheduling.k8s.io/v1/priorityclasses/:name
   * delete a PriorityClass
   */
  router.delete('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Scheduling.K8s.Io-V1-Priorityclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/scheduling.k8s.io/v1/priorityclasses/:name
   * partially update the specified PriorityClass
   */
  router.patch('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Scheduling.K8s.Io-V1-Priorityclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/scheduling.k8s.io/v1/priorityclasses/:name
   * read the specified PriorityClass
   */
  router.get('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Scheduling.K8s.Io-V1-Priorityclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/scheduling.k8s.io/v1/priorityclasses/:name
   * replace the specified PriorityClass
   */
  router.put('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Scheduling.K8s.Io-V1-Priorityclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/scheduling.k8s.io/v1/priorityclasses
   * list or watch objects of kind PriorityClass
   */
  router.get('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
    try {
      await handleGet-Apis-Scheduling.K8s.Io-V1-Priorityclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/scheduling.k8s.io/v1/priorityclasses
   * create a PriorityClass
   */
  router.post('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
    try {
      await handlePost-Apis-Scheduling.K8s.Io-V1-Priorityclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/scheduling.k8s.io/v1/priorityclasses
   * delete collection of PriorityClass
   */
  router.delete('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
    try {
      await handleDelete-Apis-Scheduling.K8s.Io-V1-Priorityclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/scheduling.k8s.io/
   * get information of a group
   */
  router.get('/apis/scheduling.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Scheduling.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/scheduling.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/scheduling.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Scheduling.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/scheduling.k8s.io/v1/watch/priorityclasses
   * watch individual changes to a list of PriorityClass. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/scheduling.k8s.io/v1/watch/priorityclasses', async (req, res, next) => {
    try {
      await handleGet-Apis-Scheduling.K8s.Io-V1-Watch-Priorityclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/scheduling.k8s.io/v1/watch/priorityclasses/:name
   * watch changes to an object of kind PriorityClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/scheduling.k8s.io/v1/watch/priorityclasses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Scheduling.K8s.Io-V1-Watch-Priorityclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for DELETE /apis/scheduling.k8s.io/v1/priorityclasses/:name
 */
async function handledelete_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting scheduling.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('scheduling.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `scheduling.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('scheduling.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/scheduling.k8s.io/v1/priorityclasses/:name
 */
async function handlepatch_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching scheduling.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.scheduling_k8s_io>(
      storage, 
      'scheduling.k8s.io',
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
 * Handler for GET /apis/scheduling.k8s.io/v1/priorityclasses/:name
 */
async function handleget_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting scheduling.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('scheduling.k8s.io', name, namespace) as models.scheduling_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('scheduling.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/scheduling.k8s.io/v1/priorityclasses/:name
 */
async function handleput_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.scheduling_k8s_io;
  
  logger.info(`Updating scheduling.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('scheduling.k8s.io', name, resource, namespace) as models.scheduling_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/scheduling.k8s.io/v1/priorityclasses
 */
async function handleget_Apis_Scheduling_K8s_Io_V1_Priorityclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing scheduling.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.scheduling_k8s_io>(
    storage, 
    'scheduling.k8s.io',
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
 * Handler for POST /apis/scheduling.k8s.io/v1/priorityclasses
 */
async function handlepost_Apis_Scheduling_K8s_Io_V1_Priorityclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.scheduling_k8s_io;
  
  logger.info(`Creating scheduling.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.scheduling_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/scheduling.k8s.io/v1/priorityclasses
 */
async function handledelete_Apis_Scheduling_K8s_Io_V1_Priorityclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting scheduling.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('scheduling.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `scheduling.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('scheduling.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/scheduling.k8s.io/
 */
async function handleget_Apis_Scheduling_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing scheduling.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.scheduling_k8s_io>(
    storage, 
    'scheduling.k8s.io',
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
 * Handler for GET /apis/scheduling.k8s.io/v1/
 */
async function handleget_Apis_Scheduling_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing scheduling.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.scheduling_k8s_io>(
    storage, 
    'scheduling.k8s.io',
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
 * Handler for GET /apis/scheduling.k8s.io/v1/watch/priorityclasses
 */
async function handleget_Apis_Scheduling_K8s_Io_V1_Watch_Priorityclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing scheduling.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.scheduling_k8s_io>(
    storage, 
    'scheduling.k8s.io',
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
 * Handler for GET /apis/scheduling.k8s.io/v1/watch/priorityclasses/:name
 */
async function handleget_Apis_Scheduling_K8s_Io_V1_Watch_Priorityclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting scheduling.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('scheduling.k8s.io', name, namespace) as models.scheduling_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('scheduling.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}
