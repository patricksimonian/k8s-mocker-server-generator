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
* Create routes for csinode resources
* @resourceType csinode
*/
export function createcsinodeRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * PUT /apis/storage.k8s.io/v1/csinodes/:name
 * replace the specified CSINode
 */
router.put('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Storage_K8s_Io_V1_Csinodes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/csinodes/:name
 * delete a CSINode
 */
router.delete('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Csinodes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/storage.k8s.io/v1/csinodes/:name
 * partially update the specified CSINode
 */
router.patch('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Storage_K8s_Io_V1_Csinodes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/csinodes/:name
 * read the specified CSINode
 */
router.get('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Csinodes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/watch/csinodes
 * watch individual changes to a list of CSINode. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/storage.k8s.io/v1/watch/csinodes', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csinodes(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/csinodes
 * delete collection of CSINode
 */
router.delete('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Csinodes(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/csinodes
 * list or watch objects of kind CSINode
 */
router.get('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Csinodes(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/storage.k8s.io/v1/csinodes
 * create a CSINode
 */
router.post('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Storage_K8s_Io_V1_Csinodes(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/watch/csinodes/:name
 * watch changes to an object of kind CSINode. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/storage.k8s.io/v1/watch/csinodes/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csinodes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for PUT /apis/storage.k8s.io/v1/csinodes/:name
* replace the specified CSINode
* @resourceType csinode
*/
async function handleputModel_Apis_Storage_K8s_Io_V1_Csinodes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating csinode ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('csinode', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/storage.k8s.io/v1/csinodes/:name
* delete a CSINode
* @resourceType csinode
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Csinodes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting csinode ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('csinode', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `csinode "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csinode', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/storage.k8s.io/v1/csinodes/:name
* partially update the specified CSINode
* @resourceType csinode
*/
async function handlepatchModel_Apis_Storage_K8s_Io_V1_Csinodes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching csinode ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'csinode',
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
* Handler for GET /apis/storage.k8s.io/v1/csinodes/:name
* read the specified CSINode
* @resourceType csinode
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Csinodes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting csinode ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('csinode', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csinode', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/storage.k8s.io/v1/watch/csinodes
* watch individual changes to a list of CSINode. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType csinode
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csinodes(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing csinodes in namespace ${namespace}`);

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
    logger.error(`Watch error for csinode:`, err);
    
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
      'csinode',
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
  'csinode',
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
* Handler for DELETE /apis/storage.k8s.io/v1/csinodes
* delete collection of CSINode
* @resourceType csinode
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Csinodes(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting csinode ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('csinode', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `csinode "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csinode', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/storage.k8s.io/v1/csinodes
* list or watch objects of kind CSINode
* @resourceType csinode
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Csinodes(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing csinodes in namespace ${namespace}`);

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
    logger.error(`Watch error for csinode:`, err);
    
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
      'csinode',
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
  'csinode',
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
* Handler for POST /apis/storage.k8s.io/v1/csinodes
* create a CSINode
* @resourceType csinode
*/
async function handlepostModel_Apis_Storage_K8s_Io_V1_Csinodes(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating csinode ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for GET /apis/storage.k8s.io/v1/watch/csinodes/:name
* watch changes to an object of kind CSINode. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType csinode
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csinodes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting csinode ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('csinode', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csinode', name, namespace));
    return;
  }
  throw error;
}


}


