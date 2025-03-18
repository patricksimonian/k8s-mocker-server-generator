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
* Create routes for certificatesigningrequest resources
* @resourceType certificatesigningrequest
*/
export function createcertificatesigningrequestRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/certificates.k8s.io/v1/watch/certificatesigningrequests
 * watch individual changes to a list of CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead.
 */
router.get('/apis/certificates.k8s.io/v1/watch/certificatesigningrequests', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Certificates_K8s_Io_V1_Watch_Certificatesigningrequests(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/certificates.k8s.io/v1/certificatesigningrequests/:name
 * read the specified CertificateSigningRequest
 */
router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/certificates.k8s.io/v1/certificatesigningrequests/:name
 * replace the specified CertificateSigningRequest
 */
router.put('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
  try {
    await handleputModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/certificates.k8s.io/v1/certificatesigningrequests/:name
 * delete a CertificateSigningRequest
 */
router.delete('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/certificates.k8s.io/v1/certificatesigningrequests/:name
 * partially update the specified CertificateSigningRequest
 */
router.patch('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/certificates.k8s.io/v1/watch/certificatesigningrequests/:name
 * watch changes to an object of kind CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 */
router.get('/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/:name', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Certificates_K8s_Io_V1_Watch_Certificatesigningrequests__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/certificates.k8s.io/v1/certificatesigningrequests
 * list or watch objects of kind CertificateSigningRequest
 */
router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /apis/certificates.k8s.io/v1/certificatesigningrequests
 * create a CertificateSigningRequest
 */
router.post('/apis/certificates.k8s.io/v1/certificatesigningrequests', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /apis/certificates.k8s.io/v1/certificatesigningrequests
 * delete collection of CertificateSigningRequest
 */
router.delete('/apis/certificates.k8s.io/v1/certificatesigningrequests', async (req, res, next) => {
  try {
    await handledeleteModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/certificates.k8s.io/v1/watch/certificatesigningrequests
* watch individual changes to a list of CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead.
* @resourceType certificatesigningrequest
*/
async function handlegetModel_Apis_Certificates_K8s_Io_V1_Watch_Certificatesigningrequests(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing certificatesigningrequests in namespace ${namespace}`);

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
    logger.error(`Watch error for certificatesigningrequest:`, err);
    
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
      'certificatesigningrequest',
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
  'certificatesigningrequest',
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
* Handler for GET /apis/certificates.k8s.io/v1/certificatesigningrequests/:name
* read the specified CertificateSigningRequest
* @resourceType certificatesigningrequest
*/
async function handlegetModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting certificatesigningrequest ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('certificatesigningrequest', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('certificatesigningrequest', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/certificates.k8s.io/v1/certificatesigningrequests/:name
* replace the specified CertificateSigningRequest
* @resourceType certificatesigningrequest
*/
async function handleputModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating certificatesigningrequest ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('certificatesigningrequest', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for DELETE /apis/certificates.k8s.io/v1/certificatesigningrequests/:name
* delete a CertificateSigningRequest
* @resourceType certificatesigningrequest
*/
async function handledeleteModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting certificatesigningrequest ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('certificatesigningrequest', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `certificatesigningrequest "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('certificatesigningrequest', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for PATCH /apis/certificates.k8s.io/v1/certificatesigningrequests/:name
* partially update the specified CertificateSigningRequest
* @resourceType certificatesigningrequest
*/
async function handlepatchModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching certificatesigningrequest ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'certificatesigningrequest',
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
* Handler for GET /apis/certificates.k8s.io/v1/watch/certificatesigningrequests/:name
* watch changes to an object of kind CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
* @resourceType certificatesigningrequest
*/
async function handlegetModel_Apis_Certificates_K8s_Io_V1_Watch_Certificatesigningrequests__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting certificatesigningrequest ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('certificatesigningrequest', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('certificatesigningrequest', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /apis/certificates.k8s.io/v1/certificatesigningrequests
* list or watch objects of kind CertificateSigningRequest
* @resourceType certificatesigningrequest
*/
async function handlegetModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing certificatesigningrequests in namespace ${namespace}`);

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
    logger.error(`Watch error for certificatesigningrequest:`, err);
    
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
      'certificatesigningrequest',
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
  'certificatesigningrequest',
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
* Handler for POST /apis/certificates.k8s.io/v1/certificatesigningrequests
* create a CertificateSigningRequest
* @resourceType certificatesigningrequest
*/
async function handlepostModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating certificatesigningrequest ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /apis/certificates.k8s.io/v1/certificatesigningrequests
* delete collection of CertificateSigningRequest
* @resourceType certificatesigningrequest
*/
async function handledeleteModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting certificatesigningrequest ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('certificatesigningrequest', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `certificatesigningrequest "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('certificatesigningrequest', name, namespace));
    return;
  }
  throw error;
}

}


