// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createselfsubjectaccessreviewRoutes(storage: Storage): express.Router {
  const router = express.Router();
  // Create selfsubjectaccessreview
  router.post('/apis/authorization.k8s.io/v1/selfsubjectaccessreviews', async (req, res, next) => {
    try {
      logger.info(`Creating selfsubjectaccessreview`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('selfsubjectaccessreview', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
