// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcontrollerrevisionRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific controllerrevision
  router.get('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting controllerrevision ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('controllerrevision', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`controllerrevision ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update controllerrevision
  router.put('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating controllerrevision ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('controllerrevision', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete controllerrevision
  router.delete('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting controllerrevision ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('controllerrevision', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`controllerrevision ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`controllerrevision ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'controllerrevision'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List controllerrevision
  router.get('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing controllerrevision in namespace ${namespace}`);
      
      const resources = await storage.listResources('controllerrevision', namespace);
      
      const response = {
        kind: 'ControllerrevisionList',
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
  // Create controllerrevision
  router.post('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating controllerrevision in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('controllerrevision', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete controllerrevision
  router.delete('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting controllerrevision ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('controllerrevision', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`controllerrevision ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`controllerrevision ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'controllerrevision'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List controllerrevision
  router.get('/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing controllerrevision in namespace ${namespace}`);
      
      const resources = await storage.listResources('controllerrevision', namespace);
      
      const response = {
        kind: 'ControllerrevisionList',
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
    
  
  
  // List controllerrevision
  router.get('/apis/apps/v1/controllerrevisions', async (req, res, next) => {
    try {
      logger.info(`Listing controllerrevision`);
      
      const resources = await storage.listResources('controllerrevision');
      
      const response = {
        kind: 'ControllerrevisionList',
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
    
  
  
  // Get specific controllerrevision
  router.get('/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting controllerrevision ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('controllerrevision', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`controllerrevision ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List controllerrevision
  router.get('/apis/apps/v1/watch/controllerrevisions', async (req, res, next) => {
    try {
      logger.info(`Listing controllerrevision`);
      
      const resources = await storage.listResources('controllerrevision');
      
      const response = {
        kind: 'ControllerrevisionList',
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

  return router;
}
