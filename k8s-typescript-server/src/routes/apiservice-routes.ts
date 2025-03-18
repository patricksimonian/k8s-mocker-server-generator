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
* Create routes for apiservice resources
* @resourceType apiservice
*/
export function createapiserviceRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/apiregistration.k8s.io/v1/watch/apiservices/:name
 * watch changes to an object of kind APIService. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/apiregistration.k8s.io/v1/watch/apiservices/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiregistration_K8s_Io_V1_Watch_Apiservices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apiregistration.k8s.io/v1/watch/apiservices
 * watch individual changes to a list of APIService. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apiregistration.k8s.io/v1/watch/apiservices', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiregistration_K8s_Io_V1_Watch_Apiservices(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apiregistration.k8s.io/v1/apiservices/:name
 * replace the specified APIService
 */
router.put('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apiregistration.k8s.io/v1/apiservices/:name
 * delete an APIService
 */
router.delete('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apiregistration.k8s.io/v1/apiservices/:name
 * partially update the specified APIService
 */
router.patch('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apiregistration.k8s.io/v1/apiservices/:name
 * read the specified APIService
 */
router.get('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/apiregistration.k8s.io/v1/apiservices
 * create an APIService
 */
router.post('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Apiregistration_K8s_Io_V1_Apiservices(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apiregistration.k8s.io/v1/apiservices
 * delete collection of APIService
 */
router.delete('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apiregistration_K8s_Io_V1_Apiservices(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apiregistration.k8s.io/v1/apiservices
 * list or watch objects of kind APIService
 */
router.get('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiregistration_K8s_Io_V1_Apiservices(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/apiregistration.k8s.io/v1/watch/apiservices/:name
* watch changes to an object of kind APIService. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType apiservice
*/
async function handlegetModel_Apis_Apiregistration_K8s_Io_V1_Watch_Apiservices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting apiservice ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('apiservice', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('apiservice', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apiregistration.k8s.io/v1/watch/apiservices
* watch individual changes to a list of APIService. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType apiservice
*/
async function handlegetModel_Apis_Apiregistration_K8s_Io_V1_Watch_Apiservices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing apiservices in namespace ${namespace}`);

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
    logger.error(`Watch error for apiservice:`, err);
    
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
      'apiservice',
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
  'apiservice',
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
* Handler for PUT /apis/apiregistration.k8s.io/v1/apiservices/:name
* replace the specified APIService
* @resourceType apiservice
*/
async function handleputModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating apiservice ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('apiservice', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/apiregistration.k8s.io/v1/apiservices/:name
* delete an APIService
* @resourceType apiservice
*/
async function handledeleteModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting apiservice ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('apiservice', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `apiservice "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('apiservice', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/apiregistration.k8s.io/v1/apiservices/:name
* partially update the specified APIService
* @resourceType apiservice
*/
async function handlepatchModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching apiservice ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'apiservice',
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
* Handler for GET /apis/apiregistration.k8s.io/v1/apiservices/:name
* read the specified APIService
* @resourceType apiservice
*/
async function handlegetModel_Apis_Apiregistration_K8s_Io_V1_Apiservices__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting apiservice ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('apiservice', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('apiservice', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/apiregistration.k8s.io/v1/apiservices
* create an APIService
* @resourceType apiservice
*/
async function handlepostModel_Apis_Apiregistration_K8s_Io_V1_Apiservices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating apiservice ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/apiregistration.k8s.io/v1/apiservices
* delete collection of APIService
* @resourceType apiservice
*/
async function handledeleteModel_Apis_Apiregistration_K8s_Io_V1_Apiservices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting apiservice ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('apiservice', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `apiservice "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('apiservice', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/apiregistration.k8s.io/v1/apiservices
* list or watch objects of kind APIService
* @resourceType apiservice
*/
async function handlegetModel_Apis_Apiregistration_K8s_Io_V1_Apiservices(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing apiservices in namespace ${namespace}`);

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
    logger.error(`Watch error for apiservice:`, err);
    
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
      'apiservice',
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
  'apiservice',
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


