// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createsecretRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read the specified Secret
  router.get('/api/v1/namespaces/:namespace/secrets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting secret ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('secret', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`secret ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified Secret
  router.put('/api/v1/namespaces/:namespace/secrets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating secret ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('secret', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Secret
  router.delete('/api/v1/namespaces/:namespace/secrets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting secret ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('secret', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`secret ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`secret ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'secret'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/secrets', async (req, res, next) => {
    try {
      logger.info(`Listing secret`);
      
      const resources = await storage.listResources('secret');
      
      const response = {
        kind: 'SecretList',
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

//watch changes to an object of kind Secret. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/secrets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting secret ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('secret', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`secret ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Secret
  router.get('/api/v1/secrets', async (req, res, next) => {
    try {
      logger.info(`Listing secret`);
      
      const resources = await storage.listResources('secret');
      
      const response = {
        kind: 'SecretList',
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

//watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/secrets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing secret in namespace ${namespace}`);
      
      const resources = await storage.listResources('secret', namespace);
      
      const response = {
        kind: 'SecretList',
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

//list or watch objects of kind Secret
  router.get('/api/v1/namespaces/:namespace/secrets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing secret in namespace ${namespace}`);
      
      const resources = await storage.listResources('secret', namespace);
      
      const response = {
        kind: 'SecretList',
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

//create a Secret
  router.post('/api/v1/namespaces/:namespace/secrets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating secret in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('secret', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Secret
  router.delete('/api/v1/namespaces/:namespace/secrets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all secret in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('secret', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`secret not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`secret not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'secret'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
