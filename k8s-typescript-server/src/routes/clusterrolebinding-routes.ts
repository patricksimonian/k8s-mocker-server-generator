// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createclusterrolebindingRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific clusterrolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting clusterrolebinding ${name}`);
      
      const resource = await storage.getResource('clusterrolebinding', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrolebinding ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update clusterrolebinding
  router.put('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating clusterrolebinding ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('clusterrolebinding', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete clusterrolebinding
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting clusterrolebinding ${name}`);
      
      try {

        const deleted = await storage.deleteResource('clusterrolebinding', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`clusterrolebinding ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`clusterrolebinding ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'clusterrolebinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List clusterrolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', async (req, res, next) => {
    try {
      logger.info(`Listing clusterrolebinding`);
      
      const resources = await storage.listResources('clusterrolebinding');
      
      const response = {
        kind: 'ClusterrolebindingList',
        apiVersion: 'rbac.authorization.k8s.io/v1',
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
  // Create clusterrolebinding
  router.post('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', async (req, res, next) => {
    try {
      logger.info(`Creating clusterrolebinding`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('clusterrolebinding', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete clusterrolebinding
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting clusterrolebinding ${name}`);
      
      try {

        const deleted = await storage.deleteResource('clusterrolebinding', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`clusterrolebinding ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`clusterrolebinding ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'clusterrolebinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List clusterrolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings', async (req, res, next) => {
    try {
      logger.info(`Listing clusterrolebinding`);
      
      const resources = await storage.listResources('clusterrolebinding');
      
      const response = {
        kind: 'ClusterrolebindingList',
        apiVersion: 'rbac.authorization.k8s.io/v1',
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
    
  
  
  // Get specific clusterrolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting clusterrolebinding ${name}`);
      
      const resource = await storage.getResource('clusterrolebinding', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrolebinding ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
