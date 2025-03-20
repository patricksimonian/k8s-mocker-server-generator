// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createleaseRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/coordination.k8s.io/v1/watch/leases', async (req, res, next) => {
    try {
      logger.info(`Listing lease`);
      
      const resources = await storage.listResources('lease');
      
      const response = {
        kind: 'LeaseList',
        apiVersion: 'coordination.k8s.io/v1',
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

//watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing lease in namespace ${namespace}`);
      
      const resources = await storage.listResources('lease', namespace);
      
      const response = {
        kind: 'LeaseList',
        apiVersion: 'coordination.k8s.io/v1',
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

//watch changes to an object of kind Lease. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/coordination.k8s.io/v1/watch/namespaces/:namespace/leases/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting lease ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('lease', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`lease ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//delete a Lease
  router.delete('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting lease ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('lease', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`lease ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`lease ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'lease'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read the specified Lease
  router.get('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting lease ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('lease', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`lease ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified Lease
  router.put('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating lease ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('lease', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//create a Lease
  router.post('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating lease in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('lease', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Lease
  router.delete('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all lease in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('lease', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`lease not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`lease not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'lease'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Lease
  router.get('/apis/coordination.k8s.io/v1/namespaces/:namespace/leases', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing lease in namespace ${namespace}`);
      
      const resources = await storage.listResources('lease', namespace);
      
      const response = {
        kind: 'LeaseList',
        apiVersion: 'coordination.k8s.io/v1',
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

//list or watch objects of kind Lease
  router.get('/apis/coordination.k8s.io/v1/leases', async (req, res, next) => {
    try {
      logger.info(`Listing lease`);
      
      const resources = await storage.listResources('lease');
      
      const response = {
        kind: 'LeaseList',
        apiVersion: 'coordination.k8s.io/v1',
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
