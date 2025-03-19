// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createreplicationcontrollerRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List replicationcontroller
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing replicationcontroller in namespace ${namespace}`);
      
      const resources = await storage.listResources('replicationcontroller', namespace);
      
      const response = {
        kind: 'ReplicationcontrollerList',
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
  // Create replicationcontroller
  router.post('/api/v1/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating replicationcontroller in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('replicationcontroller', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete replicationcontroller
  router.delete('/api/v1/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting replicationcontroller ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('replicationcontroller', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`replicationcontroller ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`replicationcontroller ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'replicationcontroller'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List replicationcontroller
  router.get('/api/v1/watch/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing replicationcontroller in namespace ${namespace}`);
      
      const resources = await storage.listResources('replicationcontroller', namespace);
      
      const response = {
        kind: 'ReplicationcontrollerList',
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
  // Delete replicationcontroller
  router.delete('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting replicationcontroller ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('replicationcontroller', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`replicationcontroller ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`replicationcontroller ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'replicationcontroller'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific replicationcontroller
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting replicationcontroller ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('replicationcontroller', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`replicationcontroller ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update replicationcontroller
  router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating replicationcontroller ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('replicationcontroller', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific replicationcontroller
  router.get('/api/v1/watch/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting replicationcontroller ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('replicationcontroller', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`replicationcontroller ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List replicationcontroller
  router.get('/api/v1/watch/replicationcontrollers', async (req, res, next) => {
    try {
      logger.info(`Listing replicationcontroller`);
      
      const resources = await storage.listResources('replicationcontroller');
      
      const response = {
        kind: 'ReplicationcontrollerList',
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
    
  
  
  // List replicationcontroller
  router.get('/api/v1/replicationcontrollers', async (req, res, next) => {
    try {
      logger.info(`Listing replicationcontroller`);
      
      const resources = await storage.listResources('replicationcontroller');
      
      const response = {
        kind: 'ReplicationcontrollerList',
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
