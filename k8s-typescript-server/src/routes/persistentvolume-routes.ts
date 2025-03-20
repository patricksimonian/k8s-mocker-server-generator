// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpersistentvolumeRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read status of the specified PersistentVolume
  router.get('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing persistentvolume`);
      
      const resources = await storage.listResources('persistentvolume');
      
      const response = {
        kind: 'PersistentvolumeList',
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

//replace status of the specified PersistentVolume
  router.put('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating persistentvolume ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('persistentvolume', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read the specified PersistentVolume
  router.get('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting persistentvolume ${name}`);
      
      const resource = await storage.getResource('persistentvolume', name);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolume ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified PersistentVolume
  router.put('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating persistentvolume ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('persistentvolume', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a PersistentVolume
  router.delete('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting persistentvolume ${name}`);
      
      try {

        const deleted = await storage.deleteResource('persistentvolume', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`persistentvolume ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`persistentvolume ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'persistentvolume'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/persistentvolumes', async (req, res, next) => {
    try {
      logger.info(`Listing persistentvolume`);
      
      const resources = await storage.listResources('persistentvolume');
      
      const response = {
        kind: 'PersistentvolumeList',
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

//list or watch objects of kind PersistentVolume
  router.get('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      logger.info(`Listing persistentvolume`);
      
      const resources = await storage.listResources('persistentvolume');
      
      const response = {
        kind: 'PersistentvolumeList',
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

//create a PersistentVolume
  router.post('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      logger.info(`Creating persistentvolume`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('persistentvolume', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of PersistentVolume
  router.delete('/api/v1/persistentvolumes', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('persistentvolume');
        
        if (!deleted) {
          return handleResourceError(new Error(`persistentvolume not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`persistentvolume not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'persistentvolume'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/persistentvolumes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting persistentvolume ${name}`);
      
      const resource = await storage.getResource('persistentvolume', name);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolume ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
