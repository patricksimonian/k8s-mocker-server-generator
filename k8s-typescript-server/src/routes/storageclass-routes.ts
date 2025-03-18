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
* Create routes for storageclass resources
* @resourceType storageclass
*/
export function createstorageclassRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/storage.k8s.io/v1/watch/storageclasses/:name
 * watch changes to an object of kind StorageClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/storage.k8s.io/v1/watch/storageclasses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Storageclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/storage.k8s.io/v1/storageclasses/:name
 * replace the specified StorageClass
 */
router.put('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Storage_K8s_Io_V1_Storageclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/storageclasses/:name
 * delete a StorageClass
 */
router.delete('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Storageclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/storage.k8s.io/v1/storageclasses/:name
 * partially update the specified StorageClass
 */
router.patch('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Storage_K8s_Io_V1_Storageclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/storageclasses/:name
 * read the specified StorageClass
 */
router.get('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Storageclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/watch/storageclasses
 * watch individual changes to a list of StorageClass. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/storage.k8s.io/v1/watch/storageclasses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Storageclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/storageclasses
 * list or watch objects of kind StorageClass
 */
router.get('/apis/storage.k8s.io/v1/storageclasses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Storageclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/storage.k8s.io/v1/storageclasses
 * create a StorageClass
 */
router.post('/apis/storage.k8s.io/v1/storageclasses', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Storage_K8s_Io_V1_Storageclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/storageclasses
 * delete collection of StorageClass
 */
router.delete('/apis/storage.k8s.io/v1/storageclasses', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Storageclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/storage.k8s.io/v1/watch/storageclasses/:name
* watch changes to an object of kind StorageClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType storageclass
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Storageclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting storageclass ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('storageclass', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('storageclass', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/storage.k8s.io/v1/storageclasses/:name
* replace the specified StorageClass
* @resourceType storageclass
*/
async function handleputModel_Apis_Storage_K8s_Io_V1_Storageclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating storageclass ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('storageclass', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/storage.k8s.io/v1/storageclasses/:name
* delete a StorageClass
* @resourceType storageclass
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Storageclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting storageclass ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('storageclass', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `storageclass "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('storageclass', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/storage.k8s.io/v1/storageclasses/:name
* partially update the specified StorageClass
* @resourceType storageclass
*/
async function handlepatchModel_Apis_Storage_K8s_Io_V1_Storageclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching storageclass ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'storageclass',
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
* Handler for GET /apis/storage.k8s.io/v1/storageclasses/:name
* read the specified StorageClass
* @resourceType storageclass
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Storageclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting storageclass ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('storageclass', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('storageclass', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/storage.k8s.io/v1/watch/storageclasses
* watch individual changes to a list of StorageClass. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType storageclass
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Storageclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing storageclasss in namespace ${namespace}`);

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
    logger.error(`Watch error for storageclass:`, err);
    
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
      'storageclass',
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
  'storageclass',
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
* Handler for GET /apis/storage.k8s.io/v1/storageclasses
* list or watch objects of kind StorageClass
* @resourceType storageclass
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Storageclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing storageclasss in namespace ${namespace}`);

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
    logger.error(`Watch error for storageclass:`, err);
    
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
      'storageclass',
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
  'storageclass',
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
* Handler for POST /apis/storage.k8s.io/v1/storageclasses
* create a StorageClass
* @resourceType storageclass
*/
async function handlepostModel_Apis_Storage_K8s_Io_V1_Storageclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating storageclass ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/storage.k8s.io/v1/storageclasses
* delete collection of StorageClass
* @resourceType storageclass
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Storageclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting storageclass ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('storageclass', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `storageclass "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('storageclass', name, namespace));
    return;
  }
  throw error;
}

}


