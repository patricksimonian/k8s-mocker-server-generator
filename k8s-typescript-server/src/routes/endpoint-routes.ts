// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createendpointRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing endpoint in namespace ${namespace}`);
      
      const resources = await storage.listResources('endpoint', namespace);
      
      const response = {
        kind: 'EndpointList',
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

//read the specified Endpoints
  router.get('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting endpoint ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('endpoint', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`endpoint ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified Endpoints
  router.put('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating endpoint ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('endpoint', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete Endpoints
  router.delete('/api/v1/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting endpoint ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('endpoint', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`endpoint ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`endpoint ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'endpoint'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/endpoints', async (req, res, next) => {
    try {
      logger.info(`Listing endpoint`);
      
      const resources = await storage.listResources('endpoint');
      
      const response = {
        kind: 'EndpointList',
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

//list or watch objects of kind Endpoints
  router.get('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing endpoint in namespace ${namespace}`);
      
      const resources = await storage.listResources('endpoint', namespace);
      
      const response = {
        kind: 'EndpointList',
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

//create Endpoints
  router.post('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating endpoint in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('endpoint', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Endpoints
  router.delete('/api/v1/namespaces/:namespace/endpoints', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all endpoint in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('endpoint', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`endpoint not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`endpoint not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'endpoint'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind Endpoints. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/endpoints/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting endpoint ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('endpoint', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`endpoint ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Endpoints
  router.get('/api/v1/endpoints', async (req, res, next) => {
    try {
      logger.info(`Listing endpoint`);
      
      const resources = await storage.listResources('endpoint');
      
      const response = {
        kind: 'EndpointList',
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
