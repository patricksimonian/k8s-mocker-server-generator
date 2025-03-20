// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createsubjectaccessreviewRoutes(storage: Storage): express.Router {
  const router = express.Router();

//create a SubjectAccessReview
  router.post('/apis/authorization.k8s.io/v1/subjectaccessreviews', async (req, res, next) => {
    try {
      logger.info(`Creating subjectaccessreview`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('subjectaccessreview', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
