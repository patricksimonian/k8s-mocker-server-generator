// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createvalidatingadmissionpolicyRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List validatingadmissionpolicy
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies', async (req, res, next) => {
    try {
      logger.info(`Listing validatingadmissionpolicy`);
      
      const resources = await storage.listResources('validatingadmissionpolicy');
      
      const response = {
        kind: 'ValidatingadmissionpolicyList',
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
    
  
  
  // List validatingadmissionpolicy
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies', async (req, res, next) => {
    try {
      logger.info(`Listing validatingadmissionpolicy`);
      
      const resources = await storage.listResources('validatingadmissionpolicy');
      
      const response = {
        kind: 'ValidatingadmissionpolicyList',
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
  // Create validatingadmissionpolicy
  router.post('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies', async (req, res, next) => {
    try {
      logger.info(`Creating validatingadmissionpolicy`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('validatingadmissionpolicy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete validatingadmissionpolicy
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting validatingadmissionpolicy ${name}`);
      
      try {

        const deleted = await storage.deleteResource('validatingadmissionpolicy', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingadmissionpolicy ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingadmissionpolicy ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'validatingadmissionpolicy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific validatingadmissionpolicy
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingadmissionpolicy ${name}`);
      
      const resource = await storage.getResource('validatingadmissionpolicy', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingadmissionpolicy ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update validatingadmissionpolicy
  router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating validatingadmissionpolicy ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('validatingadmissionpolicy', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete validatingadmissionpolicy
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting validatingadmissionpolicy ${name}`);
      
      try {

        const deleted = await storage.deleteResource('validatingadmissionpolicy', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingadmissionpolicy ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingadmissionpolicy ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'validatingadmissionpolicy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific validatingadmissionpolicy
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingadmissionpolicy ${name}`);
      
      const resource = await storage.getResource('validatingadmissionpolicy', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingadmissionpolicy ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
