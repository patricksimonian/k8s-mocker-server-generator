// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpoddisruptionbudgetRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List poddisruptionbudget
  router.get('/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing poddisruptionbudget in namespace ${namespace}`);
      
      const resources = await storage.listResources('poddisruptionbudget', namespace);
      
      const response = {
        kind: 'PoddisruptionbudgetList',
        apiVersion: 'policy/v1',
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
    
  
  
  // Get specific poddisruptionbudget
  router.get('/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting poddisruptionbudget ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('poddisruptionbudget', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`poddisruptionbudget ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List poddisruptionbudget
  router.get('/apis/policy/v1/poddisruptionbudgets', async (req, res, next) => {
    try {
      logger.info(`Listing poddisruptionbudget`);
      
      const resources = await storage.listResources('poddisruptionbudget');
      
      const response = {
        kind: 'PoddisruptionbudgetList',
        apiVersion: 'policy/v1',
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
    
  
  
  // List poddisruptionbudget
  router.get('/apis/policy/v1/watch/poddisruptionbudgets', async (req, res, next) => {
    try {
      logger.info(`Listing poddisruptionbudget`);
      
      const resources = await storage.listResources('poddisruptionbudget');
      
      const response = {
        kind: 'PoddisruptionbudgetList',
        apiVersion: 'policy/v1',
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
    
  
  
  // List poddisruptionbudget
  router.get('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing poddisruptionbudget in namespace ${namespace}`);
      
      const resources = await storage.listResources('poddisruptionbudget', namespace);
      
      const response = {
        kind: 'PoddisruptionbudgetList',
        apiVersion: 'policy/v1',
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
  // Create poddisruptionbudget
  router.post('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating poddisruptionbudget in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('poddisruptionbudget', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete poddisruptionbudget
  router.delete('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting poddisruptionbudget ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('poddisruptionbudget', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`poddisruptionbudget ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`poddisruptionbudget ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'poddisruptionbudget'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  // Update poddisruptionbudget
  router.put('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating poddisruptionbudget ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('poddisruptionbudget', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete poddisruptionbudget
  router.delete('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting poddisruptionbudget ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('poddisruptionbudget', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`poddisruptionbudget ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`poddisruptionbudget ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'poddisruptionbudget'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific poddisruptionbudget
  router.get('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting poddisruptionbudget ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('poddisruptionbudget', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`poddisruptionbudget ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
