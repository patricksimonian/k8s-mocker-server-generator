// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createvalidatingwebhookconfigurationRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific validatingwebhookconfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('validatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update validatingwebhookconfiguration
  router.put('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating validatingwebhookconfiguration ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('validatingwebhookconfiguration', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete validatingwebhookconfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting validatingwebhookconfiguration ${name}`);
      
      try {

        const deleted = await storage.deleteResource('validatingwebhookconfiguration', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'validatingwebhookconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific validatingwebhookconfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('validatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List validatingwebhookconfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing validatingwebhookconfiguration`);
      
      const resources = await storage.listResources('validatingwebhookconfiguration');
      
      const response = {
        kind: 'ValidatingwebhookconfigurationList',
        apiVersion: 'admissionregistration.k8s.io/v1',
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
  // Create validatingwebhookconfiguration
  router.post('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Creating validatingwebhookconfiguration`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('validatingwebhookconfiguration', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete validatingwebhookconfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting validatingwebhookconfiguration ${name}`);
      
      try {

        const deleted = await storage.deleteResource('validatingwebhookconfiguration', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'validatingwebhookconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List validatingwebhookconfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing validatingwebhookconfiguration`);
      
      const resources = await storage.listResources('validatingwebhookconfiguration');
      
      const response = {
        kind: 'ValidatingwebhookconfigurationList',
        apiVersion: 'admissionregistration.k8s.io/v1',
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
