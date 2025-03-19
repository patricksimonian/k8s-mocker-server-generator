// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createattachRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List attach
  router.get('/api/v1/namespaces/:namespace/pods/:name/attach', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing attach in namespace ${namespace}`);
      
      const resources = await storage.listResources('attach', namespace);
      
      const response = {
        kind: 'AttachList',
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
  // Create attach
  router.post('/api/v1/namespaces/:namespace/pods/:name/attach', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating attach in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('attach', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
