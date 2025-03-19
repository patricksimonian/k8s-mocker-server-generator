// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpodtemplateRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List podtemplate
  router.get('/api/v1/watch/podtemplates', async (req, res, next) => {
    try {
      logger.info(`Listing podtemplate`);
      
      const resources = await storage.listResources('podtemplate');
      
      const response = {
        kind: 'PodtemplateList',
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
    
  
  
  // List podtemplate
  router.get('/api/v1/podtemplates', async (req, res, next) => {
    try {
      logger.info(`Listing podtemplate`);
      
      const resources = await storage.listResources('podtemplate');
      
      const response = {
        kind: 'PodtemplateList',
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
  // Create podtemplate
  router.post('/api/v1/namespaces/:namespace/podtemplates', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating podtemplate in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('podtemplate', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete podtemplate
  router.delete('/api/v1/namespaces/:namespace/podtemplates', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting podtemplate ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('podtemplate', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`podtemplate ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`podtemplate ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'podtemplate'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List podtemplate
  router.get('/api/v1/namespaces/:namespace/podtemplates', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing podtemplate in namespace ${namespace}`);
      
      const resources = await storage.listResources('podtemplate', namespace);
      
      const response = {
        kind: 'PodtemplateList',
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
    
  
  
  // Get specific podtemplate
  router.get('/api/v1/watch/namespaces/:namespace/podtemplates/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting podtemplate ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('podtemplate', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`podtemplate ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List podtemplate
  router.get('/api/v1/watch/namespaces/:namespace/podtemplates', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing podtemplate in namespace ${namespace}`);
      
      const resources = await storage.listResources('podtemplate', namespace);
      
      const response = {
        kind: 'PodtemplateList',
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
  // Delete podtemplate
  router.delete('/api/v1/namespaces/:namespace/podtemplates/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting podtemplate ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('podtemplate', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`podtemplate ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`podtemplate ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'podtemplate'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // Get specific podtemplate
  router.get('/api/v1/namespaces/:namespace/podtemplates/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting podtemplate ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('podtemplate', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`podtemplate ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
  // Update podtemplate
  router.put('/api/v1/namespaces/:namespace/podtemplates/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating podtemplate ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('podtemplate', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
