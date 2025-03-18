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
* Create routes for approval resources
* @resourceType approval
*/
export function createapprovalRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval
 * read approval of the specified CertificateSigningRequest
 */
router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Approval(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval
 * replace approval of the specified CertificateSigningRequest
 */
router.put('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval', async (req, res, next) => {
  try {
    await handleputModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Approval(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval
 * partially update approval of the specified CertificateSigningRequest
 */
router.patch('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Approval(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval
* read approval of the specified CertificateSigningRequest
* @resourceType approval
*/
async function handlegetModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Approval(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting approval ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('approval', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('approval', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval
* replace approval of the specified CertificateSigningRequest
* @resourceType approval
*/
async function handleputModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Approval(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating approval ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('approval', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval
* partially update approval of the specified CertificateSigningRequest
* @resourceType approval
*/
async function handlepatchModel_Apis_Certificates_K8s_Io_V1_Certificatesigningrequests__name_Approval(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching approval ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'approval',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}


