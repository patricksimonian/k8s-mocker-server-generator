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

export function createappsRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * GET /apis/apps/v1/watch/replicasets
   * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/replicasets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Replicasets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
   * read status of the specified ReplicaSet
   */
  router.get('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
   * replace status of the specified ReplicaSet
   */
  router.put('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
   * partially update status of the specified ReplicaSet
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/
   * get available resources
   */
  router.get('/apis/apps/v1/', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/replicasets/:name
   * read the specified ReplicaSet
   */
  router.get('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name
   * replace the specified ReplicaSet
   */
  router.put('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/replicasets/:name
   * delete a ReplicaSet
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name
   * partially update the specified ReplicaSet
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/deployments/:name
   * watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Deployments-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/deployments
   * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Deployments(req, res, storage);
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
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name-Scale(req, res, storage);
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
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name-Scale(req, res, storage);
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
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name-Scale(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/daemonsets
   * watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Daemonsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/replicasets
   * list or watch objects of kind ReplicaSet
   */
  router.get('/apis/apps/v1/replicasets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Replicasets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
   * replace status of the specified DaemonSet
   */
  router.put('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Daemonsets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
   * partially update status of the specified DaemonSet
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Daemonsets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
   * read status of the specified DaemonSet
   */
  router.get('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Daemonsets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
   * read status of the specified StatefulSet
   */
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
   * replace status of the specified StatefulSet
   */
  router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
   * partially update status of the specified StatefulSet
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name-Status(req, res, storage);
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
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name-Scale(req, res, storage);
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
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name-Scale(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale
   * partially update scale of the specified StatefulSet
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name-Scale(req, res, storage);
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
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name-Scale(req, res, storage);
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
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name-Scale(req, res, storage);
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
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Replicasets-_name-Scale(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
   * read the specified ControllerRevision
   */
  router.get('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Controllerrevisions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
   * replace the specified ControllerRevision
   */
  router.put('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Controllerrevisions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
   * delete a ControllerRevision
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Controllerrevisions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
   * partially update the specified ControllerRevision
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Controllerrevisions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/controllerrevisions
   * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/controllerrevisions', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Controllerrevisions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/controllerrevisions
   * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Controllerrevisions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/daemonsets
   * list or watch objects of kind DaemonSet
   */
  router.get('/apis/apps/v1/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Daemonsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/apps/v1/namespaces/:namespace/daemonsets
   * create a DaemonSet
   */
  router.post('/apis/apps/v1/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      await handlePost-Apis-Apps-V1-Namespaces-_namespace-Daemonsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/daemonsets
   * delete collection of DaemonSet
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Daemonsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/statefulsets
   * list or watch objects of kind StatefulSet
   */
  router.get('/apis/apps/v1/statefulsets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Statefulsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/statefulsets
   * list or watch objects of kind StatefulSet
   */
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Statefulsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/apps/v1/namespaces/:namespace/statefulsets
   * create a StatefulSet
   */
  router.post('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      await handlePost-Apis-Apps-V1-Namespaces-_namespace-Statefulsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/statefulsets
   * delete collection of StatefulSet
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Statefulsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/replicasets/:name
   * watch changes to an object of kind ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Replicasets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name
   * watch changes to an object of kind StatefulSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Statefulsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/deployments
   * list or watch objects of kind Deployment
   */
  router.get('/apis/apps/v1/deployments', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Deployments(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/deployments
   * delete collection of Deployment
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Deployments(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/deployments
   * list or watch objects of kind Deployment
   */
  router.get('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Deployments(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/apps/v1/namespaces/:namespace/deployments
   * create a Deployment
   */
  router.post('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      await handlePost-Apis-Apps-V1-Namespaces-_namespace-Deployments(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/deployments
   * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/deployments', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Deployments(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/deployments/:name
   * delete a Deployment
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name
   * partially update the specified Deployment
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/deployments/:name
   * read the specified Deployment
   */
  router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apps/v1/namespaces/:namespace/deployments/:name
   * replace the specified Deployment
   */
  router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apps/v1/namespaces/:namespace/deployments/:name/status
   * replace status of the specified Deployment
   */
  router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
    try {
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name/status
   * partially update status of the specified Deployment
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/deployments/:name/status
   * read status of the specified Deployment
   */
  router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Deployments-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/controllerrevisions
   * list or watch objects of kind ControllerRevision
   */
  router.get('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Controllerrevisions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/apps/v1/namespaces/:namespace/controllerrevisions
   * create a ControllerRevision
   */
  router.post('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      await handlePost-Apis-Apps-V1-Namespaces-_namespace-Controllerrevisions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/controllerrevisions
   * delete collection of ControllerRevision
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Controllerrevisions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/daemonsets
   * list or watch objects of kind DaemonSet
   */
  router.get('/apis/apps/v1/daemonsets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Daemonsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/statefulsets
   * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/statefulsets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Statefulsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/replicasets
   * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/replicasets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Replicasets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/daemonsets/:name
   * partially update the specified DaemonSet
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Daemonsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/daemonsets/:name
   * read the specified DaemonSet
   */
  router.get('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Daemonsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apps/v1/namespaces/:namespace/daemonsets/:name
   * replace the specified DaemonSet
   */
  router.put('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Daemonsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/daemonsets/:name
   * delete a DaemonSet
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Daemonsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name
   * watch changes to an object of kind ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Controllerrevisions-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/daemonsets/:name
   * watch changes to an object of kind DaemonSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Daemonsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/namespaces/:namespace/statefulsets
   * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Namespaces-_namespace-Statefulsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name
   * read the specified StatefulSet
   */
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name
   * replace the specified StatefulSet
   */
  router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      await handlePut-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/statefulsets/:name
   * delete a StatefulSet
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name
   * partially update the specified StatefulSet
   */
  router.patch('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      await handlePatch-Apis-Apps-V1-Namespaces-_namespace-Statefulsets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/
   * get information of a group
   */
  router.get('/apis/apps/', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/controllerrevisions
   * list or watch objects of kind ControllerRevision
   */
  router.get('/apis/apps/v1/controllerrevisions', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Controllerrevisions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/watch/daemonsets
   * watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
   */
  router.get('/apis/apps/v1/watch/daemonsets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Watch-Daemonsets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /apis/apps/v1/namespaces/:namespace/replicasets
   * list or watch objects of kind ReplicaSet
   */
  router.get('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
    try {
      await handleGet-Apis-Apps-V1-Namespaces-_namespace-Replicasets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /apis/apps/v1/namespaces/:namespace/replicasets
   * create a ReplicaSet
   */
  router.post('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
    try {
      await handlePost-Apis-Apps-V1-Namespaces-_namespace-Replicasets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /apis/apps/v1/namespaces/:namespace/replicasets
   * delete collection of ReplicaSet
   */
  router.delete('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
    try {
      await handleDelete-Apis-Apps-V1-Namespaces-_namespace-Replicasets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /apis/apps/v1/watch/replicasets
 */
async function handleget_Apis_Apps_V1_Watch_Replicasets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name/status
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/v1/
 */
async function handleget_Apis_Apps_V1_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/replicasets/:name
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/replicasets/:name
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Replicasets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/deployments/:name
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Deployments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/deployments
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Deployments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/deployments/:name/scale
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name/scale
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/daemonsets
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Daemonsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/replicasets
 */
async function handleget_Apis_Apps_V1_Replicasets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/daemonsets/:name/status
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name/status
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/replicasets/:name/scale
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/replicasets/:name/scale
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/replicasets/:name/scale
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Replicasets__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/controllerrevisions/:name
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/v1/watch/controllerrevisions
 */
async function handleget_Apis_Apps_V1_Watch_Controllerrevisions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/controllerrevisions
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Controllerrevisions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/namespaces/:namespace/daemonsets
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Daemonsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/apps/v1/namespaces/:namespace/daemonsets
 */
async function handlepost_Apis_Apps_V1_Namespaces__namespace_Daemonsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.apps;
  
  logger.info(`Creating apps ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.apps;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/daemonsets
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Daemonsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/statefulsets
 */
async function handleget_Apis_Apps_V1_Statefulsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/statefulsets
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Statefulsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/apps/v1/namespaces/:namespace/statefulsets
 */
async function handlepost_Apis_Apps_V1_Namespaces__namespace_Statefulsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.apps;
  
  logger.info(`Creating apps ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.apps;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/statefulsets
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Statefulsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/replicasets/:name
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Replicasets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Statefulsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/deployments
 */
async function handleget_Apis_Apps_V1_Deployments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/deployments
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Deployments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/namespaces/:namespace/deployments
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Deployments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/apps/v1/namespaces/:namespace/deployments
 */
async function handlepost_Apis_Apps_V1_Namespaces__namespace_Deployments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.apps;
  
  logger.info(`Creating apps ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.apps;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /apis/apps/v1/watch/deployments
 */
async function handleget_Apis_Apps_V1_Watch_Deployments(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/deployments/:name
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Deployments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Deployments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/deployments/:name
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Deployments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/deployments/:name
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Deployments__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/deployments/:name/status
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/deployments/:name/status
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/deployments/:name/status
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Deployments__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/namespaces/:namespace/controllerrevisions
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/apps/v1/namespaces/:namespace/controllerrevisions
 */
async function handlepost_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.apps;
  
  logger.info(`Creating apps ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.apps;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/controllerrevisions
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Controllerrevisions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/daemonsets
 */
async function handleget_Apis_Apps_V1_Daemonsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for GET /apis/apps/v1/watch/statefulsets
 */
async function handleget_Apis_Apps_V1_Watch_Statefulsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/replicasets
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Replicasets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/daemonsets/:name
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/daemonsets/:name
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/daemonsets/:name
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/daemonsets/:name
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Daemonsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Controllerrevisions__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/daemonsets/:name
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Daemonsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/watch/namespaces/:namespace/statefulsets
 */
async function handleget_Apis_Apps_V1_Watch_Namespaces__namespace_Statefulsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /apis/apps/v1/namespaces/:namespace/statefulsets/:name
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /apis/apps/v1/namespaces/:namespace/statefulsets/:name
 */
async function handleput_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.apps;
  
  logger.info(`Updating apps ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('apps', name, resource, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/statefulsets/:name
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /apis/apps/v1/namespaces/:namespace/statefulsets/:name
 */
async function handlepatch_Apis_Apps_V1_Namespaces__namespace_Statefulsets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching apps ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.apps>(
      storage, 
      'apps',
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
 * Handler for GET /apis/apps/
 */
async function handleget_Apis_Apps_(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for GET /apis/apps/v1/controllerrevisions
 */
async function handleget_Apis_Apps_V1_Controllerrevisions(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for GET /apis/apps/v1/watch/daemonsets
 */
async function handleget_Apis_Apps_V1_Watch_Daemonsets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing appss in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.apps>(
    storage, 
    'apps',
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
 * Handler for GET /apis/apps/v1/namespaces/:namespace/replicasets
 */
async function handleget_Apis_Apps_V1_Namespaces__namespace_Replicasets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting apps ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('apps', name, namespace) as models.apps;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /apis/apps/v1/namespaces/:namespace/replicasets
 */
async function handlepost_Apis_Apps_V1_Namespaces__namespace_Replicasets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.apps;
  
  logger.info(`Creating apps ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.apps;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /apis/apps/v1/namespaces/:namespace/replicasets
 */
async function handledelete_Apis_Apps_V1_Namespaces__namespace_Replicasets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting apps ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('apps', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `apps "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('apps', name, namespace));
      return;
    }
    throw error;
  }
}
