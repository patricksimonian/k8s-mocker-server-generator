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
* Create routes for scale resources
* @resourceType scale
*/
export function createscaleRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale
 * partially update scale of the specified StatefulSet
 */
router.patch('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale
 * read scale of the specified StatefulSet
 */
router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale
 * replace scale of the specified StatefulSet
 */
router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/replicasets/:name/scale
 * read scale of the specified ReplicaSet
 */
router.get('/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name/scale
 * replace scale of the specified ReplicaSet
 */
router.put('/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name/scale
 * partially update scale of the specified ReplicaSet
 */
router.patch('/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /apis/apps/v1/namespaces/:namespace/deployments/:name/scale
 * read scale of the specified Deployment
 */
router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', async (req, res, next) => {
  try {
    await handlegetModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /apis/apps/v1/namespaces/:namespace/deployments/:name/scale
 * replace scale of the specified Deployment
 */
router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', async (req, res, next) => {
  try {
    await handleputModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name/scale
 * partially update scale of the specified Deployment
 */
router.patch('/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', async (req, res, next) => {
  try {
    await handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/replicationcontrollers/:name/scale
 * read scale of the specified ReplicationController
 */
router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/replicationcontrollers/:name/scale
 * replace scale of the specified ReplicationController
 */
router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/replicationcontrollers/:name/scale
 * partially update scale of the specified ReplicationController
 */
router.patch('/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Scale(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale
* partially update scale of the specified StatefulSet
* @resourceType scale
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching scale ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'scale',
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
* Handler for GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale
* read scale of the specified StatefulSet
* @resourceType scale
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting scale ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('scale', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('scale', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale
* replace scale of the specified StatefulSet
* @resourceType scale
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating scale ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('scale', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for GET /apis/apps/v1/namespaces/:namespace/replicasets/:name/scale
* read scale of the specified ReplicaSet
* @resourceType scale
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting scale ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('scale', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('scale', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name/scale
* replace scale of the specified ReplicaSet
* @resourceType scale
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating scale ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('scale', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name/scale
* partially update scale of the specified ReplicaSet
* @resourceType scale
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching scale ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'scale',
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
* Handler for GET /apis/apps/v1/namespaces/:namespace/deployments/:name/scale
* read scale of the specified Deployment
* @resourceType scale
*/
async function handlegetModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting scale ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('scale', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('scale', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /apis/apps/v1/namespaces/:namespace/deployments/:name/scale
* replace scale of the specified Deployment
* @resourceType scale
*/
async function handleputModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating scale ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('scale', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name/scale
* partially update scale of the specified Deployment
* @resourceType scale
*/
async function handlepatchModel_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching scale ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'scale',
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
* Handler for GET /api/v1/namespaces/:namespace/replicationcontrollers/:name/scale
* read scale of the specified ReplicationController
* @resourceType scale
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting scale ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('scale', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('scale', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/replicationcontrollers/:name/scale
* replace scale of the specified ReplicationController
* @resourceType scale
*/
async function handleputModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating scale ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('scale', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/replicationcontrollers/:name/scale
* partially update scale of the specified ReplicationController
* @resourceType scale
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Scale(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching scale ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'scale',
    namespace, 
    name, 
    patchData
  );
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}


