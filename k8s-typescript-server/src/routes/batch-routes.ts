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

export function createbatchRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/batch/
   * get information of a group
   */
  router.get('/apis/batch/', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/namespaces/:namespace/cronjobs/:name
   * read the specified CronJob
   */
  router.get('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Namespaces-_namespace-Cronjobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/batch/v1/namespaces/:namespace/cronjobs/:name
   * replace the specified CronJob
   */
  router.put('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Batch-V1-Namespaces-_namespace-Cronjobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/batch/v1/namespaces/:namespace/cronjobs/:name
   * delete a CronJob
   */
  router.delete('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Batch-V1-Namespaces-_namespace-Cronjobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/batch/v1/namespaces/:namespace/cronjobs/:name
   * partially update the specified CronJob
   */
  router.patch('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Batch-V1-Namespaces-_namespace-Cronjobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name
   * watch changes to an object of kind CronJob. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Watch-Namespaces-_namespace-Cronjobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/
   * get available resources
   */
  router.get('/apis/batch/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/batch/v1/namespaces/:namespace/jobs/:name/status
   * partially update status of the specified Job
   */
  router.patch('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Batch-V1-Namespaces-_namespace-Jobs-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/namespaces/:namespace/jobs/:name/status
   * read status of the specified Job
   */
  router.get('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Namespaces-_namespace-Jobs-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/batch/v1/namespaces/:namespace/jobs/:name/status
   * replace status of the specified Job
   */
  router.put('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Batch-V1-Namespaces-_namespace-Jobs-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/cronjobs
   * list or watch objects of kind CronJob
   */
  router.get('/apis/batch/v1/cronjobs', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Cronjobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/watch/namespaces/:namespace/jobs
   * watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/batch/v1/watch/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Watch-Namespaces-_namespace-Jobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/jobs
   * list or watch objects of kind Job
   */
  router.get('/apis/batch/v1/jobs', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Jobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/namespaces/:namespace/jobs
   * list or watch objects of kind Job
   */
  router.get('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Namespaces-_namespace-Jobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/batch/v1/namespaces/:namespace/jobs
   * create a Job
   */
  router.post('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      await handlePost-Apis-Batch-V1-Namespaces-_namespace-Jobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/batch/v1/namespaces/:namespace/jobs
   * delete collection of Job
   */
  router.delete('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      await handleDelete-Apis-Batch-V1-Namespaces-_namespace-Jobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/watch/namespaces/:namespace/jobs/:name
   * watch changes to an object of kind Job. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/batch/v1/watch/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Watch-Namespaces-_namespace-Jobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/watch/jobs
   * watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/batch/v1/watch/jobs', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Watch-Jobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/watch/cronjobs
   * watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/batch/v1/watch/cronjobs', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Watch-Cronjobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/namespaces/:namespace/cronjobs
   * list or watch objects of kind CronJob
   */
  router.get('/apis/batch/v1/namespaces/:namespace/cronjobs', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Namespaces-_namespace-Cronjobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/batch/v1/namespaces/:namespace/cronjobs
   * create a CronJob
   */
  router.post('/apis/batch/v1/namespaces/:namespace/cronjobs', async (req, res, next) => {
    try {
      await handlePost-Apis-Batch-V1-Namespaces-_namespace-Cronjobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/batch/v1/namespaces/:namespace/cronjobs
   * delete collection of CronJob
   */
  router.delete('/apis/batch/v1/namespaces/:namespace/cronjobs', async (req, res, next) => {
    try {
      await handleDelete-Apis-Batch-V1-Namespaces-_namespace-Cronjobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/watch/namespaces/:namespace/cronjobs
   * watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/batch/v1/watch/namespaces/:namespace/cronjobs', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Watch-Namespaces-_namespace-Cronjobs(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
   * read status of the specified CronJob
   */
  router.get('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Namespaces-_namespace-Cronjobs-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
   * replace status of the specified CronJob
   */
  router.put('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Batch-V1-Namespaces-_namespace-Cronjobs-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
   * partially update status of the specified CronJob
   */
  router.patch('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Batch-V1-Namespaces-_namespace-Cronjobs-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/batch/v1/namespaces/:namespace/jobs/:name
   * replace the specified Job
   */
  router.put('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Batch-V1-Namespaces-_namespace-Jobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/batch/v1/namespaces/:namespace/jobs/:name
   * delete a Job
   */
  router.delete('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Batch-V1-Namespaces-_namespace-Jobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/batch/v1/namespaces/:namespace/jobs/:name
   * partially update the specified Job
   */
  router.patch('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Batch-V1-Namespaces-_namespace-Jobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/batch/v1/namespaces/:namespace/jobs/:name
   * read the specified Job
   */
  router.get('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Batch-V1-Namespaces-_namespace-Jobs-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/batch/
 */
async function handleget_Apis_Batch_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing batchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.batch>(
    storage, 
    'batch',
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
 * Handler for GET /apis/batch/v1/namespaces/:namespace/cronjobs/:name
 */
async function handleget_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/batch/v1/namespaces/:namespace/cronjobs/:name
 */
async function handleput_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.batch;
  
  logger.info(`Updating batch ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('batch', name, resource, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/batch/v1/namespaces/:namespace/cronjobs/:name
 */
async function handledelete_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting batch ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('batch', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `batch "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/batch/v1/namespaces/:namespace/cronjobs/:name
 */
async function handlepatch_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching batch ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.batch>(
      storage, 
      'batch',
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
 * Handler for GET /apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name
 */
async function handleget_Apis_Batch_V1_Watch_Namespaces__namespace_Cronjobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/batch/v1/
 */
async function handleget_Apis_Batch_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing batchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.batch>(
    storage, 
    'batch',
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
 * Handler for PATCH /apis/batch/v1/namespaces/:namespace/jobs/:name/status
 */
async function handlepatch_Apis_Batch_V1_Namespaces__namespace_Jobs__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching batch ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.batch>(
      storage, 
      'batch',
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
 * Handler for GET /apis/batch/v1/namespaces/:namespace/jobs/:name/status
 */
async function handleget_Apis_Batch_V1_Namespaces__namespace_Jobs__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/batch/v1/namespaces/:namespace/jobs/:name/status
 */
async function handleput_Apis_Batch_V1_Namespaces__namespace_Jobs__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.batch;
  
  logger.info(`Updating batch ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('batch', name, resource, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/batch/v1/cronjobs
 */
async function handleget_Apis_Batch_V1_Cronjobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing batchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.batch>(
    storage, 
    'batch',
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
 * Handler for GET /apis/batch/v1/watch/namespaces/:namespace/jobs
 */
async function handleget_Apis_Batch_V1_Watch_Namespaces__namespace_Jobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/batch/v1/jobs
 */
async function handleget_Apis_Batch_V1_Jobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing batchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.batch>(
    storage, 
    'batch',
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
 * Handler for GET /apis/batch/v1/namespaces/:namespace/jobs
 */
async function handleget_Apis_Batch_V1_Namespaces__namespace_Jobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/batch/v1/namespaces/:namespace/jobs
 */
async function handlepost_Apis_Batch_V1_Namespaces__namespace_Jobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.batch;
  
  logger.info(`Creating batch ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.batch;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/batch/v1/namespaces/:namespace/jobs
 */
async function handledelete_Apis_Batch_V1_Namespaces__namespace_Jobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting batch ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('batch', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `batch "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/batch/v1/watch/namespaces/:namespace/jobs/:name
 */
async function handleget_Apis_Batch_V1_Watch_Namespaces__namespace_Jobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/batch/v1/watch/jobs
 */
async function handleget_Apis_Batch_V1_Watch_Jobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing batchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.batch>(
    storage, 
    'batch',
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
 * Handler for GET /apis/batch/v1/watch/cronjobs
 */
async function handleget_Apis_Batch_V1_Watch_Cronjobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing batchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.batch>(
    storage, 
    'batch',
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
 * Handler for GET /apis/batch/v1/namespaces/:namespace/cronjobs
 */
async function handleget_Apis_Batch_V1_Namespaces__namespace_Cronjobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/batch/v1/namespaces/:namespace/cronjobs
 */
async function handlepost_Apis_Batch_V1_Namespaces__namespace_Cronjobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.batch;
  
  logger.info(`Creating batch ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.batch;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/batch/v1/namespaces/:namespace/cronjobs
 */
async function handledelete_Apis_Batch_V1_Namespaces__namespace_Cronjobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting batch ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('batch', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `batch "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/batch/v1/watch/namespaces/:namespace/cronjobs
 */
async function handleget_Apis_Batch_V1_Watch_Namespaces__namespace_Cronjobs(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
 */
async function handleget_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
 */
async function handleput_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.batch;
  
  logger.info(`Updating batch ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('batch', name, resource, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/batch/v1/namespaces/:namespace/cronjobs/:name/status
 */
async function handlepatch_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching batch ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.batch>(
      storage, 
      'batch',
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
 * Handler for PUT /apis/batch/v1/namespaces/:namespace/jobs/:name
 */
async function handleput_Apis_Batch_V1_Namespaces__namespace_Jobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.batch;
  
  logger.info(`Updating batch ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('batch', name, resource, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/batch/v1/namespaces/:namespace/jobs/:name
 */
async function handledelete_Apis_Batch_V1_Namespaces__namespace_Jobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting batch ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('batch', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `batch "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/batch/v1/namespaces/:namespace/jobs/:name
 */
async function handlepatch_Apis_Batch_V1_Namespaces__namespace_Jobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching batch ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.batch>(
      storage, 
      'batch',
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
 * Handler for GET /apis/batch/v1/namespaces/:namespace/jobs/:name
 */
async function handleget_Apis_Batch_V1_Namespaces__namespace_Jobs__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting batch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('batch', name, namespace) as models.batch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('batch', name, namespace));
      return;
    }
    throw error;
  }
}
