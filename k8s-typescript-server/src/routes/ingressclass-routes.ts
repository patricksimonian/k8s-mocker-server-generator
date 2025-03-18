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
* Create routes for ingressclass resources
* @resourceType ingressclass
*/
export function createingressclassRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/networking.k8s.io/v1/ingressclasses
 * list or watch objects of kind IngressClass
 */
router.get('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Ingressclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/networking.k8s.io/v1/ingressclasses
 * create an IngressClass
 */
router.post('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Networking_K8s_Io_V1_Ingressclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/networking.k8s.io/v1/ingressclasses
 * delete collection of IngressClass
 */
router.delete('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Networking_K8s_Io_V1_Ingressclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/watch/ingressclasses/:name
 * watch changes to an object of kind IngressClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/networking.k8s.io/v1/watch/ingressclasses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Ingressclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/networking.k8s.io/v1/ingressclasses/:name
 * delete an IngressClass
 */
router.delete('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Networking_K8s_Io_V1_Ingressclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/networking.k8s.io/v1/ingressclasses/:name
 * partially update the specified IngressClass
 */
router.patch('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Networking_K8s_Io_V1_Ingressclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/ingressclasses/:name
 * read the specified IngressClass
 */
router.get('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Ingressclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/networking.k8s.io/v1/ingressclasses/:name
 * replace the specified IngressClass
 */
router.put('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Networking_K8s_Io_V1_Ingressclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/watch/ingressclasses
 * watch individual changes to a list of IngressClass. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/networking.k8s.io/v1/watch/ingressclasses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Ingressclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/networking.k8s.io/v1/ingressclasses
* list or watch objects of kind IngressClass
* @resourceType ingressclass
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Ingressclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing ingressclasss in namespace ${namespace}`);

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
    logger.error(`Watch error for ingressclass:`, err);
    
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
      'ingressclass',
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
  'ingressclass',
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
* Handler for POST /apis/networking.k8s.io/v1/ingressclasses
* create an IngressClass
* @resourceType ingressclass
*/
async function handlepostModel_Apis_Networking_K8s_Io_V1_Ingressclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating ingressclass ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/networking.k8s.io/v1/ingressclasses
* delete collection of IngressClass
* @resourceType ingressclass
*/
async function handledeleteModel_Apis_Networking_K8s_Io_V1_Ingressclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting ingressclass ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('ingressclass', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `ingressclass "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingressclass', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/networking.k8s.io/v1/watch/ingressclasses/:name
* watch changes to an object of kind IngressClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType ingressclass
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Ingressclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting ingressclass ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('ingressclass', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingressclass', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for DELETE /apis/networking.k8s.io/v1/ingressclasses/:name
* delete an IngressClass
* @resourceType ingressclass
*/
async function handledeleteModel_Apis_Networking_K8s_Io_V1_Ingressclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting ingressclass ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('ingressclass', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `ingressclass "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingressclass', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/networking.k8s.io/v1/ingressclasses/:name
* partially update the specified IngressClass
* @resourceType ingressclass
*/
async function handlepatchModel_Apis_Networking_K8s_Io_V1_Ingressclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching ingressclass ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'ingressclass',
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
* Handler for GET /apis/networking.k8s.io/v1/ingressclasses/:name
* read the specified IngressClass
* @resourceType ingressclass
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Ingressclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting ingressclass ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('ingressclass', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingressclass', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/networking.k8s.io/v1/ingressclasses/:name
* replace the specified IngressClass
* @resourceType ingressclass
*/
async function handleputModel_Apis_Networking_K8s_Io_V1_Ingressclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating ingressclass ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('ingressclass', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/networking.k8s.io/v1/watch/ingressclasses
* watch individual changes to a list of IngressClass. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType ingressclass
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Ingressclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing ingressclasss in namespace ${namespace}`);

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
    logger.error(`Watch error for ingressclass:`, err);
    
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
      'ingressclass',
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
  'ingressclass',
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


