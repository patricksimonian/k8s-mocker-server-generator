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

// Import all models to ensure we have what we need
import * as models from '../models';

export function createadmissionregistration_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * DELETE /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations
   * delete collection of MutatingWebhookConfiguration
   */
  router.delete('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      await handleDelete-Apis-Admissionregistration.K8s.Io-V1-Mutatingwebhookconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations
   * list or watch objects of kind MutatingWebhookConfiguration
   */
  router.get('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Mutatingwebhookconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations
   * create a MutatingWebhookConfiguration
   */
  router.post('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      await handlePost-Apis-Admissionregistration.K8s.Io-V1-Mutatingwebhookconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
   * read status of the specified ValidatingAdmissionPolicy
   */
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
   * replace status of the specified ValidatingAdmissionPolicy
   */
  router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
   * partially update status of the specified ValidatingAdmissionPolicy
   */
  router.patch('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings
   * watch individual changes to a list of ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Watch-Validatingadmissionpolicybindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/
   * get information of a group
   */
  router.get('/apis/admissionregistration.k8s.io/', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/admissionregistration.k8s.io/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/:name
   * watch changes to an object of kind ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Watch-Validatingadmissionpolicybindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
   * list or watch objects of kind ValidatingAdmissionPolicy
   */
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
   * create a ValidatingAdmissionPolicy
   */
  router.post('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies', async (req, res, next) => {
    try {
      await handlePost-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
   * delete collection of ValidatingAdmissionPolicy
   */
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies', async (req, res, next) => {
    try {
      await handleDelete-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations
   * watch individual changes to a list of MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Watch-Mutatingwebhookconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
   * read the specified ValidatingAdmissionPolicyBinding
   */
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicybindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
   * replace the specified ValidatingAdmissionPolicyBinding
   */
  router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicybindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
   * delete a ValidatingAdmissionPolicyBinding
   */
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicybindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
   * partially update the specified ValidatingAdmissionPolicyBinding
   */
  router.patch('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicybindings-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
   * list or watch objects of kind ValidatingWebhookConfiguration
   */
  router.get('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Validatingwebhookconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
   * create a ValidatingWebhookConfiguration
   */
  router.post('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      await handlePost-Apis-Admissionregistration.K8s.Io-V1-Validatingwebhookconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
   * delete collection of ValidatingWebhookConfiguration
   */
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      await handleDelete-Apis-Admissionregistration.K8s.Io-V1-Validatingwebhookconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations
   * watch individual changes to a list of ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Watch-Validatingwebhookconfigurations(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/:name
   * watch changes to an object of kind MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Watch-Mutatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
   * read the specified ValidatingAdmissionPolicy
   */
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
   * replace the specified ValidatingAdmissionPolicy
   */
  router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
   * delete a ValidatingAdmissionPolicy
   */
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
   * partially update the specified ValidatingAdmissionPolicy
   */
  router.patch('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
   * create a ValidatingAdmissionPolicyBinding
   */
  router.post('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      await handlePost-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicybindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
   * delete collection of ValidatingAdmissionPolicyBinding
   */
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      await handleDelete-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicybindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
   * list or watch objects of kind ValidatingAdmissionPolicyBinding
   */
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Validatingadmissionpolicybindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name
   * read the specified MutatingWebhookConfiguration
   */
  router.get('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Mutatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name
   * replace the specified MutatingWebhookConfiguration
   */
  router.put('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Admissionregistration.K8s.Io-V1-Mutatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name
   * delete a MutatingWebhookConfiguration
   */
  router.delete('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Admissionregistration.K8s.Io-V1-Mutatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name
   * partially update the specified MutatingWebhookConfiguration
   */
  router.patch('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Admissionregistration.K8s.Io-V1-Mutatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/:name
   * watch changes to an object of kind ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Watch-Validatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/:name
   * watch changes to an object of kind ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Watch-Validatingadmissionpolicies-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies
   * watch individual changes to a list of ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Watch-Validatingadmissionpolicies(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
   * replace the specified ValidatingWebhookConfiguration
   */
  router.put('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Admissionregistration.K8s.Io-V1-Validatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
   * delete a ValidatingWebhookConfiguration
   */
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Admissionregistration.K8s.Io-V1-Validatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
   * partially update the specified ValidatingWebhookConfiguration
   */
  router.patch('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Admissionregistration.K8s.Io-V1-Validatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
   * read the specified ValidatingWebhookConfiguration
   */
  router.get('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Admissionregistration.K8s.Io-V1-Validatingwebhookconfigurations-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for DELETE /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations
 */
async function handledelete_Apis_Admissionregistration_K8s_Io_V1_Mutatingwebhookconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('admissionregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `admissionregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Mutatingwebhookconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for POST /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations
 */
async function handlepost_Apis_Admissionregistration_K8s_Io_V1_Mutatingwebhookconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.admissionregistration_k8s_io;
  
  logger.info(`Creating admissionregistration.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.admissionregistration_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('admissionregistration.k8s.io', name, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
 */
async function handleput_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.admissionregistration_k8s_io;
  
  logger.info(`Updating admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('admissionregistration.k8s.io', name, resource, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status
 */
async function handlepatch_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.admissionregistration_k8s_io>(
      storage, 
      'admissionregistration.k8s.io',
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
 * Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicybindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/
 */
async function handleget_Apis_Admissionregistration_K8s_Io_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/:name
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicybindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('admissionregistration.k8s.io', name, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
 */
async function handlepost_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.admissionregistration_k8s_io;
  
  logger.info(`Creating admissionregistration.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.admissionregistration_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies
 */
async function handledelete_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('admissionregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `admissionregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Watch_Mutatingwebhookconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('admissionregistration.k8s.io', name, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
 */
async function handleput_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.admissionregistration_k8s_io;
  
  logger.info(`Updating admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('admissionregistration.k8s.io', name, resource, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
 */
async function handledelete_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('admissionregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `admissionregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name
 */
async function handlepatch_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.admissionregistration_k8s_io>(
      storage, 
      'admissionregistration.k8s.io',
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
 * Handler for GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for POST /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
 */
async function handlepost_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.admissionregistration_k8s_io;
  
  logger.info(`Creating admissionregistration.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.admissionregistration_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations
 */
async function handledelete_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('admissionregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `admissionregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingwebhookconfigurations(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/:name
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Watch_Mutatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('admissionregistration.k8s.io', name, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('admissionregistration.k8s.io', name, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
 */
async function handleput_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.admissionregistration_k8s_io;
  
  logger.info(`Updating admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('admissionregistration.k8s.io', name, resource, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
 */
async function handledelete_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('admissionregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `admissionregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name
 */
async function handlepatch_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.admissionregistration_k8s_io>(
      storage, 
      'admissionregistration.k8s.io',
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
 * Handler for POST /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
 */
async function handlepost_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.admissionregistration_k8s_io;
  
  logger.info(`Creating admissionregistration.k8s.io ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.admissionregistration_k8s_io;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
 */
async function handledelete_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('admissionregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `admissionregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Validatingadmissionpolicybindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Mutatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('admissionregistration.k8s.io', name, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name
 */
async function handleput_Apis_Admissionregistration_K8s_Io_V1_Mutatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.admissionregistration_k8s_io;
  
  logger.info(`Updating admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('admissionregistration.k8s.io', name, resource, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name
 */
async function handledelete_Apis_Admissionregistration_K8s_Io_V1_Mutatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('admissionregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `admissionregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name
 */
async function handlepatch_Apis_Admissionregistration_K8s_Io_V1_Mutatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.admissionregistration_k8s_io>(
      storage, 
      'admissionregistration.k8s.io',
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
 * Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/:name
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('admissionregistration.k8s.io', name, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/:name
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicies__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('admissionregistration.k8s.io', name, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Watch_Validatingadmissionpolicies(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing admissionregistration.k8s.ios in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.admissionregistration_k8s_io>(
    storage, 
    'admissionregistration.k8s.io',
    namespace, 
    {
      limit: limit ? parseInt(limit as string) : undefined,
      continueToken: continueToken as string,
      labelSelector: labelSelector as string,
      fieldSelector: fieldSelector as string
    }
  );
  
  res.json(result);
}

/**
 * Handler for PUT /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
 */
async function handleput_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.admissionregistration_k8s_io;
  
  logger.info(`Updating admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('admissionregistration.k8s.io', name, resource, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
 */
async function handledelete_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('admissionregistration.k8s.io', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `admissionregistration.k8s.io "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
 */
async function handlepatch_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.admissionregistration_k8s_io>(
      storage, 
      'admissionregistration.k8s.io',
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
 * Handler for GET /apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name
 */
async function handleget_Apis_Admissionregistration_K8s_Io_V1_Validatingwebhookconfigurations__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting admissionregistration.k8s.io ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('admissionregistration.k8s.io', name, namespace) as models.admissionregistration_k8s_io;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('admissionregistration.k8s.io', name, namespace));
      return;
    }
    throw error;
  }
}
