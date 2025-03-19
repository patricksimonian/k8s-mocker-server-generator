// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createroleRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List role
  router.get('/apis/rbac.authorization.k8s.io/v1/roles', async (req, res, next) => {
    try {
      logger.info(`Listing role`);
      
      const resources = await storage.listResources('role');
      
      const response = {
        kind: 'RoleList',
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
    
  
  
  // Get specific role
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting role ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('role', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`role ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update role
  router.put('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating role ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('role', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete role
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting role ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('role', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`role ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`role ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'role'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific role
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting role ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('role', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`role ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List role
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/roles', async (req, res, next) => {
    try {
      logger.info(`Listing role`);
      
      const resources = await storage.listResources('role');
      
      const response = {
        kind: 'RoleList',
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
    
  
  
  // List role
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing role in namespace ${namespace}`);
      
      const resources = await storage.listResources('role', namespace);
      
      const response = {
        kind: 'RoleList',
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
    
  
  
  // List role
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing role in namespace ${namespace}`);
      
      const resources = await storage.listResources('role', namespace);
      
      const response = {
        kind: 'RoleList',
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
  // Create role
  router.post('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating role in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('role', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete role
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting role ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('role', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`role ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`role ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'role'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
