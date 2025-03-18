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
* Create routes for resourcequota resources
* @resourceType resourcequota
*/
export function createresourcequotaRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /api/v1/namespaces/:namespace/resourcequotas/:name
 * read the specified ResourceQuota
 */
router.get('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Resourcequotas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/resourcequotas/:name
 * replace the specified ResourceQuota
 */
router.put('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Resourcequotas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/resourcequotas/:name
 * delete a ResourceQuota
 */
router.delete('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Resourcequotas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/resourcequotas/:name
 * partially update the specified ResourceQuota
 */
router.patch('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Resourcequotas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/namespaces/:namespace/resourcequotas
 * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/namespaces/:namespace/resourcequotas', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Resourcequotas(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/namespaces/:namespace/resourcequotas/:name
 * watch changes to an object of kind ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/api/v1/watch/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Resourcequotas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/resourcequotas
 * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/resourcequotas', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Resourcequotas(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/resourcequotas
 * list or watch objects of kind ResourceQuota
 */
router.get('/api/v1/namespaces/:namespace/resourcequotas', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Resourcequotas(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/resourcequotas
 * create a ResourceQuota
 */
router.post('/api/v1/namespaces/:namespace/resourcequotas', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Resourcequotas(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/resourcequotas
 * delete collection of ResourceQuota
 */
router.delete('/api/v1/namespaces/:namespace/resourcequotas', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Resourcequotas(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/resourcequotas
 * list or watch objects of kind ResourceQuota
 */
router.get('/api/v1/resourcequotas', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Resourcequotas(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /api/v1/namespaces/:namespace/resourcequotas/:name
* read the specified ResourceQuota
* @resourceType resourcequota
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Resourcequotas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting resourcequota ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('resourcequota', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('resourcequota', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/resourcequotas/:name
* replace the specified ResourceQuota
* @resourceType resourcequota
*/
async function handleputModel_Api_V1_Namespaces__namespace_Resourcequotas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating resourcequota ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('resourcequota', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /api/v1/namespaces/:namespace/resourcequotas/:name
* delete a ResourceQuota
* @resourceType resourcequota
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Resourcequotas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting resourcequota ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('resourcequota', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `resourcequota "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('resourcequota', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/resourcequotas/:name
* partially update the specified ResourceQuota
* @resourceType resourcequota
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Resourcequotas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching resourcequota ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'resourcequota',
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
* Handler for GET /api/v1/watch/namespaces/:namespace/resourcequotas
* watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType resourcequota
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Resourcequotas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting resourcequota ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('resourcequota', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('resourcequota', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/watch/namespaces/:namespace/resourcequotas/:name
* watch changes to an object of kind ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType resourcequota
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Resourcequotas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting resourcequota ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('resourcequota', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('resourcequota', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/watch/resourcequotas
* watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType resourcequota
*/
async function handlegetModel_Api_V1_Watch_Resourcequotas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing resourcequotas in namespace ${namespace}`);

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
    logger.error(`Watch error for resourcequota:`, err);
    
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
      'resourcequota',
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
  'resourcequota',
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
* Handler for GET /api/v1/namespaces/:namespace/resourcequotas
* list or watch objects of kind ResourceQuota
* @resourceType resourcequota
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Resourcequotas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting resourcequota ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('resourcequota', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('resourcequota', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /api/v1/namespaces/:namespace/resourcequotas
* create a ResourceQuota
* @resourceType resourcequota
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Resourcequotas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating resourcequota ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/namespaces/:namespace/resourcequotas
* delete collection of ResourceQuota
* @resourceType resourcequota
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Resourcequotas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting resourcequota ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('resourcequota', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `resourcequota "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('resourcequota', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /api/v1/resourcequotas
* list or watch objects of kind ResourceQuota
* @resourceType resourcequota
*/
async function handlegetModel_Api_V1_Resourcequotas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing resourcequotas in namespace ${namespace}`);

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
    logger.error(`Watch error for resourcequota:`, err);
    
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
      'resourcequota',
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
  'resourcequota',
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


