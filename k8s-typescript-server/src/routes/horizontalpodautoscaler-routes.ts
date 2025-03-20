// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createhorizontalpodautoscalerRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
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

//list or watch objects of kind HorizontalPodAutoscaler
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

//list or watch objects of kind HorizontalPodAutoscaler
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

//create a HorizontalPodAutoscaler
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
      
      const createdResource = await storage.createResource('horizontalpodautoscaler', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of HorizontalPodAutoscaler
  router.delete('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all horizontalpodautoscaler in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('horizontalpodautoscaler', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
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

//list or watch objects of kind HorizontalPodAutoscaler
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

//create a HorizontalPodAutoscaler
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
      
      const createdResource = await storage.createResource('horizontalpodautoscaler', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of HorizontalPodAutoscaler
  router.delete('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all horizontalpodautoscaler in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('horizontalpodautoscaler', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
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

//list or watch objects of kind HorizontalPodAutoscaler
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

//watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
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

//watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
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

//read the specified HorizontalPodAutoscaler
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

//replace the specified HorizontalPodAutoscaler
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
      
      const updatedResource = await storage.updateResource('horizontalpodautoscaler', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a HorizontalPodAutoscaler
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
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
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

//watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
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

//read status of the specified HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
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

//replace status of the specified HorizontalPodAutoscaler
  router.put('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
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
      
      const updatedResource = await storage.updateResource('horizontalpodautoscaler', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read the specified HorizontalPodAutoscaler
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

//replace the specified HorizontalPodAutoscaler
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
      
      const updatedResource = await storage.updateResource('horizontalpodautoscaler', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a HorizontalPodAutoscaler
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
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
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

//read status of the specified HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
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

//replace status of the specified HorizontalPodAutoscaler
  router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
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
      
      const updatedResource = await storage.updateResource('horizontalpodautoscaler', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
