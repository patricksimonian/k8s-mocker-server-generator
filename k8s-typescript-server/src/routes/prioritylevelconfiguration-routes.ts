// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createprioritylevelconfigurationRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List prioritylevelconfiguration
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing prioritylevelconfiguration`);
      
      const resources = await storage.listResources('prioritylevelconfiguration');
      
      const response = {
        kind: 'PrioritylevelconfigurationList',
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
  // Create prioritylevelconfiguration
  router.post('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
    try {
      logger.info(`Creating prioritylevelconfiguration`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('prioritylevelconfiguration', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete prioritylevelconfiguration
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting prioritylevelconfiguration ${name}`);
      
      try {

        const deleted = await storage.deleteResource('prioritylevelconfiguration', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`prioritylevelconfiguration ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`prioritylevelconfiguration ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'prioritylevelconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific prioritylevelconfiguration
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting prioritylevelconfiguration ${name}`);
      
      const resource = await storage.getResource('prioritylevelconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`prioritylevelconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List prioritylevelconfiguration
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing prioritylevelconfiguration`);
      
      const resources = await storage.listResources('prioritylevelconfiguration');
      
      const response = {
        kind: 'PrioritylevelconfigurationList',
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
    
  
  
  // Get specific prioritylevelconfiguration
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting prioritylevelconfiguration ${name}`);
      
      const resource = await storage.getResource('prioritylevelconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`prioritylevelconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update prioritylevelconfiguration
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating prioritylevelconfiguration ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('prioritylevelconfiguration', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete prioritylevelconfiguration
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting prioritylevelconfiguration ${name}`);
      
      try {

        const deleted = await storage.deleteResource('prioritylevelconfiguration', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`prioritylevelconfiguration ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`prioritylevelconfiguration ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'prioritylevelconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
