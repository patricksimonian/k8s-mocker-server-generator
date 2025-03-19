// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createapprovalRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List approval
  router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval', async (req, res, next) => {
    try {
      logger.info(`Listing approval`);
      
      const resources = await storage.listResources('approval');
      
      const response = {
        kind: 'ApprovalList',
        apiVersion: 'certificates.k8s.io/v1',
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
  // Update approval
  router.put('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating approval ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('approval', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
