// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createlimitrangeRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/limitranges', async (req, res, next) => {
    try {
      logger.info(`Listing limitrange`);
      
      const resources = await storage.listResources('limitrange');
      
      const response = {
        kind: 'LimitrangeList',
        apiVersion: 'v1',
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

//watch changes to an object of kind LimitRange. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting limitrange ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('limitrange', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`limitrange ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind LimitRange
  router.get('/api/v1/limitranges', async (req, res, next) => {
    try {
      logger.info(`Listing limitrange`);
      
      const resources = await storage.listResources('limitrange');
      
      const response = {
        kind: 'LimitrangeList',
        apiVersion: 'v1',
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

//watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/limitranges', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing limitrange in namespace ${namespace}`);
      
      const resources = await storage.listResources('limitrange', namespace);
      
      const response = {
        kind: 'LimitrangeList',
        apiVersion: 'v1',
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

//list or watch objects of kind LimitRange
  router.get('/api/v1/namespaces/:namespace/limitranges', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing limitrange in namespace ${namespace}`);
      
      const resources = await storage.listResources('limitrange', namespace);
      
      const response = {
        kind: 'LimitrangeList',
        apiVersion: 'v1',
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

//create a LimitRange
  router.post('/api/v1/namespaces/:namespace/limitranges', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating limitrange in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('limitrange', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of LimitRange
  router.delete('/api/v1/namespaces/:namespace/limitranges', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all limitrange in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('limitrange', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`limitrange not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`limitrange not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'limitrange'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read the specified LimitRange
  router.get('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting limitrange ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('limitrange', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`limitrange ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified LimitRange
  router.put('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating limitrange ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('limitrange', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a LimitRange
  router.delete('/api/v1/namespaces/:namespace/limitranges/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting limitrange ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('limitrange', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`limitrange ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`limitrange ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'limitrange'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
