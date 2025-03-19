// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpersistentvolumeRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific persistentvolume
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
  // Delete persistentvolume
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
          return handleResourceError(new Error(`persistentvolume ${name} not deleted. Error: ${(e as Error).message)}`), res);
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
    
  
  
  // Get specific persistentvolume
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
  // Update persistentvolume
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
      
      const updatedResource = await storage.createOrUpdateResource('persistentvolume', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List persistentvolume
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
  // Create persistentvolume
  router.post('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      logger.info(`Creating persistentvolume`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('persistentvolume', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete persistentvolume
  router.delete('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting persistentvolume ${name}`);
      
      try {

        const deleted = await storage.deleteResource('persistentvolume', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`persistentvolume ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`persistentvolume ${name} not deleted. Error: ${(e as Error).message)}`), res);
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
    
  
  
  // List persistentvolume
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

  return router;
}
