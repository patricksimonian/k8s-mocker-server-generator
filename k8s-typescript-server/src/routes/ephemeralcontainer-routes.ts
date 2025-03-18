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
* Create routes for ephemeralcontainer resources
* @resourceType ephemeralcontainer
*/
export function createephemeralcontainerRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * PUT /api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers
 * replace ephemeralcontainers of the specified Pod
 */
router.put('/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Pods__name_Ephemeralcontainers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers
 * partially update ephemeralcontainers of the specified Pod
 */
router.patch('/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Pods__name_Ephemeralcontainers(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers
 * read ephemeralcontainers of the specified Pod
 */
router.get('/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Ephemeralcontainers(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for PUT /api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers
* replace ephemeralcontainers of the specified Pod
* @resourceType ephemeralcontainer
*/
async function handleputModel_Api_V1_Namespaces__namespace_Pods__name_Ephemeralcontainers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating ephemeralcontainer ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('ephemeralcontainer', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers
* partially update ephemeralcontainers of the specified Pod
* @resourceType ephemeralcontainer
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Pods__name_Ephemeralcontainers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching ephemeralcontainer ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'ephemeralcontainer',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers
* read ephemeralcontainers of the specified Pod
* @resourceType ephemeralcontainer
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Ephemeralcontainers(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting ephemeralcontainer ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('ephemeralcontainer', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('ephemeralcontainer', name, namespace));
    return;
  }
  throw error;
}


}


