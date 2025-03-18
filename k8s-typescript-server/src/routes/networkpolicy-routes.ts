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
* Create routes for networkpolicy resources
* @resourceType networkpolicy
*/
export function createnetworkpolicyRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/networking.k8s.io/v1/watch/networkpolicies
 * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/networking.k8s.io/v1/watch/networkpolicies', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Networkpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
 * list or watch objects of kind NetworkPolicy
 */
router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
 * create a NetworkPolicy
 */
router.post('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
 * delete collection of NetworkPolicy
 */
router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/networkpolicies
 * list or watch objects of kind NetworkPolicy
 */
router.get('/apis/networking.k8s.io/v1/networkpolicies', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Networkpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name
 * watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Networkpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies
 * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Networkpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
 * delete a NetworkPolicy
 */
router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
 * partially update the specified NetworkPolicy
 */
router.patch('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
 * read the specified NetworkPolicy
 */
router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
 * replace the specified NetworkPolicy
 */
router.put('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/networking.k8s.io/v1/watch/networkpolicies
* watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType networkpolicy
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Networkpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing networkpolicys in namespace ${namespace}`);

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
    logger.error(`Watch error for networkpolicy:`, err);
    
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
      'networkpolicy',
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
  'networkpolicy',
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
* Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
* list or watch objects of kind NetworkPolicy
* @resourceType networkpolicy
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting networkpolicy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('networkpolicy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('networkpolicy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
* create a NetworkPolicy
* @resourceType networkpolicy
*/
async function handlepostModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating networkpolicy ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies
* delete collection of NetworkPolicy
* @resourceType networkpolicy
*/
async function handledeleteModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting networkpolicy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('networkpolicy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `networkpolicy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('networkpolicy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/networking.k8s.io/v1/networkpolicies
* list or watch objects of kind NetworkPolicy
* @resourceType networkpolicy
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Networkpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing networkpolicys in namespace ${namespace}`);

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
    logger.error(`Watch error for networkpolicy:`, err);
    
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
      'networkpolicy',
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
  'networkpolicy',
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
* Handler for GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name
* watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType networkpolicy
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Networkpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting networkpolicy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('networkpolicy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('networkpolicy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies
* watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType networkpolicy
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Networkpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting networkpolicy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('networkpolicy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('networkpolicy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
* delete a NetworkPolicy
* @resourceType networkpolicy
*/
async function handledeleteModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting networkpolicy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('networkpolicy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `networkpolicy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('networkpolicy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
* partially update the specified NetworkPolicy
* @resourceType networkpolicy
*/
async function handlepatchModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching networkpolicy ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'networkpolicy',
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
* Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
* read the specified NetworkPolicy
* @resourceType networkpolicy
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting networkpolicy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('networkpolicy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('networkpolicy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name
* replace the specified NetworkPolicy
* @resourceType networkpolicy
*/
async function handleputModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Networkpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating networkpolicy ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('networkpolicy', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}


