// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcsistoragecapacityRoutes(storage: Storage): express.Router {
  const router = express.Router();

//replace the specified CSIStorageCapacity
  router.put('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating csistoragecapacity ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('csistoragecapacity', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a CSIStorageCapacity
  router.delete('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting csistoragecapacity ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('csistoragecapacity', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`csistoragecapacity ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csistoragecapacity ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'csistoragecapacity'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read the specified CSIStorageCapacity
  router.get('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting csistoragecapacity ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('csistoragecapacity', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`csistoragecapacity ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind CSIStorageCapacity
  router.get('/apis/storage.k8s.io/v1/csistoragecapacities', async (req, res, next) => {
    try {
      logger.info(`Listing csistoragecapacity`);
      
      const resources = await storage.listResources('csistoragecapacity');
      
      const response = {
        kind: 'CsistoragecapacityList',
        apiVersion: 'storage.k8s.io/v1',
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

//watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing csistoragecapacity in namespace ${namespace}`);
      
      const resources = await storage.listResources('csistoragecapacity', namespace);
      
      const response = {
        kind: 'CsistoragecapacityList',
        apiVersion: 'storage.k8s.io/v1',
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

//list or watch objects of kind CSIStorageCapacity
  router.get('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing csistoragecapacity in namespace ${namespace}`);
      
      const resources = await storage.listResources('csistoragecapacity', namespace);
      
      const response = {
        kind: 'CsistoragecapacityList',
        apiVersion: 'storage.k8s.io/v1',
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

//create a CSIStorageCapacity
  router.post('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating csistoragecapacity in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('csistoragecapacity', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of CSIStorageCapacity
  router.delete('/apis/storage.k8s.io/v1/namespaces/:namespace/csistoragecapacities', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all csistoragecapacity in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('csistoragecapacity', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`csistoragecapacity not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csistoragecapacity not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'csistoragecapacity'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/storage.k8s.io/v1/watch/csistoragecapacities', async (req, res, next) => {
    try {
      logger.info(`Listing csistoragecapacity`);
      
      const resources = await storage.listResources('csistoragecapacity');
      
      const response = {
        kind: 'CsistoragecapacityList',
        apiVersion: 'storage.k8s.io/v1',
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

//watch changes to an object of kind CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/storage.k8s.io/v1/watch/namespaces/:namespace/csistoragecapacities/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting csistoragecapacity ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('csistoragecapacity', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`csistoragecapacity ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
