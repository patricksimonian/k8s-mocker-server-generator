// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createreplicasetRoutes(storage: Storage): express.Router {
  const router = express.Router();

//delete collection of ReplicaSet
  router.delete('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all replicaset in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('replicaset', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`replicaset not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`replicaset not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'replicaset'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ReplicaSet
  router.get('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing replicaset in namespace ${namespace}`);
      
      const resources = await storage.listResources('replicaset', namespace);
      
      const response = {
        kind: 'ReplicasetList',
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

//create a ReplicaSet
  router.post('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating replicaset in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('replicaset', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/replicasets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing replicaset in namespace ${namespace}`);
      
      const resources = await storage.listResources('replicaset', namespace);
      
      const response = {
        kind: 'ReplicasetList',
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

//read status of the specified ReplicaSet
  router.get('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing replicaset in namespace ${namespace}`);
      
      const resources = await storage.listResources('replicaset', namespace);
      
      const response = {
        kind: 'ReplicasetList',
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

//replace status of the specified ReplicaSet
  router.put('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating replicaset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('replicaset', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/replicasets', async (req, res, next) => {
    try {
      logger.info(`Listing replicaset`);
      
      const resources = await storage.listResources('replicaset');
      
      const response = {
        kind: 'ReplicasetList',
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

//watch changes to an object of kind ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting replicaset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('replicaset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`replicaset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ReplicaSet
  router.get('/apis/apps/v1/replicasets', async (req, res, next) => {
    try {
      logger.info(`Listing replicaset`);
      
      const resources = await storage.listResources('replicaset');
      
      const response = {
        kind: 'ReplicasetList',
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

//read the specified ReplicaSet
  router.get('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting replicaset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('replicaset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`replicaset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified ReplicaSet
  router.put('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating replicaset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('replicaset', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a ReplicaSet
  router.delete('/apis/apps/v1/namespaces/:namespace/replicasets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting replicaset ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('replicaset', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`replicaset ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`replicaset ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'replicaset'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read scale of the specified ReplicaSet
  router.get('/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing replicaset in namespace ${namespace}`);
      
      const resources = await storage.listResources('replicaset', namespace);
      
      const response = {
        kind: 'ReplicasetList',
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

//replace scale of the specified ReplicaSet
  router.put('/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating replicaset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('replicaset', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
