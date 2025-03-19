// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createhorizontalpodautoscalerRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific horizontalpodautoscaler
  router.get('/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List horizontalpodautoscaler
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing horizontalpodautoscaler in namespace ${namespace}`);
      
      const resources = await storage.listResources('horizontalpodautoscaler', namespace);
      
      const response = {
        kind: 'HorizontalpodautoscalerList',
        apiVersion: 'autoscaling/v1',
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
  // Create horizontalpodautoscaler
  router.post('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating horizontalpodautoscaler in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('horizontalpodautoscaler', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete horizontalpodautoscaler
  router.delete('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('horizontalpodautoscaler', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific horizontalpodautoscaler
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update horizontalpodautoscaler
  router.put('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('horizontalpodautoscaler', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete horizontalpodautoscaler
  router.delete('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('horizontalpodautoscaler', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List horizontalpodautoscaler
  router.get('/apis/autoscaling/v2/horizontalpodautoscalers', async (req, res, next) => {
    try {
      logger.info(`Listing horizontalpodautoscaler`);
      
      const resources = await storage.listResources('horizontalpodautoscaler');
      
      const response = {
        kind: 'HorizontalpodautoscalerList',
        apiVersion: 'autoscaling/v2',
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
    
  
  
  // List horizontalpodautoscaler
  router.get('/apis/autoscaling/v1/horizontalpodautoscalers', async (req, res, next) => {
    try {
      logger.info(`Listing horizontalpodautoscaler`);
      
      const resources = await storage.listResources('horizontalpodautoscaler');
      
      const response = {
        kind: 'HorizontalpodautoscalerList',
        apiVersion: 'autoscaling/v1',
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
    
  
  
  // List horizontalpodautoscaler
  router.get('/apis/autoscaling/v1/watch/horizontalpodautoscalers', async (req, res, next) => {
    try {
      logger.info(`Listing horizontalpodautoscaler`);
      
      const resources = await storage.listResources('horizontalpodautoscaler');
      
      const response = {
        kind: 'HorizontalpodautoscalerList',
        apiVersion: 'autoscaling/v1',
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
    
  
  
  // List horizontalpodautoscaler
  router.get('/apis/autoscaling/v2/watch/horizontalpodautoscalers', async (req, res, next) => {
    try {
      logger.info(`Listing horizontalpodautoscaler`);
      
      const resources = await storage.listResources('horizontalpodautoscaler');
      
      const response = {
        kind: 'HorizontalpodautoscalerList',
        apiVersion: 'autoscaling/v2',
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
  // Delete horizontalpodautoscaler
  router.delete('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('horizontalpodautoscaler', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List horizontalpodautoscaler
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing horizontalpodautoscaler in namespace ${namespace}`);
      
      const resources = await storage.listResources('horizontalpodautoscaler', namespace);
      
      const response = {
        kind: 'HorizontalpodautoscalerList',
        apiVersion: 'autoscaling/v2',
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
  // Create horizontalpodautoscaler
  router.post('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating horizontalpodautoscaler in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('horizontalpodautoscaler', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List horizontalpodautoscaler
  router.get('/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing horizontalpodautoscaler in namespace ${namespace}`);
      
      const resources = await storage.listResources('horizontalpodautoscaler', namespace);
      
      const response = {
        kind: 'HorizontalpodautoscalerList',
        apiVersion: 'autoscaling/v1',
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
    
  
  
  // List horizontalpodautoscaler
  router.get('/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing horizontalpodautoscaler in namespace ${namespace}`);
      
      const resources = await storage.listResources('horizontalpodautoscaler', namespace);
      
      const response = {
        kind: 'HorizontalpodautoscalerList',
        apiVersion: 'autoscaling/v2',
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
    
  
  
  // Get specific horizontalpodautoscaler
  router.get('/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific horizontalpodautoscaler
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update horizontalpodautoscaler
  router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('horizontalpodautoscaler', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete horizontalpodautoscaler
  router.delete('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('horizontalpodautoscaler', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
