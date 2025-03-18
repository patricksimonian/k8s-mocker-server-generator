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
* Create routes for lease resources
* @resourceType lease
*/
export function createleaseRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/coordination.k8s.io/v1/leases
 * list or watch objects of kind Lease
 */
router.get('/apis/coordination.k8s.io/v1/leases', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Coordination_K8s_Io_V1_Leases(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/coordination.k8s.io/v1/watch/leases
 * watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/coordination.k8s.io/v1/watch/leases', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Coordination_K8s_Io_V1_Watch_Leases(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name
 * watch changes to an object of kind Lease. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Coordination_K8s_Io_V1_Watch_Namespaces__namespace_Leases__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
 * list or watch objects of kind Lease
 */
router.get('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
 * create a Lease
 */
router.post('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
 * delete collection of Lease
 */
router.delete('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
 * read the specified Lease
 */
router.get('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
 * replace the specified Lease
 */
router.put('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
 * delete a Lease
 */
router.delete('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
 * partially update the specified Lease
 */
router.patch('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases
 * watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Coordination_K8s_Io_V1_Watch_Namespaces__namespace_Leases(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/coordination.k8s.io/v1/leases
* list or watch objects of kind Lease
* @resourceType lease
*/
async function handlegetModel_Apis_Coordination_K8s_Io_V1_Leases(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing leases in namespace ${namespace}`);

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
    logger.error(`Watch error for lease:`, err);
    
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
      'lease',
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
  'lease',
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
* Handler for GET /apis/coordination.k8s.io/v1/watch/leases
* watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType lease
*/
async function handlegetModel_Apis_Coordination_K8s_Io_V1_Watch_Leases(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing leases in namespace ${namespace}`);

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
    logger.error(`Watch error for lease:`, err);
    
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
      'lease',
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
  'lease',
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
* Handler for GET /apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name
* watch changes to an object of kind Lease. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType lease
*/
async function handlegetModel_Apis_Coordination_K8s_Io_V1_Watch_Namespaces__namespace_Leases__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting lease ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('lease', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('lease', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
* list or watch objects of kind Lease
* @resourceType lease
*/
async function handlegetModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting lease ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('lease', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('lease', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
* create a Lease
* @resourceType lease
*/
async function handlepostModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating lease ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/coordination.k8s.io/v1/namespaces/:namespace/leases
* delete collection of Lease
* @resourceType lease
*/
async function handledeleteModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting lease ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('lease', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `lease "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('lease', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
* read the specified Lease
* @resourceType lease
*/
async function handlegetModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting lease ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('lease', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('lease', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
* replace the specified Lease
* @resourceType lease
*/
async function handleputModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating lease ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('lease', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
* delete a Lease
* @resourceType lease
*/
async function handledeleteModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting lease ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('lease', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `lease "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('lease', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name
* partially update the specified Lease
* @resourceType lease
*/
async function handlepatchModel_Apis_Coordination_K8s_Io_V1_Namespaces__namespace_Leases__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching lease ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'lease',
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
* Handler for GET /apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases
* watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType lease
*/
async function handlegetModel_Apis_Coordination_K8s_Io_V1_Watch_Namespaces__namespace_Leases(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting lease ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('lease', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('lease', name, namespace));
    return;
  }
  throw error;
}


}


