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
* Create routes for validatingwebhookconfiguration resources
* @resourceType validatingwebhookconfiguration
*/
export function createvalidatingwebhookconfigurationRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations
 * watch individual changes to a list of ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingwebhookconfigurations(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
 * list or watch objects of kind ValidatingWebhookConfiguration
 */
router.get('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
 * create a ValidatingWebhookConfiguration
 */
router.post('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
 * delete collection of ValidatingWebhookConfiguration
 */
router.delete('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/:name
 * watch changes to an object of kind ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingwebhookconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
 * read the specified ValidatingWebhookConfiguration
 */
router.get('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
 * replace the specified ValidatingWebhookConfiguration
 */
router.put('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
 * delete a ValidatingWebhookConfiguration
 */
router.delete('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
 * partially update the specified ValidatingWebhookConfiguration
 */
router.patch('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations
* watch individual changes to a list of ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType validatingwebhookconfiguration
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingwebhookconfigurations(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing validatingwebhookconfigurations in namespace ${namespace}`);

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
    logger.error(`Watch error for validatingwebhookconfiguration:`, err);
    
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
      'validatingwebhookconfiguration',
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
  'validatingwebhookconfiguration',
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
* Handler for GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
* list or watch objects of kind ValidatingWebhookConfiguration
* @resourceType validatingwebhookconfiguration
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing validatingwebhookconfigurations in namespace ${namespace}`);

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
    logger.error(`Watch error for validatingwebhookconfiguration:`, err);
    
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
      'validatingwebhookconfiguration',
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
  'validatingwebhookconfiguration',
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
* Handler for POST /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
* create a ValidatingWebhookConfiguration
* @resourceType validatingwebhookconfiguration
*/
async function handlepostModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating validatingwebhookconfiguration ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
* delete collection of ValidatingWebhookConfiguration
* @resourceType validatingwebhookconfiguration
*/
async function handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting validatingwebhookconfiguration ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('validatingwebhookconfiguration', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `validatingwebhookconfiguration "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingwebhookconfiguration', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/:name
* watch changes to an object of kind ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType validatingwebhookconfiguration
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingwebhookconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting validatingwebhookconfiguration ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('validatingwebhookconfiguration', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingwebhookconfiguration', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
* read the specified ValidatingWebhookConfiguration
* @resourceType validatingwebhookconfiguration
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting validatingwebhookconfiguration ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('validatingwebhookconfiguration', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingwebhookconfiguration', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
* replace the specified ValidatingWebhookConfiguration
* @resourceType validatingwebhookconfiguration
*/
async function handleputModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating validatingwebhookconfiguration ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('validatingwebhookconfiguration', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
* delete a ValidatingWebhookConfiguration
* @resourceType validatingwebhookconfiguration
*/
async function handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting validatingwebhookconfiguration ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('validatingwebhookconfiguration', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `validatingwebhookconfiguration "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingwebhookconfiguration', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
* partially update the specified ValidatingWebhookConfiguration
* @resourceType validatingwebhookconfiguration
*/
async function handlepatchModel_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching validatingwebhookconfiguration ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'validatingwebhookconfiguration',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}


