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



/**
* Create routes for clusterrolebinding resources
* @resourceType clusterrolebinding
*/
export function createclusterrolebindingRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name
 * watch changes to an object of kind ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterrolebindings__name(req, res, storage);
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
    await handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterrolebindings(req, res, storage);
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
    await handlepostModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings(req, res, storage);
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
    await handledeleteModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings(req, res, storage);
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
    await handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings(req, res, storage);
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
    await handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(req, res, storage);
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
    await handleputModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(req, res, storage);
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
    await handledeleteModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(req, res, storage);
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
    await handlepatchModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name
* watch changes to an object of kind ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType clusterrolebinding
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterrolebindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting clusterrolebinding ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('clusterrolebinding', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('clusterrolebinding', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings
* watch individual changes to a list of ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType clusterrolebinding
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterrolebindings(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing clusterrolebindings in namespace ${namespace}`);

// Check if this is a watch request
if (watch === 'true' || watch === '1') {
  // Handle watch request
  const resourceVersion = req.query.resourceVersion as string;
  
  // Set headers for streaming response
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Transfer-Encoding', 'chunked');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  
  // Set up error handler
  const onError = (err: any) => {
    logger.error(`Watch error for clusterrolebinding:`, err);
    
    // Send error event
    const errorEvent = {
      type: 'ERROR',
      object: {
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Failure',
        message: err.message || 'Watch error',
        reason: 'InternalError',
        code: 500
      }
    };
    
    res.write(JSON.stringify(errorEvent) + '\n');
    res.end();
  };
  
  // Set up close handler
  req.on('close', () => {
    if (stopWatching) {
      stopWatching();
    }
  });
  
  // Start watching
  let stopWatching: (() => void) | null = null;
  try {
    stopWatching = await storage.watchResources(
      'clusterrolebinding',
      namespace,
      labelSelector as string,
      resourceVersion,
      (type, resource) => {
        // Send watch event
        const event = {
          type,
          object: resource
        };
        res.write(JSON.stringify(event) + '\n');
      }
    );
  } catch (err) {
    onError(err);
  }
  
  return;
}

// Regular list request
// Fetch resources from storage
const result = await fetchResourceList(
  storage, 
  'clusterrolebinding',
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
* create a ClusterRoleBinding
* @resourceType clusterrolebinding
*/
async function handlepostModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating clusterrolebinding ${resource.metadata?.name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Create the resource in storage
  const result = await storage.createResource(resource, namespace);
  res.status(201).json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/rbac.authorization.k8s.io/v1/clusterrolebindings
* delete collection of ClusterRoleBinding
* @resourceType clusterrolebinding
*/
async function handledeleteModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting clusterrolebinding ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('clusterrolebinding', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `clusterrolebinding "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('clusterrolebinding', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/rbac.authorization.k8s.io/v1/clusterrolebindings
* list or watch objects of kind ClusterRoleBinding
* @resourceType clusterrolebinding
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing clusterrolebindings in namespace ${namespace}`);

// Check if this is a watch request
if (watch === 'true' || watch === '1') {
  // Handle watch request
  const resourceVersion = req.query.resourceVersion as string;
  
  // Set headers for streaming response
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Transfer-Encoding', 'chunked');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  
  // Set up error handler
  const onError = (err: any) => {
    logger.error(`Watch error for clusterrolebinding:`, err);
    
    // Send error event
    const errorEvent = {
      type: 'ERROR',
      object: {
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Failure',
        message: err.message || 'Watch error',
        reason: 'InternalError',
        code: 500
      }
    };
    
    res.write(JSON.stringify(errorEvent) + '\n');
    res.end();
  };
  
  // Set up close handler
  req.on('close', () => {
    if (stopWatching) {
      stopWatching();
    }
  });
  
  // Start watching
  let stopWatching: (() => void) | null = null;
  try {
    stopWatching = await storage.watchResources(
      'clusterrolebinding',
      namespace,
      labelSelector as string,
      resourceVersion,
      (type, resource) => {
        // Send watch event
        const event = {
          type,
          object: resource
        };
        res.write(JSON.stringify(event) + '\n');
      }
    );
  } catch (err) {
    onError(err);
  }
  
  return;
}

// Regular list request
// Fetch resources from storage
const result = await fetchResourceList(
  storage, 
  'clusterrolebinding',
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
* Handler for GET /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
* read the specified ClusterRoleBinding
* @resourceType clusterrolebinding
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting clusterrolebinding ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('clusterrolebinding', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('clusterrolebinding', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
* replace the specified ClusterRoleBinding
* @resourceType clusterrolebinding
*/
async function handleputModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating clusterrolebinding ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('clusterrolebinding', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
* delete a ClusterRoleBinding
* @resourceType clusterrolebinding
*/
async function handledeleteModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting clusterrolebinding ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('clusterrolebinding', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `clusterrolebinding "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('clusterrolebinding', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name
* partially update the specified ClusterRoleBinding
* @resourceType clusterrolebinding
*/
async function handlepatchModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterrolebindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching clusterrolebinding ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'clusterrolebinding',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}


