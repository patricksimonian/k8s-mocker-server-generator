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

export function createnamespacesRoutes(storage: Storage): express.Router {
  const router = express.Router();
  /**
   * POST /api/v1/namespaces/:namespace/pods/:name/binding
   * create binding of a Pod
   */
  router.post('/api/v1/namespaces/:namespace/pods/:name/binding', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Pods-_name-Binding(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/podtemplates
   * create a PodTemplate
   */
  router.post('/api/v1/namespaces/:namespace/podtemplates', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Podtemplates(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/podtemplates
   * delete collection of PodTemplate
   */
  router.delete('/api/v1/namespaces/:namespace/podtemplates', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Podtemplates(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/podtemplates
   * list or watch objects of kind PodTemplate
   */
  router.get('/api/v1/namespaces/:namespace/podtemplates', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Podtemplates(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/endpoints
   * delete collection of Endpoints
   */
  router.delete('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Endpoints(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/endpoints
   * list or watch objects of kind Endpoints
   */
  router.get('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Endpoints(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/endpoints
   * create Endpoints
   */
  router.post('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Endpoints(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/pods/:name
   * read the specified Pod
   */
  router.get('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Pods-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/pods/:name
   * replace the specified Pod
   */
  router.put('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Pods-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/pods/:name
   * delete a Pod
   */
  router.delete('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Pods-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/pods/:name
   * partially update the specified Pod
   */
  router.patch('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Pods-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/serviceaccounts/:name
   * read the specified ServiceAccount
   */
  router.get('/api/v1/namespaces/:namespace/serviceaccounts/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Serviceaccounts-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/serviceaccounts/:name
   * replace the specified ServiceAccount
   */
  router.put('/api/v1/namespaces/:namespace/serviceaccounts/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Serviceaccounts-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/serviceaccounts/:name
   * delete a ServiceAccount
   */
  router.delete('/api/v1/namespaces/:namespace/serviceaccounts/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Serviceaccounts-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/serviceaccounts/:name
   * partially update the specified ServiceAccount
   */
  router.patch('/api/v1/namespaces/:namespace/serviceaccounts/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Serviceaccounts-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/resourcequotas/:name
   * replace the specified ResourceQuota
   */
  router.put('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Resourcequotas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/resourcequotas/:name
   * delete a ResourceQuota
   */
  router.delete('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Resourcequotas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/resourcequotas/:name
   * partially update the specified ResourceQuota
   */
  router.patch('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Resourcequotas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/resourcequotas/:name
   * read the specified ResourceQuota
   */
  router.get('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Resourcequotas-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/pods/:name/exec
   * connect GET requests to exec of Pod
   */
  router.get('/api/v1/namespaces/:namespace/pods/:name/exec', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Pods-_name-Exec(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/pods/:name/exec
   * connect POST requests to exec of Pod
   */
  router.post('/api/v1/namespaces/:namespace/pods/:name/exec', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Pods-_name-Exec(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers
   * replace ephemeralcontainers of the specified Pod
   */
  router.put('/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Pods-_name-Ephemeralcontainers(req, res, storage);
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
      await handlePatch-Api-V1-Namespaces-_namespace-Pods-_name-Ephemeralcontainers(req, res, storage);
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
      await handleGet-Api-V1-Namespaces-_namespace-Pods-_name-Ephemeralcontainers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:name
   * delete a Namespace
   */
  router.delete('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:name
   * partially update the specified Namespace
   */
  router.patch('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:name
   * read the specified Namespace
   */
  router.get('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:name
   * replace the specified Namespace
   */
  router.put('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/pods/:name/portforward
   * connect GET requests to portforward of Pod
   */
  router.get('/api/v1/namespaces/:namespace/pods/:name/portforward', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Pods-_name-Portforward(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/pods/:name/portforward
   * connect POST requests to portforward of Pod
   */
  router.post('/api/v1/namespaces/:namespace/pods/:name/portforward', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Pods-_name-Portforward(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/secrets/:name
   * partially update the specified Secret
   */
  router.patch('/api/v1/namespaces/:namespace/secrets/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Secrets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/secrets/:name
   * read the specified Secret
   */
  router.get('/api/v1/namespaces/:namespace/secrets/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Secrets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/secrets/:name
   * replace the specified Secret
   */
  router.put('/api/v1/namespaces/:namespace/secrets/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Secrets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/secrets/:name
   * delete a Secret
   */
  router.delete('/api/v1/namespaces/:namespace/secrets/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Secrets-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/pods/:name/eviction
   * create eviction of a Pod
   */
  router.post('/api/v1/namespaces/:namespace/pods/:name/eviction', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Pods-_name-Eviction(req, res, storage);
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
      await handleDelete-Api-V1-Namespaces-_namespace-Services-_name-Proxy(req, res, storage);
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
      await handleOptions-Api-V1-Namespaces-_namespace-Services-_name-Proxy(req, res, storage);
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
      await handleHead-Api-V1-Namespaces-_namespace-Services-_name-Proxy(req, res, storage);
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
      await handlePatch-Api-V1-Namespaces-_namespace-Services-_name-Proxy(req, res, storage);
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
      await handleGet-Api-V1-Namespaces-_namespace-Services-_name-Proxy(req, res, storage);
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
      await handlePut-Api-V1-Namespaces-_namespace-Services-_name-Proxy(req, res, storage);
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
      await handlePost-Api-V1-Namespaces-_namespace-Services-_name-Proxy(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/persistentvolumeclaims
   * list or watch objects of kind PersistentVolumeClaim
   */
  router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Persistentvolumeclaims(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/persistentvolumeclaims
   * create a PersistentVolumeClaim
   */
  router.post('/api/v1/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Persistentvolumeclaims(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/persistentvolumeclaims
   * delete collection of PersistentVolumeClaim
   */
  router.delete('/api/v1/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Persistentvolumeclaims(req, res, storage);
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
      await handlePost-Api-V1-Namespaces-_namespace-Pods-_name-Proxy-_path(req, res, storage);
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
      await handleDelete-Api-V1-Namespaces-_namespace-Pods-_name-Proxy-_path(req, res, storage);
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
      await handleOptions-Api-V1-Namespaces-_namespace-Pods-_name-Proxy-_path(req, res, storage);
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
      await handleHead-Api-V1-Namespaces-_namespace-Pods-_name-Proxy-_path(req, res, storage);
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
      await handlePatch-Api-V1-Namespaces-_namespace-Pods-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/pods/:name/proxy/:path
   * connect GET requests to proxy of Pod
   */
  router.get('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Pods-_name-Proxy-_path(req, res, storage);
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
      await handlePut-Api-V1-Namespaces-_namespace-Pods-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/services
   * create a Service
   */
  router.post('/api/v1/namespaces/:namespace/services', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Services(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/services
   * delete collection of Service
   */
  router.delete('/api/v1/namespaces/:namespace/services', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Services(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/services
   * list or watch objects of kind Service
   */
  router.get('/api/v1/namespaces/:namespace/services', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Services(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/limitranges/:name
   * read the specified LimitRange
   */
  router.get('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Limitranges-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/limitranges/:name
   * replace the specified LimitRange
   */
  router.put('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Limitranges-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/limitranges/:name
   * delete a LimitRange
   */
  router.delete('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Limitranges-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/limitranges/:name
   * partially update the specified LimitRange
   */
  router.patch('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Limitranges-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/podtemplates/:name
   * read the specified PodTemplate
   */
  router.get('/api/v1/namespaces/:namespace/podtemplates/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Podtemplates-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/podtemplates/:name
   * replace the specified PodTemplate
   */
  router.put('/api/v1/namespaces/:namespace/podtemplates/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Podtemplates-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/podtemplates/:name
   * delete a PodTemplate
   */
  router.delete('/api/v1/namespaces/:namespace/podtemplates/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Podtemplates-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/podtemplates/:name
   * partially update the specified PodTemplate
   */
  router.patch('/api/v1/namespaces/:namespace/podtemplates/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Podtemplates-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/configmaps/:name
   * read the specified ConfigMap
   */
  router.get('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Configmaps-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/configmaps/:name
   * replace the specified ConfigMap
   */
  router.put('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Configmaps-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/configmaps/:name
   * delete a ConfigMap
   */
  router.delete('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Configmaps-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/configmaps/:name
   * partially update the specified ConfigMap
   */
  router.patch('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Configmaps-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/secrets
   * list or watch objects of kind Secret
   */
  router.get('/api/v1/namespaces/:namespace/secrets', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Secrets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/secrets
   * create a Secret
   */
  router.post('/api/v1/namespaces/:namespace/secrets', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Secrets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/secrets
   * delete collection of Secret
   */
  router.delete('/api/v1/namespaces/:namespace/secrets', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Secrets(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/replicationcontrollers/:name
   * read the specified ReplicationController
   */
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/replicationcontrollers/:name
   * replace the specified ReplicationController
   */
  router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/replicationcontrollers/:name
   * delete a ReplicationController
   */
  router.delete('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/replicationcontrollers/:name
   * partially update the specified ReplicationController
   */
  router.patch('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name(req, res, storage);
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
      await handleGet-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name-Scale(req, res, storage);
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
      await handlePut-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name-Scale(req, res, storage);
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
      await handlePatch-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name-Scale(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/persistentvolumeclaims/:name
   * read the specified PersistentVolumeClaim
   */
  router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Persistentvolumeclaims-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/persistentvolumeclaims/:name
   * replace the specified PersistentVolumeClaim
   */
  router.put('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Persistentvolumeclaims-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/persistentvolumeclaims/:name
   * delete a PersistentVolumeClaim
   */
  router.delete('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Persistentvolumeclaims-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/persistentvolumeclaims/:name
   * partially update the specified PersistentVolumeClaim
   */
  router.patch('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Persistentvolumeclaims-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/configmaps
   * delete collection of ConfigMap
   */
  router.delete('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Configmaps(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/configmaps
   * list or watch objects of kind ConfigMap
   */
  router.get('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Configmaps(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/configmaps
   * create a ConfigMap
   */
  router.post('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Configmaps(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/services/:name
   * read the specified Service
   */
  router.get('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Services-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/services/:name
   * replace the specified Service
   */
  router.put('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Services-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/services/:name
   * delete a Service
   */
  router.delete('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Services-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/services/:name
   * partially update the specified Service
   */
  router.patch('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Services-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/services/:name/status
   * read status of the specified Service
   */
  router.get('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Services-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/services/:name/status
   * replace status of the specified Service
   */
  router.put('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Services-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/services/:name/status
   * partially update status of the specified Service
   */
  router.patch('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Services-_name-Status(req, res, storage);
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
      await handlePut-Api-V1-Namespaces-_namespace-Pods-_name-Proxy(req, res, storage);
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
      await handlePost-Api-V1-Namespaces-_namespace-Pods-_name-Proxy(req, res, storage);
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
      await handleDelete-Api-V1-Namespaces-_namespace-Pods-_name-Proxy(req, res, storage);
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
      await handleOptions-Api-V1-Namespaces-_namespace-Pods-_name-Proxy(req, res, storage);
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
      await handleHead-Api-V1-Namespaces-_namespace-Pods-_name-Proxy(req, res, storage);
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
      await handlePatch-Api-V1-Namespaces-_namespace-Pods-_name-Proxy(req, res, storage);
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
      await handleGet-Api-V1-Namespaces-_namespace-Pods-_name-Proxy(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:name/finalize
   * replace finalize of the specified Namespace
   */
  router.put('/api/v1/namespaces/:name/finalize', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_name-Finalize(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/bindings
   * create a Binding
   */
  router.post('/api/v1/namespaces/:namespace/bindings', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Bindings(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
   * read status of the specified PersistentVolumeClaim
   */
  router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Persistentvolumeclaims-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
   * replace status of the specified PersistentVolumeClaim
   */
  router.put('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Persistentvolumeclaims-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
   * partially update status of the specified PersistentVolumeClaim
   */
  router.patch('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Persistentvolumeclaims-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/resourcequotas
   * create a ResourceQuota
   */
  router.post('/api/v1/namespaces/:namespace/resourcequotas', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Resourcequotas(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/resourcequotas
   * delete collection of ResourceQuota
   */
  router.delete('/api/v1/namespaces/:namespace/resourcequotas', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Resourcequotas(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/resourcequotas
   * list or watch objects of kind ResourceQuota
   */
  router.get('/api/v1/namespaces/:namespace/resourcequotas', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Resourcequotas(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/pods/:name/log
   * read log of the specified Pod
   */
  router.get('/api/v1/namespaces/:namespace/pods/:name/log', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Pods-_name-Log(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
   * read status of the specified ReplicationController
   */
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
   * replace status of the specified ReplicationController
   */
  router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
   * partially update status of the specified ReplicationController
   */
  router.patch('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Replicationcontrollers-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/pods
   * list or watch objects of kind Pod
   */
  router.get('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Pods(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/pods
   * create a Pod
   */
  router.post('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Pods(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/pods
   * delete collection of Pod
   */
  router.delete('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Pods(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/endpoints/:name
   * partially update the specified Endpoints
   */
  router.patch('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Endpoints-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/endpoints/:name
   * read the specified Endpoints
   */
  router.get('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Endpoints-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/endpoints/:name
   * replace the specified Endpoints
   */
  router.put('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Endpoints-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/endpoints/:name
   * delete Endpoints
   */
  router.delete('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Endpoints-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/serviceaccounts
   * list or watch objects of kind ServiceAccount
   */
  router.get('/api/v1/namespaces/:namespace/serviceaccounts', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Serviceaccounts(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/serviceaccounts
   * create a ServiceAccount
   */
  router.post('/api/v1/namespaces/:namespace/serviceaccounts', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Serviceaccounts(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/serviceaccounts
   * delete collection of ServiceAccount
   */
  router.delete('/api/v1/namespaces/:namespace/serviceaccounts', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Serviceaccounts(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/replicationcontrollers
   * create a ReplicationController
   */
  router.post('/api/v1/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Replicationcontrollers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/replicationcontrollers
   * delete collection of ReplicationController
   */
  router.delete('/api/v1/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Replicationcontrollers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/replicationcontrollers
   * list or watch objects of kind ReplicationController
   */
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Replicationcontrollers(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:name/status
   * read status of the specified Namespace
   */
  router.get('/api/v1/namespaces/:name/status', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:name/status
   * replace status of the specified Namespace
   */
  router.put('/api/v1/namespaces/:name/status', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:name/status
   * partially update status of the specified Namespace
   */
  router.patch('/api/v1/namespaces/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/pods/:name/attach
   * connect GET requests to attach of Pod
   */
  router.get('/api/v1/namespaces/:namespace/pods/:name/attach', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Pods-_name-Attach(req, res, storage);
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
      await handlePost-Api-V1-Namespaces-_namespace-Pods-_name-Attach(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/events
   * create an Event
   */
  router.post('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/events
   * delete collection of Event
   */
  router.delete('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Events(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/events
   * list or watch objects of kind Event
   */
  router.get('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Events(req, res, storage);
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
      await handleDelete-Api-V1-Namespaces-_namespace-Services-_name-Proxy-_path(req, res, storage);
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
      await handleOptions-Api-V1-Namespaces-_namespace-Services-_name-Proxy-_path(req, res, storage);
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
      await handleHead-Api-V1-Namespaces-_namespace-Services-_name-Proxy-_path(req, res, storage);
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
      await handlePatch-Api-V1-Namespaces-_namespace-Services-_name-Proxy-_path(req, res, storage);
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
      await handleGet-Api-V1-Namespaces-_namespace-Services-_name-Proxy-_path(req, res, storage);
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
      await handlePut-Api-V1-Namespaces-_namespace-Services-_name-Proxy-_path(req, res, storage);
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
      await handlePost-Api-V1-Namespaces-_namespace-Services-_name-Proxy-_path(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/pods/:name/status
   * read status of the specified Pod
   */
  router.get('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Pods-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/pods/:name/status
   * replace status of the specified Pod
   */
  router.put('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Pods-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/pods/:name/status
   * partially update status of the specified Pod
   */
  router.patch('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Pods-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/limitranges
   * list or watch objects of kind LimitRange
   */
  router.get('/api/v1/namespaces/:namespace/limitranges', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Limitranges(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/limitranges
   * create a LimitRange
   */
  router.post('/api/v1/namespaces/:namespace/limitranges', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Limitranges(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/limitranges
   * delete collection of LimitRange
   */
  router.delete('/api/v1/namespaces/:namespace/limitranges', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Limitranges(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces
   * list or watch objects of kind Namespace
   */
  router.get('/api/v1/namespaces', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces
   * create a Namespace
   */
  router.post('/api/v1/namespaces', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/resourcequotas/:name/status
   * replace status of the specified ResourceQuota
   */
  router.put('/api/v1/namespaces/:namespace/resourcequotas/:name/status', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Resourcequotas-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/resourcequotas/:name/status
   * partially update status of the specified ResourceQuota
   */
  router.patch('/api/v1/namespaces/:namespace/resourcequotas/:name/status', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Resourcequotas-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/resourcequotas/:name/status
   * read status of the specified ResourceQuota
   */
  router.get('/api/v1/namespaces/:namespace/resourcequotas/:name/status', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Resourcequotas-_name-Status(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * POST /api/v1/namespaces/:namespace/serviceaccounts/:name/token
   * create token of a ServiceAccount
   */
  router.post('/api/v1/namespaces/:namespace/serviceaccounts/:name/token', async (req, res, next) => {
    try {
      await handlePost-Api-V1-Namespaces-_namespace-Serviceaccounts-_name-Token(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * GET /api/v1/namespaces/:namespace/events/:name
   * read the specified Event
   */
  router.get('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handleGet-Api-V1-Namespaces-_namespace-Events-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PUT /api/v1/namespaces/:namespace/events/:name
   * replace the specified Event
   */
  router.put('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handlePut-Api-V1-Namespaces-_namespace-Events-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * DELETE /api/v1/namespaces/:namespace/events/:name
   * delete an Event
   */
  router.delete('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handleDelete-Api-V1-Namespaces-_namespace-Events-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });
  /**
   * PATCH /api/v1/namespaces/:namespace/events/:name
   * partially update the specified Event
   */
  router.patch('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      await handlePatch-Api-V1-Namespaces-_namespace-Events-_name(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/pods/:name/binding
 */
async function handlepost_Api_V1_Namespaces__namespace_Pods__name_Binding(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/podtemplates
 */
async function handlepost_Api_V1_Namespaces__namespace_Podtemplates(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/podtemplates
 */
async function handledelete_Api_V1_Namespaces__namespace_Podtemplates(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/podtemplates
 */
async function handleget_Api_V1_Namespaces__namespace_Podtemplates(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/endpoints
 */
async function handledelete_Api_V1_Namespaces__namespace_Endpoints(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/endpoints
 */
async function handleget_Api_V1_Namespaces__namespace_Endpoints(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/endpoints
 */
async function handlepost_Api_V1_Namespaces__namespace_Endpoints(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/pods/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Pods__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/pods/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Pods__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/pods/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Pods__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/pods/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Pods__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/serviceaccounts/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Serviceaccounts__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/serviceaccounts/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Serviceaccounts__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/serviceaccounts/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Serviceaccounts__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/serviceaccounts/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Serviceaccounts__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for PUT /api/v1/namespaces/:namespace/resourcequotas/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Resourcequotas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/resourcequotas/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Resourcequotas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/resourcequotas/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Resourcequotas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/resourcequotas/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Resourcequotas__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/pods/:name/exec
 */
async function handleget_Api_V1_Namespaces__namespace_Pods__name_Exec(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/pods/:name/exec
 */
async function handlepost_Api_V1_Namespaces__namespace_Pods__name_Exec(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers
 */
async function handleput_Api_V1_Namespaces__namespace_Pods__name_Ephemeralcontainers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers
 */
async function handlepatch_Api_V1_Namespaces__namespace_Pods__name_Ephemeralcontainers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 */
async function handleget_Api_V1_Namespaces__namespace_Pods__name_Ephemeralcontainers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:name
 */
async function handledelete_Api_V1_Namespaces__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:name
 */
async function handlepatch_Api_V1_Namespaces__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:name
 */
async function handleget_Api_V1_Namespaces__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:name
 */
async function handleput_Api_V1_Namespaces__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/pods/:name/portforward
 */
async function handleget_Api_V1_Namespaces__namespace_Pods__name_Portforward(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/pods/:name/portforward
 */
async function handlepost_Api_V1_Namespaces__namespace_Pods__name_Portforward(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/secrets/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Secrets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/secrets/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Secrets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/secrets/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Secrets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/secrets/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Secrets__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/pods/:name/eviction
 */
async function handlepost_Api_V1_Namespaces__namespace_Pods__name_Eviction(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/services/:name/proxy
 */
async function handledelete_Api_V1_Namespaces__namespace_Services__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for OPTIONS /api/v1/namespaces/:namespace/services/:name/proxy
 */
async function handleoptions_Api_V1_Namespaces__namespace_Services__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for HEAD /api/v1/namespaces/:namespace/services/:name/proxy
 */
async function handlehead_Api_V1_Namespaces__namespace_Services__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/services/:name/proxy
 */
async function handlepatch_Api_V1_Namespaces__namespace_Services__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 */
async function handleget_Api_V1_Namespaces__namespace_Services__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/services/:name/proxy
 */
async function handleput_Api_V1_Namespaces__namespace_Services__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/services/:name/proxy
 */
async function handlepost_Api_V1_Namespaces__namespace_Services__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/persistentvolumeclaims
 */
async function handleget_Api_V1_Namespaces__namespace_Persistentvolumeclaims(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/persistentvolumeclaims
 */
async function handlepost_Api_V1_Namespaces__namespace_Persistentvolumeclaims(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/persistentvolumeclaims
 */
async function handledelete_Api_V1_Namespaces__namespace_Persistentvolumeclaims(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 */
async function handlepost_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 */
async function handledelete_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for OPTIONS /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 */
async function handleoptions_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for HEAD /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 */
async function handlehead_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 */
async function handlepatch_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 */
async function handleget_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/pods/:name/proxy/:path
 */
async function handleput_Api_V1_Namespaces__namespace_Pods__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/services
 */
async function handlepost_Api_V1_Namespaces__namespace_Services(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/services
 */
async function handledelete_Api_V1_Namespaces__namespace_Services(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/services
 */
async function handleget_Api_V1_Namespaces__namespace_Services(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/limitranges/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Limitranges__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/limitranges/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Limitranges__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/limitranges/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Limitranges__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/limitranges/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Limitranges__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/podtemplates/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Podtemplates__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/podtemplates/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Podtemplates__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/podtemplates/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Podtemplates__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/podtemplates/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Podtemplates__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/configmaps/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Configmaps__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/configmaps/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Configmaps__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/configmaps/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Configmaps__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/configmaps/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Configmaps__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/secrets
 */
async function handleget_Api_V1_Namespaces__namespace_Secrets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/secrets
 */
async function handlepost_Api_V1_Namespaces__namespace_Secrets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/secrets
 */
async function handledelete_Api_V1_Namespaces__namespace_Secrets(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/replicationcontrollers/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Replicationcontrollers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/replicationcontrollers/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Replicationcontrollers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/replicationcontrollers/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Replicationcontrollers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/replicationcontrollers/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Replicationcontrollers__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 */
async function handleget_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/replicationcontrollers/:name/scale
 */
async function handleput_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/replicationcontrollers/:name/scale
 */
async function handlepatch_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Scale(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/persistentvolumeclaims/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/persistentvolumeclaims/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/persistentvolumeclaims/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/persistentvolumeclaims/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for DELETE /api/v1/namespaces/:namespace/configmaps
 */
async function handledelete_Api_V1_Namespaces__namespace_Configmaps(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/configmaps
 */
async function handleget_Api_V1_Namespaces__namespace_Configmaps(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/configmaps
 */
async function handlepost_Api_V1_Namespaces__namespace_Configmaps(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/services/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Services__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/services/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Services__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/services/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Services__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/services/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Services__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/services/:name/status
 */
async function handleget_Api_V1_Namespaces__namespace_Services__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/services/:name/status
 */
async function handleput_Api_V1_Namespaces__namespace_Services__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/services/:name/status
 */
async function handlepatch_Api_V1_Namespaces__namespace_Services__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for PUT /api/v1/namespaces/:namespace/pods/:name/proxy
 */
async function handleput_Api_V1_Namespaces__namespace_Pods__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/pods/:name/proxy
 */
async function handlepost_Api_V1_Namespaces__namespace_Pods__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/pods/:name/proxy
 */
async function handledelete_Api_V1_Namespaces__namespace_Pods__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for OPTIONS /api/v1/namespaces/:namespace/pods/:name/proxy
 */
async function handleoptions_Api_V1_Namespaces__namespace_Pods__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for HEAD /api/v1/namespaces/:namespace/pods/:name/proxy
 */
async function handlehead_Api_V1_Namespaces__namespace_Pods__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/pods/:name/proxy
 */
async function handlepatch_Api_V1_Namespaces__namespace_Pods__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 */
async function handleget_Api_V1_Namespaces__namespace_Pods__name_Proxy(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:name/finalize
 */
async function handleput_Api_V1_Namespaces__name_Finalize(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/bindings
 */
async function handlepost_Api_V1_Namespaces__namespace_Bindings(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
 */
async function handleget_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
 */
async function handleput_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status
 */
async function handlepatch_Api_V1_Namespaces__namespace_Persistentvolumeclaims__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for POST /api/v1/namespaces/:namespace/resourcequotas
 */
async function handlepost_Api_V1_Namespaces__namespace_Resourcequotas(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/resourcequotas
 */
async function handledelete_Api_V1_Namespaces__namespace_Resourcequotas(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/resourcequotas
 */
async function handleget_Api_V1_Namespaces__namespace_Resourcequotas(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/pods/:name/log
 */
async function handleget_Api_V1_Namespaces__namespace_Pods__name_Log(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
 */
async function handleget_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
 */
async function handleput_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/replicationcontrollers/:name/status
 */
async function handlepatch_Api_V1_Namespaces__namespace_Replicationcontrollers__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/pods
 */
async function handleget_Api_V1_Namespaces__namespace_Pods(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/pods
 */
async function handlepost_Api_V1_Namespaces__namespace_Pods(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/pods
 */
async function handledelete_Api_V1_Namespaces__namespace_Pods(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/endpoints/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Endpoints__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/endpoints/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Endpoints__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/endpoints/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Endpoints__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/endpoints/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Endpoints__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/serviceaccounts
 */
async function handleget_Api_V1_Namespaces__namespace_Serviceaccounts(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/serviceaccounts
 */
async function handlepost_Api_V1_Namespaces__namespace_Serviceaccounts(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/serviceaccounts
 */
async function handledelete_Api_V1_Namespaces__namespace_Serviceaccounts(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/replicationcontrollers
 */
async function handlepost_Api_V1_Namespaces__namespace_Replicationcontrollers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/replicationcontrollers
 */
async function handledelete_Api_V1_Namespaces__namespace_Replicationcontrollers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/replicationcontrollers
 */
async function handleget_Api_V1_Namespaces__namespace_Replicationcontrollers(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:name/status
 */
async function handleget_Api_V1_Namespaces__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:name/status
 */
async function handleput_Api_V1_Namespaces__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:name/status
 */
async function handlepatch_Api_V1_Namespaces__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/pods/:name/attach
 */
async function handleget_Api_V1_Namespaces__namespace_Pods__name_Attach(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/pods/:name/attach
 */
async function handlepost_Api_V1_Namespaces__namespace_Pods__name_Attach(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/events
 */
async function handlepost_Api_V1_Namespaces__namespace_Events(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/events
 */
async function handledelete_Api_V1_Namespaces__namespace_Events(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/events
 */
async function handleget_Api_V1_Namespaces__namespace_Events(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/services/:name/proxy/:path
 */
async function handledelete_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for OPTIONS /api/v1/namespaces/:namespace/services/:name/proxy/:path
 */
async function handleoptions_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for HEAD /api/v1/namespaces/:namespace/services/:name/proxy/:path
 */
async function handlehead_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/services/:name/proxy/:path
 */
async function handlepatch_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 */
async function handleget_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/services/:name/proxy/:path
 */
async function handleput_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/services/:name/proxy/:path
 */
async function handlepost_Api_V1_Namespaces__namespace_Services__name_Proxy__path(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/pods/:name/status
 */
async function handleget_Api_V1_Namespaces__namespace_Pods__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/pods/:name/status
 */
async function handleput_Api_V1_Namespaces__namespace_Pods__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/pods/:name/status
 */
async function handlepatch_Api_V1_Namespaces__namespace_Pods__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/limitranges
 */
async function handleget_Api_V1_Namespaces__namespace_Limitranges(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/limitranges
 */
async function handlepost_Api_V1_Namespaces__namespace_Limitranges(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/limitranges
 */
async function handledelete_Api_V1_Namespaces__namespace_Limitranges(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for GET /api/v1/namespaces
 */
async function handleget_Api_V1_Namespaces(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // List resources
  const namespace = req.params.namespace || 'default';
  const { limit, continue: continueToken, labelSelector, fieldSelector } = req.query;
  
  logger.info(`Listing namespacess in namespace ${namespace}`);
  
  // Use the appropriate model type if available
  const result = await fetchResourceList<models.namespaces>(
    storage, 
    'namespaces',
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
 * Handler for POST /api/v1/namespaces
 */
async function handlepost_Api_V1_Namespaces(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/resourcequotas/:name/status
 */
async function handleput_Api_V1_Namespaces__namespace_Resourcequotas__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/resourcequotas/:name/status
 */
async function handlepatch_Api_V1_Namespaces__namespace_Resourcequotas__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
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
 * Handler for GET /api/v1/namespaces/:namespace/resourcequotas/:name/status
 */
async function handleget_Api_V1_Namespaces__namespace_Resourcequotas__name_Status(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for POST /api/v1/namespaces/:namespace/serviceaccounts/:name/token
 */
async function handlepost_Api_V1_Namespaces__namespace_Serviceaccounts__name_Token(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Create resource
  const namespace = req.params.namespace || 'default';
  const resource = req.body as models.namespaces;
  
  logger.info(`Creating namespaces ${resource.metadata?.name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.createResource(resource, namespace) as models.namespaces;
    res.status(201).json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for GET /api/v1/namespaces/:namespace/events/:name
 */
async function handleget_Api_V1_Namespaces__namespace_Events__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Get single resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Getting namespaces ${name} in namespace ${namespace}`);
  
  try {
    // Use the appropriate model type if available
    const result = await storage.getResource('namespaces', name, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PUT /api/v1/namespaces/:namespace/events/:name
 */
async function handleput_Api_V1_Namespaces__namespace_Events__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Update resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const resource = req.body as models.namespaces;
  
  logger.info(`Updating namespaces ${name} in namespace ${namespace}`);
  
  try {
    await validateResource(resource);
    const result = await storage.updateResource('namespaces', name, resource, namespace) as models.namespaces;
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}

/**
 * Handler for DELETE /api/v1/namespaces/:namespace/events/:name
 */
async function handledelete_Api_V1_Namespaces__namespace_Events__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Delete resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  
  logger.info(`Deleting namespaces ${name} in namespace ${namespace}`);
  
  try {
    await storage.deleteResource('namespaces', name, namespace);
    res.json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Success',
      message: `namespaces "${name}" deleted`
    });
  } catch (error) {
    if (error.code === 'NOT_FOUND') {
      res.status(404).json(createNotFoundResponse('namespaces', name, namespace));
      return;
    }
    throw error;
  }
}

/**
 * Handler for PATCH /api/v1/namespaces/:namespace/events/:name
 */
async function handlepatch_Api_V1_Namespaces__namespace_Events__name(
  req: express.Request, 
  res: express.Response, 
  storage: Storage
): Promise<void> {
  // Patch resource
  const namespace = req.params.namespace || 'default';
  const name = req.params.name;
  const patchData = req.body;
  
  logger.info(`Patching namespaces ${name} in namespace ${namespace}`);
  
  try {
    const result = await applyPatch<models.namespaces>(
      storage, 
      'namespaces',
      namespace, 
      name, 
      patchData
    );
    res.json(result);
  } catch (error) {
    handleResourceError(error, res);
  }
}
