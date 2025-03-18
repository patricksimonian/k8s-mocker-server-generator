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
* Create routes for controllerrevision resources
* @resourceType controllerrevision
*/
export function createcontrollerrevisionRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * PUT /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
 * replace the specified ControllerRevision
 */
router.put('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
 * delete a ControllerRevision
 */
router.delete('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
 * partially update the specified ControllerRevision
 */
router.patch('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
 * read the specified ControllerRevision
 */
router.get('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name
 * watch changes to an object of kind ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Controllerrevisions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/controllerrevisions
 * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apps/v1/watch/controllerrevisions', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Controllerrevisions(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/namespaces/:namespace/controllerrevisions
 * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Controllerrevisions(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/controllerrevisions
 * list or watch objects of kind ControllerRevision
 */
router.get('/apis/apps/v1/controllerrevisions', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Controllerrevisions(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/controllerrevisions
 * list or watch objects of kind ControllerRevision
 */
router.get('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/apps/v1/namespaces/:namespace/controllerrevisions
 * create a ControllerRevision
 */
router.post('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apps/v1/namespaces/:namespace/controllerrevisions
 * delete collection of ControllerRevision
 */
router.delete('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
* replace the specified ControllerRevision
* @resourceType controllerrevision
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating controllerrevision ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('controllerrevision', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
* delete a ControllerRevision
* @resourceType controllerrevision
*/
async function handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting controllerrevision ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('controllerrevision', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `controllerrevision "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('controllerrevision', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
* partially update the specified ControllerRevision
* @resourceType controllerrevision
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching controllerrevision ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'controllerrevision',
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
* Handler for GET /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
* read the specified ControllerRevision
* @resourceType controllerrevision
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting controllerrevision ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('controllerrevision', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('controllerrevision', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name
* watch changes to an object of kind ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType controllerrevision
*/
async function handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Controllerrevisions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting controllerrevision ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('controllerrevision', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('controllerrevision', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apps/v1/watch/controllerrevisions
* watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType controllerrevision
*/
async function handlegetModel_Apis_Apps_V1_Watch_Controllerrevisions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing controllerrevisions in namespace ${namespace}`);

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
    logger.error(`Watch error for controllerrevision:`, err);
    
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
      'controllerrevision',
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
  'controllerrevision',
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
* Handler for GET /apis/apps/v1/watch/namespaces/:namespace/controllerrevisions
* watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType controllerrevision
*/
async function handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Controllerrevisions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting controllerrevision ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('controllerrevision', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('controllerrevision', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apps/v1/controllerrevisions
* list or watch objects of kind ControllerRevision
* @resourceType controllerrevision
*/
async function handlegetModel_Apis_Apps_V1_Controllerrevisions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing controllerrevisions in namespace ${namespace}`);

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
    logger.error(`Watch error for controllerrevision:`, err);
    
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
      'controllerrevision',
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
  'controllerrevision',
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
* Handler for GET /apis/apps/v1/namespaces/:namespace/controllerrevisions
* list or watch objects of kind ControllerRevision
* @resourceType controllerrevision
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting controllerrevision ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('controllerrevision', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('controllerrevision', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/apps/v1/namespaces/:namespace/controllerrevisions
* create a ControllerRevision
* @resourceType controllerrevision
*/
async function handlepostModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating controllerrevision ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/apps/v1/namespaces/:namespace/controllerrevisions
* delete collection of ControllerRevision
* @resourceType controllerrevision
*/
async function handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting controllerrevision ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('controllerrevision', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `controllerrevision "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('controllerrevision', name, namespace));
    return;
  }
  throw error;
}

}


