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



/**
* Create routes for componentstatus resources
* @resourceType componentstatus
*/
export function createcomponentstatusRoutes(storage: Storage): express.Router {
const router = express.Router();



/**
 * GET /api/v1/componentstatuses/:name
 * read the specified ComponentStatus
 */
router.get('/api/v1/componentstatuses/:name', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Componentstatuses__name(req, res, storage);
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/v1/componentstatuses
 * list objects of kind ComponentStatus
 */
router.get('/api/v1/componentstatuses', async (req, res, next) => {
  try {
    await handlegetModel_Api_V1_Componentstatuses(req, res, storage);
  } catch (error) {
    next(error);
  }
});



return router;
}



/**
* Handler for GET /api/v1/componentstatuses/:name
* read the specified ComponentStatus
* @resourceType componentstatus
*/
async function handlegetModel_Api_V1_Componentstatuses__name(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// Get single resource
const namespace = req.params.namespace || 'default';
const name = req.params.name;

logger.info(`Getting componentstatus ${name} in namespace ${namespace}`);

try {
  // Get the resource from storage
  const result = await storage.getResource('componentstatus', name, namespace);
  res.json(result);
} catch (error) {
  if (error.code === 'NOT_FOUND') {
    res.status(404).json(createNotFoundResponse('componentstatus', name, namespace));
    return;
  }
  throw error;
}


}

/**
* Handler for GET /api/v1/componentstatuses
* list objects of kind ComponentStatus
* @resourceType componentstatus
*/
async function handlegetModel_Api_V1_Componentstatuses(
req: express.Request, 
res: express.Response, 
storage: Storage
): Promise<void> {


// List resources
const namespace = req.params.namespace || 'default';
const { limit, continue: continueToken, labelSelector, fieldSelector, watch } = req.query;

logger.info(`Listing componentstatuss in namespace ${namespace}`);

// Check if this is a watch request
if (watch === 'true' || watch === '1') {
  // Handle watch request
  const resourceVersion = req.query.resourceVersion as string;
  
  // Set headers for streaming response
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Transfer-Encoding', 'chunked');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  
  // Set up error handler
  const onError = (err: any) => {
    logger.error(`Watch error for componentstatus:`, err);
    
    // Send error event
    const errorEvent = {
      type: 'ERROR',
      object: {
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Failure',
        message: err.message || 'Watch error',
        reason: 'InternalError',
        code: 500
      }
    };
    
    res.write(JSON.stringify(errorEvent) + '\n');
    res.end();
  };
  
  // Set up close handler
  req.on('close', () => {
    if (stopWatching) {
      stopWatching();
    }
  });
  
  // Start watching
  let stopWatching: (() => void) | null = null;
  try {
    stopWatching = await storage.watchResources(
      'componentstatus',
      namespace,
      labelSelector as string,
      resourceVersion,
      (type, resource) => {
        // Send watch event
        const event = {
          type,
          object: resource
        };
        res.write(JSON.stringify(event) + '\n');
      }
    );
  } catch (err) {
    onError(err);
  }
  
  return;
}

// Regular list request
// Fetch resources from storage
const result = await fetchResourceList(
  storage, 
  'componentstatus',
  namespace, 
  {
    limit: limit ? parseInt(limit as string) : undefined,
    continueToken: continueToken as string,
    labelSelector: labelSelector as string,
    fieldSelector: fieldSelector as string
  }
);

res.json(result);


}


