// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createtokenRoutes(storage: Storage): express.Router {
  const router = express.Router();
  // Create token
  router.post('/api/v1/namespaces/:namespace/serviceaccounts/:name/token', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating token in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('token', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
