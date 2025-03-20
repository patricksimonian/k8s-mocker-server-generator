// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createeventRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
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

//watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
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

//watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
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

//replace the specified Event
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
      
      const updatedResource = await storage.updateResource('event', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete an Event
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
          return handleResourceError(new Error(`event ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
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

//read the specified Event
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

//list or watch objects of kind Event
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

//watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
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

//read the specified Event
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

//replace the specified Event
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
      
      const updatedResource = await storage.updateResource('event', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete an Event
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
          return handleResourceError(new Error(`event ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
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

//watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
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

//list or watch objects of kind Event
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

//create an Event
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
      
      const createdResource = await storage.createResource('event', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Event
  router.delete('/apis/events.k8s.io/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all event in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('event', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`event not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`event not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'event'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
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

//list or watch objects of kind Event
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

//list or watch objects of kind Event
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

//create an Event
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
      
      const createdResource = await storage.createResource('event', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Event
  router.delete('/api/v1/namespaces/:namespace/events', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all event in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('event', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`event not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`event not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'event'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
