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
* Create routes for limitrange resources
* @resourceType limitrange
*/
export function createlimitrangeRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /api/v1/watch/namespaces/:namespace/limitranges
 * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/namespaces/:namespace/limitranges', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Limitranges(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/limitranges
 * list or watch objects of kind LimitRange
 */
router.get('/api/v1/limitranges', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Limitranges(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/limitranges/:name
 * replace the specified LimitRange
 */
router.put('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Limitranges__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/limitranges/:name
 * delete a LimitRange
 */
router.delete('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Limitranges__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/limitranges/:name
 * partially update the specified LimitRange
 */
router.patch('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Limitranges__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/limitranges/:name
 * read the specified LimitRange
 */
router.get('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Limitranges__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/limitranges
 * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/api/v1/watch/limitranges', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Limitranges(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/limitranges
 * list or watch objects of kind LimitRange
 */
router.get('/api/v1/namespaces/:namespace/limitranges', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Limitranges(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/limitranges
 * create a LimitRange
 */
router.post('/api/v1/namespaces/:namespace/limitranges', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Limitranges(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/limitranges
 * delete collection of LimitRange
 */
router.delete('/api/v1/namespaces/:namespace/limitranges', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Limitranges(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/watch/namespaces/:namespace/limitranges/:name
 * watch changes to an object of kind LimitRange. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/api/v1/watch/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Watch_Namespaces__namespace_Limitranges__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /api/v1/watch/namespaces/:namespace/limitranges
* watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType limitrange
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Limitranges(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting limitrange ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('limitrange', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('limitrange', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/limitranges
* list or watch objects of kind LimitRange
* @resourceType limitrange
*/
async function handlegetModel_Api_V1_Limitranges(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing limitranges in namespace ${namespace}`);

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
    logger.error(`Watch error for limitrange:`, err);
    
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
      'limitrange',
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
  'limitrange',
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
* Handler for PUT /api/v1/namespaces/:namespace/limitranges/:name
* replace the specified LimitRange
* @resourceType limitrange
*/
async function handleputModel_Api_V1_Namespaces__namespace_Limitranges__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating limitrange ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('limitrange', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /api/v1/namespaces/:namespace/limitranges/:name
* delete a LimitRange
* @resourceType limitrange
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Limitranges__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting limitrange ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('limitrange', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `limitrange "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('limitrange', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/limitranges/:name
* partially update the specified LimitRange
* @resourceType limitrange
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Limitranges__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching limitrange ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'limitrange',
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
* Handler for GET /api/v1/namespaces/:namespace/limitranges/:name
* read the specified LimitRange
* @resourceType limitrange
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Limitranges__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting limitrange ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('limitrange', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('limitrange', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/watch/limitranges
* watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType limitrange
*/
async function handlegetModel_Api_V1_Watch_Limitranges(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing limitranges in namespace ${namespace}`);

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
    logger.error(`Watch error for limitrange:`, err);
    
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
      'limitrange',
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
  'limitrange',
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
* Handler for GET /api/v1/namespaces/:namespace/limitranges
* list or watch objects of kind LimitRange
* @resourceType limitrange
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Limitranges(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting limitrange ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('limitrange', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('limitrange', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /api/v1/namespaces/:namespace/limitranges
* create a LimitRange
* @resourceType limitrange
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Limitranges(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating limitrange ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/namespaces/:namespace/limitranges
* delete collection of LimitRange
* @resourceType limitrange
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Limitranges(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting limitrange ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('limitrange', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `limitrange "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('limitrange', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /api/v1/watch/namespaces/:namespace/limitranges/:name
* watch changes to an object of kind LimitRange. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType limitrange
*/
async function handlegetModel_Api_V1_Watch_Namespaces__namespace_Limitranges__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting limitrange ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('limitrange', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('limitrange', name, namespace));
    return;
  }
  throw error;
}


}


