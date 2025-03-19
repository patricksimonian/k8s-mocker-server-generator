// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createserviceRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List service
  router.get('/api/v1/services', async (req, res, next) => {
    try {
      logger.info(`Listing service`);
      
      const resources = await storage.listResources('service');
      
      const response = {
        kind: 'ServiceList',
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
    
  
  
  // List service
  router.get('/api/v1/watch/services', async (req, res, next) => {
    try {
      logger.info(`Listing service`);
      
      const resources = await storage.listResources('service');
      
      const response = {
        kind: 'ServiceList',
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
    
  
  
  // Get specific service
  router.get('/api/v1/watch/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting service ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('service', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List service
  router.get('/api/v1/namespaces/:namespace/services', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing service in namespace ${namespace}`);
      
      const resources = await storage.listResources('service', namespace);
      
      const response = {
        kind: 'ServiceList',
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
  // Create service
  router.post('/api/v1/namespaces/:namespace/services', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating service in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('service', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete service
  router.delete('/api/v1/namespaces/:namespace/services', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting service ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('service', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`service ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'service'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  // Update service
  router.put('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating service ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('service', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete service
  router.delete('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting service ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('service', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`service ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'service'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific service
  router.get('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting service ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('service', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List service
  router.get('/api/v1/watch/namespaces/:namespace/services', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing service in namespace ${namespace}`);
      
      const resources = await storage.listResources('service', namespace);
      
      const response = {
        kind: 'ServiceList',
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
