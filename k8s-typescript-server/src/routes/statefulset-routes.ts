// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createstatefulsetRoutes(storage: Storage): express.Router {
  const router = express.Router();
  // Delete statefulset
  router.delete('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting statefulset ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('statefulset', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`statefulset ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`statefulset ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'statefulset'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List statefulset
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing statefulset in namespace ${namespace}`);
      
      const resources = await storage.listResources('statefulset', namespace);
      
      const response = {
        kind: 'StatefulsetList',
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
  // Create statefulset
  router.post('/apis/apps/v1/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating statefulset in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('statefulset', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List statefulset
  router.get('/apis/apps/v1/statefulsets', async (req, res, next) => {
    try {
      logger.info(`Listing statefulset`);
      
      const resources = await storage.listResources('statefulset');
      
      const response = {
        kind: 'StatefulsetList',
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
    
  
  
  // Get specific statefulset
  router.get('/apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting statefulset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('statefulset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`statefulset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List statefulset
  router.get('/apis/apps/v1/watch/statefulsets', async (req, res, next) => {
    try {
      logger.info(`Listing statefulset`);
      
      const resources = await storage.listResources('statefulset');
      
      const response = {
        kind: 'StatefulsetList',
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
    
  
  
  // List statefulset
  router.get('/apis/apps/v1/watch/namespaces/:namespace/statefulsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing statefulset in namespace ${namespace}`);
      
      const resources = await storage.listResources('statefulset', namespace);
      
      const response = {
        kind: 'StatefulsetList',
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
    
  
  
  // Get specific statefulset
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting statefulset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('statefulset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`statefulset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update statefulset
  router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating statefulset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('statefulset', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete statefulset
  router.delete('/apis/apps/v1/namespaces/:namespace/statefulsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting statefulset ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('statefulset', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`statefulset ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`statefulset ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'statefulset'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
