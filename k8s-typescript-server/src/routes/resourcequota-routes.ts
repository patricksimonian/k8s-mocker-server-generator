// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createresourcequotaRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List resourcequota
  router.get('/api/v1/watch/namespaces/:namespace/resourcequotas', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing resourcequota in namespace ${namespace}`);
      
      const resources = await storage.listResources('resourcequota', namespace);
      
      const response = {
        kind: 'ResourcequotaList',
        apiVersion: 'v1',
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
  // Create resourcequota
  router.post('/api/v1/namespaces/:namespace/resourcequotas', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating resourcequota in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('resourcequota', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete resourcequota
  router.delete('/api/v1/namespaces/:namespace/resourcequotas', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting resourcequota ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('resourcequota', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`resourcequota ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`resourcequota ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'resourcequota'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List resourcequota
  router.get('/api/v1/namespaces/:namespace/resourcequotas', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing resourcequota in namespace ${namespace}`);
      
      const resources = await storage.listResources('resourcequota', namespace);
      
      const response = {
        kind: 'ResourcequotaList',
        apiVersion: 'v1',
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
    
  
  
  // Get specific resourcequota
  router.get('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting resourcequota ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('resourcequota', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`resourcequota ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update resourcequota
  router.put('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating resourcequota ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('resourcequota', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete resourcequota
  router.delete('/api/v1/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting resourcequota ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('resourcequota', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`resourcequota ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`resourcequota ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'resourcequota'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List resourcequota
  router.get('/api/v1/resourcequotas', async (req, res, next) => {
    try {
      logger.info(`Listing resourcequota`);
      
      const resources = await storage.listResources('resourcequota');
      
      const response = {
        kind: 'ResourcequotaList',
        apiVersion: 'v1',
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
    
  
  
  // Get specific resourcequota
  router.get('/api/v1/watch/namespaces/:namespace/resourcequotas/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting resourcequota ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('resourcequota', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`resourcequota ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List resourcequota
  router.get('/api/v1/watch/resourcequotas', async (req, res, next) => {
    try {
      logger.info(`Listing resourcequota`);
      
      const resources = await storage.listResources('resourcequota');
      
      const response = {
        kind: 'ResourcequotaList',
        apiVersion: 'v1',
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
