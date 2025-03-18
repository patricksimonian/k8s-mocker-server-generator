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
* Create routes for prioritylevelconfiguration resources
* @resourceType prioritylevelconfiguration
*/
export function createprioritylevelconfigurationRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations
 * watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Prioritylevelconfigurations(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
 * list or watch objects of kind PriorityLevelConfiguration
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
 * create a PriorityLevelConfiguration
 */
router.post('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
 * delete collection of PriorityLevelConfiguration
 */
router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
 * read the specified PriorityLevelConfiguration
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
 * replace the specified PriorityLevelConfiguration
 */
router.put('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
 * delete a PriorityLevelConfiguration
 */
router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
 * partially update the specified PriorityLevelConfiguration
 */
router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name
 * watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Prioritylevelconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations
* watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType prioritylevelconfiguration
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Prioritylevelconfigurations(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing prioritylevelconfigurations in namespace ${namespace}`);

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
    logger.error(`Watch error for prioritylevelconfiguration:`, err);
    
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
      'prioritylevelconfiguration',
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
  'prioritylevelconfiguration',
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
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
* list or watch objects of kind PriorityLevelConfiguration
* @resourceType prioritylevelconfiguration
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing prioritylevelconfigurations in namespace ${namespace}`);

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
    logger.error(`Watch error for prioritylevelconfiguration:`, err);
    
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
      'prioritylevelconfiguration',
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
  'prioritylevelconfiguration',
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
* Handler for POST /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
* create a PriorityLevelConfiguration
* @resourceType prioritylevelconfiguration
*/
async function handlepostModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating prioritylevelconfiguration ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations
* delete collection of PriorityLevelConfiguration
* @resourceType prioritylevelconfiguration
*/
async function handledeleteModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting prioritylevelconfiguration ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('prioritylevelconfiguration', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `prioritylevelconfiguration "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('prioritylevelconfiguration', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
* read the specified PriorityLevelConfiguration
* @resourceType prioritylevelconfiguration
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting prioritylevelconfiguration ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('prioritylevelconfiguration', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('prioritylevelconfiguration', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
* replace the specified PriorityLevelConfiguration
* @resourceType prioritylevelconfiguration
*/
async function handleputModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating prioritylevelconfiguration ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('prioritylevelconfiguration', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
* delete a PriorityLevelConfiguration
* @resourceType prioritylevelconfiguration
*/
async function handledeleteModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting prioritylevelconfiguration ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('prioritylevelconfiguration', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `prioritylevelconfiguration "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('prioritylevelconfiguration', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name
* partially update the specified PriorityLevelConfiguration
* @resourceType prioritylevelconfiguration
*/
async function handlepatchModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Prioritylevelconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching prioritylevelconfiguration ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'prioritylevelconfiguration',
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
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name
* watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType prioritylevelconfiguration
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_Watch_Prioritylevelconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting prioritylevelconfiguration ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('prioritylevelconfiguration', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('prioritylevelconfiguration', name, namespace));
    return;
  }
  throw error;
}


}


