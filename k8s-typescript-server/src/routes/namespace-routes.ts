// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createnamespaceRoutes(storage: Storage): express.Router {
  const router = express.Router();
  // Delete namespace
  router.delete('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting namespace ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('namespace', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`namespace ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`namespace ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'namespace'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific namespace
  router.get('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting namespace ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('namespace', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`namespace ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update namespace
  router.put('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating namespace ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('namespace', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific namespace
  router.get('/api/v1/watch/namespaces/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting namespace ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('namespace', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`namespace ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List namespace
  router.get('/api/v1/watch/namespaces', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing namespace in namespace ${namespace}`);
      
      const resources = await storage.listResources('namespace', namespace);
      
      const response = {
        kind: 'NamespaceList',
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
  // Create namespace
  router.post('/api/v1/namespaces', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating namespace in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('namespace', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List namespace
  router.get('/api/v1/namespaces', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing namespace in namespace ${namespace}`);
      
      const resources = await storage.listResources('namespace', namespace);
      
      const response = {
        kind: 'NamespaceList',
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
