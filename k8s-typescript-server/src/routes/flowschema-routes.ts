// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createflowschemaRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting flowschema ${name}`);
      
      const resource = await storage.getResource('flowschema', name);
      
      if (!resource) {
        return handleResourceError(new Error(`flowschema ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind FlowSchema
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
    try {
      logger.info(`Listing flowschema`);
      
      const resources = await storage.listResources('flowschema');
      
      const response = {
        kind: 'FlowschemaList',
        apiVersion: 'flowcontrol.apiserver.k8s.io/v1',
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

//create a FlowSchema
  router.post('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
    try {
      logger.info(`Creating flowschema`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('flowschema', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of FlowSchema
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('flowschema');
        
        if (!deleted) {
          return handleResourceError(new Error(`flowschema not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`flowschema not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'flowschema'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//replace the specified FlowSchema
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating flowschema ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('flowschema', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a FlowSchema
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting flowschema ${name}`);
      
      try {

        const deleted = await storage.deleteResource('flowschema', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`flowschema ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`flowschema ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'flowschema'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read the specified FlowSchema
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting flowschema ${name}`);
      
      const resource = await storage.getResource('flowschema', name);
      
      if (!resource) {
        return handleResourceError(new Error(`flowschema ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace status of the specified FlowSchema
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating flowschema ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('flowschema', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified FlowSchema
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing flowschema`);
      
      const resources = await storage.listResources('flowschema');
      
      const response = {
        kind: 'FlowschemaList',
        apiVersion: 'flowcontrol.apiserver.k8s.io/v1',
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

//watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas', async (req, res, next) => {
    try {
      logger.info(`Listing flowschema`);
      
      const resources = await storage.listResources('flowschema');
      
      const response = {
        kind: 'FlowschemaList',
        apiVersion: 'flowcontrol.apiserver.k8s.io/v1',
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
