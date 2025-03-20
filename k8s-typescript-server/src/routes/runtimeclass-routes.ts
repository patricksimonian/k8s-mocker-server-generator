// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createruntimeclassRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/node.k8s.io/v1/watch/runtimeclasses', async (req, res, next) => {
    try {
      logger.info(`Listing runtimeclass`);
      
      const resources = await storage.listResources('runtimeclass');
      
      const response = {
        kind: 'RuntimeclassList',
        apiVersion: 'node.k8s.io/v1',
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

//watch changes to an object of kind RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/node.k8s.io/v1/watch/runtimeclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting runtimeclass ${name}`);
      
      const resource = await storage.getResource('runtimeclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`runtimeclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified RuntimeClass
  router.put('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating runtimeclass ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('runtimeclass', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a RuntimeClass
  router.delete('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting runtimeclass ${name}`);
      
      try {

        const deleted = await storage.deleteResource('runtimeclass', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`runtimeclass ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`runtimeclass ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'runtimeclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read the specified RuntimeClass
  router.get('/apis/node.k8s.io/v1/runtimeclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting runtimeclass ${name}`);
      
      const resource = await storage.getResource('runtimeclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`runtimeclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//create a RuntimeClass
  router.post('/apis/node.k8s.io/v1/runtimeclasses', async (req, res, next) => {
    try {
      logger.info(`Creating runtimeclass`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('runtimeclass', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of RuntimeClass
  router.delete('/apis/node.k8s.io/v1/runtimeclasses', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('runtimeclass');
        
        if (!deleted) {
          return handleResourceError(new Error(`runtimeclass not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`runtimeclass not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'runtimeclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind RuntimeClass
  router.get('/apis/node.k8s.io/v1/runtimeclasses', async (req, res, next) => {
    try {
      logger.info(`Listing runtimeclass`);
      
      const resources = await storage.listResources('runtimeclass');
      
      const response = {
        kind: 'RuntimeclassList',
        apiVersion: 'node.k8s.io/v1',
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
