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
* Create routes for finalize resources
* @resourceType finalize
*/
export function createfinalizeRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * PUT /api/v1/namespaces/:name/finalize
 * replace finalize of the specified Namespace
 */
router.put('/api/v1/namespaces/:name/finalize', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__name_Finalize(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for PUT /api/v1/namespaces/:name/finalize
* replace finalize of the specified Namespace
* @resourceType finalize
*/
async function handleputModel_Api_V1_Namespaces__name_Finalize(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating finalize ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('finalize', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}


