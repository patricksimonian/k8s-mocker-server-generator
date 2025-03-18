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
* Create routes for eviction resources
* @resourceType eviction
*/
export function createevictionRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * POST /api/v1/namespaces/:namespace/pods/:name/eviction
 * create eviction of a Pod
 */
router.post('/api/v1/namespaces/:namespace/pods/:name/eviction', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Eviction(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for POST /api/v1/namespaces/:namespace/pods/:name/eviction
* create eviction of a Pod
* @resourceType eviction
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Eviction(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating eviction ${resource.metadata?.name} in namespace ${namespace}`);

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


