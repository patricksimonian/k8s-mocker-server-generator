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

export function createnetworking_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/networking.k8s.io/v1/watch/ingressclasses/:name
   * watch changes to an object of kind IngressClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/networking.k8s.io/v1/watch/ingressclasses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Watch-Ingressclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name
   * watch changes to an object of kind Ingress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Watch-Namespaces-_namespace-Ingresses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
   * list or watch objects of kind Ingress
   */
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
   * create an Ingress
   */
  router.post('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', async (req, res, next) => {
    try {
      await handlePost-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
   * delete collection of Ingress
   */
  router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', async (req, res, next) => {
    try {
      await handleDelete-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name
   * watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Watch-Namespaces-_namespace-Networkpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
   * partially update the specified Ingress
   */
  router.patch('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
   * read the specified Ingress
   */
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
   * replace the specified Ingress
   */
  router.put('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
   * delete an Ingress
   */
  router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
   * read status of the specified Ingress
   */
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
   * replace status of the specified Ingress
   */
  router.put('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
   * partially update status of the specified Ingress
   */
  router.patch('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Ingresses-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies
   * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Watch-Namespaces-_namespace-Networkpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses
   * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Watch-Namespaces-_namespace-Ingresses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/watch/networkpolicies
   * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/networking.k8s.io/v1/watch/networkpolicies', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Watch-Networkpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/networking.k8s.io/v1/ingressclasses/:name
   * replace the specified IngressClass
   */
  router.put('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Networking.K8s.Io-V1-Ingressclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/networking.k8s.io/v1/ingressclasses/:name
   * delete an IngressClass
   */
  router.delete('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Networking.K8s.Io-V1-Ingressclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/networking.k8s.io/v1/ingressclasses/:name
   * partially update the specified IngressClass
   */
  router.patch('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Networking.K8s.Io-V1-Ingressclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/ingressclasses/:name
   * read the specified IngressClass
   */
  router.get('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Ingressclasses-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/watch/ingressclasses
   * watch individual changes to a list of IngressClass. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/networking.k8s.io/v1/watch/ingressclasses', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Watch-Ingressclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
   * list or watch objects of kind NetworkPolicy
   */
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Networkpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
   * create a NetworkPolicy
   */
  router.post('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', async (req, res, next) => {
    try {
      await handlePost-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Networkpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
   * delete collection of NetworkPolicy
   */
  router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', async (req, res, next) => {
    try {
      await handleDelete-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Networkpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/networkpolicies
   * list or watch objects of kind NetworkPolicy
   */
  router.get('/apis/networking.k8s.io/v1/networkpolicies', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Networkpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/ingresses
   * list or watch objects of kind Ingress
   */
  router.get('/apis/networking.k8s.io/v1/ingresses', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Ingresses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/networking.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/
   * get information of a group
   */
  router.get('/apis/networking.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
   * read the specified NetworkPolicy
   */
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Networkpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
   * replace the specified NetworkPolicy
   */
  router.put('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Networkpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
   * delete a NetworkPolicy
   */
  router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Networkpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
   * partially update the specified NetworkPolicy
   */
  router.patch('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Networking.K8s.Io-V1-Namespaces-_namespace-Networkpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/watch/ingresses
   * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/networking.k8s.io/v1/watch/ingresses', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Watch-Ingresses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/networking.k8s.io/v1/ingressclasses
   * list or watch objects of kind IngressClass
   */
  router.get('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
    try {
      await handleGet-Apis-Networking.K8s.Io-V1-Ingressclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/networking.k8s.io/v1/ingressclasses
   * create an IngressClass
   */
  router.post('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
    try {
      await handlePost-Apis-Networking.K8s.Io-V1-Ingressclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/networking.k8s.io/v1/ingressclasses
   * delete collection of IngressClass
   */
  router.delete('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
    try {
      await handleDelete-Apis-Networking.K8s.Io-V1-Ingressclasses(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/networking.k8s.io/v1/watch/ingressclasses/:name
 */
async function handleget_Apis_Networking_K8s_Io_V1_Watch_Ingressclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name
 */
async function handleget_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Ingresses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
 */
async function handleget_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
 */
async function handlepost_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.networking_k8s_io;
  
  logger.info(`Creating networking.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.networking_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
 */
async function handledelete_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('networking.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `networking.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name
 */
async function handleget_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Networkpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
 */
async function handlepatch_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.networking_k8s_io>(
      storage, 
      'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
 */
async function handleget_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
 */
async function handleput_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.networking_k8s_io;
  
  logger.info(`Updating networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('networking.k8s.io', name, resource, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
 */
async function handledelete_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('networking.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `networking.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
 */
async function handleget_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
 */
async function handleput_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.networking_k8s_io;
  
  logger.info(`Updating networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('networking.k8s.io', name, resource, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status
 */
async function handlepatch_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.networking_k8s_io>(
      storage, 
      'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies
 */
async function handleget_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Networkpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses
 */
async function handleget_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Ingresses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/networking.k8s.io/v1/watch/networkpolicies
 */
async function handleget_Apis_Networking_K8s_Io_V1_Watch_Networkpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing networking.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.networking_k8s_io>(
    storage, 
    'networking.k8s.io',
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
 * Handler for PUT /apis/networking.k8s.io/v1/ingressclasses/:name
 */
async function handleput_Apis_Networking_K8s_Io_V1_Ingressclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.networking_k8s_io;
  
  logger.info(`Updating networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('networking.k8s.io', name, resource, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/networking.k8s.io/v1/ingressclasses/:name
 */
async function handledelete_Apis_Networking_K8s_Io_V1_Ingressclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('networking.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `networking.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/networking.k8s.io/v1/ingressclasses/:name
 */
async function handlepatch_Apis_Networking_K8s_Io_V1_Ingressclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.networking_k8s_io>(
      storage, 
      'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/v1/ingressclasses/:name
 */
async function handleget_Apis_Networking_K8s_Io_V1_Ingressclasses__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/networking.k8s.io/v1/watch/ingressclasses
 */
async function handleget_Apis_Networking_K8s_Io_V1_Watch_Ingressclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing networking.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.networking_k8s_io>(
    storage, 
    'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
 */
async function handleget_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
 */
async function handlepost_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.networking_k8s_io;
  
  logger.info(`Creating networking.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.networking_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
 */
async function handledelete_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('networking.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `networking.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/networking.k8s.io/v1/networkpolicies
 */
async function handleget_Apis_Networking_K8s_Io_V1_Networkpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing networking.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.networking_k8s_io>(
    storage, 
    'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/v1/ingresses
 */
async function handleget_Apis_Networking_K8s_Io_V1_Ingresses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing networking.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.networking_k8s_io>(
    storage, 
    'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/v1/
 */
async function handleget_Apis_Networking_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing networking.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.networking_k8s_io>(
    storage, 
    'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/
 */
async function handleget_Apis_Networking_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing networking.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.networking_k8s_io>(
    storage, 
    'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
 */
async function handleget_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('networking.k8s.io', name, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
 */
async function handleput_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.networking_k8s_io;
  
  logger.info(`Updating networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('networking.k8s.io', name, resource, namespace) as models.networking_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
 */
async function handledelete_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('networking.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `networking.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
 */
async function handlepatch_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.networking_k8s_io>(
      storage, 
      'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/v1/watch/ingresses
 */
async function handleget_Apis_Networking_K8s_Io_V1_Watch_Ingresses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing networking.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.networking_k8s_io>(
    storage, 
    'networking.k8s.io',
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
 * Handler for GET /apis/networking.k8s.io/v1/ingressclasses
 */
async function handleget_Apis_Networking_K8s_Io_V1_Ingressclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing networking.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.networking_k8s_io>(
    storage, 
    'networking.k8s.io',
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
 * Handler for POST /apis/networking.k8s.io/v1/ingressclasses
 */
async function handlepost_Apis_Networking_K8s_Io_V1_Ingressclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.networking_k8s_io;
  
  logger.info(`Creating networking.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.networking_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/networking.k8s.io/v1/ingressclasses
 */
async function handledelete_Apis_Networking_K8s_Io_V1_Ingressclasses(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting networking.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('networking.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `networking.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('networking.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}
