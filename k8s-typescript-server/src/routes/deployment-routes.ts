// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createdeploymentRoutes(storage: Storage): express.Router {
  const router = express.Router();

//list or watch objects of kind Deployment
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

//create a Deployment
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
      
      const createdResource = await storage.createResource('deployment', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Deployment
  router.delete('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all deployment in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('deployment', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`deployment not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`deployment not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'deployment'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Deployment
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

//read status of the specified Deployment
  router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
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

//replace status of the specified Deployment
  router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
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
      
      const updatedResource = await storage.updateResource('deployment', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read scale of the specified Deployment
  router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', async (req, res, next) => {
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

//replace scale of the specified Deployment
  router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', async (req, res, next) => {
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
      
      const updatedResource = await storage.updateResource('deployment', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
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

//watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
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

//watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
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

//read the specified Deployment
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

//replace the specified Deployment
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
      
      const updatedResource = await storage.updateResource('deployment', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Deployment
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
          return handleResourceError(new Error(`deployment ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
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
