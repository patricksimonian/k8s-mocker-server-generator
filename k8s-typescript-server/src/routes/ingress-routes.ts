// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createingressRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List ingress
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing ingress in namespace ${namespace}`);
      
      const resources = await storage.listResources('ingress', namespace);
      
      const response = {
        kind: 'IngressList',
        apiVersion: 'networking.k8s.io/v1',
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
  // Create ingress
  router.post('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating ingress in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('ingress', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete ingress
  router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting ingress ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('ingress', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`ingress ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`ingress ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'ingress'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List ingress
  router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing ingress in namespace ${namespace}`);
      
      const resources = await storage.listResources('ingress', namespace);
      
      const response = {
        kind: 'IngressList',
        apiVersion: 'networking.k8s.io/v1',
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
    
  
  
  // List ingress
  router.get('/apis/networking.k8s.io/v1/ingresses', async (req, res, next) => {
    try {
      logger.info(`Listing ingress`);
      
      const resources = await storage.listResources('ingress');
      
      const response = {
        kind: 'IngressList',
        apiVersion: 'networking.k8s.io/v1',
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
    
  
  
  // Get specific ingress
  router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting ingress ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('ingress', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`ingress ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List ingress
  router.get('/apis/networking.k8s.io/v1/watch/ingresses', async (req, res, next) => {
    try {
      logger.info(`Listing ingress`);
      
      const resources = await storage.listResources('ingress');
      
      const response = {
        kind: 'IngressList',
        apiVersion: 'networking.k8s.io/v1',
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
    
  
  
  // Get specific ingress
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting ingress ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('ingress', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`ingress ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update ingress
  router.put('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating ingress ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('ingress', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete ingress
  router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting ingress ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('ingress', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`ingress ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`ingress ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'ingress'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
