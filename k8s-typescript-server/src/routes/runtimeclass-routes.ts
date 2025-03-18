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
* Create routes for runtimeclass resources
* @resourceType runtimeclass
*/
export function createruntimeclassRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * PATCH /apis/node.k8s.io/v1/runtimeclasses/:name
 * partially update the specified RuntimeClass
 */
router.patch('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Node_K8s_Io_V1_Runtimeclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/node.k8s.io/v1/runtimeclasses/:name
 * read the specified RuntimeClass
 */
router.get('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Node_K8s_Io_V1_Runtimeclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/node.k8s.io/v1/runtimeclasses/:name
 * replace the specified RuntimeClass
 */
router.put('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Node_K8s_Io_V1_Runtimeclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/node.k8s.io/v1/runtimeclasses/:name
 * delete a RuntimeClass
 */
router.delete('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Node_K8s_Io_V1_Runtimeclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/node.k8s.io/v1/watch/runtimeclasses/:name
 * watch changes to an object of kind RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/node.k8s.io/v1/watch/runtimeclasses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Node_K8s_Io_V1_Watch_Runtimeclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/node.k8s.io/v1/runtimeclasses
 * list or watch objects of kind RuntimeClass
 */
router.get('/apis/node.k8s.io/v1/runtimeclasses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Node_K8s_Io_V1_Runtimeclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/node.k8s.io/v1/runtimeclasses
 * create a RuntimeClass
 */
router.post('/apis/node.k8s.io/v1/runtimeclasses', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Node_K8s_Io_V1_Runtimeclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/node.k8s.io/v1/runtimeclasses
 * delete collection of RuntimeClass
 */
router.delete('/apis/node.k8s.io/v1/runtimeclasses', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Node_K8s_Io_V1_Runtimeclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/node.k8s.io/v1/watch/runtimeclasses
 * watch individual changes to a list of RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/node.k8s.io/v1/watch/runtimeclasses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Node_K8s_Io_V1_Watch_Runtimeclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for PATCH /apis/node.k8s.io/v1/runtimeclasses/:name
* partially update the specified RuntimeClass
* @resourceType runtimeclass
*/
async function handlepatchModel_Apis_Node_K8s_Io_V1_Runtimeclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching runtimeclass ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'runtimeclass',
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
* Handler for GET /apis/node.k8s.io/v1/runtimeclasses/:name
* read the specified RuntimeClass
* @resourceType runtimeclass
*/
async function handlegetModel_Apis_Node_K8s_Io_V1_Runtimeclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting runtimeclass ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('runtimeclass', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('runtimeclass', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/node.k8s.io/v1/runtimeclasses/:name
* replace the specified RuntimeClass
* @resourceType runtimeclass
*/
async function handleputModel_Apis_Node_K8s_Io_V1_Runtimeclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating runtimeclass ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('runtimeclass', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/node.k8s.io/v1/runtimeclasses/:name
* delete a RuntimeClass
* @resourceType runtimeclass
*/
async function handledeleteModel_Apis_Node_K8s_Io_V1_Runtimeclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting runtimeclass ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('runtimeclass', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `runtimeclass "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('runtimeclass', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/node.k8s.io/v1/watch/runtimeclasses/:name
* watch changes to an object of kind RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType runtimeclass
*/
async function handlegetModel_Apis_Node_K8s_Io_V1_Watch_Runtimeclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting runtimeclass ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('runtimeclass', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('runtimeclass', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/node.k8s.io/v1/runtimeclasses
* list or watch objects of kind RuntimeClass
* @resourceType runtimeclass
*/
async function handlegetModel_Apis_Node_K8s_Io_V1_Runtimeclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing runtimeclasss in namespace ${namespace}`);

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
    logger.error(`Watch error for runtimeclass:`, err);
    
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
      'runtimeclass',
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
  'runtimeclass',
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
* Handler for POST /apis/node.k8s.io/v1/runtimeclasses
* create a RuntimeClass
* @resourceType runtimeclass
*/
async function handlepostModel_Apis_Node_K8s_Io_V1_Runtimeclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating runtimeclass ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/node.k8s.io/v1/runtimeclasses
* delete collection of RuntimeClass
* @resourceType runtimeclass
*/
async function handledeleteModel_Apis_Node_K8s_Io_V1_Runtimeclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting runtimeclass ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('runtimeclass', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `runtimeclass "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('runtimeclass', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/node.k8s.io/v1/watch/runtimeclasses
* watch individual changes to a list of RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType runtimeclass
*/
async function handlegetModel_Apis_Node_K8s_Io_V1_Watch_Runtimeclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing runtimeclasss in namespace ${namespace}`);

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
    logger.error(`Watch error for runtimeclass:`, err);
    
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
      'runtimeclass',
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
  'runtimeclass',
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


