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
* Create routes for deployment resources
* @resourceType deployment
*/
export function createdeploymentRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * DELETE /apis/apps/v1/namespaces/:namespace/deployments
 * delete collection of Deployment
 */
router.delete('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Deployments(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/deployments
 * list or watch objects of kind Deployment
 */
router.get('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Deployments(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/apps/v1/namespaces/:namespace/deployments
 * create a Deployment
 */
router.post('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Apps_V1_Namespaces__namespace_Deployments(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/deployments
 * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apps/v1/watch/deployments', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Deployments(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/deployments/:name
 * read the specified Deployment
 */
router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/deployments/:name
 * replace the specified Deployment
 */
router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apps/v1/namespaces/:namespace/deployments/:name
 * delete a Deployment
 */
router.delete('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name
 * partially update the specified Deployment
 */
router.patch('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/deployments
 * list or watch objects of kind Deployment
 */
router.get('/apis/apps/v1/deployments', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Deployments(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/namespaces/:namespace/deployments
 * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apps/v1/watch/namespaces/:namespace/deployments', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Deployments(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/watch/namespaces/:namespace/deployments/:name
 * watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/apps/v1/watch/namespaces/:namespace/deployments/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Deployments__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for DELETE /apis/apps/v1/namespaces/:namespace/deployments
* delete collection of Deployment
* @resourceType deployment
*/
async function handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Deployments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting deployment ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('deployment', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `deployment "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('deployment', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/apps/v1/namespaces/:namespace/deployments
* list or watch objects of kind Deployment
* @resourceType deployment
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Deployments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting deployment ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('deployment', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('deployment', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/apps/v1/namespaces/:namespace/deployments
* create a Deployment
* @resourceType deployment
*/
async function handlepostModel_Apis_Apps_V1_Namespaces__namespace_Deployments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating deployment ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for GET /apis/apps/v1/watch/deployments
* watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType deployment
*/
async function handlegetModel_Apis_Apps_V1_Watch_Deployments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing deployments in namespace ${namespace}`);

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
    logger.error(`Watch error for deployment:`, err);
    
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
      'deployment',
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
  'deployment',
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
* Handler for GET /apis/apps/v1/namespaces/:namespace/deployments/:name
* read the specified Deployment
* @resourceType deployment
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting deployment ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('deployment', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('deployment', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/deployments/:name
* replace the specified Deployment
* @resourceType deployment
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating deployment ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('deployment', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/apps/v1/namespaces/:namespace/deployments/:name
* delete a Deployment
* @resourceType deployment
*/
async function handledeleteModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting deployment ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('deployment', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `deployment "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('deployment', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name
* partially update the specified Deployment
* @resourceType deployment
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching deployment ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'deployment',
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
* Handler for GET /apis/apps/v1/deployments
* list or watch objects of kind Deployment
* @resourceType deployment
*/
async function handlegetModel_Apis_Apps_V1_Deployments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing deployments in namespace ${namespace}`);

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
    logger.error(`Watch error for deployment:`, err);
    
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
      'deployment',
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
  'deployment',
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
* Handler for GET /apis/apps/v1/watch/namespaces/:namespace/deployments
* watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType deployment
*/
async function handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Deployments(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting deployment ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('deployment', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('deployment', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apps/v1/watch/namespaces/:namespace/deployments/:name
* watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType deployment
*/
async function handlegetModel_Apis_Apps_V1_Watch_Namespaces__namespace_Deployments__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting deployment ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('deployment', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('deployment', name, namespace));
    return;
  }
  throw error;
}


}


