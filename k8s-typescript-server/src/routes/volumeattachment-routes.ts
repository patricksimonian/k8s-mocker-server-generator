// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createvolumeattachmentRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List volumeattachment
  router.get('/apis/storage.k8s.io/v1/volumeattachments', async (req, res, next) => {
    try {
      logger.info(`Listing volumeattachment`);
      
      const resources = await storage.listResources('volumeattachment');
      
      const response = {
        kind: 'VolumeattachmentList',
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
  // Create volumeattachment
  router.post('/apis/storage.k8s.io/v1/volumeattachments', async (req, res, next) => {
    try {
      logger.info(`Creating volumeattachment`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('volumeattachment', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete volumeattachment
  router.delete('/apis/storage.k8s.io/v1/volumeattachments', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting volumeattachment ${name}`);
      
      try {

        const deleted = await storage.deleteResource('volumeattachment', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`volumeattachment ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`volumeattachment ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'volumeattachment'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific volumeattachment
  router.get('/apis/storage.k8s.io/v1/watch/volumeattachments/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting volumeattachment ${name}`);
      
      const resource = await storage.getResource('volumeattachment', name);
      
      if (!resource) {
        return handleResourceError(new Error(`volumeattachment ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Delete volumeattachment
  router.delete('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting volumeattachment ${name}`);
      
      try {

        const deleted = await storage.deleteResource('volumeattachment', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`volumeattachment ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`volumeattachment ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'volumeattachment'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific volumeattachment
  router.get('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting volumeattachment ${name}`);
      
      const resource = await storage.getResource('volumeattachment', name);
      
      if (!resource) {
        return handleResourceError(new Error(`volumeattachment ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update volumeattachment
  router.put('/apis/storage.k8s.io/v1/volumeattachments/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating volumeattachment ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('volumeattachment', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List volumeattachment
  router.get('/apis/storage.k8s.io/v1/watch/volumeattachments', async (req, res, next) => {
    try {
      logger.info(`Listing volumeattachment`);
      
      const resources = await storage.listResources('volumeattachment');
      
      const response = {
        kind: 'VolumeattachmentList',
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

  return router;
}
