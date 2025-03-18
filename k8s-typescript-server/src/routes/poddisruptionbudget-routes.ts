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
* Create routes for poddisruptionbudget resources
* @resourceType poddisruptionbudget
*/
export function createpoddisruptionbudgetRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/policy/v1/watch/poddisruptionbudgets
 * watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/policy/v1/watch/poddisruptionbudgets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Policy_V1_Watch_Poddisruptionbudgets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name
 * watch changes to an object of kind PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Policy_V1_Watch_Namespaces__namespace_Poddisruptionbudgets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets
 * watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Policy_V1_Watch_Namespaces__namespace_Poddisruptionbudgets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
 * list or watch objects of kind PodDisruptionBudget
 */
router.get('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
 * create a PodDisruptionBudget
 */
router.post('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
 * delete collection of PodDisruptionBudget
 */
router.delete('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/policy/v1/poddisruptionbudgets
 * list or watch objects of kind PodDisruptionBudget
 */
router.get('/apis/policy/v1/poddisruptionbudgets', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Policy_V1_Poddisruptionbudgets(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
 * read the specified PodDisruptionBudget
 */
router.get('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
 * replace the specified PodDisruptionBudget
 */
router.put('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
 * delete a PodDisruptionBudget
 */
router.delete('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
 * partially update the specified PodDisruptionBudget
 */
router.patch('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/policy/v1/watch/poddisruptionbudgets
* watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType poddisruptionbudget
*/
async function handlegetModel_Apis_Policy_V1_Watch_Poddisruptionbudgets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing poddisruptionbudgets in namespace ${namespace}`);

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
    logger.error(`Watch error for poddisruptionbudget:`, err);
    
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
      'poddisruptionbudget',
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
  'poddisruptionbudget',
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
* Handler for GET /apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name
* watch changes to an object of kind PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType poddisruptionbudget
*/
async function handlegetModel_Apis_Policy_V1_Watch_Namespaces__namespace_Poddisruptionbudgets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting poddisruptionbudget ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('poddisruptionbudget', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('poddisruptionbudget', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets
* watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType poddisruptionbudget
*/
async function handlegetModel_Apis_Policy_V1_Watch_Namespaces__namespace_Poddisruptionbudgets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting poddisruptionbudget ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('poddisruptionbudget', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('poddisruptionbudget', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
* list or watch objects of kind PodDisruptionBudget
* @resourceType poddisruptionbudget
*/
async function handlegetModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting poddisruptionbudget ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('poddisruptionbudget', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('poddisruptionbudget', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
* create a PodDisruptionBudget
* @resourceType poddisruptionbudget
*/
async function handlepostModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating poddisruptionbudget ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets
* delete collection of PodDisruptionBudget
* @resourceType poddisruptionbudget
*/
async function handledeleteModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting poddisruptionbudget ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('poddisruptionbudget', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `poddisruptionbudget "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('poddisruptionbudget', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/policy/v1/poddisruptionbudgets
* list or watch objects of kind PodDisruptionBudget
* @resourceType poddisruptionbudget
*/
async function handlegetModel_Apis_Policy_V1_Poddisruptionbudgets(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing poddisruptionbudgets in namespace ${namespace}`);

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
    logger.error(`Watch error for poddisruptionbudget:`, err);
    
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
      'poddisruptionbudget',
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
  'poddisruptionbudget',
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
* Handler for GET /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
* read the specified PodDisruptionBudget
* @resourceType poddisruptionbudget
*/
async function handlegetModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting poddisruptionbudget ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('poddisruptionbudget', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('poddisruptionbudget', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
* replace the specified PodDisruptionBudget
* @resourceType poddisruptionbudget
*/
async function handleputModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating poddisruptionbudget ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('poddisruptionbudget', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
* delete a PodDisruptionBudget
* @resourceType poddisruptionbudget
*/
async function handledeleteModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting poddisruptionbudget ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('poddisruptionbudget', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `poddisruptionbudget "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('poddisruptionbudget', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name
* partially update the specified PodDisruptionBudget
* @resourceType poddisruptionbudget
*/
async function handlepatchModel_Apis_Policy_V1_Namespaces__namespace_Poddisruptionbudgets__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching poddisruptionbudget ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'poddisruptionbudget',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}


