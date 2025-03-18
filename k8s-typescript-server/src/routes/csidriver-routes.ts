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
* Create routes for csidriver resources
* @resourceType csidriver
*/
export function createcsidriverRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/storage.k8s.io/v1/watch/csidrivers
 * watch individual changes to a list of CSIDriver. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/storage.k8s.io/v1/watch/csidrivers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csidrivers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/csidrivers
 * list or watch objects of kind CSIDriver
 */
router.get('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Csidrivers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/storage.k8s.io/v1/csidrivers
 * create a CSIDriver
 */
router.post('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Storage_K8s_Io_V1_Csidrivers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/csidrivers
 * delete collection of CSIDriver
 */
router.delete('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Csidrivers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/storage.k8s.io/v1/csidrivers/:name
 * replace the specified CSIDriver
 */
router.put('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Storage_K8s_Io_V1_Csidrivers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/csidrivers/:name
 * delete a CSIDriver
 */
router.delete('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Csidrivers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/storage.k8s.io/v1/csidrivers/:name
 * partially update the specified CSIDriver
 */
router.patch('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Storage_K8s_Io_V1_Csidrivers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/csidrivers/:name
 * read the specified CSIDriver
 */
router.get('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Csidrivers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/watch/csidrivers/:name
 * watch changes to an object of kind CSIDriver. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/storage.k8s.io/v1/watch/csidrivers/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csidrivers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/storage.k8s.io/v1/watch/csidrivers
* watch individual changes to a list of CSIDriver. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType csidriver
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csidrivers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing csidrivers in namespace ${namespace}`);

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
    logger.error(`Watch error for csidriver:`, err);
    
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
      'csidriver',
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
  'csidriver',
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
* Handler for GET /apis/storage.k8s.io/v1/csidrivers
* list or watch objects of kind CSIDriver
* @resourceType csidriver
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Csidrivers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing csidrivers in namespace ${namespace}`);

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
    logger.error(`Watch error for csidriver:`, err);
    
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
      'csidriver',
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
  'csidriver',
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
* Handler for POST /apis/storage.k8s.io/v1/csidrivers
* create a CSIDriver
* @resourceType csidriver
*/
async function handlepostModel_Apis_Storage_K8s_Io_V1_Csidrivers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating csidriver ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/storage.k8s.io/v1/csidrivers
* delete collection of CSIDriver
* @resourceType csidriver
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Csidrivers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting csidriver ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('csidriver', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `csidriver "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csidriver', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PUT /apis/storage.k8s.io/v1/csidrivers/:name
* replace the specified CSIDriver
* @resourceType csidriver
*/
async function handleputModel_Apis_Storage_K8s_Io_V1_Csidrivers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating csidriver ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('csidriver', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/storage.k8s.io/v1/csidrivers/:name
* delete a CSIDriver
* @resourceType csidriver
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Csidrivers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting csidriver ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('csidriver', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `csidriver "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csidriver', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/storage.k8s.io/v1/csidrivers/:name
* partially update the specified CSIDriver
* @resourceType csidriver
*/
async function handlepatchModel_Apis_Storage_K8s_Io_V1_Csidrivers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching csidriver ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'csidriver',
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
* Handler for GET /apis/storage.k8s.io/v1/csidrivers/:name
* read the specified CSIDriver
* @resourceType csidriver
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Csidrivers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting csidriver ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('csidriver', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csidriver', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/storage.k8s.io/v1/watch/csidrivers/:name
* watch changes to an object of kind CSIDriver. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType csidriver
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csidrivers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting csidriver ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('csidriver', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csidriver', name, namespace));
    return;
  }
  throw error;
}


}


