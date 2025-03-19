// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createeventRoutes(storage: Storage): express.Router {
  const router = express.Router();
  // Create event
  router.post('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating event in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('event', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete event
  router.delete('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting event ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('event', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`event ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`event ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'event'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List event
  router.get('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing event in namespace ${namespace}`);
      
      const resources = await storage.listResources('event', namespace);
      
      const response = {
        kind: 'EventList',
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
    
  
  
  // Get specific event
  router.get('/apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting event ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('event', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`event ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List event
  router.get('/api/v1/events', async (req, res, next) => {
    try {
      logger.info(`Listing event`);
      
      const resources = await storage.listResources('event');
      
      const response = {
        kind: 'EventList',
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
  // Delete event
  router.delete('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting event ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('event', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`event ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`event ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'event'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific event
  router.get('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting event ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('event', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`event ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update event
  router.put('/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating event ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('event', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List event
  router.get('/apis/events.k8s.io/v1/watch/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing event in namespace ${namespace}`);
      
      const resources = await storage.listResources('event', namespace);
      
      const response = {
        kind: 'EventList',
        apiVersion: 'events.k8s.io/v1',
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
    
  
  
  // List event
  router.get('/api/v1/watch/events', async (req, res, next) => {
    try {
      logger.info(`Listing event`);
      
      const resources = await storage.listResources('event');
      
      const response = {
        kind: 'EventList',
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
    
  
  
  // Get specific event
  router.get('/api/v1/watch/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting event ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('event', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`event ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List event
  router.get('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing event in namespace ${namespace}`);
      
      const resources = await storage.listResources('event', namespace);
      
      const response = {
        kind: 'EventList',
        apiVersion: 'events.k8s.io/v1',
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
  // Create event
  router.post('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating event in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('event', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete event
  router.delete('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting event ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('event', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`event ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`event ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'event'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List event
  router.get('/apis/events.k8s.io/v1/events', async (req, res, next) => {
    try {
      logger.info(`Listing event`);
      
      const resources = await storage.listResources('event');
      
      const response = {
        kind: 'EventList',
        apiVersion: 'events.k8s.io/v1',
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
    
  
  
  // List event
  router.get('/apis/events.k8s.io/v1/watch/events', async (req, res, next) => {
    try {
      logger.info(`Listing event`);
      
      const resources = await storage.listResources('event');
      
      const response = {
        kind: 'EventList',
        apiVersion: 'events.k8s.io/v1',
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
    
  
  
  // Get specific event
  router.get('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting event ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('event', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`event ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update event
  router.put('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating event ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('event', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete event
  router.delete('/api/v1/namespaces/:namespace/events/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting event ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('event', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`event ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`event ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'event'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List event
  router.get('/api/v1/watch/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing event in namespace ${namespace}`);
      
      const resources = await storage.listResources('event', namespace);
      
      const response = {
        kind: 'EventList',
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
