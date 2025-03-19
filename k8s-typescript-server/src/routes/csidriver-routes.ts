// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcsidriverRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List csidriver
  router.get('/apis/storage.k8s.io/v1/watch/csidrivers', async (req, res, next) => {
    try {
      logger.info(`Listing csidriver`);
      
      const resources = await storage.listResources('csidriver');
      
      const response = {
        kind: 'CsidriverList',
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
    
  
  
  // Get specific csidriver
  router.get('/apis/storage.k8s.io/v1/watch/csidrivers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting csidriver ${name}`);
      
      const resource = await storage.getResource('csidriver', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csidriver ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List csidriver
  router.get('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
    try {
      logger.info(`Listing csidriver`);
      
      const resources = await storage.listResources('csidriver');
      
      const response = {
        kind: 'CsidriverList',
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
  // Create csidriver
  router.post('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
    try {
      logger.info(`Creating csidriver`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('csidriver', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete csidriver
  router.delete('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting csidriver ${name}`);
      
      try {

        const deleted = await storage.deleteResource('csidriver', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`csidriver ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csidriver ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'csidriver'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  // Update csidriver
  router.put('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating csidriver ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('csidriver', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete csidriver
  router.delete('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting csidriver ${name}`);
      
      try {

        const deleted = await storage.deleteResource('csidriver', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`csidriver ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csidriver ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'csidriver'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific csidriver
  router.get('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting csidriver ${name}`);
      
      const resource = await storage.getResource('csidriver', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csidriver ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
