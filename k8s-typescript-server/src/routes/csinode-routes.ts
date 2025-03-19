// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcsinodeRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific csinode
  router.get('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting csinode ${name}`);
      
      const resource = await storage.getResource('csinode', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csinode ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update csinode
  router.put('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating csinode ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('csinode', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete csinode
  router.delete('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting csinode ${name}`);
      
      try {

        const deleted = await storage.deleteResource('csinode', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`csinode ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csinode ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'csinode'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List csinode
  router.get('/apis/storage.k8s.io/v1/watch/csinodes', async (req, res, next) => {
    try {
      logger.info(`Listing csinode`);
      
      const resources = await storage.listResources('csinode');
      
      const response = {
        kind: 'CsinodeList',
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
    
  
  
  // List csinode
  router.get('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
    try {
      logger.info(`Listing csinode`);
      
      const resources = await storage.listResources('csinode');
      
      const response = {
        kind: 'CsinodeList',
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
  // Create csinode
  router.post('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
    try {
      logger.info(`Creating csinode`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('csinode', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete csinode
  router.delete('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting csinode ${name}`);
      
      try {

        const deleted = await storage.deleteResource('csinode', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`csinode ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csinode ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'csinode'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific csinode
  router.get('/apis/storage.k8s.io/v1/watch/csinodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting csinode ${name}`);
      
      const resource = await storage.getResource('csinode', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csinode ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
