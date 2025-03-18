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
* Create routes for ingress resources
* @resourceType ingress
*/
export function createingressRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
 * read the specified Ingress
 */
router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
 * replace the specified Ingress
 */
router.put('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
 * delete an Ingress
 */
router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
 * partially update the specified Ingress
 */
router.patch('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses
 * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Ingresses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name
 * watch changes to an object of kind Ingress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Ingresses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/watch/ingresses
 * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/networking.k8s.io/v1/watch/ingresses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Ingresses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
 * create an Ingress
 */
router.post('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
 * delete collection of Ingress
 */
router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
 * list or watch objects of kind Ingress
 */
router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/networking.k8s.io/v1/ingresses
 * list or watch objects of kind Ingress
 */
router.get('/apis/networking.k8s.io/v1/ingresses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Networking_K8s_Io_V1_Ingresses(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
* read the specified Ingress
* @resourceType ingress
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting ingress ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('ingress', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingress', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
* replace the specified Ingress
* @resourceType ingress
*/
async function handleputModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating ingress ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('ingress', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
* delete an Ingress
* @resourceType ingress
*/
async function handledeleteModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting ingress ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('ingress', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `ingress "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingress', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name
* partially update the specified Ingress
* @resourceType ingress
*/
async function handlepatchModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching ingress ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'ingress',
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
* Handler for GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses
* watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType ingress
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Ingresses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting ingress ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('ingress', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingress', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name
* watch changes to an object of kind Ingress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType ingress
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Namespaces__namespace_Ingresses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting ingress ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('ingress', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingress', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/networking.k8s.io/v1/watch/ingresses
* watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType ingress
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Watch_Ingresses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing ingresss in namespace ${namespace}`);

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
    logger.error(`Watch error for ingress:`, err);
    
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
      'ingress',
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
  'ingress',
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
* Handler for POST /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
* create an Ingress
* @resourceType ingress
*/
async function handlepostModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating ingress ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
* delete collection of Ingress
* @resourceType ingress
*/
async function handledeleteModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting ingress ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('ingress', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `ingress "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingress', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/networking.k8s.io/v1/namespaces/:namespace/ingresses
* list or watch objects of kind Ingress
* @resourceType ingress
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Namespaces__namespace_Ingresses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting ingress ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('ingress', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ingress', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/networking.k8s.io/v1/ingresses
* list or watch objects of kind Ingress
* @resourceType ingress
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_Ingresses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing ingresss in namespace ${namespace}`);

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
    logger.error(`Watch error for ingress:`, err);
    
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
      'ingress',
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
  'ingress',
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


