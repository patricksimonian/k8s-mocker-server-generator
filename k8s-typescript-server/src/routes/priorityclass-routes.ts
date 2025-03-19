// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpriorityclassRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List priorityclass
  router.get('/apis/scheduling.k8s.io/v1/watch/priorityclasses', async (req, res, next) => {
    try {
      logger.info(`Listing priorityclass`);
      
      const resources = await storage.listResources('priorityclass');
      
      const response = {
        kind: 'PriorityclassList',
        apiVersion: 'scheduling.k8s.io/v1',
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
    
  
  
  // Get specific priorityclass
  router.get('/apis/scheduling.k8s.io/v1/watch/priorityclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting priorityclass ${name}`);
      
      const resource = await storage.getResource('priorityclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`priorityclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific priorityclass
  router.get('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting priorityclass ${name}`);
      
      const resource = await storage.getResource('priorityclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`priorityclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update priorityclass
  router.put('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating priorityclass ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('priorityclass', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete priorityclass
  router.delete('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting priorityclass ${name}`);
      
      try {

        const deleted = await storage.deleteResource('priorityclass', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`priorityclass ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`priorityclass ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'priorityclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List priorityclass
  router.get('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
    try {
      logger.info(`Listing priorityclass`);
      
      const resources = await storage.listResources('priorityclass');
      
      const response = {
        kind: 'PriorityclassList',
        apiVersion: 'scheduling.k8s.io/v1',
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
  // Create priorityclass
  router.post('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
    try {
      logger.info(`Creating priorityclass`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('priorityclass', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete priorityclass
  router.delete('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting priorityclass ${name}`);
      
      try {

        const deleted = await storage.deleteResource('priorityclass', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`priorityclass ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`priorityclass ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'priorityclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
