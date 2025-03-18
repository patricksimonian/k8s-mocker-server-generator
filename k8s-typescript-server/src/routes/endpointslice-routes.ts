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
* Create routes for endpointslice resources
* @resourceType endpointslice
*/
export function createendpointsliceRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
 * read the specified EndpointSlice
 */
router.get('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
 * replace the specified EndpointSlice
 */
router.put('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
 * delete an EndpointSlice
 */
router.delete('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
 * partially update the specified EndpointSlice
 */
router.patch('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
 * create an EndpointSlice
 */
router.post('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
 * delete collection of EndpointSlice
 */
router.delete('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
 * list or watch objects of kind EndpointSlice
 */
router.get('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/discovery.k8s.io/v1/watch/endpointslices
 * watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/discovery.k8s.io/v1/watch/endpointslices', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Discovery_K8s_Io_V1_Watch_Endpointslices(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name
 * watch changes to an object of kind EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Discovery_K8s_Io_V1_Watch_Namespaces__namespace_Endpointslices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/discovery.k8s.io/v1/endpointslices
 * list or watch objects of kind EndpointSlice
 */
router.get('/apis/discovery.k8s.io/v1/endpointslices', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Discovery_K8s_Io_V1_Endpointslices(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices
 * watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Discovery_K8s_Io_V1_Watch_Namespaces__namespace_Endpointslices(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
* read the specified EndpointSlice
* @resourceType endpointslice
*/
async function handlegetModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting endpointslice ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('endpointslice', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpointslice', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
* replace the specified EndpointSlice
* @resourceType endpointslice
*/
async function handleputModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating endpointslice ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('endpointslice', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
* delete an EndpointSlice
* @resourceType endpointslice
*/
async function handledeleteModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting endpointslice ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('endpointslice', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `endpointslice "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpointslice', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name
* partially update the specified EndpointSlice
* @resourceType endpointslice
*/
async function handlepatchModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching endpointslice ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'endpointslice',
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
* Handler for POST /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
* create an EndpointSlice
* @resourceType endpointslice
*/
async function handlepostModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating endpointslice ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
* delete collection of EndpointSlice
* @resourceType endpointslice
*/
async function handledeleteModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting endpointslice ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('endpointslice', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `endpointslice "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpointslice', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices
* list or watch objects of kind EndpointSlice
* @resourceType endpointslice
*/
async function handlegetModel_Apis_Discovery_K8s_Io_V1_Namespaces__namespace_Endpointslices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting endpointslice ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('endpointslice', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpointslice', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/discovery.k8s.io/v1/watch/endpointslices
* watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType endpointslice
*/
async function handlegetModel_Apis_Discovery_K8s_Io_V1_Watch_Endpointslices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing endpointslices in namespace ${namespace}`);

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
    logger.error(`Watch error for endpointslice:`, err);
    
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
      'endpointslice',
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
  'endpointslice',
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
* Handler for GET /apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name
* watch changes to an object of kind EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType endpointslice
*/
async function handlegetModel_Apis_Discovery_K8s_Io_V1_Watch_Namespaces__namespace_Endpointslices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting endpointslice ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('endpointslice', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpointslice', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/discovery.k8s.io/v1/endpointslices
* list or watch objects of kind EndpointSlice
* @resourceType endpointslice
*/
async function handlegetModel_Apis_Discovery_K8s_Io_V1_Endpointslices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing endpointslices in namespace ${namespace}`);

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
    logger.error(`Watch error for endpointslice:`, err);
    
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
      'endpointslice',
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
  'endpointslice',
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
* Handler for GET /apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices
* watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType endpointslice
*/
async function handlegetModel_Apis_Discovery_K8s_Io_V1_Watch_Namespaces__namespace_Endpointslices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting endpointslice ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('endpointslice', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('endpointslice', name, namespace));
    return;
  }
  throw error;
}


}


