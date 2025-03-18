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
* Create routes for horizontalpodautoscaler resources
* @resourceType horizontalpodautoscaler
*/
export function createhorizontalpodautoscalerRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name
 * watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V1_Watch_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V2_Watch_Namespaces__namespace_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v1/watch/horizontalpodautoscalers
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/autoscaling/v1/watch/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V1_Watch_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v2/horizontalpodautoscalers
 * list or watch objects of kind HorizontalPodAutoscaler
 */
router.get('/apis/autoscaling/v2/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V2_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v2/watch/horizontalpodautoscalers
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/autoscaling/v2/watch/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V2_Watch_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
 * read the specified HorizontalPodAutoscaler
 */
router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
 * replace the specified HorizontalPodAutoscaler
 */
router.put('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
 * delete a HorizontalPodAutoscaler
 */
router.delete('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
 * partially update the specified HorizontalPodAutoscaler
 */
router.patch('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
 * list or watch objects of kind HorizontalPodAutoscaler
 */
router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
 * create a HorizontalPodAutoscaler
 */
router.post('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
 * delete collection of HorizontalPodAutoscaler
 */
router.delete('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V1_Watch_Namespaces__namespace_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
 * list or watch objects of kind HorizontalPodAutoscaler
 */
router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
 * create a HorizontalPodAutoscaler
 */
router.post('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
 * delete collection of HorizontalPodAutoscaler
 */
router.delete('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v1/horizontalpodautoscalers
 * list or watch objects of kind HorizontalPodAutoscaler
 */
router.get('/apis/autoscaling/v1/horizontalpodautoscalers', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V1_Horizontalpodautoscalers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name
 * watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V2_Watch_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
 * partially update the specified HorizontalPodAutoscaler
 */
router.patch('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
 * read the specified HorizontalPodAutoscaler
 */
router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
 * replace the specified HorizontalPodAutoscaler
 */
router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
 * delete a HorizontalPodAutoscaler
 */
router.delete('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name
* watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V1_Watch_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('horizontalpodautoscaler', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers
* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V2_Watch_Namespaces__namespace_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('horizontalpodautoscaler', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/autoscaling/v1/watch/horizontalpodautoscalers
* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V1_Watch_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing horizontalpodautoscalers in namespace ${namespace}`);

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
    logger.error(`Watch error for horizontalpodautoscaler:`, err);
    
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
      'horizontalpodautoscaler',
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
  'horizontalpodautoscaler',
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
* Handler for GET /apis/autoscaling/v2/horizontalpodautoscalers
* list or watch objects of kind HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V2_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing horizontalpodautoscalers in namespace ${namespace}`);

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
    logger.error(`Watch error for horizontalpodautoscaler:`, err);
    
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
      'horizontalpodautoscaler',
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
  'horizontalpodautoscaler',
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
* Handler for GET /apis/autoscaling/v2/watch/horizontalpodautoscalers
* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V2_Watch_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing horizontalpodautoscalers in namespace ${namespace}`);

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
    logger.error(`Watch error for horizontalpodautoscaler:`, err);
    
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
      'horizontalpodautoscaler',
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
  'horizontalpodautoscaler',
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
* Handler for GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
* read the specified HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('horizontalpodautoscaler', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
* replace the specified HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handleputModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('horizontalpodautoscaler', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
* delete a HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handledeleteModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('horizontalpodautoscaler', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `horizontalpodautoscaler "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name
* partially update the specified HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlepatchModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'horizontalpodautoscaler',
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
* Handler for GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
* list or watch objects of kind HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('horizontalpodautoscaler', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
* create a HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlepostModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating horizontalpodautoscaler ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers
* delete collection of HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handledeleteModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('horizontalpodautoscaler', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `horizontalpodautoscaler "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers
* watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V1_Watch_Namespaces__namespace_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('horizontalpodautoscaler', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
* list or watch objects of kind HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('horizontalpodautoscaler', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
* create a HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlepostModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating horizontalpodautoscaler ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers
* delete collection of HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handledeleteModel_Apis_Autoscaling_V2_Namespaces__namespace_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('horizontalpodautoscaler', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `horizontalpodautoscaler "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/autoscaling/v1/horizontalpodautoscalers
* list or watch objects of kind HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V1_Horizontalpodautoscalers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing horizontalpodautoscalers in namespace ${namespace}`);

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
    logger.error(`Watch error for horizontalpodautoscaler:`, err);
    
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
      'horizontalpodautoscaler',
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
  'horizontalpodautoscaler',
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
* Handler for GET /apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name
* watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V2_Watch_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('horizontalpodautoscaler', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PATCH /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
* partially update the specified HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlepatchModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'horizontalpodautoscaler',
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
* Handler for GET /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
* read the specified HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handlegetModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('horizontalpodautoscaler', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
* replace the specified HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handleputModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('horizontalpodautoscaler', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name
* delete a HorizontalPodAutoscaler
* @resourceType horizontalpodautoscaler
*/
async function handledeleteModel_Apis_Autoscaling_V1_Namespaces__namespace_Horizontalpodautoscalers__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('horizontalpodautoscaler', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `horizontalpodautoscaler "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('horizontalpodautoscaler', name, namespace));
    return;
  }
  throw error;
}

}


