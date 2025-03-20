// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcontrollerrevisionRoutes(storage: Storage): express.Router {
  const router = express.Router();

//list or watch objects of kind ControllerRevision
  router.get('/apis/apps/v1/controllerrevisions', async (req, res, next) => {
    try {
      logger.info(`Listing controllerrevision`);
      
      const resources = await storage.listResources('controllerrevision');
      
      const response = {
        kind: 'ControllerrevisionList',
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

//watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/controllerrevisions', async (req, res, next) => {
    try {
      logger.info(`Listing controllerrevision`);
      
      const resources = await storage.listResources('controllerrevision');
      
      const response = {
        kind: 'ControllerrevisionList',
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

//read the specified ControllerRevision
  router.get('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting controllerrevision ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('controllerrevision', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`controllerrevision ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified ControllerRevision
  router.put('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating controllerrevision ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('controllerrevision', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a ControllerRevision
  router.delete('/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting controllerrevision ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('controllerrevision', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`controllerrevision ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`controllerrevision ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'controllerrevision'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting controllerrevision ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('controllerrevision', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`controllerrevision ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing controllerrevision in namespace ${namespace}`);
      
      const resources = await storage.listResources('controllerrevision', namespace);
      
      const response = {
        kind: 'ControllerrevisionList',
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

//create a ControllerRevision
  router.post('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating controllerrevision in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('controllerrevision', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of ControllerRevision
  router.delete('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all controllerrevision in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('controllerrevision', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`controllerrevision not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`controllerrevision not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'controllerrevision'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ControllerRevision
  router.get('/apis/apps/v1/namespaces/:namespace/controllerrevisions', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing controllerrevision in namespace ${namespace}`);
      
      const resources = await storage.listResources('controllerrevision', namespace);
      
      const response = {
        kind: 'ControllerrevisionList',
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

  return router;
}
