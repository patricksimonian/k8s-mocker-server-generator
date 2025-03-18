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
* Create routes for selfsubjectaccessreview resources
* @resourceType selfsubjectaccessreview
*/
export function createselfsubjectaccessreviewRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * POST /apis/authorization.k8s.io/v1/selfsubjectaccessreviews
 * create a SelfSubjectAccessReview
 */
router.post('/apis/authorization.k8s.io/v1/selfsubjectaccessreviews', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Authorization_K8s_Io_V1_Selfsubjectaccessreviews(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for POST /apis/authorization.k8s.io/v1/selfsubjectaccessreviews
* create a SelfSubjectAccessReview
* @resourceType selfsubjectaccessreview
*/
async function handlepostModel_Apis_Authorization_K8s_Io_V1_Selfsubjectaccessreviews(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating selfsubjectaccessreview ${resource.metadata?.name} in namespace ${namespace}`);

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


