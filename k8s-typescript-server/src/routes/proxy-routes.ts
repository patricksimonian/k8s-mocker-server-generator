// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createproxyRoutes(storage: Storage): express.Router {
  const router = express.Router();
  // Update proxy
  router.put('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating proxy ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Create proxy
  router.post('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating proxy in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete proxy
  router.delete('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting proxy ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('proxy', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`proxy ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`proxy ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'proxy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List proxy
  router.get('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing proxy in namespace ${namespace}`);
      
      const resources = await storage.listResources('proxy', namespace);
      
      const response = {
        kind: 'ProxyList',
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
  // Update proxy
  router.put('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating proxy ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Create proxy
  router.post('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating proxy in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete proxy
  router.delete('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting proxy ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('proxy', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`proxy ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`proxy ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'proxy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List proxy
  router.get('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing proxy in namespace ${namespace}`);
      
      const resources = await storage.listResources('proxy', namespace);
      
      const response = {
        kind: 'ProxyList',
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
    
  
  
  // List proxy
  router.get('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing proxy in namespace ${namespace}`);
      
      const resources = await storage.listResources('proxy', namespace);
      
      const response = {
        kind: 'ProxyList',
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
  // Update proxy
  router.put('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating proxy ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Create proxy
  router.post('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating proxy in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete proxy
  router.delete('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting proxy ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('proxy', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`proxy ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`proxy ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'proxy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  // Update proxy
  router.put('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating proxy ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Create proxy
  router.post('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating proxy in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete proxy
  router.delete('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting proxy ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('proxy', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`proxy ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`proxy ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'proxy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List proxy
  router.get('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing proxy in namespace ${namespace}`);
      
      const resources = await storage.listResources('proxy', namespace);
      
      const response = {
        kind: 'ProxyList',
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
    
  
  
  // List proxy
  router.get('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      logger.info(`Listing proxy`);
      
      const resources = await storage.listResources('proxy');
      
      const response = {
        kind: 'ProxyList',
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
  // Update proxy
  router.put('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating proxy ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Create proxy
  router.post('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      logger.info(`Creating proxy`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  // Delete proxy
  router.delete('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting proxy ${name}`);
      
      try {

        const deleted = await storage.deleteResource('proxy', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`proxy ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`proxy ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'proxy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  // Delete proxy
  router.delete('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting proxy ${name}`);
      
      try {

        const deleted = await storage.deleteResource('proxy', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`proxy ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`proxy ${name} not deleted. Error: ${(e as Error).message)}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'proxy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List proxy
  router.get('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      logger.info(`Listing proxy`);
      
      const resources = await storage.listResources('proxy');
      
      const response = {
        kind: 'ProxyList',
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
  // Update proxy
  router.put('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating proxy ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Create proxy
  router.post('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      logger.info(`Creating proxy`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createOrUpdateResource('proxy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
