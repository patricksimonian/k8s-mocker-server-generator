// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createreplicasetRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List replicaset
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
    
  
  
  // List replicaset
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
    
  
  
  // Get specific replicaset
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
  // Update replicaset
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
      
      const updatedResource = await storage.createOrUpdateResource('replicaset', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete replicaset
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
          return handleResourceError(new Error(`replicaset ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
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
    
  
  
  // Get specific replicaset
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
    
  
  
  // List replicaset
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
    
  
  
  // List replicaset
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
  // Create replicaset
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
      
      const createdResource = await storage.createOrUpdateResource('replicaset', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete replicaset
  router.delete('/apis/apps/v1/namespaces/:namespace/replicasets', async (req, res, next) => {
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
          return handleResourceError(new Error(`replicaset ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
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

  return router;
}
