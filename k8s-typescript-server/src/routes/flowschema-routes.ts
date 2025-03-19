// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createflowschemaRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List flowschema
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
    try {
      logger.info(`Listing flowschema`);
      
      const resources = await storage.listResources('flowschema');
      
      const response = {
        kind: 'FlowschemaList',
        apiVersion: 'flowcontrol.apiserver.k8s.io/v1',
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
  // Create flowschema
  router.post('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
    try {
      logger.info(`Creating flowschema`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('flowschema', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete flowschema
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting flowschema ${name}`);
      
      try {

        const deleted = await storage.deleteResource('flowschema', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`flowschema ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`flowschema ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'flowschema'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific flowschema
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting flowschema ${name}`);
      
      const resource = await storage.getResource('flowschema', name);
      
      if (!resource) {
        return handleResourceError(new Error(`flowschema ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific flowschema
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting flowschema ${name}`);
      
      const resource = await storage.getResource('flowschema', name);
      
      if (!resource) {
        return handleResourceError(new Error(`flowschema ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update flowschema
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating flowschema ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('flowschema', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete flowschema
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting flowschema ${name}`);
      
      try {

        const deleted = await storage.deleteResource('flowschema', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`flowschema ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`flowschema ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'flowschema'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List flowschema
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas', async (req, res, next) => {
    try {
      logger.info(`Listing flowschema`);
      
      const resources = await storage.listResources('flowschema');
      
      const response = {
        kind: 'FlowschemaList',
        apiVersion: 'flowcontrol.apiserver.k8s.io/v1',
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
