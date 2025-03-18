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

export function createrbac_authorization_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * PUT /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name
   * replace the specified RoleBinding
   */
  router.put('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Rolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name
   * delete a RoleBinding
   */
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Rolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name
   * partially update the specified RoleBinding
   */
  router.patch('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Rolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name
   * read the specified RoleBinding
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Rolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles
   * watch individual changes to a list of Role. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Namespaces-_namespace-Roles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
   * read the specified ClusterRoleBinding
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Clusterrolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
   * replace the specified ClusterRoleBinding
   */
  router.put('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Rbac.Authorization.K8s.Io-V1-Clusterrolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
   * delete a ClusterRoleBinding
   */
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Rbac.Authorization.K8s.Io-V1-Clusterrolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
   * partially update the specified ClusterRoleBinding
   */
  router.patch('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Rbac.Authorization.K8s.Io-V1-Clusterrolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/clusterrolebindings
   * list or watch objects of kind ClusterRoleBinding
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Clusterrolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/rbac.authorization.k8s.io/v1/clusterrolebindings
   * create a ClusterRoleBinding
   */
  router.post('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', async (req, res, next) => {
    try {
      await handlePost-Apis-Rbac.Authorization.K8s.Io-V1-Clusterrolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/rbac.authorization.k8s.io/v1/clusterrolebindings
   * delete collection of ClusterRoleBinding
   */
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', async (req, res, next) => {
    try {
      await handleDelete-Apis-Rbac.Authorization.K8s.Io-V1-Clusterrolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/roles
   * watch individual changes to a list of Role. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/roles', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Roles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name
   * watch changes to an object of kind ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Clusterrolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/rolebindings
   * watch individual changes to a list of RoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/rolebindings', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Rolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
   * read the specified ClusterRole
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Clusterroles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
   * replace the specified ClusterRole
   */
  router.put('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Rbac.Authorization.K8s.Io-V1-Clusterroles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
   * delete a ClusterRole
   */
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Rbac.Authorization.K8s.Io-V1-Clusterroles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
   * partially update the specified ClusterRole
   */
  router.patch('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Rbac.Authorization.K8s.Io-V1-Clusterroles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/rolebindings
   * list or watch objects of kind RoleBinding
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/rolebindings', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Rolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/roles
   * list or watch objects of kind Role
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/roles', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Roles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings
   * watch individual changes to a list of RoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Namespaces-_namespace-Rolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name
   * read the specified Role
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Roles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name
   * replace the specified Role
   */
  router.put('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Roles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name
   * delete a Role
   */
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Roles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name
   * partially update the specified Role
   */
  router.patch('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Roles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/
   * get information of a group
   */
  router.get('/apis/rbac.authorization.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings/:name
   * watch changes to an object of kind RoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Namespaces-_namespace-Rolebindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles
   * list or watch objects of kind Role
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Roles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles
   * create a Role
   */
  router.post('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles', async (req, res, next) => {
    try {
      await handlePost-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Roles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles
   * delete collection of Role
   */
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles', async (req, res, next) => {
    try {
      await handleDelete-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Roles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings
   * watch individual changes to a list of ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Clusterrolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles/:name
   * watch changes to an object of kind Role. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Namespaces-_namespace-Roles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/clusterroles
   * list or watch objects of kind ClusterRole
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterroles', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Clusterroles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/rbac.authorization.k8s.io/v1/clusterroles
   * create a ClusterRole
   */
  router.post('/apis/rbac.authorization.k8s.io/v1/clusterroles', async (req, res, next) => {
    try {
      await handlePost-Apis-Rbac.Authorization.K8s.Io-V1-Clusterroles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/rbac.authorization.k8s.io/v1/clusterroles
   * delete collection of ClusterRole
   */
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterroles', async (req, res, next) => {
    try {
      await handleDelete-Apis-Rbac.Authorization.K8s.Io-V1-Clusterroles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings
   * list or watch objects of kind RoleBinding
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Rolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings
   * create a RoleBinding
   */
  router.post('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      await handlePost-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Rolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings
   * delete collection of RoleBinding
   */
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      await handleDelete-Apis-Rbac.Authorization.K8s.Io-V1-Namespaces-_namespace-Rolebindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/clusterroles
   * watch individual changes to a list of ClusterRole. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterroles', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Clusterroles(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name
   * watch changes to an object of kind ClusterRole. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Rbac.Authorization.K8s.Io-V1-Watch-Clusterroles-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for PUT /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name
 */
async function handleput_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Rolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.rbac_authorization_k8s_io;
  
  logger.info(`Updating rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('rbac.authorization.k8s.io', name, resource, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name
 */
async function handledelete_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Rolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('rbac.authorization.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `rbac.authorization.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name
 */
async function handlepatch_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Rolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.rbac_authorization_k8s_io>(
      storage, 
      'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Rolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Namespaces__namespace_Roles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
 */
async function handleput_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.rbac_authorization_k8s_io;
  
  logger.info(`Updating rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('rbac.authorization.k8s.io', name, resource, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
 */
async function handledelete_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('rbac.authorization.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `rbac.authorization.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
 */
async function handlepatch_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.rbac_authorization_k8s_io>(
      storage, 
      'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/clusterrolebindings
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for POST /apis/rbac.authorization.k8s.io/v1/clusterrolebindings
 */
async function handlepost_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.rbac_authorization_k8s_io;
  
  logger.info(`Creating rbac.authorization.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.rbac_authorization_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/rbac.authorization.k8s.io/v1/clusterrolebindings
 */
async function handledelete_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('rbac.authorization.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `rbac.authorization.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/roles
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Roles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterrolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/rolebindings
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Rolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
 */
async function handleput_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.rbac_authorization_k8s_io;
  
  logger.info(`Updating rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('rbac.authorization.k8s.io', name, resource, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
 */
async function handledelete_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('rbac.authorization.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `rbac.authorization.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
 */
async function handlepatch_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.rbac_authorization_k8s_io>(
      storage, 
      'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/rolebindings
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Rolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/roles
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Roles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Namespaces__namespace_Rolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Roles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name
 */
async function handleput_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Roles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.rbac_authorization_k8s_io;
  
  logger.info(`Updating rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('rbac.authorization.k8s.io', name, resource, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name
 */
async function handledelete_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Roles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('rbac.authorization.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `rbac.authorization.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name
 */
async function handlepatch_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Roles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.rbac_authorization_k8s_io>(
      storage, 
      'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings/:name
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Namespaces__namespace_Rolebindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Roles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles
 */
async function handlepost_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Roles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.rbac_authorization_k8s_io;
  
  logger.info(`Creating rbac.authorization.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.rbac_authorization_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles
 */
async function handledelete_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Roles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('rbac.authorization.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `rbac.authorization.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterrolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles/:name
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Namespaces__namespace_Roles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/clusterroles
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for POST /apis/rbac.authorization.k8s.io/v1/clusterroles
 */
async function handlepost_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.rbac_authorization_k8s_io;
  
  logger.info(`Creating rbac.authorization.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.rbac_authorization_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/rbac.authorization.k8s.io/v1/clusterroles
 */
async function handledelete_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('rbac.authorization.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `rbac.authorization.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Rolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings
 */
async function handlepost_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Rolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.rbac_authorization_k8s_io;
  
  logger.info(`Creating rbac.authorization.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.rbac_authorization_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings
 */
async function handledelete_Apis_Rbac_Authorization_K8s_Io_V1_Namespaces__namespace_Rolebindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('rbac.authorization.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `rbac.authorization.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/clusterroles
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterroles(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing rbac.authorization.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.rbac_authorization_k8s_io>(
    storage, 
    'rbac.authorization.k8s.io',
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
 * Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name
 */
async function handleget_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterroles__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting rbac.authorization.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('rbac.authorization.k8s.io', name, namespace) as models.rbac_authorization_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('rbac.authorization.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}
