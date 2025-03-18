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
* Create routes for endpoint resources
* @resourceType endpoint
*/
export function createendpointRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /api/v1/watch/namespaces/:namespace/endpoints
 * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/namespaces/:namespace/endpoints', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Endpoints(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/endpoints/:name
 * read the specified Endpoints
 */
router.get('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Endpoints__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/endpoints/:name
 * replace the specified Endpoints
 */
router.put('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Endpoints__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/endpoints/:name
 * delete Endpoints
 */
router.delete('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Endpoints__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/endpoints/:name
 * partially update the specified Endpoints
 */
router.patch('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Endpoints__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/endpoints
 * list or watch objects of kind Endpoints
 */
router.get('/api/v1/endpoints', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Endpoints(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/namespaces/:namespace/endpoints/:name
 * watch changes to an object of kind Endpoints. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/api/v1/watch/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Endpoints__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/endpoints
 * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/endpoints', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Endpoints(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/endpoints
 * create Endpoints
 */
router.post('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Endpoints(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/endpoints
 * delete collection of Endpoints
 */
router.delete('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Endpoints(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/endpoints
 * list or watch objects of kind Endpoints
 */
router.get('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Endpoints(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /api/v1/watch/namespaces/:namespace/endpoints
* watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType endpoint
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Endpoints(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting endpoint ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('endpoint', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpoint', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/namespaces/:namespace/endpoints/:name
* read the specified Endpoints
* @resourceType endpoint
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Endpoints__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting endpoint ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('endpoint', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpoint', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/endpoints/:name
* replace the specified Endpoints
* @resourceType endpoint
*/
async function handleputModel_Api_V1_Namespaces__namespace_Endpoints__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating endpoint ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('endpoint', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /api/v1/namespaces/:namespace/endpoints/:name
* delete Endpoints
* @resourceType endpoint
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Endpoints__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting endpoint ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('endpoint', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `endpoint "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpoint', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/endpoints/:name
* partially update the specified Endpoints
* @resourceType endpoint
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Endpoints__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching endpoint ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'endpoint',
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
* Handler for GET /api/v1/endpoints
* list or watch objects of kind Endpoints
* @resourceType endpoint
*/
async function handlegetModel_Api_V1_Endpoints(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing endpoints in namespace ${namespace}`);

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
    logger.error(`Watch error for endpoint:`, err);
    
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
      'endpoint',
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
  'endpoint',
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
* Handler for GET /api/v1/watch/namespaces/:namespace/endpoints/:name
* watch changes to an object of kind Endpoints. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType endpoint
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Endpoints__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting endpoint ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('endpoint', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpoint', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/watch/endpoints
* watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType endpoint
*/
async function handlegetModel_Api_V1_Watch_Endpoints(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing endpoints in namespace ${namespace}`);

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
    logger.error(`Watch error for endpoint:`, err);
    
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
      'endpoint',
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
  'endpoint',
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
* Handler for POST /api/v1/namespaces/:namespace/endpoints
* create Endpoints
* @resourceType endpoint
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Endpoints(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating endpoint ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/namespaces/:namespace/endpoints
* delete collection of Endpoints
* @resourceType endpoint
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Endpoints(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting endpoint ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('endpoint', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `endpoint "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpoint', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /api/v1/namespaces/:namespace/endpoints
* list or watch objects of kind Endpoints
* @resourceType endpoint
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Endpoints(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting endpoint ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('endpoint', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpoint', name, namespace));
    return;
  }
  throw error;
}


}


