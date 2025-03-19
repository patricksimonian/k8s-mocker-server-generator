// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createexecRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List exec
  router.get('/api/v1/namespaces/:namespace/pods/:name/exec', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing exec in namespace ${namespace}`);
      
      const resources = await storage.listResources('exec', namespace);
      
      const response = {
        kind: 'ExecList',
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
  // Create exec
  router.post('/api/v1/namespaces/:namespace/pods/:name/exec', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating exec in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('exec', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
