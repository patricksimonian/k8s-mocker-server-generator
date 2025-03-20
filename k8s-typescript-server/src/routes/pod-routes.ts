// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpodRoutes(storage: Storage): express.Router {
  const router = express.Router();

//delete collection of Pod
  router.delete('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all pod in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('pod', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`pod not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`pod not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'pod'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Pod
  router.get('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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

//create a Pod
  router.post('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating pod in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('pod', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//replace status of the specified Pod
  router.put('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating pod ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('pod', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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

//create binding of a Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/binding', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating pod in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('pod', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//connect GET requests to portforward of Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/portforward', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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

//connect POST requests to portforward of Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/portforward', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating pod in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('pod', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//read log of the specified Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/log', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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

//watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/pods', async (req, res, next) => {
    try {
      logger.info(`Listing pod`);
      
      const resources = await storage.listResources('pod');
      
      const response = {
        kind: 'PodList',
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

//create eviction of a Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/eviction', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating pod in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('pod', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind Pod. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting pod ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('pod', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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

//connect GET requests to exec of Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/exec', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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

//connect POST requests to exec of Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/exec', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating pod in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('pod', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//connect PUT requests to proxy of Pod
  router.put('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating pod ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('pod', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//connect POST requests to proxy of Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating pod in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('pod', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//connect DELETE requests to proxy of Pod
  router.delete('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all pod in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('pod', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`pod not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`pod not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'pod'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//connect GET requests to proxy of Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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

//read the specified Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting pod ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('pod', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified Pod
  router.put('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating pod ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('pod', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Pod
  router.delete('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting pod ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('pod', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`pod ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'pod'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Pod
  router.get('/api/v1/pods', async (req, res, next) => {
    try {
      logger.info(`Listing pod`);
      
      const resources = await storage.listResources('pod');
      
      const response = {
        kind: 'PodList',
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

//connect GET requests to attach of Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/attach', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resources = await storage.listResources('pod', namespace);
      
      const response = {
        kind: 'PodList',
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

//connect POST requests to attach of Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/attach', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating pod in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('pod', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
