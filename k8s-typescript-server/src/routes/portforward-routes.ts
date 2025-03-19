// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createportforwardRoutes(storage: Storage): express.Router {
  const router = express.Router();
  // Create portforward
  router.post('/api/v1/namespaces/:namespace/pods/:name/portforward', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating portforward in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('portforward', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List portforward
  router.get('/api/v1/namespaces/:namespace/pods/:name/portforward', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing portforward in namespace ${namespace}`);
      
      const resources = await storage.listResources('portforward', namespace);
      
      const response = {
        kind: 'PortforwardList',
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
