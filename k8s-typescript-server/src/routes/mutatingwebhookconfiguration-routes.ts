// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createmutatingwebhookconfigurationRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific mutatingwebhookconfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting mutatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('mutatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update mutatingwebhookconfiguration
  router.put('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating mutatingwebhookconfiguration ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('mutatingwebhookconfiguration', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete mutatingwebhookconfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting mutatingwebhookconfiguration ${name}`);
      
      try {

        const deleted = await storage.deleteResource('mutatingwebhookconfiguration', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'mutatingwebhookconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List mutatingwebhookconfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing mutatingwebhookconfiguration`);
      
      const resources = await storage.listResources('mutatingwebhookconfiguration');
      
      const response = {
        kind: 'MutatingwebhookconfigurationList',
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
  // Create mutatingwebhookconfiguration
  router.post('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Creating mutatingwebhookconfiguration`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('mutatingwebhookconfiguration', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete mutatingwebhookconfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting mutatingwebhookconfiguration ${name}`);
      
      try {

        const deleted = await storage.deleteResource('mutatingwebhookconfiguration', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'mutatingwebhookconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific mutatingwebhookconfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting mutatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('mutatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List mutatingwebhookconfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing mutatingwebhookconfiguration`);
      
      const resources = await storage.listResources('mutatingwebhookconfiguration');
      
      const response = {
        kind: 'MutatingwebhookconfigurationList',
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
