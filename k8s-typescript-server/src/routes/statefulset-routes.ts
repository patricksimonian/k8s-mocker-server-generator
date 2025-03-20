// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createstatefulsetRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read scale of the specified StatefulSet
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing statefulset in namespace ${namespace}`);
      
      const resources = await storage.listResources('statefulset', namespace);
      
      const response = {
        kind: 'StatefulsetList',
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

//replace scale of the specified StatefulSet
  router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating statefulset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('statefulset', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified StatefulSet
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing statefulset in namespace ${namespace}`);
      
      const resources = await storage.listResources('statefulset', namespace);
      
      const response = {
        kind: 'StatefulsetList',
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

//replace status of the specified StatefulSet
  router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating statefulset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('statefulset', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind StatefulSet
  router.get('/apis/apps/v1/statefulsets', async (req, res, next) => {
    try {
      logger.info(`Listing statefulset`);
      
      const resources = await storage.listResources('statefulset');
      
      const response = {
        kind: 'StatefulsetList',
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

//watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing statefulset in namespace ${namespace}`);
      
      const resources = await storage.listResources('statefulset', namespace);
      
      const response = {
        kind: 'StatefulsetList',
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

//watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/statefulsets', async (req, res, next) => {
    try {
      logger.info(`Listing statefulset`);
      
      const resources = await storage.listResources('statefulset');
      
      const response = {
        kind: 'StatefulsetList',
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

//watch changes to an object of kind StatefulSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting statefulset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('statefulset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`statefulset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind StatefulSet
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing statefulset in namespace ${namespace}`);
      
      const resources = await storage.listResources('statefulset', namespace);
      
      const response = {
        kind: 'StatefulsetList',
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

//create a StatefulSet
  router.post('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating statefulset in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('statefulset', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of StatefulSet
  router.delete('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all statefulset in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('statefulset', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`statefulset not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`statefulset not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'statefulset'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read the specified StatefulSet
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting statefulset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('statefulset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`statefulset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified StatefulSet
  router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating statefulset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('statefulset', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a StatefulSet
  router.delete('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting statefulset ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('statefulset', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`statefulset ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`statefulset ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'statefulset'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
