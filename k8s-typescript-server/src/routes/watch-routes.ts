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

export function createwatchRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /api/v1/watch/namespaces/:namespace/replicationcontrollers/:name
   * watch changes to an object of kind ReplicationController. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Replicationcontrollers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/resourcequotas
   * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/resourcequotas', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Resourcequotas(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/secrets/:name
   * watch changes to an object of kind Secret. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/secrets/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Secrets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/pods
   * watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/pods', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Pods(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/nodes/:name
   * watch changes to an object of kind Node. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/nodes/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Nodes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/serviceaccounts
   * watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/serviceaccounts', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Serviceaccounts(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/nodes
   * watch individual changes to a list of Node. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/nodes', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Nodes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/configmaps
   * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/configmaps', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Configmaps(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/podtemplates
   * watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/podtemplates', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Podtemplates(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/persistentvolumes/:name
   * watch changes to an object of kind PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/persistentvolumes/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Persistentvolumes-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/serviceaccounts
   * watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/serviceaccounts', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Serviceaccounts(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/endpoints
   * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/endpoints', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Endpoints(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/events/:name
   * watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Events-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/podtemplates/:name
   * watch changes to an object of kind PodTemplate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/podtemplates/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Podtemplates-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/limitranges
   * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/limitranges', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Limitranges(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/events
   * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/events', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/persistentvolumeclaims
   * watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/persistentvolumeclaims', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Persistentvolumeclaims(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/resourcequotas
   * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/resourcequotas', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Resourcequotas(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/pods/:name
   * watch changes to an object of kind Pod. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Pods-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/replicationcontrollers
   * watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/replicationcontrollers', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Replicationcontrollers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/persistentvolumeclaims/:name
   * watch changes to an object of kind PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Persistentvolumeclaims-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/podtemplates
   * watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/podtemplates', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Podtemplates(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/services
   * watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/services', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Services(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/replicationcontrollers
   * watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Replicationcontrollers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/limitranges
   * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/limitranges', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Limitranges(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/endpoints/:name
   * watch changes to an object of kind Endpoints. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Endpoints-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/persistentvolumeclaims
   * watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Persistentvolumeclaims(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/events
   * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/events', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/configmaps/:name
   * watch changes to an object of kind ConfigMap. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Configmaps-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/pods
   * watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Pods(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/configmaps
   * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Configmaps(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/endpoints
   * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Endpoints(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:name
   * watch changes to an object of kind Namespace. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/services/:name
   * watch changes to an object of kind Service. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Services-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/secrets
   * watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/secrets', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Secrets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/persistentvolumes
   * watch individual changes to a list of PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/persistentvolumes', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Persistentvolumes(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/serviceaccounts/:name
   * watch changes to an object of kind ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/serviceaccounts/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Serviceaccounts-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces
   * watch individual changes to a list of Namespace. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/limitranges/:name
   * watch changes to an object of kind LimitRange. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Limitranges-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/services
   * watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/namespaces/:namespace/services', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Services(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/secrets
   * watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/api/v1/watch/secrets', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Secrets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/watch/namespaces/:namespace/resourcequotas/:name
   * watch changes to an object of kind ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/api/v1/watch/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Watch-Namespaces-_namespace-Resourcequotas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/replicationcontrollers/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Replicationcontrollers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/resourcequotas
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Resourcequotas(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/secrets/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Secrets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/pods
 */
async function handleget_Api_V1_Watch_Pods(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/nodes/:name
 */
async function handleget_Api_V1_Watch_Nodes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/serviceaccounts
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Serviceaccounts(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/nodes
 */
async function handleget_Api_V1_Watch_Nodes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/configmaps
 */
async function handleget_Api_V1_Watch_Configmaps(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/podtemplates
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Podtemplates(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/persistentvolumes/:name
 */
async function handleget_Api_V1_Watch_Persistentvolumes__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/serviceaccounts
 */
async function handleget_Api_V1_Watch_Serviceaccounts(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/endpoints
 */
async function handleget_Api_V1_Watch_Endpoints(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/events/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Events__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/podtemplates/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Podtemplates__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/limitranges
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Limitranges(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/events
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Events(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/persistentvolumeclaims
 */
async function handleget_Api_V1_Watch_Persistentvolumeclaims(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/resourcequotas
 */
async function handleget_Api_V1_Watch_Resourcequotas(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/pods/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Pods__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/replicationcontrollers
 */
async function handleget_Api_V1_Watch_Replicationcontrollers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/persistentvolumeclaims/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Persistentvolumeclaims__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/podtemplates
 */
async function handleget_Api_V1_Watch_Podtemplates(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/services
 */
async function handleget_Api_V1_Watch_Services(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/replicationcontrollers
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Replicationcontrollers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/limitranges
 */
async function handleget_Api_V1_Watch_Limitranges(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/endpoints/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Endpoints__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/persistentvolumeclaims
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Persistentvolumeclaims(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/events
 */
async function handleget_Api_V1_Watch_Events(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/configmaps/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Configmaps__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/pods
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Pods(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/configmaps
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Configmaps(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/endpoints
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Endpoints(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:name
 */
async function handleget_Api_V1_Watch_Namespaces__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/services/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Services__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/secrets
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Secrets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/persistentvolumes
 */
async function handleget_Api_V1_Watch_Persistentvolumes(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/serviceaccounts/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Serviceaccounts__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces
 */
async function handleget_Api_V1_Watch_Namespaces(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/limitranges/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Limitranges__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/namespaces/:namespace/services
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Services(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/watch/secrets
 */
async function handleget_Api_V1_Watch_Secrets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing watchs in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.watch>(
    storage, 
    'watch',
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
 * Handler for GET /api/v1/watch/namespaces/:namespace/resourcequotas/:name
 */
async function handleget_Api_V1_Watch_Namespaces__namespace_Resourcequotas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting watch ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('watch', name, namespace) as models.watch;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('watch', name, namespace));
      return;
    }
    throw error;
  }
}
