// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createdaemonsetRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List daemonset
  router.get('/apis/apps/v1/daemonsets', async (req, res, next) => {
    try {
      logger.info(`Listing daemonset`);
      
      const resources = await storage.listResources('daemonset');
      
      const response = {
        kind: 'DaemonsetList',
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
    
  
  
  // List daemonset
  router.get('/apis/apps/v1/watch/daemonsets', async (req, res, next) => {
    try {
      logger.info(`Listing daemonset`);
      
      const resources = await storage.listResources('daemonset');
      
      const response = {
        kind: 'DaemonsetList',
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
    
  
  
  // Get specific daemonset
  router.get('/apis/apps/v1/watch/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting daemonset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('daemonset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`daemonset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List daemonset
  router.get('/apis/apps/v1/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing daemonset in namespace ${namespace}`);
      
      const resources = await storage.listResources('daemonset', namespace);
      
      const response = {
        kind: 'DaemonsetList',
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
  // Create daemonset
  router.post('/apis/apps/v1/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating daemonset in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('daemonset', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete daemonset
  router.delete('/apis/apps/v1/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting daemonset ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('daemonset', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`daemonset ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`daemonset ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'daemonset'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List daemonset
  router.get('/apis/apps/v1/watch/namespaces/:namespace/daemonsets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing daemonset in namespace ${namespace}`);
      
      const resources = await storage.listResources('daemonset', namespace);
      
      const response = {
        kind: 'DaemonsetList',
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
  // Update daemonset
  router.put('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating daemonset ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('daemonset', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete daemonset
  router.delete('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting daemonset ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('daemonset', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`daemonset ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`daemonset ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'daemonset'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific daemonset
  router.get('/apis/apps/v1/namespaces/:namespace/daemonsets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting daemonset ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('daemonset', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`daemonset ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
