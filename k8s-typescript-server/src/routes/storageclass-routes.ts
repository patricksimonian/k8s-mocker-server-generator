// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createstorageclassRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List storageclass
  router.get('/apis/storage.k8s.io/v1/watch/storageclasses', async (req, res, next) => {
    try {
      logger.info(`Listing storageclass`);
      
      const resources = await storage.listResources('storageclass');
      
      const response = {
        kind: 'StorageclassList',
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
  // Update storageclass
  router.put('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating storageclass ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('storageclass', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete storageclass
  router.delete('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting storageclass ${name}`);
      
      try {

        const deleted = await storage.deleteResource('storageclass', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`storageclass ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`storageclass ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'storageclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific storageclass
  router.get('/apis/storage.k8s.io/v1/storageclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting storageclass ${name}`);
      
      const resource = await storage.getResource('storageclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`storageclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific storageclass
  router.get('/apis/storage.k8s.io/v1/watch/storageclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting storageclass ${name}`);
      
      const resource = await storage.getResource('storageclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`storageclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List storageclass
  router.get('/apis/storage.k8s.io/v1/storageclasses', async (req, res, next) => {
    try {
      logger.info(`Listing storageclass`);
      
      const resources = await storage.listResources('storageclass');
      
      const response = {
        kind: 'StorageclassList',
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
  // Create storageclass
  router.post('/apis/storage.k8s.io/v1/storageclasses', async (req, res, next) => {
    try {
      logger.info(`Creating storageclass`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('storageclass', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete storageclass
  router.delete('/apis/storage.k8s.io/v1/storageclasses', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting storageclass ${name}`);
      
      try {

        const deleted = await storage.deleteResource('storageclass', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`storageclass ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`storageclass ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'storageclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
