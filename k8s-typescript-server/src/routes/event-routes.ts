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
* Create routes for event resources
* @resourceType event
*/
export function createeventRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * PATCH /api/v1/namespaces/:namespace/events/:name
 * partially update the specified Event
 */
router.patch('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/events/:name
 * read the specified Event
 */
router.get('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/events/:name
 * replace the specified Event
 */
router.put('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/events/:name
 * delete an Event
 */
router.delete('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/events.k8s.io/v1/watch/namespaces/:namespace/events
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/events.k8s.io/v1/watch/namespaces/:namespace/events', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Events_K8s_Io_V1_Watch_Namespaces__namespace_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/namespaces/:namespace/events
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/namespaces/:namespace/events', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/events.k8s.io/v1/watch/events
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/events.k8s.io/v1/watch/events', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Events_K8s_Io_V1_Watch_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/events.k8s.io/v1/events
 * list or watch objects of kind Event
 */
router.get('/apis/events.k8s.io/v1/events', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Events_K8s_Io_V1_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/events
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/events', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/events.k8s.io/v1/namespaces/:namespace/events
 * list or watch objects of kind Event
 */
router.get('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/events.k8s.io/v1/namespaces/:namespace/events
 * create an Event
 */
router.post('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/events.k8s.io/v1/namespaces/:namespace/events
 * delete collection of Event
 */
router.delete('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/events
 * list or watch objects of kind Event
 */
router.get('/api/v1/events', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name
 * watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Events_K8s_Io_V1_Watch_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/namespaces/:namespace/events/:name
 * watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/api/v1/watch/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
 * read the specified Event
 */
router.get('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
 * replace the specified Event
 */
router.put('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
 * delete an Event
 */
router.delete('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
 * partially update the specified Event
 */
router.patch('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/events
 * list or watch objects of kind Event
 */
router.get('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/events
 * create an Event
 */
router.post('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/events
 * delete collection of Event
 */
router.delete('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Events(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for PATCH /api/v1/namespaces/:namespace/events/:name
* partially update the specified Event
* @resourceType event
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching event ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'event',
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
* Handler for GET /api/v1/namespaces/:namespace/events/:name
* read the specified Event
* @resourceType event
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting event ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('event', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/events/:name
* replace the specified Event
* @resourceType event
*/
async function handleputModel_Api_V1_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating event ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('event', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /api/v1/namespaces/:namespace/events/:name
* delete an Event
* @resourceType event
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting event ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('event', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `event "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/events.k8s.io/v1/watch/namespaces/:namespace/events
* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType event
*/
async function handlegetModel_Apis_Events_K8s_Io_V1_Watch_Namespaces__namespace_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting event ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('event', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/watch/namespaces/:namespace/events
* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType event
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting event ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('event', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/events.k8s.io/v1/watch/events
* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType event
*/
async function handlegetModel_Apis_Events_K8s_Io_V1_Watch_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing events in namespace ${namespace}`);

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
    logger.error(`Watch error for event:`, err);
    
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
      'event',
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
  'event',
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
* Handler for GET /apis/events.k8s.io/v1/events
* list or watch objects of kind Event
* @resourceType event
*/
async function handlegetModel_Apis_Events_K8s_Io_V1_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing events in namespace ${namespace}`);

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
    logger.error(`Watch error for event:`, err);
    
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
      'event',
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
  'event',
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
* Handler for GET /api/v1/watch/events
* watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType event
*/
async function handlegetModel_Api_V1_Watch_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing events in namespace ${namespace}`);

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
    logger.error(`Watch error for event:`, err);
    
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
      'event',
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
  'event',
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
* Handler for GET /apis/events.k8s.io/v1/namespaces/:namespace/events
* list or watch objects of kind Event
* @resourceType event
*/
async function handlegetModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting event ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('event', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/events.k8s.io/v1/namespaces/:namespace/events
* create an Event
* @resourceType event
*/
async function handlepostModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating event ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/events.k8s.io/v1/namespaces/:namespace/events
* delete collection of Event
* @resourceType event
*/
async function handledeleteModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting event ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('event', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `event "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /api/v1/events
* list or watch objects of kind Event
* @resourceType event
*/
async function handlegetModel_Api_V1_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing events in namespace ${namespace}`);

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
    logger.error(`Watch error for event:`, err);
    
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
      'event',
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
  'event',
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
* Handler for GET /apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name
* watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType event
*/
async function handlegetModel_Apis_Events_K8s_Io_V1_Watch_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting event ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('event', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/watch/namespaces/:namespace/events/:name
* watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType event
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting event ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('event', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
* read the specified Event
* @resourceType event
*/
async function handlegetModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting event ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('event', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
* replace the specified Event
* @resourceType event
*/
async function handleputModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating event ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('event', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
* delete an Event
* @resourceType event
*/
async function handledeleteModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting event ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('event', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `event "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
* partially update the specified Event
* @resourceType event
*/
async function handlepatchModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching event ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'event',
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
* Handler for GET /api/v1/namespaces/:namespace/events
* list or watch objects of kind Event
* @resourceType event
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting event ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('event', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /api/v1/namespaces/:namespace/events
* create an Event
* @resourceType event
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating event ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/namespaces/:namespace/events
* delete collection of Event
* @resourceType event
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Events(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting event ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('event', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `event "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('event', name, namespace));
    return;
  }
  throw error;
}

}


