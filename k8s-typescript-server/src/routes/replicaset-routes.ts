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
* Create routes for replicaset resources
* @resourceType replicaset
*/
export function createreplicasetRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/apps/v1/watch/replicasets
 * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apps/v1/watch/replicasets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Replicasets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/namespaces/:namespace/replicasets
 * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apps/v1/watch/namespaces/:namespace/replicasets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Replicasets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/namespaces/:namespace/replicasets/:name
 * watch changes to an object of kind ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/apps/v1/watch/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Replicasets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/replicasets
 * list or watch objects of kind ReplicaSet
 */
router.get('/apis/apps/v1/replicasets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Replicasets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apps/v1/namespaces/:namespace/replicasets/:name
 * delete a ReplicaSet
 */
router.delete('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name
 * partially update the specified ReplicaSet
 */
router.patch('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/replicasets/:name
 * read the specified ReplicaSet
 */
router.get('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name
 * replace the specified ReplicaSet
 */
router.put('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/replicasets
 * list or watch objects of kind ReplicaSet
 */
router.get('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Replicasets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/apps/v1/namespaces/:namespace/replicasets
 * create a ReplicaSet
 */
router.post('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Apps_V1_Namespaces__namespace_Replicasets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apps/v1/namespaces/:namespace/replicasets
 * delete collection of ReplicaSet
 */
router.delete('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Replicasets(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/apps/v1/watch/replicasets
* watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType replicaset
*/
async function handlegetModel_Apis_Apps_V1_Watch_Replicasets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing replicasets in namespace ${namespace}`);

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
    logger.error(`Watch error for replicaset:`, err);
    
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
      'replicaset',
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
  'replicaset',
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
* Handler for GET /apis/apps/v1/watch/namespaces/:namespace/replicasets
* watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType replicaset
*/
async function handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Replicasets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting replicaset ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('replicaset', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('replicaset', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apps/v1/watch/namespaces/:namespace/replicasets/:name
* watch changes to an object of kind ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType replicaset
*/
async function handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Replicasets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting replicaset ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('replicaset', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('replicaset', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apps/v1/replicasets
* list or watch objects of kind ReplicaSet
* @resourceType replicaset
*/
async function handlegetModel_Apis_Apps_V1_Replicasets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing replicasets in namespace ${namespace}`);

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
    logger.error(`Watch error for replicaset:`, err);
    
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
      'replicaset',
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
  'replicaset',
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
* Handler for DELETE /apis/apps/v1/namespaces/:namespace/replicasets/:name
* delete a ReplicaSet
* @resourceType replicaset
*/
async function handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting replicaset ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('replicaset', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `replicaset "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('replicaset', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name
* partially update the specified ReplicaSet
* @resourceType replicaset
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching replicaset ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'replicaset',
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
* Handler for GET /apis/apps/v1/namespaces/:namespace/replicasets/:name
* read the specified ReplicaSet
* @resourceType replicaset
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting replicaset ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('replicaset', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('replicaset', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name
* replace the specified ReplicaSet
* @resourceType replicaset
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating replicaset ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('replicaset', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/apps/v1/namespaces/:namespace/replicasets
* list or watch objects of kind ReplicaSet
* @resourceType replicaset
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Replicasets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting replicaset ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('replicaset', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('replicaset', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/apps/v1/namespaces/:namespace/replicasets
* create a ReplicaSet
* @resourceType replicaset
*/
async function handlepostModel_Apis_Apps_V1_Namespaces__namespace_Replicasets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating replicaset ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/apps/v1/namespaces/:namespace/replicasets
* delete collection of ReplicaSet
* @resourceType replicaset
*/
async function handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Replicasets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting replicaset ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('replicaset', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `replicaset "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('replicaset', name, namespace));
    return;
  }
  throw error;
}

}


