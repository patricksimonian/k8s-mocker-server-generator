// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createconfigmapRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List configmap
  router.get('/api/v1/watch/configmaps', async (req, res, next) => {
    try {
      logger.info(`Listing configmap`);
      
      const resources = await storage.listResources('configmap');
      
      const response = {
        kind: 'ConfigmapList',
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
    
  
  
  // List configmap
  router.get('/api/v1/configmaps', async (req, res, next) => {
    try {
      logger.info(`Listing configmap`);
      
      const resources = await storage.listResources('configmap');
      
      const response = {
        kind: 'ConfigmapList',
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
    
  
  
  // List configmap
  router.get('/api/v1/watch/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing configmap in namespace ${namespace}`);
      
      const resources = await storage.listResources('configmap', namespace);
      
      const response = {
        kind: 'ConfigmapList',
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
    
  
  
  // Get specific configmap
  router.get('/api/v1/watch/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting configmap ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('configmap', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`configmap ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific configmap
  router.get('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting configmap ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('configmap', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`configmap ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update configmap
  router.put('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating configmap ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('configmap', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete configmap
  router.delete('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting configmap ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('configmap', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`configmap ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`configmap ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'configmap'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List configmap
  router.get('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing configmap in namespace ${namespace}`);
      
      const resources = await storage.listResources('configmap', namespace);
      
      const response = {
        kind: 'ConfigmapList',
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
  // Create configmap
  router.post('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating configmap in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('configmap', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete configmap
  router.delete('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting configmap ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('configmap', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`configmap ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`configmap ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'configmap'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
