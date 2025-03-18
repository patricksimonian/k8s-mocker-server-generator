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
* Create routes for localsubjectaccessreview resources
* @resourceType localsubjectaccessreview
*/
export function createlocalsubjectaccessreviewRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * POST /apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews
 * create a LocalSubjectAccessReview
 */
router.post('/apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Authorization_K8s_Io_V1_Namespaces__namespace_Localsubjectaccessreviews(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for POST /apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews
* create a LocalSubjectAccessReview
* @resourceType localsubjectaccessreview
*/
async function handlepostModel_Apis_Authorization_K8s_Io_V1_Namespaces__namespace_Localsubjectaccessreviews(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating localsubjectaccessreview ${resource.metadata?.name} in namespace ${namespace}`);

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


