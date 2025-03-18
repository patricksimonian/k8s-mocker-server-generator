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
* Create routes for customresourcedefinition resources
* @resourceType customresourcedefinition
*/
export function createcustomresourcedefinitionRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name
 * watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiextensions_K8s_Io_V1_Watch_Customresourcedefinitions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions
 * watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiextensions_K8s_Io_V1_Watch_Customresourcedefinitions(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
 * read the specified CustomResourceDefinition
 */
router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
 * replace the specified CustomResourceDefinition
 */
router.put('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
 * delete a CustomResourceDefinition
 */
router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
 * partially update the specified CustomResourceDefinition
 */
router.patch('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions
 * list or watch objects of kind CustomResourceDefinition
 */
router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/apiextensions.k8s.io/v1/customresourcedefinitions
 * create a CustomResourceDefinition
 */
router.post('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions
 * delete collection of CustomResourceDefinition
 */
router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name
* watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType customresourcedefinition
*/
async function handlegetModel_Apis_Apiextensions_K8s_Io_V1_Watch_Customresourcedefinitions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting customresourcedefinition ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('customresourcedefinition', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('customresourcedefinition', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions
* watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType customresourcedefinition
*/
async function handlegetModel_Apis_Apiextensions_K8s_Io_V1_Watch_Customresourcedefinitions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing customresourcedefinitions in namespace ${namespace}`);

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
    logger.error(`Watch error for customresourcedefinition:`, err);
    
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
      'customresourcedefinition',
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
  'customresourcedefinition',
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
* Handler for GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
* read the specified CustomResourceDefinition
* @resourceType customresourcedefinition
*/
async function handlegetModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting customresourcedefinition ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('customresourcedefinition', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('customresourcedefinition', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
* replace the specified CustomResourceDefinition
* @resourceType customresourcedefinition
*/
async function handleputModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating customresourcedefinition ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('customresourcedefinition', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
* delete a CustomResourceDefinition
* @resourceType customresourcedefinition
*/
async function handledeleteModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting customresourcedefinition ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('customresourcedefinition', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `customresourcedefinition "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('customresourcedefinition', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name
* partially update the specified CustomResourceDefinition
* @resourceType customresourcedefinition
*/
async function handlepatchModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching customresourcedefinition ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'customresourcedefinition',
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
* Handler for GET /apis/apiextensions.k8s.io/v1/customresourcedefinitions
* list or watch objects of kind CustomResourceDefinition
* @resourceType customresourcedefinition
*/
async function handlegetModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing customresourcedefinitions in namespace ${namespace}`);

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
    logger.error(`Watch error for customresourcedefinition:`, err);
    
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
      'customresourcedefinition',
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
  'customresourcedefinition',
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
* Handler for POST /apis/apiextensions.k8s.io/v1/customresourcedefinitions
* create a CustomResourceDefinition
* @resourceType customresourcedefinition
*/
async function handlepostModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating customresourcedefinition ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/apiextensions.k8s.io/v1/customresourcedefinitions
* delete collection of CustomResourceDefinition
* @resourceType customresourcedefinition
*/
async function handledeleteModel_Apis_Apiextensions_K8s_Io_V1_Customresourcedefinitions(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting customresourcedefinition ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('customresourcedefinition', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `customresourcedefinition "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('customresourcedefinition', name, namespace));
    return;
  }
  throw error;
}

}


