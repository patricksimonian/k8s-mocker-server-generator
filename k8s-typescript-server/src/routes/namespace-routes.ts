// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createnamespaceRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch changes to an object of kind Namespace. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting namespace ${name}`);
      
      const resource = await storage.getResource('namespace', name);
      
      if (!resource) {
        return handleResourceError(new Error(`namespace ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Namespace. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces', async (req, res, next) => {
    try {
      logger.info(`Listing namespace`);
      
      const resources = await storage.listResources('namespace');
      
      const response = {
        kind: 'NamespaceList',
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

//replace finalize of the specified Namespace
  router.put('/api/v1/namespaces/:name/finalize', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating namespace ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('namespace', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified Namespace
  router.get('/api/v1/namespaces/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing namespace`);
      
      const resources = await storage.listResources('namespace');
      
      const response = {
        kind: 'NamespaceList',
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

//replace status of the specified Namespace
  router.put('/api/v1/namespaces/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating namespace ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('namespace', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Namespace
  router.get('/api/v1/namespaces', async (req, res, next) => {
    try {
      logger.info(`Listing namespace`);
      
      const resources = await storage.listResources('namespace');
      
      const response = {
        kind: 'NamespaceList',
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

//create a Namespace
  router.post('/api/v1/namespaces', async (req, res, next) => {
    try {
      logger.info(`Creating namespace`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('namespace', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//read the specified Namespace
  router.get('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting namespace ${name}`);
      
      const resource = await storage.getResource('namespace', name);
      
      if (!resource) {
        return handleResourceError(new Error(`namespace ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified Namespace
  router.put('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating namespace ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('namespace', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Namespace
  router.delete('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting namespace ${name}`);
      
      try {

        const deleted = await storage.deleteResource('namespace', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`namespace ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`namespace ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'namespace'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
