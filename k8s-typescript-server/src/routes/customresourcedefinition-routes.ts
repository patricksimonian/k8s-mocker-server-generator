// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcustomresourcedefinitionRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific customresourcedefinition
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting customresourcedefinition ${name}`);
      
      const resource = await storage.getResource('customresourcedefinition', name);
      
      if (!resource) {
        return handleResourceError(new Error(`customresourcedefinition ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update customresourcedefinition
  router.put('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating customresourcedefinition ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('customresourcedefinition', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete customresourcedefinition
  router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting customresourcedefinition ${name}`);
      
      try {

        const deleted = await storage.deleteResource('customresourcedefinition', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`customresourcedefinition ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`customresourcedefinition ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'customresourcedefinition'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List customresourcedefinition
  router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions', async (req, res, next) => {
    try {
      logger.info(`Listing customresourcedefinition`);
      
      const resources = await storage.listResources('customresourcedefinition');
      
      const response = {
        kind: 'CustomresourcedefinitionList',
        apiVersion: 'apiextensions.k8s.io/v1',
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
    
  
  
  // List customresourcedefinition
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      logger.info(`Listing customresourcedefinition`);
      
      const resources = await storage.listResources('customresourcedefinition');
      
      const response = {
        kind: 'CustomresourcedefinitionList',
        apiVersion: 'apiextensions.k8s.io/v1',
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
  // Create customresourcedefinition
  router.post('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      logger.info(`Creating customresourcedefinition`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('customresourcedefinition', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete customresourcedefinition
  router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting customresourcedefinition ${name}`);
      
      try {

        const deleted = await storage.deleteResource('customresourcedefinition', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`customresourcedefinition ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`customresourcedefinition ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'customresourcedefinition'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific customresourcedefinition
  router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting customresourcedefinition ${name}`);
      
      const resource = await storage.getResource('customresourcedefinition', name);
      
      if (!resource) {
        return handleResourceError(new Error(`customresourcedefinition ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
