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
* Create routes for csistoragecapacity resources
* @resourceType csistoragecapacity
*/
export function createcsistoragecapacityRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/storage.k8s.io/v1/csistoragecapacities
 * list or watch objects of kind CSIStorageCapacity
 */
router.get('/apis/storage.k8s.io/v1/csistoragecapacities', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Csistoragecapacities(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/watch/csistoragecapacities
 * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/storage.k8s.io/v1/watch/csistoragecapacities', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csistoragecapacities(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
 * partially update the specified CSIStorageCapacity
 */
router.patch('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
 * read the specified CSIStorageCapacity
 */
router.get('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
 * replace the specified CSIStorageCapacity
 */
router.put('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
 * delete a CSIStorageCapacity
 */
router.delete('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities
 * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Namespaces__namespace_Csistoragecapacities(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
 * list or watch objects of kind CSIStorageCapacity
 */
router.get('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
 * create a CSIStorageCapacity
 */
router.post('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
 * delete collection of CSIStorageCapacity
 */
router.delete('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities/:name
 * watch changes to an object of kind CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Namespaces__namespace_Csistoragecapacities__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/storage.k8s.io/v1/csistoragecapacities
* list or watch objects of kind CSIStorageCapacity
* @resourceType csistoragecapacity
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Csistoragecapacities(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing csistoragecapacitys in namespace ${namespace}`);

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
    logger.error(`Watch error for csistoragecapacity:`, err);
    
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
      'csistoragecapacity',
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
  'csistoragecapacity',
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
* Handler for GET /apis/storage.k8s.io/v1/watch/csistoragecapacities
* watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType csistoragecapacity
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Csistoragecapacities(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing csistoragecapacitys in namespace ${namespace}`);

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
    logger.error(`Watch error for csistoragecapacity:`, err);
    
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
      'csistoragecapacity',
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
  'csistoragecapacity',
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
* Handler for PATCH /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
* partially update the specified CSIStorageCapacity
* @resourceType csistoragecapacity
*/
async function handlepatchModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching csistoragecapacity ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'csistoragecapacity',
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
* Handler for GET /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
* read the specified CSIStorageCapacity
* @resourceType csistoragecapacity
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting csistoragecapacity ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('csistoragecapacity', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csistoragecapacity', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
* replace the specified CSIStorageCapacity
* @resourceType csistoragecapacity
*/
async function handleputModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating csistoragecapacity ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('csistoragecapacity', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name
* delete a CSIStorageCapacity
* @resourceType csistoragecapacity
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting csistoragecapacity ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('csistoragecapacity', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `csistoragecapacity "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csistoragecapacity', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities
* watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType csistoragecapacity
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Namespaces__namespace_Csistoragecapacities(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting csistoragecapacity ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('csistoragecapacity', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csistoragecapacity', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
* list or watch objects of kind CSIStorageCapacity
* @resourceType csistoragecapacity
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting csistoragecapacity ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('csistoragecapacity', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csistoragecapacity', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
* create a CSIStorageCapacity
* @resourceType csistoragecapacity
*/
async function handlepostModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating csistoragecapacity ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities
* delete collection of CSIStorageCapacity
* @resourceType csistoragecapacity
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Namespaces__namespace_Csistoragecapacities(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting csistoragecapacity ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('csistoragecapacity', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `csistoragecapacity "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csistoragecapacity', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities/:name
* watch changes to an object of kind CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType csistoragecapacity
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Namespaces__namespace_Csistoragecapacities__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting csistoragecapacity ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('csistoragecapacity', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('csistoragecapacity', name, namespace));
    return;
  }
  throw error;
}


}


