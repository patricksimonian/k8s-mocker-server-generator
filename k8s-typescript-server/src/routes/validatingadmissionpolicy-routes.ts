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
* Create routes for validatingadmissionpolicy resources
* @resourceType validatingadmissionpolicy
*/
export function createvalidatingadmissionpolicyRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
 * delete collection of ValidatingAdmissionPolicy
 */
router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
 * list or watch objects of kind ValidatingAdmissionPolicy
 */
router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
 * create a ValidatingAdmissionPolicy
 */
router.post('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/:name
 * watch changes to an object of kind ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
 * read the specified ValidatingAdmissionPolicy
 */
router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
 * replace the specified ValidatingAdmissionPolicy
 */
router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
 * delete a ValidatingAdmissionPolicy
 */
router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
 * partially update the specified ValidatingAdmissionPolicy
 */
router.patch('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies
 * watch individual changes to a list of ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicies(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
* delete collection of ValidatingAdmissionPolicy
* @resourceType validatingadmissionpolicy
*/
async function handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting validatingadmissionpolicy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('validatingadmissionpolicy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `validatingadmissionpolicy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingadmissionpolicy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
* list or watch objects of kind ValidatingAdmissionPolicy
* @resourceType validatingadmissionpolicy
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing validatingadmissionpolicys in namespace ${namespace}`);

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
    logger.error(`Watch error for validatingadmissionpolicy:`, err);
    
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
      'validatingadmissionpolicy',
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
  'validatingadmissionpolicy',
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
* Handler for POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
* create a ValidatingAdmissionPolicy
* @resourceType validatingadmissionpolicy
*/
async function handlepostModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating validatingadmissionpolicy ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/:name
* watch changes to an object of kind ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType validatingadmissionpolicy
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting validatingadmissionpolicy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('validatingadmissionpolicy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingadmissionpolicy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
* read the specified ValidatingAdmissionPolicy
* @resourceType validatingadmissionpolicy
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting validatingadmissionpolicy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('validatingadmissionpolicy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingadmissionpolicy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
* replace the specified ValidatingAdmissionPolicy
* @resourceType validatingadmissionpolicy
*/
async function handleputModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating validatingadmissionpolicy ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('validatingadmissionpolicy', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
* delete a ValidatingAdmissionPolicy
* @resourceType validatingadmissionpolicy
*/
async function handledeleteModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting validatingadmissionpolicy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('validatingadmissionpolicy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `validatingadmissionpolicy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('validatingadmissionpolicy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
* partially update the specified ValidatingAdmissionPolicy
* @resourceType validatingadmissionpolicy
*/
async function handlepatchModel_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching validatingadmissionpolicy ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'validatingadmissionpolicy',
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
* Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies
* watch individual changes to a list of ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType validatingadmissionpolicy
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicies(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing validatingadmissionpolicys in namespace ${namespace}`);

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
    logger.error(`Watch error for validatingadmissionpolicy:`, err);
    
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
      'validatingadmissionpolicy',
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
  'validatingadmissionpolicy',
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


