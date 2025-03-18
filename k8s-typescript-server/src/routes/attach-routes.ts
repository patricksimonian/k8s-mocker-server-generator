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
* Create routes for attach resources
* @resourceType attach
*/
export function createattachRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /api/v1/namespaces/:namespace/pods/:name/attach
 * connect GET requests to attach of Pod
 */
router.get('/api/v1/namespaces/:namespace/pods/:name/attach', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Attach(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/pods/:name/attach
 * connect POST requests to attach of Pod
 */
router.post('/api/v1/namespaces/:namespace/pods/:name/attach', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Attach(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /api/v1/namespaces/:namespace/pods/:name/attach
* connect GET requests to attach of Pod
* @resourceType attach
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Attach(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting attach ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('attach', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('attach', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for POST /api/v1/namespaces/:namespace/pods/:name/attach
* connect POST requests to attach of Pod
* @resourceType attach
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Attach(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating attach ${resource.metadata?.name} in namespace ${namespace}`);

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


