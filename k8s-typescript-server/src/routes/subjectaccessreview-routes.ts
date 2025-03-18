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
* Create routes for subjectaccessreview resources
* @resourceType subjectaccessreview
*/
export function createsubjectaccessreviewRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * POST /apis/authorization.k8s.io/v1/subjectaccessreviews
 * create a SubjectAccessReview
 */
router.post('/apis/authorization.k8s.io/v1/subjectaccessreviews', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Authorization_K8s_Io_V1_Subjectaccessreviews(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for POST /apis/authorization.k8s.io/v1/subjectaccessreviews
* create a SubjectAccessReview
* @resourceType subjectaccessreview
*/
async function handlepostModel_Apis_Authorization_K8s_Io_V1_Subjectaccessreviews(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating subjectaccessreview ${resource.metadata?.name} in namespace ${namespace}`);

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


