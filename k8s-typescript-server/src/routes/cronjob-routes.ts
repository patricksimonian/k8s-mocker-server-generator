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
* Create routes for cronjob resources
* @resourceType cronjob
*/
export function createcronjobRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name
 * watch changes to an object of kind CronJob. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Watch_Namespaces__namespace_Cronjobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/batch/v1/namespaces/:namespace/cronjobs
 * create a CronJob
 */
router.post('/apis/batch/v1/namespaces/:namespace/cronjobs', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/batch/v1/namespaces/:namespace/cronjobs
 * delete collection of CronJob
 */
router.delete('/apis/batch/v1/namespaces/:namespace/cronjobs', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/namespaces/:namespace/cronjobs
 * list or watch objects of kind CronJob
 */
router.get('/apis/batch/v1/namespaces/:namespace/cronjobs', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/cronjobs
 * list or watch objects of kind CronJob
 */
router.get('/apis/batch/v1/cronjobs', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Cronjobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/namespaces/:namespace/cronjobs/:name
 * read the specified CronJob
 */
router.get('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/batch/v1/namespaces/:namespace/cronjobs/:name
 * replace the specified CronJob
 */
router.put('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/batch/v1/namespaces/:namespace/cronjobs/:name
 * delete a CronJob
 */
router.delete('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/batch/v1/namespaces/:namespace/cronjobs/:name
 * partially update the specified CronJob
 */
router.patch('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/watch/namespaces/:namespace/cronjobs
 * watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/batch/v1/watch/namespaces/:namespace/cronjobs', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Watch_Namespaces__namespace_Cronjobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/batch/v1/watch/cronjobs
 * watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/batch/v1/watch/cronjobs', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Batch_V1_Watch_Cronjobs(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name
* watch changes to an object of kind CronJob. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType cronjob
*/
async function handlegetModel_Apis_Batch_V1_Watch_Namespaces__namespace_Cronjobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting cronjob ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('cronjob', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('cronjob', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/batch/v1/namespaces/:namespace/cronjobs
* create a CronJob
* @resourceType cronjob
*/
async function handlepostModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating cronjob ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/batch/v1/namespaces/:namespace/cronjobs
* delete collection of CronJob
* @resourceType cronjob
*/
async function handledeleteModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting cronjob ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('cronjob', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `cronjob "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('cronjob', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/batch/v1/namespaces/:namespace/cronjobs
* list or watch objects of kind CronJob
* @resourceType cronjob
*/
async function handlegetModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting cronjob ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('cronjob', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('cronjob', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/batch/v1/cronjobs
* list or watch objects of kind CronJob
* @resourceType cronjob
*/
async function handlegetModel_Apis_Batch_V1_Cronjobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing cronjobs in namespace ${namespace}`);

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
    logger.error(`Watch error for cronjob:`, err);
    
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
      'cronjob',
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
  'cronjob',
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
* Handler for GET /apis/batch/v1/namespaces/:namespace/cronjobs/:name
* read the specified CronJob
* @resourceType cronjob
*/
async function handlegetModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting cronjob ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('cronjob', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('cronjob', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/batch/v1/namespaces/:namespace/cronjobs/:name
* replace the specified CronJob
* @resourceType cronjob
*/
async function handleputModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating cronjob ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('cronjob', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/batch/v1/namespaces/:namespace/cronjobs/:name
* delete a CronJob
* @resourceType cronjob
*/
async function handledeleteModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting cronjob ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('cronjob', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `cronjob "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('cronjob', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/batch/v1/namespaces/:namespace/cronjobs/:name
* partially update the specified CronJob
* @resourceType cronjob
*/
async function handlepatchModel_Apis_Batch_V1_Namespaces__namespace_Cronjobs__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching cronjob ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'cronjob',
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
* Handler for GET /apis/batch/v1/watch/namespaces/:namespace/cronjobs
* watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType cronjob
*/
async function handlegetModel_Apis_Batch_V1_Watch_Namespaces__namespace_Cronjobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting cronjob ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('cronjob', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('cronjob', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/batch/v1/watch/cronjobs
* watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType cronjob
*/
async function handlegetModel_Apis_Batch_V1_Watch_Cronjobs(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing cronjobs in namespace ${namespace}`);

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
    logger.error(`Watch error for cronjob:`, err);
    
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
      'cronjob',
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
  'cronjob',
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


