import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { 
  fetchResourceList, 
  validateResource, 
  applyPatch, 
  handleResourceError,
  createNotFoundResponse
} from '../utils';

// Import all models to ensure we have what we need
import * as models from '../models';

export function createMatchResourcesRoutes(storage: Storage): express.Router {
  const router = express.Router();

  
  // No endpoints defined for this resource type
  logger.debug('No endpoints defined for resource type: MatchResources');
  

  return router;
}


