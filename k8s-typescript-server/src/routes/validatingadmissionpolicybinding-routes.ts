// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createvalidatingadmissionpolicybindingRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // Get specific validatingadmissionpolicybinding
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingadmissionpolicybinding ${name}`);
      
      const resource = await storage.getResource('validatingadmissionpolicybinding', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update validatingadmissionpolicybinding
  router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating validatingadmissionpolicybinding ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('validatingadmissionpolicybinding', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete validatingadmissionpolicybinding
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting validatingadmissionpolicybinding ${name}`);
      
      try {

        const deleted = await storage.deleteResource('validatingadmissionpolicybinding', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'validatingadmissionpolicybinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List validatingadmissionpolicybinding
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      logger.info(`Listing validatingadmissionpolicybinding`);
      
      const resources = await storage.listResources('validatingadmissionpolicybinding');
      
      const response = {
        kind: 'ValidatingadmissionpolicybindingList',
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
    
  
  
  // List validatingadmissionpolicybinding
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      logger.info(`Listing validatingadmissionpolicybinding`);
      
      const resources = await storage.listResources('validatingadmissionpolicybinding');
      
      const response = {
        kind: 'ValidatingadmissionpolicybindingList',
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
  // Create validatingadmissionpolicybinding
  router.post('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      logger.info(`Creating validatingadmissionpolicybinding`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('validatingadmissionpolicybinding', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete validatingadmissionpolicybinding
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting validatingadmissionpolicybinding ${name}`);
      
      try {

        const deleted = await storage.deleteResource('validatingadmissionpolicybinding', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'validatingadmissionpolicybinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific validatingadmissionpolicybinding
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingadmissionpolicybinding ${name}`);
      
      const resource = await storage.getResource('validatingadmissionpolicybinding', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
