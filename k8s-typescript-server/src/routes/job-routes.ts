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
* Create routes for job resources
* @resourceType job
*/
export function createjobRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/batch/v1/namespaces/:namespace/jobs
 * list or watch objects of kind Job
 */
router.get('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Namespaces__namespace_Jobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/batch/v1/namespaces/:namespace/jobs
 * create a Job
 */
router.post('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Batch_V1_Namespaces__namespace_Jobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/batch/v1/namespaces/:namespace/jobs
 * delete collection of Job
 */
router.delete('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Batch_V1_Namespaces__namespace_Jobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/watch/namespaces/:namespace/jobs/:name
 * watch changes to an object of kind Job. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/batch/v1/watch/namespaces/:namespace/jobs/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Watch_Namespaces__namespace_Jobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/namespaces/:namespace/jobs/:name
 * read the specified Job
 */
router.get('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/batch/v1/namespaces/:namespace/jobs/:name
 * replace the specified Job
 */
router.put('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/batch/v1/namespaces/:namespace/jobs/:name
 * delete a Job
 */
router.delete('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/batch/v1/namespaces/:namespace/jobs/:name
 * partially update the specified Job
 */
router.patch('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/watch/jobs
 * watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/batch/v1/watch/jobs', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Watch_Jobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/jobs
 * list or watch objects of kind Job
 */
router.get('/apis/batch/v1/jobs', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Jobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/watch/namespaces/:namespace/jobs
 * watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/batch/v1/watch/namespaces/:namespace/jobs', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Watch_Namespaces__namespace_Jobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/batch/v1/namespaces/:namespace/jobs
* list or watch objects of kind Job
* @resourceType job
*/
async function handlegetModel_Apis_Batch_V1_Namespaces__namespace_Jobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting job ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('job', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('job', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/batch/v1/namespaces/:namespace/jobs
* create a Job
* @resourceType job
*/
async function handlepostModel_Apis_Batch_V1_Namespaces__namespace_Jobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating job ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/batch/v1/namespaces/:namespace/jobs
* delete collection of Job
* @resourceType job
*/
async function handledeleteModel_Apis_Batch_V1_Namespaces__namespace_Jobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting job ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('job', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `job "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('job', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/batch/v1/watch/namespaces/:namespace/jobs/:name
* watch changes to an object of kind Job. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType job
*/
async function handlegetModel_Apis_Batch_V1_Watch_Namespaces__namespace_Jobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting job ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('job', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('job', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/batch/v1/namespaces/:namespace/jobs/:name
* read the specified Job
* @resourceType job
*/
async function handlegetModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting job ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('job', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('job', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/batch/v1/namespaces/:namespace/jobs/:name
* replace the specified Job
* @resourceType job
*/
async function handleputModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating job ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('job', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/batch/v1/namespaces/:namespace/jobs/:name
* delete a Job
* @resourceType job
*/
async function handledeleteModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting job ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('job', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `job "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('job', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/batch/v1/namespaces/:namespace/jobs/:name
* partially update the specified Job
* @resourceType job
*/
async function handlepatchModel_Apis_Batch_V1_Namespaces__namespace_Jobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching job ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'job',
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
* Handler for GET /apis/batch/v1/watch/jobs
* watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType job
*/
async function handlegetModel_Apis_Batch_V1_Watch_Jobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing jobs in namespace ${namespace}`);

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
    logger.error(`Watch error for job:`, err);
    
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
      'job',
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
  'job',
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
* Handler for GET /apis/batch/v1/jobs
* list or watch objects of kind Job
* @resourceType job
*/
async function handlegetModel_Apis_Batch_V1_Jobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing jobs in namespace ${namespace}`);

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
    logger.error(`Watch error for job:`, err);
    
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
      'job',
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
  'job',
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
* Handler for GET /apis/batch/v1/watch/namespaces/:namespace/jobs
* watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType job
*/
async function handlegetModel_Apis_Batch_V1_Watch_Namespaces__namespace_Jobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting job ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('job', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('job', name, namespace));
    return;
  }
  throw error;
}


}


