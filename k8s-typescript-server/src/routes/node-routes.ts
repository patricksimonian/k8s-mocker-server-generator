// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createnodeRoutes(storage: Storage): express.Router {
  const router = express.Router();
  // Create node
  router.post('/api/v1/nodes', async (req, res, next) => {
    try {
      logger.info(`Creating node`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('node', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete node
  router.delete('/api/v1/nodes', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting node ${name}`);
      
      try {

        const deleted = await storage.deleteResource('node', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`node ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`node ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'node'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List node
  router.get('/api/v1/nodes', async (req, res, next) => {
    try {
      logger.info(`Listing node`);
      
      const resources = await storage.listResources('node');
      
      const response = {
        kind: 'NodeList',
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
    
  
  
  // List node
  router.get('/api/v1/watch/nodes', async (req, res, next) => {
    try {
      logger.info(`Listing node`);
      
      const resources = await storage.listResources('node');
      
      const response = {
        kind: 'NodeList',
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
    
  
  
  // Get specific node
  router.get('/api/v1/watch/nodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting node ${name}`);
      
      const resource = await storage.getResource('node', name);
      
      if (!resource) {
        return handleResourceError(new Error(`node ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Delete node
  router.delete('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting node ${name}`);
      
      try {

        const deleted = await storage.deleteResource('node', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`node ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`node ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'node'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific node
  router.get('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting node ${name}`);
      
      const resource = await storage.getResource('node', name);
      
      if (!resource) {
        return handleResourceError(new Error(`node ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update node
  router.put('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating node ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('node', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
