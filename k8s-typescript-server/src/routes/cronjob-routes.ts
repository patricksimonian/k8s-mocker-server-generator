// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcronjobRoutes(storage: Storage): express.Router {
  const router = express.Router();

//list or watch objects of kind CronJob
  router.get('/apis/batch/v1/cronjobs', async (req, res, next) => {
    try {
      logger.info(`Listing cronjob`);
      
      const resources = await storage.listResources('cronjob');
      
      const response = {
        kind: 'CronjobList',
        apiVersion: 'batch/v1',
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

//watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/batch/v1/watch/namespaces/:namespace/cronjobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing cronjob in namespace ${namespace}`);
      
      const resources = await storage.listResources('cronjob', namespace);
      
      const response = {
        kind: 'CronjobList',
        apiVersion: 'batch/v1',
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

//read status of the specified CronJob
  router.get('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing cronjob in namespace ${namespace}`);
      
      const resources = await storage.listResources('cronjob', namespace);
      
      const response = {
        kind: 'CronjobList',
        apiVersion: 'batch/v1',
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

//replace status of the specified CronJob
  router.put('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating cronjob ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('cronjob', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind CronJob. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/batch/v1/watch/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting cronjob ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('cronjob', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`cronjob ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//read the specified CronJob
  router.get('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting cronjob ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('cronjob', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`cronjob ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified CronJob
  router.put('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating cronjob ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('cronjob', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a CronJob
  router.delete('/apis/batch/v1/namespaces/:namespace/cronjobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting cronjob ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('cronjob', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`cronjob ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`cronjob ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'cronjob'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/batch/v1/watch/cronjobs', async (req, res, next) => {
    try {
      logger.info(`Listing cronjob`);
      
      const resources = await storage.listResources('cronjob');
      
      const response = {
        kind: 'CronjobList',
        apiVersion: 'batch/v1',
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

//list or watch objects of kind CronJob
  router.get('/apis/batch/v1/namespaces/:namespace/cronjobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing cronjob in namespace ${namespace}`);
      
      const resources = await storage.listResources('cronjob', namespace);
      
      const response = {
        kind: 'CronjobList',
        apiVersion: 'batch/v1',
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

//create a CronJob
  router.post('/apis/batch/v1/namespaces/:namespace/cronjobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating cronjob in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('cronjob', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of CronJob
  router.delete('/apis/batch/v1/namespaces/:namespace/cronjobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all cronjob in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('cronjob', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`cronjob not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`cronjob not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'cronjob'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
