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
* Create routes for priorityclass resources
* @resourceType priorityclass
*/
export function createpriorityclassRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/scheduling.k8s.io/v1/priorityclasses
 * list or watch objects of kind PriorityClass
 */
router.get('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/scheduling.k8s.io/v1/priorityclasses
 * create a PriorityClass
 */
router.post('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/scheduling.k8s.io/v1/priorityclasses
 * delete collection of PriorityClass
 */
router.delete('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/scheduling.k8s.io/v1/watch/priorityclasses/:name
 * watch changes to an object of kind PriorityClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/scheduling.k8s.io/v1/watch/priorityclasses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Scheduling_K8s_Io_V1_Watch_Priorityclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/scheduling.k8s.io/v1/watch/priorityclasses
 * watch individual changes to a list of PriorityClass. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/scheduling.k8s.io/v1/watch/priorityclasses', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Scheduling_K8s_Io_V1_Watch_Priorityclasses(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/scheduling.k8s.io/v1/priorityclasses/:name
 * read the specified PriorityClass
 */
router.get('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/scheduling.k8s.io/v1/priorityclasses/:name
 * replace the specified PriorityClass
 */
router.put('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/scheduling.k8s.io/v1/priorityclasses/:name
 * delete a PriorityClass
 */
router.delete('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/scheduling.k8s.io/v1/priorityclasses/:name
 * partially update the specified PriorityClass
 */
router.patch('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/scheduling.k8s.io/v1/priorityclasses
* list or watch objects of kind PriorityClass
* @resourceType priorityclass
*/
async function handlegetModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing priorityclasss in namespace ${namespace}`);

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
    logger.error(`Watch error for priorityclass:`, err);
    
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
      'priorityclass',
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
  'priorityclass',
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
* Handler for POST /apis/scheduling.k8s.io/v1/priorityclasses
* create a PriorityClass
* @resourceType priorityclass
*/
async function handlepostModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating priorityclass ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/scheduling.k8s.io/v1/priorityclasses
* delete collection of PriorityClass
* @resourceType priorityclass
*/
async function handledeleteModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting priorityclass ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('priorityclass', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `priorityclass "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('priorityclass', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/scheduling.k8s.io/v1/watch/priorityclasses/:name
* watch changes to an object of kind PriorityClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType priorityclass
*/
async function handlegetModel_Apis_Scheduling_K8s_Io_V1_Watch_Priorityclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting priorityclass ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('priorityclass', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('priorityclass', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/scheduling.k8s.io/v1/watch/priorityclasses
* watch individual changes to a list of PriorityClass. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType priorityclass
*/
async function handlegetModel_Apis_Scheduling_K8s_Io_V1_Watch_Priorityclasses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing priorityclasss in namespace ${namespace}`);

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
    logger.error(`Watch error for priorityclass:`, err);
    
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
      'priorityclass',
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
  'priorityclass',
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
* Handler for GET /apis/scheduling.k8s.io/v1/priorityclasses/:name
* read the specified PriorityClass
* @resourceType priorityclass
*/
async function handlegetModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting priorityclass ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('priorityclass', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('priorityclass', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/scheduling.k8s.io/v1/priorityclasses/:name
* replace the specified PriorityClass
* @resourceType priorityclass
*/
async function handleputModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating priorityclass ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('priorityclass', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/scheduling.k8s.io/v1/priorityclasses/:name
* delete a PriorityClass
* @resourceType priorityclass
*/
async function handledeleteModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting priorityclass ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('priorityclass', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `priorityclass "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('priorityclass', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/scheduling.k8s.io/v1/priorityclasses/:name
* partially update the specified PriorityClass
* @resourceType priorityclass
*/
async function handlepatchModel_Apis_Scheduling_K8s_Io_V1_Priorityclasses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching priorityclass ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'priorityclass',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}


