// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpersistentvolumeclaimRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List persistentvolumeclaim
  router.get('/api/v1/persistentvolumeclaims', async (req, res, next) => {
    try {
      logger.info(`Listing persistentvolumeclaim`);
      
      const resources = await storage.listResources('persistentvolumeclaim');
      
      const response = {
        kind: 'PersistentvolumeclaimList',
        apiVersion: 'v1',
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
    
  
  
  // List persistentvolumeclaim
  router.get('/api/v1/watch/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing persistentvolumeclaim in namespace ${namespace}`);
      
      const resources = await storage.listResources('persistentvolumeclaim', namespace);
      
      const response = {
        kind: 'PersistentvolumeclaimList',
        apiVersion: 'v1',
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
    
  
  
  // Get specific persistentvolumeclaim
  router.get('/api/v1/watch/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting persistentvolumeclaim ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('persistentvolumeclaim', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolumeclaim ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Create persistentvolumeclaim
  router.post('/api/v1/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating persistentvolumeclaim in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('persistentvolumeclaim', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete persistentvolumeclaim
  router.delete('/api/v1/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting persistentvolumeclaim ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('persistentvolumeclaim', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`persistentvolumeclaim ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`persistentvolumeclaim ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'persistentvolumeclaim'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List persistentvolumeclaim
  router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing persistentvolumeclaim in namespace ${namespace}`);
      
      const resources = await storage.listResources('persistentvolumeclaim', namespace);
      
      const response = {
        kind: 'PersistentvolumeclaimList',
        apiVersion: 'v1',
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
    
  
  
  // Get specific persistentvolumeclaim
  router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting persistentvolumeclaim ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('persistentvolumeclaim', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolumeclaim ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update persistentvolumeclaim
  router.put('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating persistentvolumeclaim ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('persistentvolumeclaim', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete persistentvolumeclaim
  router.delete('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting persistentvolumeclaim ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('persistentvolumeclaim', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`persistentvolumeclaim ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`persistentvolumeclaim ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'persistentvolumeclaim'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List persistentvolumeclaim
  router.get('/api/v1/watch/persistentvolumeclaims', async (req, res, next) => {
    try {
      logger.info(`Listing persistentvolumeclaim`);
      
      const resources = await storage.listResources('persistentvolumeclaim');
      
      const response = {
        kind: 'PersistentvolumeclaimList',
        apiVersion: 'v1',
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
