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
* Create routes for configmap resources
* @resourceType configmap
*/
export function createconfigmapRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /api/v1/watch/configmaps
 * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/configmaps', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Configmaps(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/namespaces/:namespace/configmaps
 * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/namespaces/:namespace/configmaps', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Configmaps(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/configmaps
 * create a ConfigMap
 */
router.post('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Configmaps(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/configmaps
 * delete collection of ConfigMap
 */
router.delete('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Configmaps(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/configmaps
 * list or watch objects of kind ConfigMap
 */
router.get('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Configmaps(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/namespaces/:namespace/configmaps/:name
 * watch changes to an object of kind ConfigMap. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/api/v1/watch/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Configmaps__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/configmaps
 * list or watch objects of kind ConfigMap
 */
router.get('/api/v1/configmaps', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Configmaps(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/configmaps/:name
 * read the specified ConfigMap
 */
router.get('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Configmaps__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/configmaps/:name
 * replace the specified ConfigMap
 */
router.put('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Configmaps__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/configmaps/:name
 * delete a ConfigMap
 */
router.delete('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Configmaps__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/configmaps/:name
 * partially update the specified ConfigMap
 */
router.patch('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Configmaps__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /api/v1/watch/configmaps
* watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType configmap
*/
async function handlegetModel_Api_V1_Watch_Configmaps(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing configmaps in namespace ${namespace}`);

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
    logger.error(`Watch error for configmap:`, err);
    
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
      'configmap',
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
  'configmap',
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
* Handler for GET /api/v1/watch/namespaces/:namespace/configmaps
* watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType configmap
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Configmaps(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting configmap ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('configmap', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('configmap', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /api/v1/namespaces/:namespace/configmaps
* create a ConfigMap
* @resourceType configmap
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Configmaps(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating configmap ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/namespaces/:namespace/configmaps
* delete collection of ConfigMap
* @resourceType configmap
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Configmaps(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting configmap ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('configmap', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `configmap "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('configmap', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /api/v1/namespaces/:namespace/configmaps
* list or watch objects of kind ConfigMap
* @resourceType configmap
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Configmaps(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting configmap ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('configmap', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('configmap', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/watch/namespaces/:namespace/configmaps/:name
* watch changes to an object of kind ConfigMap. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType configmap
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Configmaps__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting configmap ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('configmap', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('configmap', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/configmaps
* list or watch objects of kind ConfigMap
* @resourceType configmap
*/
async function handlegetModel_Api_V1_Configmaps(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing configmaps in namespace ${namespace}`);

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
    logger.error(`Watch error for configmap:`, err);
    
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
      'configmap',
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
  'configmap',
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
* Handler for GET /api/v1/namespaces/:namespace/configmaps/:name
* read the specified ConfigMap
* @resourceType configmap
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Configmaps__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting configmap ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('configmap', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('configmap', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/configmaps/:name
* replace the specified ConfigMap
* @resourceType configmap
*/
async function handleputModel_Api_V1_Namespaces__namespace_Configmaps__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating configmap ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('configmap', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /api/v1/namespaces/:namespace/configmaps/:name
* delete a ConfigMap
* @resourceType configmap
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Configmaps__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting configmap ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('configmap', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `configmap "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('configmap', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/configmaps/:name
* partially update the specified ConfigMap
* @resourceType configmap
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Configmaps__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching configmap ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'configmap',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}


