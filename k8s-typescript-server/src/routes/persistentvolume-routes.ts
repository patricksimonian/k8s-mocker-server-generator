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
* Create routes for persistentvolume resources
* @resourceType persistentvolume
*/
export function createpersistentvolumeRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /api/v1/watch/persistentvolumes
 * watch individual changes to a list of PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/persistentvolumes', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Persistentvolumes(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/persistentvolumes/:name
 * read the specified PersistentVolume
 */
router.get('/api/v1/persistentvolumes/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Persistentvolumes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/persistentvolumes/:name
 * replace the specified PersistentVolume
 */
router.put('/api/v1/persistentvolumes/:name', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Persistentvolumes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/persistentvolumes/:name
 * delete a PersistentVolume
 */
router.delete('/api/v1/persistentvolumes/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Persistentvolumes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/persistentvolumes/:name
 * partially update the specified PersistentVolume
 */
router.patch('/api/v1/persistentvolumes/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Persistentvolumes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/persistentvolumes
 * list or watch objects of kind PersistentVolume
 */
router.get('/api/v1/persistentvolumes', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Persistentvolumes(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/persistentvolumes
 * create a PersistentVolume
 */
router.post('/api/v1/persistentvolumes', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Persistentvolumes(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/persistentvolumes
 * delete collection of PersistentVolume
 */
router.delete('/api/v1/persistentvolumes', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Persistentvolumes(req, res, storage);
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
    await handlegetModel_Api_V1_Watch_Persistentvolumes__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /api/v1/watch/persistentvolumes
* watch individual changes to a list of PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType persistentvolume
*/
async function handlegetModel_Api_V1_Watch_Persistentvolumes(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing persistentvolumes in namespace ${namespace}`);

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
    logger.error(`Watch error for persistentvolume:`, err);
    
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
      'persistentvolume',
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
  'persistentvolume',
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
* Handler for GET /api/v1/persistentvolumes/:name
* read the specified PersistentVolume
* @resourceType persistentvolume
*/
async function handlegetModel_Api_V1_Persistentvolumes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting persistentvolume ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('persistentvolume', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('persistentvolume', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/persistentvolumes/:name
* replace the specified PersistentVolume
* @resourceType persistentvolume
*/
async function handleputModel_Api_V1_Persistentvolumes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating persistentvolume ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('persistentvolume', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /api/v1/persistentvolumes/:name
* delete a PersistentVolume
* @resourceType persistentvolume
*/
async function handledeleteModel_Api_V1_Persistentvolumes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting persistentvolume ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('persistentvolume', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `persistentvolume "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('persistentvolume', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /api/v1/persistentvolumes/:name
* partially update the specified PersistentVolume
* @resourceType persistentvolume
*/
async function handlepatchModel_Api_V1_Persistentvolumes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching persistentvolume ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'persistentvolume',
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
* Handler for GET /api/v1/persistentvolumes
* list or watch objects of kind PersistentVolume
* @resourceType persistentvolume
*/
async function handlegetModel_Api_V1_Persistentvolumes(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing persistentvolumes in namespace ${namespace}`);

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
    logger.error(`Watch error for persistentvolume:`, err);
    
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
      'persistentvolume',
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
  'persistentvolume',
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
* Handler for POST /api/v1/persistentvolumes
* create a PersistentVolume
* @resourceType persistentvolume
*/
async function handlepostModel_Api_V1_Persistentvolumes(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating persistentvolume ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/persistentvolumes
* delete collection of PersistentVolume
* @resourceType persistentvolume
*/
async function handledeleteModel_Api_V1_Persistentvolumes(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting persistentvolume ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('persistentvolume', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `persistentvolume "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('persistentvolume', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /api/v1/watch/persistentvolumes/:name
* watch changes to an object of kind PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType persistentvolume
*/
async function handlegetModel_Api_V1_Watch_Persistentvolumes__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting persistentvolume ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('persistentvolume', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('persistentvolume', name, namespace));
    return;
  }
  throw error;
}


}


