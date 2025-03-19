// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createingressclassRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific ingressclass
  router.get('/apis/networking.k8s.io/v1/watch/ingressclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting ingressclass ${name}`);
      
      const resource = await storage.getResource('ingressclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`ingressclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List ingressclass
  router.get('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
    try {
      logger.info(`Listing ingressclass`);
      
      const resources = await storage.listResources('ingressclass');
      
      const response = {
        kind: 'IngressclassList',
        apiVersion: 'networking.k8s.io/v1',
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
  // Create ingressclass
  router.post('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
    try {
      logger.info(`Creating ingressclass`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('ingressclass', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete ingressclass
  router.delete('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting ingressclass ${name}`);
      
      try {

        const deleted = await storage.deleteResource('ingressclass', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`ingressclass ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`ingressclass ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'ingressclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  // Delete ingressclass
  router.delete('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting ingressclass ${name}`);
      
      try {

        const deleted = await storage.deleteResource('ingressclass', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`ingressclass ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`ingressclass ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'ingressclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific ingressclass
  router.get('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting ingressclass ${name}`);
      
      const resource = await storage.getResource('ingressclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`ingressclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update ingressclass
  router.put('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating ingressclass ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('ingressclass', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List ingressclass
  router.get('/apis/networking.k8s.io/v1/watch/ingressclasses', async (req, res, next) => {
    try {
      logger.info(`Listing ingressclass`);
      
      const resources = await storage.listResources('ingressclass');
      
      const response = {
        kind: 'IngressclassList',
        apiVersion: 'networking.k8s.io/v1',
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
