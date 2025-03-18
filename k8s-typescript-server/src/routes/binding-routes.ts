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
* Create routes for binding resources
* @resourceType binding
*/
export function createbindingRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * POST /api/v1/namespaces/:namespace/bindings
 * create a Binding
 */
router.post('/api/v1/namespaces/:namespace/bindings', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Bindings(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/pods/:name/binding
 * create binding of a Pod
 */
router.post('/api/v1/namespaces/:namespace/pods/:name/binding', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Binding(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for POST /api/v1/namespaces/:namespace/bindings
* create a Binding
* @resourceType binding
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Bindings(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating binding ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for POST /api/v1/namespaces/:namespace/pods/:name/binding
* create binding of a Pod
* @resourceType binding
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Binding(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating binding ${resource.metadata?.name} in namespace ${namespace}`);

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


