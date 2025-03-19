// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createendpointRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List endpoint
  router.get('/api/v1/watch/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing endpoint in namespace ${namespace}`);
      
      const resources = await storage.listResources('endpoint', namespace);
      
      const response = {
        kind: 'EndpointList',
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
    
  
  
  // Get specific endpoint
  router.get('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting endpoint ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('endpoint', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`endpoint ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update endpoint
  router.put('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating endpoint ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('endpoint', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete endpoint
  router.delete('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting endpoint ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('endpoint', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`endpoint ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`endpoint ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'endpoint'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List endpoint
  router.get('/api/v1/watch/endpoints', async (req, res, next) => {
    try {
      logger.info(`Listing endpoint`);
      
      const resources = await storage.listResources('endpoint');
      
      const response = {
        kind: 'EndpointList',
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
    
  
  
  // List endpoint
  router.get('/api/v1/endpoints', async (req, res, next) => {
    try {
      logger.info(`Listing endpoint`);
      
      const resources = await storage.listResources('endpoint');
      
      const response = {
        kind: 'EndpointList',
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
    
  
  
  // Get specific endpoint
  router.get('/api/v1/watch/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting endpoint ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('endpoint', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`endpoint ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List endpoint
  router.get('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing endpoint in namespace ${namespace}`);
      
      const resources = await storage.listResources('endpoint', namespace);
      
      const response = {
        kind: 'EndpointList',
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
  // Create endpoint
  router.post('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating endpoint in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('endpoint', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete endpoint
  router.delete('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting endpoint ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('endpoint', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`endpoint ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`endpoint ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'endpoint'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
