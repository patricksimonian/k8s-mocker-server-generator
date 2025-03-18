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

export function createautoscalingRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers
   * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V2-Watch-Namespaces-_namespace-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v1/horizontalpodautoscalers
   * list or watch objects of kind HorizontalPodAutoscaler
   */
  router.get('/apis/autoscaling/v1/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V1-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
   * partially update the specified HorizontalPodAutoscaler
   */
  router.patch('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
   * read the specified HorizontalPodAutoscaler
   */
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
   * replace the specified HorizontalPodAutoscaler
   */
  router.put('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
   * delete a HorizontalPodAutoscaler
   */
  router.delete('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v2/watch/horizontalpodautoscalers
   * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/autoscaling/v2/watch/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V2-Watch-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v2/horizontalpodautoscalers
   * list or watch objects of kind HorizontalPodAutoscaler
   */
  router.get('/apis/autoscaling/v2/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V2-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v1/watch/horizontalpodautoscalers
   * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/autoscaling/v1/watch/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V1-Watch-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v1/
   * get available resources
   */
  router.get('/apis/autoscaling/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/
   * get information of a group
   */
  router.get('/apis/autoscaling/', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v2/
   * get available resources
   */
  router.get('/apis/autoscaling/v2/', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V2-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
   * list or watch objects of kind HorizontalPodAutoscaler
   */
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
   * create a HorizontalPodAutoscaler
   */
  router.post('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handlePost-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
   * delete collection of HorizontalPodAutoscaler
   */
  router.delete('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleDelete-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers
   * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V1-Watch-Namespaces-_namespace-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
   * read the specified HorizontalPodAutoscaler
   */
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
   * replace the specified HorizontalPodAutoscaler
   */
  router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
   * delete a HorizontalPodAutoscaler
   */
  router.delete('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
   * partially update the specified HorizontalPodAutoscaler
   */
  router.patch('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
   * read status of the specified HorizontalPodAutoscaler
   */
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
   * replace status of the specified HorizontalPodAutoscaler
   */
  router.put('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
   * partially update status of the specified HorizontalPodAutoscaler
   */
  router.patch('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
   * list or watch objects of kind HorizontalPodAutoscaler
   */
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
   * create a HorizontalPodAutoscaler
   */
  router.post('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handlePost-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
   * delete collection of HorizontalPodAutoscaler
   */
  router.delete('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      await handleDelete-Apis-Autoscaling-V2-Namespaces-_namespace-Horizontalpodautoscalers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
   * read status of the specified HorizontalPodAutoscaler
   */
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
   * replace status of the specified HorizontalPodAutoscaler
   */
  router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
   * partially update status of the specified HorizontalPodAutoscaler
   */
  router.patch('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Autoscaling-V1-Namespaces-_namespace-Horizontalpodautoscalers-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name
   * watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V1-Watch-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name
   * watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Autoscaling-V2-Watch-Namespaces-_namespace-Horizontalpodautoscalers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers
 */
async function handleget_Apis_Autoscaling_V2_Watch_Namespaces__namespace_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/autoscaling/v1/horizontalpodautoscalers
 */
async function handleget_Apis_Autoscaling_V1_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing autoscalings in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.autoscaling>(
    storage, 
    'autoscaling',
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
 * Handler for PATCH /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handlepatch_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching autoscaling ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.autoscaling>(
      storage, 
      'autoscaling',
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
 * Handler for GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handleget_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handleput_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.autoscaling;
  
  logger.info(`Updating autoscaling ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('autoscaling', name, resource, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handledelete_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('autoscaling', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `autoscaling "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/autoscaling/v2/watch/horizontalpodautoscalers
 */
async function handleget_Apis_Autoscaling_V2_Watch_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing autoscalings in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.autoscaling>(
    storage, 
    'autoscaling',
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
 * Handler for GET /apis/autoscaling/v2/horizontalpodautoscalers
 */
async function handleget_Apis_Autoscaling_V2_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing autoscalings in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.autoscaling>(
    storage, 
    'autoscaling',
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
 * Handler for GET /apis/autoscaling/v1/watch/horizontalpodautoscalers
 */
async function handleget_Apis_Autoscaling_V1_Watch_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing autoscalings in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.autoscaling>(
    storage, 
    'autoscaling',
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
 * Handler for GET /apis/autoscaling/v1/
 */
async function handleget_Apis_Autoscaling_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing autoscalings in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.autoscaling>(
    storage, 
    'autoscaling',
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
 * Handler for GET /apis/autoscaling/
 */
async function handleget_Apis_Autoscaling_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing autoscalings in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.autoscaling>(
    storage, 
    'autoscaling',
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
 * Handler for GET /apis/autoscaling/v2/
 */
async function handleget_Apis_Autoscaling_V2_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing autoscalings in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.autoscaling>(
    storage, 
    'autoscaling',
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
 * Handler for GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
 */
async function handleget_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
 */
async function handlepost_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.autoscaling;
  
  logger.info(`Creating autoscaling ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.autoscaling;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
 */
async function handledelete_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('autoscaling', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `autoscaling "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers
 */
async function handleget_Apis_Autoscaling_V1_Watch_Namespaces__namespace_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handleget_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handleput_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.autoscaling;
  
  logger.info(`Updating autoscaling ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('autoscaling', name, resource, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handledelete_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('autoscaling', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `autoscaling "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handlepatch_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching autoscaling ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.autoscaling>(
      storage, 
      'autoscaling',
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
 * Handler for GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
 */
async function handleget_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
 */
async function handleput_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.autoscaling;
  
  logger.info(`Updating autoscaling ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('autoscaling', name, resource, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status
 */
async function handlepatch_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching autoscaling ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.autoscaling>(
      storage, 
      'autoscaling',
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
 * Handler for GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
 */
async function handleget_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
 */
async function handlepost_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.autoscaling;
  
  logger.info(`Creating autoscaling ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.autoscaling;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
 */
async function handledelete_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('autoscaling', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `autoscaling "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
 */
async function handleget_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
 */
async function handleput_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.autoscaling;
  
  logger.info(`Updating autoscaling ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('autoscaling', name, resource, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status
 */
async function handlepatch_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching autoscaling ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.autoscaling>(
      storage, 
      'autoscaling',
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
 * Handler for GET /apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handleget_Apis_Autoscaling_V1_Watch_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name
 */
async function handleget_Apis_Autoscaling_V2_Watch_Namespaces__namespace_Horizontalpodautoscalers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting autoscaling ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('autoscaling', name, namespace) as models.autoscaling;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('autoscaling', name, namespace));
      return;
    }
    throw error;
  }
}
