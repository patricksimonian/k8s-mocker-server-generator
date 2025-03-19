// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcertificatesigningrequestRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List certificatesigningrequest
  router.get('/apis/certificates.k8s.io/v1/watch/certificatesigningrequests', async (req, res, next) => {
    try {
      logger.info(`Listing certificatesigningrequest`);
      
      const resources = await storage.listResources('certificatesigningrequest');
      
      const response = {
        kind: 'CertificatesigningrequestList',
        apiVersion: 'certificates.k8s.io/v1',
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
    
  
  
  // Get specific certificatesigningrequest
  router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting certificatesigningrequest ${name}`);
      
      const resource = await storage.getResource('certificatesigningrequest', name);
      
      if (!resource) {
        return handleResourceError(new Error(`certificatesigningrequest ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update certificatesigningrequest
  router.put('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating certificatesigningrequest ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('certificatesigningrequest', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete certificatesigningrequest
  router.delete('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting certificatesigningrequest ${name}`);
      
      try {

        const deleted = await storage.deleteResource('certificatesigningrequest', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`certificatesigningrequest ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`certificatesigningrequest ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'certificatesigningrequest'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List certificatesigningrequest
  router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests', async (req, res, next) => {
    try {
      logger.info(`Listing certificatesigningrequest`);
      
      const resources = await storage.listResources('certificatesigningrequest');
      
      const response = {
        kind: 'CertificatesigningrequestList',
        apiVersion: 'certificates.k8s.io/v1',
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
  // Create certificatesigningrequest
  router.post('/apis/certificates.k8s.io/v1/certificatesigningrequests', async (req, res, next) => {
    try {
      logger.info(`Creating certificatesigningrequest`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('certificatesigningrequest', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete certificatesigningrequest
  router.delete('/apis/certificates.k8s.io/v1/certificatesigningrequests', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting certificatesigningrequest ${name}`);
      
      try {

        const deleted = await storage.deleteResource('certificatesigningrequest', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`certificatesigningrequest ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`certificatesigningrequest ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'certificatesigningrequest'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific certificatesigningrequest
  router.get('/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting certificatesigningrequest ${name}`);
      
      const resource = await storage.getResource('certificatesigningrequest', name);
      
      if (!resource) {
        return handleResourceError(new Error(`certificatesigningrequest ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
