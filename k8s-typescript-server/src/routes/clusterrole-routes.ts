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
* Create routes for clusterrole resources
* @resourceType clusterrole
*/
export function createclusterroleRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name
 * watch changes to an object of kind ClusterRole. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterroles__name(req, res, storage);
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
    await handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(req, res, storage);
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
    await handleputModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(req, res, storage);
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
    await handledeleteModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(req, res, storage);
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
    await handlepatchModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(req, res, storage);
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
    await handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles(req, res, storage);
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
    await handlepostModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles(req, res, storage);
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
    await handledeleteModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles(req, res, storage);
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
    await handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterroles(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name
* watch changes to an object of kind ClusterRole. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType clusterrole
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterroles__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting clusterrole ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('clusterrole', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('clusterrole', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
* read the specified ClusterRole
* @resourceType clusterrole
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting clusterrole ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('clusterrole', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('clusterrole', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
* replace the specified ClusterRole
* @resourceType clusterrole
*/
async function handleputModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating clusterrole ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('clusterrole', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
* delete a ClusterRole
* @resourceType clusterrole
*/
async function handledeleteModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting clusterrole ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('clusterrole', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `clusterrole "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('clusterrole', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/rbac.authorization.k8s.io/v1/clusterroles/:name
* partially update the specified ClusterRole
* @resourceType clusterrole
*/
async function handlepatchModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching clusterrole ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'clusterrole',
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
* Handler for GET /apis/rbac.authorization.k8s.io/v1/clusterroles
* list or watch objects of kind ClusterRole
* @resourceType clusterrole
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing clusterroles in namespace ${namespace}`);

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
    logger.error(`Watch error for clusterrole:`, err);
    
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
      'clusterrole',
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
  'clusterrole',
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
* create a ClusterRole
* @resourceType clusterrole
*/
async function handlepostModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating clusterrole ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/rbac.authorization.k8s.io/v1/clusterroles
* delete collection of ClusterRole
* @resourceType clusterrole
*/
async function handledeleteModel_Apis_Rbac_Authorization_K8s_Io_V1_Clusterroles(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting clusterrole ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('clusterrole', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `clusterrole "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('clusterrole', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/rbac.authorization.k8s.io/v1/watch/clusterroles
* watch individual changes to a list of ClusterRole. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType clusterrole
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_Watch_Clusterroles(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing clusterroles in namespace ${namespace}`);

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
    logger.error(`Watch error for clusterrole:`, err);
    
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
      'clusterrole',
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
  'clusterrole',
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


