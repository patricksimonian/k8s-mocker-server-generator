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
* Create routes for validatingadmissionpolicybinding resources
* @resourceType validatingadmissionpolicybinding
*/
export function createvalidatingadmissionpolicybindingRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
 * list or watch objects of kind ValidatingAdmissionPolicyBinding
 */
router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
 * create a ValidatingAdmissionPolicyBinding
 */
router.post('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
 * delete collection of ValidatingAdmissionPolicyBinding
 */
router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
 * read the specified ValidatingAdmissionPolicyBinding
 */
router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
 * replace the specified ValidatingAdmissionPolicyBinding
 */
router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
 * delete a ValidatingAdmissionPolicyBinding
 */
router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
 * partially update the specified ValidatingAdmissionPolicyBinding
 */
router.patch('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings
 * watch individual changes to a list of ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicybindings(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/:name
 * watch changes to an object of kind ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicybindings__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
* list or watch objects of kind ValidatingAdmissionPolicyBinding
* @resourceType validatingadmissionpolicybinding
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing validatingadmissionpolicybindings in namespace ${namespace}`);

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
    logger.error(`Watch error for validatingadmissionpolicybinding:`, err);
    
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
      'validatingadmissionpolicybinding',
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
  'validatingadmissionpolicybinding',
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
* Handler for POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
* create a ValidatingAdmissionPolicyBinding
* @resourceType validatingadmissionpolicybinding
*/
async function handlepostModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating validatingadmissionpolicybinding ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
* delete collection of ValidatingAdmissionPolicyBinding
* @resourceType validatingadmissionpolicybinding
*/
async function handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting validatingadmissionpolicybinding ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('validatingadmissionpolicybinding', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `validatingadmissionpolicybinding "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingadmissionpolicybinding', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
* read the specified ValidatingAdmissionPolicyBinding
* @resourceType validatingadmissionpolicybinding
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting validatingadmissionpolicybinding ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('validatingadmissionpolicybinding', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingadmissionpolicybinding', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
* replace the specified ValidatingAdmissionPolicyBinding
* @resourceType validatingadmissionpolicybinding
*/
async function handleputModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating validatingadmissionpolicybinding ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('validatingadmissionpolicybinding', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
* delete a ValidatingAdmissionPolicyBinding
* @resourceType validatingadmissionpolicybinding
*/
async function handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting validatingadmissionpolicybinding ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('validatingadmissionpolicybinding', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `validatingadmissionpolicybinding "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingadmissionpolicybinding', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
* partially update the specified ValidatingAdmissionPolicyBinding
* @resourceType validatingadmissionpolicybinding
*/
async function handlepatchModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching validatingadmissionpolicybinding ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'validatingadmissionpolicybinding',
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
* Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings
* watch individual changes to a list of ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType validatingadmissionpolicybinding
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicybindings(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing validatingadmissionpolicybindings in namespace ${namespace}`);

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
    logger.error(`Watch error for validatingadmissionpolicybinding:`, err);
    
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
      'validatingadmissionpolicybinding',
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
  'validatingadmissionpolicybinding',
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
* Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/:name
* watch changes to an object of kind ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType validatingadmissionpolicybinding
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicybindings__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting validatingadmissionpolicybinding ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('validatingadmissionpolicybinding', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingadmissionpolicybinding', name, namespace));
    return;
  }
  throw error;
}


}


