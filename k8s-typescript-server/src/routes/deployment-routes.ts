// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createdeploymentRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List deployment
  router.get('/apis/apps/v1/watch/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing deployment in namespace ${namespace}`);
      
      const resources = await storage.listResources('deployment', namespace);
      
      const response = {
        kind: 'DeploymentList',
        apiVersion: 'apps/v1',
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
    
  
  
  // Get specific deployment
  router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting deployment ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('deployment', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`deployment ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update deployment
  router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating deployment ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('deployment', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete deployment
  router.delete('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting deployment ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('deployment', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`deployment ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`deployment ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'deployment'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List deployment
  router.get('/apis/apps/v1/deployments', async (req, res, next) => {
    try {
      logger.info(`Listing deployment`);
      
      const resources = await storage.listResources('deployment');
      
      const response = {
        kind: 'DeploymentList',
        apiVersion: 'apps/v1',
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
    
  
  
  // List deployment
  router.get('/apis/apps/v1/watch/deployments', async (req, res, next) => {
    try {
      logger.info(`Listing deployment`);
      
      const resources = await storage.listResources('deployment');
      
      const response = {
        kind: 'DeploymentList',
        apiVersion: 'apps/v1',
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
    
  
  
  // Get specific deployment
  router.get('/apis/apps/v1/watch/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting deployment ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('deployment', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`deployment ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List deployment
  router.get('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing deployment in namespace ${namespace}`);
      
      const resources = await storage.listResources('deployment', namespace);
      
      const response = {
        kind: 'DeploymentList',
        apiVersion: 'apps/v1',
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
  // Create deployment
  router.post('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating deployment in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('deployment', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete deployment
  router.delete('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting deployment ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('deployment', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`deployment ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`deployment ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'deployment'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
