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
* Create routes for tokenreview resources
* @resourceType tokenreview
*/
export function createtokenreviewRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * POST /apis/authentication.k8s.io/v1/tokenreviews
 * create a TokenReview
 */
router.post('/apis/authentication.k8s.io/v1/tokenreviews', async (req, res, next) => {
  try {
    await handlepostModel_Apis_Authentication_K8s_Io_V1_Tokenreviews(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for POST /apis/authentication.k8s.io/v1/tokenreviews
* create a TokenReview
* @resourceType tokenreview
*/
async function handlepostModel_Apis_Authentication_K8s_Io_V1_Tokenreviews(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating tokenreview ${resource.metadata?.name} in namespace ${namespace}`);

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


