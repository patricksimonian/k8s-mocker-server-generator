// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createnetworkpolicyRoutes(storage: Storage): express.Router {
  const router = express.Router();

//list or watch objects of kind NetworkPolicy
  router.get('/apis/networking.k8s.io/v1/networkpolicies', async (req, res, next) => {
    try {
      logger.info(`Listing networkpolicy`);
      
      const resources = await storage.listResources('networkpolicy');
      
      const response = {
        kind: 'NetworkpolicyList',
        apiVersion: 'networking.k8s.io/v1',
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

//watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/networking.k8s.io/v1/watch/networkpolicies', async (req, res, next) => {
    try {
      logger.info(`Listing networkpolicy`);
      
      const resources = await storage.listResources('networkpolicy');
      
      const response = {
        kind: 'NetworkpolicyList',
        apiVersion: 'networking.k8s.io/v1',
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

//watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting networkpolicy ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('networkpolicy', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`networkpolicy ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind NetworkPolicy
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing networkpolicy in namespace ${namespace}`);
      
      const resources = await storage.listResources('networkpolicy', namespace);
      
      const response = {
        kind: 'NetworkpolicyList',
        apiVersion: 'networking.k8s.io/v1',
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

//create a NetworkPolicy
  router.post('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating networkpolicy in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('networkpolicy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of NetworkPolicy
  router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all networkpolicy in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('networkpolicy', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`networkpolicy not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`networkpolicy not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'networkpolicy'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read the specified NetworkPolicy
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting networkpolicy ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('networkpolicy', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`networkpolicy ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified NetworkPolicy
  router.put('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating networkpolicy ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('networkpolicy', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a NetworkPolicy
  router.delete('/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting networkpolicy ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('networkpolicy', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`networkpolicy ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`networkpolicy ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'networkpolicy'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing networkpolicy in namespace ${namespace}`);
      
      const resources = await storage.listResources('networkpolicy', namespace);
      
      const response = {
        kind: 'NetworkpolicyList',
        apiVersion: 'networking.k8s.io/v1',
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
