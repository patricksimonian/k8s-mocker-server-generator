// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createlocalsubjectaccessreviewRoutes(storage: Storage): express.Router {
  const router = express.Router();

//create a LocalSubjectAccessReview
  router.post('/apis/authorization.k8s.io/v1/namespaces/:namespace/localsubjectaccessreviews', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating localsubjectaccessreview in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('localsubjectaccessreview', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
