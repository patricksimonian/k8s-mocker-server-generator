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
* Create routes for flowschema resources
* @resourceType flowschema
*/
export function createflowschemaRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
 * replace the specified FlowSchema
 */
router.put('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
 * delete a FlowSchema
 */
router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
 * partially update the specified FlowSchema
 */
router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
 * read the specified FlowSchema
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
 * list or watch objects of kind FlowSchema
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
 * create a FlowSchema
 */
router.post('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
 * delete collection of FlowSchema
 */
router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas
 * watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Flowschemas(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name
 * watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Flowschemas__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for PUT /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
* replace the specified FlowSchema
* @resourceType flowschema
*/
async function handleputModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating flowschema ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('flowschema', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
* delete a FlowSchema
* @resourceType flowschema
*/
async function handledeleteModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting flowschema ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('flowschema', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `flowschema "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('flowschema', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
* partially update the specified FlowSchema
* @resourceType flowschema
*/
async function handlepatchModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching flowschema ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'flowschema',
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
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name
* read the specified FlowSchema
* @resourceType flowschema
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting flowschema ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('flowschema', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('flowschema', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
* list or watch objects of kind FlowSchema
* @resourceType flowschema
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing flowschemas in namespace ${namespace}`);

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
    logger.error(`Watch error for flowschema:`, err);
    
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
      'flowschema',
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
  'flowschema',
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
* Handler for POST /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
* create a FlowSchema
* @resourceType flowschema
*/
async function handlepostModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating flowschema ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/flowcontrol.apiserver.k8s.io/v1/flowschemas
* delete collection of FlowSchema
* @resourceType flowschema
*/
async function handledeleteModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Flowschemas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting flowschema ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('flowschema', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `flowschema "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('flowschema', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas
* watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType flowschema
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Flowschemas(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing flowschemas in namespace ${namespace}`);

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
    logger.error(`Watch error for flowschema:`, err);
    
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
      'flowschema',
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
  'flowschema',
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
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name
* watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType flowschema
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Flowschemas__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting flowschema ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('flowschema', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('flowschema', name, namespace));
    return;
  }
  throw error;
}


}


