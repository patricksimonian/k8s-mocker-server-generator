// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createserviceaccountRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch changes to an object of kind ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/serviceaccounts/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting serviceaccount ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('serviceaccount', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`serviceaccount ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ServiceAccount
  router.get('/api/v1/namespaces/:namespace/serviceaccounts', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing serviceaccount in namespace ${namespace}`);
      
      const resources = await storage.listResources('serviceaccount', namespace);
      
      const response = {
        kind: 'ServiceaccountList',
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

//create a ServiceAccount
  router.post('/api/v1/namespaces/:namespace/serviceaccounts', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating serviceaccount in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('serviceaccount', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of ServiceAccount
  router.delete('/api/v1/namespaces/:namespace/serviceaccounts', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all serviceaccount in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('serviceaccount', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`serviceaccount not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`serviceaccount not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'serviceaccount'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read the specified ServiceAccount
  router.get('/api/v1/namespaces/:namespace/serviceaccounts/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting serviceaccount ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('serviceaccount', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`serviceaccount ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified ServiceAccount
  router.put('/api/v1/namespaces/:namespace/serviceaccounts/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating serviceaccount ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('serviceaccount', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a ServiceAccount
  router.delete('/api/v1/namespaces/:namespace/serviceaccounts/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting serviceaccount ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('serviceaccount', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`serviceaccount ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`serviceaccount ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'serviceaccount'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/serviceaccounts', async (req, res, next) => {
    try {
      logger.info(`Listing serviceaccount`);
      
      const resources = await storage.listResources('serviceaccount');
      
      const response = {
        kind: 'ServiceaccountList',
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

//watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/serviceaccounts', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing serviceaccount in namespace ${namespace}`);
      
      const resources = await storage.listResources('serviceaccount', namespace);
      
      const response = {
        kind: 'ServiceaccountList',
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

//create token of a ServiceAccount
  router.post('/api/v1/namespaces/:namespace/serviceaccounts/:name/token', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating serviceaccount in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('serviceaccount', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ServiceAccount
  router.get('/api/v1/serviceaccounts', async (req, res, next) => {
    try {
      logger.info(`Listing serviceaccount`);
      
      const resources = await storage.listResources('serviceaccount');
      
      const response = {
        kind: 'ServiceaccountList',
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
