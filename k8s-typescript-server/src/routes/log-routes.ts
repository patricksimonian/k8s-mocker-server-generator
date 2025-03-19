// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createlogRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List log
  router.get('/api/v1/namespaces/:namespace/pods/:name/log', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing log in namespace ${namespace}`);
      
      const resources = await storage.listResources('log', namespace);
      
      const response = {
        kind: 'LogList',
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
