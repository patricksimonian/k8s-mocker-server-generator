// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createjobRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List job
  router.get('/apis/batch/v1/watch/jobs', async (req, res, next) => {
    try {
      logger.info(`Listing job`);
      
      const resources = await storage.listResources('job');
      
      const response = {
        kind: 'JobList',
        apiVersion: 'batch/v1',
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
    
  
  
  // List job
  router.get('/apis/batch/v1/watch/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing job in namespace ${namespace}`);
      
      const resources = await storage.listResources('job', namespace);
      
      const response = {
        kind: 'JobList',
        apiVersion: 'batch/v1',
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
    
  
  
  // List job
  router.get('/apis/batch/v1/jobs', async (req, res, next) => {
    try {
      logger.info(`Listing job`);
      
      const resources = await storage.listResources('job');
      
      const response = {
        kind: 'JobList',
        apiVersion: 'batch/v1',
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
    
  
  
  // List job
  router.get('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing job in namespace ${namespace}`);
      
      const resources = await storage.listResources('job', namespace);
      
      const response = {
        kind: 'JobList',
        apiVersion: 'batch/v1',
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
  // Create job
  router.post('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating job in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('job', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete job
  router.delete('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting job ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('job', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`job ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`job ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'job'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific job
  router.get('/apis/batch/v1/watch/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting job ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('job', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`job ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific job
  router.get('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting job ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('job', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`job ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update job
  router.put('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating job ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('job', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete job
  router.delete('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting job ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('job', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`job ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`job ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'job'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
