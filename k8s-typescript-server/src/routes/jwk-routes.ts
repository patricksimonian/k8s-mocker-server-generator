// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createjwkRoutes(storage: Storage): express.Router {
  const router = express.Router();

//get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
  router.get('/openid/v1/jwks/', async (req, res, next) => {
    try {
      logger.info(`Listing jwk`);
      
      const resources = await storage.listResources('jwk');
      
      const response = {
        kind: 'JwkList',
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
