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
* Create routes for volumeattachment resources
* @resourceType volumeattachment
*/
export function createvolumeattachmentRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/storage.k8s.io/v1/volumeattachments
 * list or watch objects of kind VolumeAttachment
 */
router.get('/apis/storage.k8s.io/v1/volumeattachments', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Volumeattachments(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/storage.k8s.io/v1/volumeattachments
 * create a VolumeAttachment
 */
router.post('/apis/storage.k8s.io/v1/volumeattachments', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Storage_K8s_Io_V1_Volumeattachments(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/volumeattachments
 * delete collection of VolumeAttachment
 */
router.delete('/apis/storage.k8s.io/v1/volumeattachments', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Volumeattachments(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/watch/volumeattachments/:name
 * watch changes to an object of kind VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/storage.k8s.io/v1/watch/volumeattachments/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Volumeattachments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/volumeattachments/:name
 * read the specified VolumeAttachment
 */
router.get('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/storage.k8s.io/v1/volumeattachments/:name
 * replace the specified VolumeAttachment
 */
router.put('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/storage.k8s.io/v1/volumeattachments/:name
 * delete a VolumeAttachment
 */
router.delete('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/storage.k8s.io/v1/volumeattachments/:name
 * partially update the specified VolumeAttachment
 */
router.patch('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/storage.k8s.io/v1/watch/volumeattachments
 * watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/storage.k8s.io/v1/watch/volumeattachments', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Volumeattachments(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/storage.k8s.io/v1/volumeattachments
* list or watch objects of kind VolumeAttachment
* @resourceType volumeattachment
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Volumeattachments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing volumeattachments in namespace ${namespace}`);

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
    logger.error(`Watch error for volumeattachment:`, err);
    
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
      'volumeattachment',
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
  'volumeattachment',
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
* Handler for POST /apis/storage.k8s.io/v1/volumeattachments
* create a VolumeAttachment
* @resourceType volumeattachment
*/
async function handlepostModel_Apis_Storage_K8s_Io_V1_Volumeattachments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating volumeattachment ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/storage.k8s.io/v1/volumeattachments
* delete collection of VolumeAttachment
* @resourceType volumeattachment
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Volumeattachments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting volumeattachment ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('volumeattachment', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `volumeattachment "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('volumeattachment', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/storage.k8s.io/v1/watch/volumeattachments/:name
* watch changes to an object of kind VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType volumeattachment
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Volumeattachments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting volumeattachment ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('volumeattachment', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('volumeattachment', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/storage.k8s.io/v1/volumeattachments/:name
* read the specified VolumeAttachment
* @resourceType volumeattachment
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting volumeattachment ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('volumeattachment', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('volumeattachment', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/storage.k8s.io/v1/volumeattachments/:name
* replace the specified VolumeAttachment
* @resourceType volumeattachment
*/
async function handleputModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating volumeattachment ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('volumeattachment', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/storage.k8s.io/v1/volumeattachments/:name
* delete a VolumeAttachment
* @resourceType volumeattachment
*/
async function handledeleteModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting volumeattachment ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('volumeattachment', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `volumeattachment "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('volumeattachment', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/storage.k8s.io/v1/volumeattachments/:name
* partially update the specified VolumeAttachment
* @resourceType volumeattachment
*/
async function handlepatchModel_Apis_Storage_K8s_Io_V1_Volumeattachments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching volumeattachment ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'volumeattachment',
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
* Handler for GET /apis/storage.k8s.io/v1/watch/volumeattachments
* watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType volumeattachment
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_Watch_Volumeattachments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing volumeattachments in namespace ${namespace}`);

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
    logger.error(`Watch error for volumeattachment:`, err);
    
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
      'volumeattachment',
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
  'volumeattachment',
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


