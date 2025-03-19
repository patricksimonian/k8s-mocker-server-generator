// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createtokenreviewRoutes(storage: Storage): express.Router {
  const router = express.Router();
  // Create tokenreview
  router.post('/apis/authentication.k8s.io/v1/tokenreviews', async (req, res, next) => {
    try {
      logger.info(`Creating tokenreview`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('tokenreview', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
