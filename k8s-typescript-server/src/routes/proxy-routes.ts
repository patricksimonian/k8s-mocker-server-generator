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
* Create routes for proxy resources
* @resourceType proxy
*/
export function createproxyRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 * connect GET requests to proxy of Pod
 */
router.get('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 * connect PUT requests to proxy of Pod
 */
router.put('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 * connect POST requests to proxy of Pod
 */
router.post('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 * connect DELETE requests to proxy of Pod
 */
router.delete('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * OPTIONS /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 * connect OPTIONS requests to proxy of Pod
 */
router.options('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
  try {
    await handleoptionsModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * HEAD /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 * connect HEAD requests to proxy of Pod
 */
router.head('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
  try {
    await handleheadModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 * connect PATCH requests to proxy of Pod
 */
router.patch('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/nodes/:name/proxy/:path
 * connect PATCH requests to proxy of Node
 */
router.patch('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Nodes__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/nodes/:name/proxy/:path
 * connect GET requests to proxy of Node
 */
router.get('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Nodes__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/nodes/:name/proxy/:path
 * connect PUT requests to proxy of Node
 */
router.put('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Nodes__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/nodes/:name/proxy/:path
 * connect POST requests to proxy of Node
 */
router.post('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Nodes__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/nodes/:name/proxy/:path
 * connect DELETE requests to proxy of Node
 */
router.delete('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Nodes__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * OPTIONS /api/v1/nodes/:name/proxy/:path
 * connect OPTIONS requests to proxy of Node
 */
router.options('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
  try {
    await handleoptionsModel_Api_V1_Nodes__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * HEAD /api/v1/nodes/:name/proxy/:path
 * connect HEAD requests to proxy of Node
 */
router.head('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
  try {
    await handleheadModel_Api_V1_Nodes__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/services/:name/proxy
 * connect PATCH requests to proxy of Service
 */
router.patch('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Services__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/services/:name/proxy
 * connect GET requests to proxy of Service
 */
router.get('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Services__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/services/:name/proxy
 * connect PUT requests to proxy of Service
 */
router.put('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Services__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/services/:name/proxy
 * connect POST requests to proxy of Service
 */
router.post('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Services__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/services/:name/proxy
 * connect DELETE requests to proxy of Service
 */
router.delete('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Services__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * OPTIONS /api/v1/namespaces/:namespace/services/:name/proxy
 * connect OPTIONS requests to proxy of Service
 */
router.options('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
  try {
    await handleoptionsModel_Api_V1_Namespaces__namespace_Services__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * HEAD /api/v1/namespaces/:namespace/services/:name/proxy
 * connect HEAD requests to proxy of Service
 */
router.head('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
  try {
    await handleheadModel_Api_V1_Namespaces__namespace_Services__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/pods/:name/proxy
 * connect DELETE requests to proxy of Pod
 */
router.delete('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * OPTIONS /api/v1/namespaces/:namespace/pods/:name/proxy
 * connect OPTIONS requests to proxy of Pod
 */
router.options('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
  try {
    await handleoptionsModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * HEAD /api/v1/namespaces/:namespace/pods/:name/proxy
 * connect HEAD requests to proxy of Pod
 */
router.head('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
  try {
    await handleheadModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/pods/:name/proxy
 * connect PATCH requests to proxy of Pod
 */
router.patch('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/pods/:name/proxy
 * connect GET requests to proxy of Pod
 */
router.get('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/pods/:name/proxy
 * connect PUT requests to proxy of Pod
 */
router.put('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/pods/:name/proxy
 * connect POST requests to proxy of Pod
 */
router.post('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/nodes/:name/proxy
 * connect GET requests to proxy of Node
 */
router.get('/api/v1/nodes/:name/proxy', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Nodes__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/nodes/:name/proxy
 * connect PUT requests to proxy of Node
 */
router.put('/api/v1/nodes/:name/proxy', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Nodes__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/nodes/:name/proxy
 * connect POST requests to proxy of Node
 */
router.post('/api/v1/nodes/:name/proxy', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Nodes__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/nodes/:name/proxy
 * connect DELETE requests to proxy of Node
 */
router.delete('/api/v1/nodes/:name/proxy', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Nodes__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * OPTIONS /api/v1/nodes/:name/proxy
 * connect OPTIONS requests to proxy of Node
 */
router.options('/api/v1/nodes/:name/proxy', async (req, res, next) => {
  try {
    await handleoptionsModel_Api_V1_Nodes__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * HEAD /api/v1/nodes/:name/proxy
 * connect HEAD requests to proxy of Node
 */
router.head('/api/v1/nodes/:name/proxy', async (req, res, next) => {
  try {
    await handleheadModel_Api_V1_Nodes__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/nodes/:name/proxy
 * connect PATCH requests to proxy of Node
 */
router.patch('/api/v1/nodes/:name/proxy', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Nodes__name_Proxy(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE /api/v1/namespaces/:namespace/services/:name/proxy/:path
 * connect DELETE requests to proxy of Service
 */
router.delete('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
  try {
    await handledeleteModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * OPTIONS /api/v1/namespaces/:namespace/services/:name/proxy/:path
 * connect OPTIONS requests to proxy of Service
 */
router.options('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
  try {
    await handleoptionsModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * HEAD /api/v1/namespaces/:namespace/services/:name/proxy/:path
 * connect HEAD requests to proxy of Service
 */
router.head('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
  try {
    await handleheadModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PATCH /api/v1/namespaces/:namespace/services/:name/proxy/:path
 * connect PATCH requests to proxy of Service
 */
router.patch('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
  try {
    await handlepatchModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/namespaces/:namespace/services/:name/proxy/:path
 * connect GET requests to proxy of Service
 */
router.get('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /api/v1/namespaces/:namespace/services/:name/proxy/:path
 * connect PUT requests to proxy of Service
 */
router.put('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
  try {
    await handleputModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/v1/namespaces/:namespace/services/:name/proxy/:path
 * connect POST requests to proxy of Service
 */
router.post('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
  try {
    await handlepostModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /api/v1/namespaces/:namespace/pods/:name/proxy/:path
* connect GET requests to proxy of Pod
* @resourceType proxy
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting proxy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('proxy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/pods/:name/proxy/:path
* connect PUT requests to proxy of Pod
* @resourceType proxy
*/
async function handleputModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating proxy ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('proxy', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for POST /api/v1/namespaces/:namespace/pods/:name/proxy/:path
* connect POST requests to proxy of Pod
* @resourceType proxy
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating proxy ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/namespaces/:namespace/pods/:name/proxy/:path
* connect DELETE requests to proxy of Pod
* @resourceType proxy
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting proxy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('proxy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `proxy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for OPTIONS /api/v1/namespaces/:namespace/pods/:name/proxy/:path
* connect OPTIONS requests to proxy of Pod
* @resourceType proxy
*/
async function handleoptionsModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for HEAD /api/v1/namespaces/:namespace/pods/:name/proxy/:path
* connect HEAD requests to proxy of Pod
* @resourceType proxy
*/
async function handleheadModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/pods/:name/proxy/:path
* connect PATCH requests to proxy of Pod
* @resourceType proxy
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching proxy ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'proxy',
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
* Handler for PATCH /api/v1/nodes/:name/proxy/:path
* connect PATCH requests to proxy of Node
* @resourceType proxy
*/
async function handlepatchModel_Api_V1_Nodes__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching proxy ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'proxy',
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
* Handler for GET /api/v1/nodes/:name/proxy/:path
* connect GET requests to proxy of Node
* @resourceType proxy
*/
async function handlegetModel_Api_V1_Nodes__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting proxy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('proxy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/nodes/:name/proxy/:path
* connect PUT requests to proxy of Node
* @resourceType proxy
*/
async function handleputModel_Api_V1_Nodes__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating proxy ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('proxy', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for POST /api/v1/nodes/:name/proxy/:path
* connect POST requests to proxy of Node
* @resourceType proxy
*/
async function handlepostModel_Api_V1_Nodes__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating proxy ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/nodes/:name/proxy/:path
* connect DELETE requests to proxy of Node
* @resourceType proxy
*/
async function handledeleteModel_Api_V1_Nodes__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting proxy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('proxy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `proxy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for OPTIONS /api/v1/nodes/:name/proxy/:path
* connect OPTIONS requests to proxy of Node
* @resourceType proxy
*/
async function handleoptionsModel_Api_V1_Nodes__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for HEAD /api/v1/nodes/:name/proxy/:path
* connect HEAD requests to proxy of Node
* @resourceType proxy
*/
async function handleheadModel_Api_V1_Nodes__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/services/:name/proxy
* connect PATCH requests to proxy of Service
* @resourceType proxy
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Services__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching proxy ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'proxy',
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
* Handler for GET /api/v1/namespaces/:namespace/services/:name/proxy
* connect GET requests to proxy of Service
* @resourceType proxy
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Services__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting proxy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('proxy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/services/:name/proxy
* connect PUT requests to proxy of Service
* @resourceType proxy
*/
async function handleputModel_Api_V1_Namespaces__namespace_Services__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating proxy ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('proxy', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for POST /api/v1/namespaces/:namespace/services/:name/proxy
* connect POST requests to proxy of Service
* @resourceType proxy
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Services__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating proxy ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/namespaces/:namespace/services/:name/proxy
* connect DELETE requests to proxy of Service
* @resourceType proxy
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Services__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting proxy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('proxy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `proxy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for OPTIONS /api/v1/namespaces/:namespace/services/:name/proxy
* connect OPTIONS requests to proxy of Service
* @resourceType proxy
*/
async function handleoptionsModel_Api_V1_Namespaces__namespace_Services__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for HEAD /api/v1/namespaces/:namespace/services/:name/proxy
* connect HEAD requests to proxy of Service
* @resourceType proxy
*/
async function handleheadModel_Api_V1_Namespaces__namespace_Services__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for DELETE /api/v1/namespaces/:namespace/pods/:name/proxy
* connect DELETE requests to proxy of Pod
* @resourceType proxy
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting proxy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('proxy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `proxy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for OPTIONS /api/v1/namespaces/:namespace/pods/:name/proxy
* connect OPTIONS requests to proxy of Pod
* @resourceType proxy
*/
async function handleoptionsModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for HEAD /api/v1/namespaces/:namespace/pods/:name/proxy
* connect HEAD requests to proxy of Pod
* @resourceType proxy
*/
async function handleheadModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/pods/:name/proxy
* connect PATCH requests to proxy of Pod
* @resourceType proxy
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching proxy ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'proxy',
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
* Handler for GET /api/v1/namespaces/:namespace/pods/:name/proxy
* connect GET requests to proxy of Pod
* @resourceType proxy
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting proxy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('proxy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/pods/:name/proxy
* connect PUT requests to proxy of Pod
* @resourceType proxy
*/
async function handleputModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating proxy ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('proxy', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for POST /api/v1/namespaces/:namespace/pods/:name/proxy
* connect POST requests to proxy of Pod
* @resourceType proxy
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Pods__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating proxy ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for GET /api/v1/nodes/:name/proxy
* connect GET requests to proxy of Node
* @resourceType proxy
*/
async function handlegetModel_Api_V1_Nodes__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting proxy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('proxy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/nodes/:name/proxy
* connect PUT requests to proxy of Node
* @resourceType proxy
*/
async function handleputModel_Api_V1_Nodes__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating proxy ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('proxy', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for POST /api/v1/nodes/:name/proxy
* connect POST requests to proxy of Node
* @resourceType proxy
*/
async function handlepostModel_Api_V1_Nodes__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating proxy ${resource.metadata?.name} in namespace ${namespace}`);

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
* Handler for DELETE /api/v1/nodes/:name/proxy
* connect DELETE requests to proxy of Node
* @resourceType proxy
*/
async function handledeleteModel_Api_V1_Nodes__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting proxy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('proxy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `proxy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for OPTIONS /api/v1/nodes/:name/proxy
* connect OPTIONS requests to proxy of Node
* @resourceType proxy
*/
async function handleoptionsModel_Api_V1_Nodes__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for HEAD /api/v1/nodes/:name/proxy
* connect HEAD requests to proxy of Node
* @resourceType proxy
*/
async function handleheadModel_Api_V1_Nodes__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for PATCH /api/v1/nodes/:name/proxy
* connect PATCH requests to proxy of Node
* @resourceType proxy
*/
async function handlepatchModel_Api_V1_Nodes__name_Proxy(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching proxy ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'proxy',
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
* Handler for DELETE /api/v1/namespaces/:namespace/services/:name/proxy/:path
* connect DELETE requests to proxy of Service
* @resourceType proxy
*/
async function handledeleteModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Delete resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Deleting proxy ${name} in namespace ${namespace}`);

try {
  // Delete the resource from storage
  await storage.deleteResource('proxy', name, namespace);
  
  // Return success response
  res.json({
    kind: 'Status',
    apiVersion: 'v1',
    metadata: {},
    status: 'Success',
    message: `proxy "${name}" deleted`
  });
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}

}

/**
* Handler for OPTIONS /api/v1/namespaces/:namespace/services/:name/proxy/:path
* connect OPTIONS requests to proxy of Service
* @resourceType proxy
*/
async function handleoptionsModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for HEAD /api/v1/namespaces/:namespace/services/:name/proxy/:path
* connect HEAD requests to proxy of Service
* @resourceType proxy
*/
async function handleheadModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

}

/**
* Handler for PATCH /api/v1/namespaces/:namespace/services/:name/proxy/:path
* connect PATCH requests to proxy of Service
* @resourceType proxy
*/
async function handlepatchModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Patch resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const patchData = req.body;

logger.info(`Patching proxy ${name} in namespace ${namespace}`);

try {
  // Apply patch to the resource
  const result = await applyPatch(
    storage, 
    'proxy',
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
* Handler for GET /api/v1/namespaces/:namespace/services/:name/proxy/:path
* connect GET requests to proxy of Service
* @resourceType proxy
*/
async function handlegetModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting proxy ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('proxy', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('proxy', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for PUT /api/v1/namespaces/:namespace/services/:name/proxy/:path
* connect PUT requests to proxy of Service
* @resourceType proxy
*/
async function handleputModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Update resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;
const resource = req.body;

logger.info(`Updating proxy ${name} in namespace ${namespace}`);

try {
  // Validate the resource
  await validateResource(resource);
  
  // Update the resource in storage
  const result = await storage.updateResource('proxy', name, resource, namespace);
  res.json(result);
} catch (error) {
  handleResourceError(error, res);
}

}

/**
* Handler for POST /api/v1/namespaces/:namespace/services/:name/proxy/:path
* connect POST requests to proxy of Service
* @resourceType proxy
*/
async function handlepostModel_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {

// Create resource
const namespace = req.params.namespace || 'default';
const resource = req.body;

logger.info(`Creating proxy ${resource.metadata?.name} in namespace ${namespace}`);

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


