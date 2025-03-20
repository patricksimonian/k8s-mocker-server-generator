// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createdaemonsetRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read the specified DaemonSet
  router.get('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting daemonset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('daemonset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`daemonset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified DaemonSet
  router.put('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating daemonset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('daemonset', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a DaemonSet
  router.delete('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting daemonset ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('daemonset', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`daemonset ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`daemonset ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'daemonset'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind DaemonSet
  router.get('/apis/apps/v1/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing daemonset in namespace ${namespace}`);
      
      const resources = await storage.listResources('daemonset', namespace);
      
      const response = {
        kind: 'DaemonsetList',
        apiVersion: 'apps/v1',
        metadata: {
          resourceVersion: '1'
        },
        items: resources || []
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

//create a DaemonSet
  router.post('/apis/apps/v1/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating daemonset in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('daemonset', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of DaemonSet
  router.delete('/apis/apps/v1/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all daemonset in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('daemonset', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`daemonset not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`daemonset not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'daemonset'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing daemonset in namespace ${namespace}`);
      
      const resources = await storage.listResources('daemonset', namespace);
      
      const response = {
        kind: 'DaemonsetList',
        apiVersion: 'apps/v1',
        metadata: {
          resourceVersion: '1'
        },
        items: resources || []
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/daemonsets', async (req, res, next) => {
    try {
      logger.info(`Listing daemonset`);
      
      const resources = await storage.listResources('daemonset');
      
      const response = {
        kind: 'DaemonsetList',
        apiVersion: 'apps/v1',
        metadata: {
          resourceVersion: '1'
        },
        items: resources || []
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind DaemonSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting daemonset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('daemonset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`daemonset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind DaemonSet
  router.get('/apis/apps/v1/daemonsets', async (req, res, next) => {
    try {
      logger.info(`Listing daemonset`);
      
      const resources = await storage.listResources('daemonset');
      
      const response = {
        kind: 'DaemonsetList',
        apiVersion: 'apps/v1',
        metadata: {
          resourceVersion: '1'
        },
        items: resources || []
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

//replace status of the specified DaemonSet
  router.put('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating daemonset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('daemonset', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified DaemonSet
  router.get('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing daemonset in namespace ${namespace}`);
      
      const resources = await storage.listResources('daemonset', namespace);
      
      const response = {
        kind: 'DaemonsetList',
        apiVersion: 'apps/v1',
        metadata: {
          resourceVersion: '1'
        },
        items: resources || []
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
