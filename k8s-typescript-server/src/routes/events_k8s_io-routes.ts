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

/**
 * Create routes for events.k8s.io resources
 */
export function createevents_k8s_ioRoutes(storage: Storage): express.Router {
  const router = express.Router();

  
  
  /**
   * GET /apis/events.k8s.io/v1/
   * get available resources
   */
  router.get('/apis/events.k8s.io/v1/', async (req, res, next) => {
    try {
      await handlegetModel_Apis_Events_K8s_Io_V1_(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * GET /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
   * read the specified Event
   */
  router.get('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handlegetModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * PUT /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
   * replace the specified Event
   */
  router.put('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handleputModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * DELETE /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
   * delete an Event
   */
  router.delete('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handledeleteModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * PATCH /apis/events.k8s.io/v1/namespaces/:namespace/events/:name
   * partially update the specified Event
   */
  router.patch('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handlepatchModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events__name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * GET /apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name
   * watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handlegetModel_Apis_Events_K8s_Io_V1_Watch_Namespaces__namespace_Events__name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * GET /apis/events.k8s.io/v1/watch/namespaces/:namespace/events
   * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/events.k8s.io/v1/watch/namespaces/:namespace/events', async (req, res, next) => {
    try {
      await handlegetModel_Apis_Events_K8s_Io_V1_Watch_Namespaces__namespace_Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * GET /apis/events.k8s.io/v1/events
   * list or watch objects of kind Event
   */
  router.get('/apis/events.k8s.io/v1/events', async (req, res, next) => {
    try {
      await handlegetModel_Apis_Events_K8s_Io_V1_Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * GET /apis/events.k8s.io/v1/watch/events
   * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/events.k8s.io/v1/watch/events', async (req, res, next) => {
    try {
      await handlegetModel_Apis_Events_K8s_Io_V1_Watch_Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * GET /apis/events.k8s.io/v1/namespaces/:namespace/events
   * list or watch objects of kind Event
   */
  router.get('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      await handlegetModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * POST /apis/events.k8s.io/v1/namespaces/:namespace/events
   * create an Event
   */
  router.post('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      await handlepostModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * DELETE /apis/events.k8s.io/v1/namespaces/:namespace/events
   * delete collection of Event
   */
  router.delete('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      await handledeleteModel_Apis_Events_K8s_Io_V1_Namespaces__namespace_Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  /**
   * GET /apis/events.k8s.io/
   * get information of a group
   */
  router.get('/apis/events.k8s.io/', async (req, res, next) => {
    try {
      await handlegetModel_Apis_Events_K8s_Io_(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  
  

  return router;
}



/**
 * Handler for GET /apis/events.k8s.io/v1/
 * get available resources
 */
async function handlegetModel_Apis_Events_K8s_Io_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  
  
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing 