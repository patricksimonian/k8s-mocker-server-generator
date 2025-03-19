// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createephemeralcontainerRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List ephemeralcontainer
  router.get('/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing ephemeralcontainer in namespace ${namespace}`);
      
      const resources = await storage.listResources('ephemeralcontainer', namespace);
      
      const response = {
        kind: 'EphemeralcontainerList',
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
  // Update ephemeralcontainer
  router.put('/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating ephemeralcontainer ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('ephemeralcontainer', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
