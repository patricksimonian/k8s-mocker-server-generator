// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpodRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific pod
  router.get('/api/v1/watch/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting pod ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('pod', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List pod
  router.get('/api/v1/pods', async (req, res, next) => {
    try {
      logger.info(`Listing pod`);
      
      const resources = await storage.listResources('pod');
      
      const response = {
        kind: 'PodList',
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
    
  
  
  // Get specific pod
  router.get('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting pod ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('pod', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update pod
  router.put('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating pod ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('pod', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete pod
  router.delete('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting pod ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('pod', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`pod ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'pod'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List pod
  router.get('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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
  // Create pod
  router.post('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating pod in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('pod', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete pod
  router.delete('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting pod ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('pod', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`pod ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'pod'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List pod
  router.get('/api/v1/watch/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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
    
  
  
  // List pod
  router.get('/api/v1/watch/pods', async (req, res, next) => {
    try {
      logger.info(`Listing pod`);
      
      const resources = await storage.listResources('pod');
      
      const response = {
        kind: 'PodList',
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
