// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createclusterroleRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List clusterrole
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterroles', async (req, res, next) => {
    try {
      logger.info(`Listing clusterrole`);
      
      const resources = await storage.listResources('clusterrole');
      
      const response = {
        kind: 'ClusterroleList',
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
  // Create clusterrole
  router.post('/apis/rbac.authorization.k8s.io/v1/clusterroles', async (req, res, next) => {
    try {
      logger.info(`Creating clusterrole`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('clusterrole', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete clusterrole
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterroles', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting clusterrole ${name}`);
      
      try {

        const deleted = await storage.deleteResource('clusterrole', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`clusterrole ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`clusterrole ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'clusterrole'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific clusterrole
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting clusterrole ${name}`);
      
      const resource = await storage.getResource('clusterrole', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrole ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List clusterrole
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterroles', async (req, res, next) => {
    try {
      logger.info(`Listing clusterrole`);
      
      const resources = await storage.listResources('clusterrole');
      
      const response = {
        kind: 'ClusterroleList',
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
    
  
  
  // Get specific clusterrole
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting clusterrole ${name}`);
      
      const resource = await storage.getResource('clusterrole', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrole ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update clusterrole
  router.put('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating clusterrole ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('clusterrole', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete clusterrole
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting clusterrole ${name}`);
      
      try {

        const deleted = await storage.deleteResource('clusterrole', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`clusterrole ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`clusterrole ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'clusterrole'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
