// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createserviceaccountRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific serviceaccount
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
  // Update serviceaccount
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
      
      const updatedResource = await storage.createOrUpdateResource('serviceaccount', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete serviceaccount
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
          return handleResourceError(new Error(`serviceaccount ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
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
    
  
  
  // List serviceaccount
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
    
  
  
  // List serviceaccount
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
    
  
  
  // List serviceaccount
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
  // Delete serviceaccount
  router.delete('/api/v1/namespaces/:namespace/serviceaccounts', async (req, res, next) => {
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
          return handleResourceError(new Error(`serviceaccount ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
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
    
  
  
  // List serviceaccount
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
  // Create serviceaccount
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
      
      const createdResource = await storage.createOrUpdateResource('serviceaccount', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific serviceaccount
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

  return router;
}
