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
* Create routes for log resources
* @resourceType log
*/
export function createlogRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /api/v1/namespaces/:namespace/pods/:name/log
 * read log of the specified Pod
 */
router.get('/api/v1/namespaces/:namespace/pods/:name/log', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Log(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /api/v1/namespaces/:namespace/pods/:name/log
* read log of the specified Pod
* @resourceType log
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Log(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting log ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('log', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('log', name, namespace));
    return;
  }
  throw error;
}


}


