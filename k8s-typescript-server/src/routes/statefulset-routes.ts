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
* Create routes for statefulset resources
* @resourceType statefulset
*/
export function createstatefulsetRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * DELETE /apis/apps/v1/namespaces/:namespace/statefulsets/:name
 * delete a StatefulSet
 */
router.delete('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name
 * partially update the specified StatefulSet
 */
router.patch('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name
 * read the specified StatefulSet
 */
router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name
 * replace the specified StatefulSet
 */
router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/apps/v1/namespaces/:namespace/statefulsets
 * create a StatefulSet
 */
router.post('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apps/v1/namespaces/:namespace/statefulsets
 * delete collection of StatefulSet
 */
router.delete('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/statefulsets
 * list or watch objects of kind StatefulSet
 */
router.get('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name
 * watch changes to an object of kind StatefulSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Statefulsets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/statefulsets
 * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apps/v1/watch/statefulsets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Statefulsets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/statefulsets
 * list or watch objects of kind StatefulSet
 */
router.get('/apis/apps/v1/statefulsets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Statefulsets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/namespaces/:namespace/statefulsets
 * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apps/v1/watch/namespaces/:namespace/statefulsets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Statefulsets(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for DELETE /apis/apps/v1/namespaces/:namespace/statefulsets/:name
* delete a StatefulSet
* @resourceType statefulset
*/
async function handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting statefulset ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('statefulset', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `statefulset "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('statefulset', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name
* partially update the specified StatefulSet
* @resourceType statefulset
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching statefulset ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'statefulset',
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
* Handler for GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name
* read the specified StatefulSet
* @resourceType statefulset
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting statefulset ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('statefulset', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('statefulset', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name
* replace the specified StatefulSet
* @resourceType statefulset
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating statefulset ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('statefulset', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for POST /apis/apps/v1/namespaces/:namespace/statefulsets
* create a StatefulSet
* @resourceType statefulset
*/
async function handlepostModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating statefulset ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/apps/v1/namespaces/:namespace/statefulsets
* delete collection of StatefulSet
* @resourceType statefulset
*/
async function handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting statefulset ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('statefulset', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `statefulset "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('statefulset', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/apps/v1/namespaces/:namespace/statefulsets
* list or watch objects of kind StatefulSet
* @resourceType statefulset
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting statefulset ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('statefulset', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('statefulset', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name
* watch changes to an object of kind StatefulSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType statefulset
*/
async function handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Statefulsets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting statefulset ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('statefulset', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('statefulset', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apps/v1/watch/statefulsets
* watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType statefulset
*/
async function handlegetModel_Apis_Apps_V1_Watch_Statefulsets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing statefulsets in namespace ${namespace}`);

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
    logger.error(`Watch error for statefulset:`, err);
    
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
      'statefulset',
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
  'statefulset',
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
* Handler for GET /apis/apps/v1/statefulsets
* list or watch objects of kind StatefulSet
* @resourceType statefulset
*/
async function handlegetModel_Apis_Apps_V1_Statefulsets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing statefulsets in namespace ${namespace}`);

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
    logger.error(`Watch error for statefulset:`, err);
    
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
      'statefulset',
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
  'statefulset',
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
* Handler for GET /apis/apps/v1/watch/namespaces/:namespace/statefulsets
* watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType statefulset
*/
async function handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Statefulsets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting statefulset ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('statefulset', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('statefulset', name, namespace));
    return;
  }
  throw error;
}


}


