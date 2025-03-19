// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createrolebindingRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List rolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing rolebinding in namespace ${namespace}`);
      
      const resources = await storage.listResources('rolebinding', namespace);
      
      const response = {
        kind: 'RolebindingList',
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
    
  
  
  // List rolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/rolebindings', async (req, res, next) => {
    try {
      logger.info(`Listing rolebinding`);
      
      const resources = await storage.listResources('rolebinding');
      
      const response = {
        kind: 'RolebindingList',
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
    
  
  
  // List rolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/rolebindings', async (req, res, next) => {
    try {
      logger.info(`Listing rolebinding`);
      
      const resources = await storage.listResources('rolebinding');
      
      const response = {
        kind: 'RolebindingList',
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
    
  
  
  // List rolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing rolebinding in namespace ${namespace}`);
      
      const resources = await storage.listResources('rolebinding', namespace);
      
      const response = {
        kind: 'RolebindingList',
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
  // Create rolebinding
  router.post('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating rolebinding in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('rolebinding', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete rolebinding
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting rolebinding ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('rolebinding', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`rolebinding ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`rolebinding ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'rolebinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific rolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting rolebinding ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('rolebinding', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`rolebinding ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific rolebinding
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting rolebinding ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('rolebinding', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`rolebinding ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update rolebinding
  router.put('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating rolebinding ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('rolebinding', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete rolebinding
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting rolebinding ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('rolebinding', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`rolebinding ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`rolebinding ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'rolebinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
