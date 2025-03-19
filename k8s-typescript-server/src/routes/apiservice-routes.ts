// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createapiserviceRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific apiservice
  router.get('/apis/apiregistration.k8s.io/v1/watch/apiservices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting apiservice ${name}`);
      
      const resource = await storage.getResource('apiservice', name);
      
      if (!resource) {
        return handleResourceError(new Error(`apiservice ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List apiservice
  router.get('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
    try {
      logger.info(`Listing apiservice`);
      
      const resources = await storage.listResources('apiservice');
      
      const response = {
        kind: 'ApiserviceList',
        apiVersion: 'apiregistration.k8s.io/v1',
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
  // Create apiservice
  router.post('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
    try {
      logger.info(`Creating apiservice`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('apiservice', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete apiservice
  router.delete('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting apiservice ${name}`);
      
      try {

        const deleted = await storage.deleteResource('apiservice', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`apiservice ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`apiservice ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'apiservice'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List apiservice
  router.get('/apis/apiregistration.k8s.io/v1/watch/apiservices', async (req, res, next) => {
    try {
      logger.info(`Listing apiservice`);
      
      const resources = await storage.listResources('apiservice');
      
      const response = {
        kind: 'ApiserviceList',
        apiVersion: 'apiregistration.k8s.io/v1',
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
    
  
  
  // Get specific apiservice
  router.get('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting apiservice ${name}`);
      
      const resource = await storage.getResource('apiservice', name);
      
      if (!resource) {
        return handleResourceError(new Error(`apiservice ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update apiservice
  router.put('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating apiservice ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('apiservice', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete apiservice
  router.delete('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting apiservice ${name}`);
      
      try {

        const deleted = await storage.deleteResource('apiservice', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`apiservice ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`apiservice ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'apiservice'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
