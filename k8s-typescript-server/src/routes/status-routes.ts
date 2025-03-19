// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createstatusRoutes(storage: Storage): express.Router {
  const router = express.Router();
    
  
  
  // List status
  router.get('/apis/storage.k8s.io/v1/volumeattachments/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing status`);
      
      const resources = await storage.listResources('status');
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'storage.k8s.io/v1',
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
  // Update status
  router.put('/apis/storage.k8s.io/v1/volumeattachments/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating status ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/api/v1/nodes/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing status`);
      
      const resources = await storage.listResources('status');
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/api/v1/nodes/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating status ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing status`);
      
      const resources = await storage.listResources('status');
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating status ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'apps/v1',
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
  // Update status
  router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing status`);
      
      const resources = await storage.listResources('status');
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'admissionregistration.k8s.io/v1',
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
  // Update status
  router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating status ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing status`);
      
      const resources = await storage.listResources('status');
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'apiextensions.k8s.io/v1',
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
  // Update status
  router.put('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating status ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/api/v1/namespaces/:namespace/resourcequotas/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/api/v1/namespaces/:namespace/resourcequotas/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing status`);
      
      const resources = await storage.listResources('status');
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'apiregistration.k8s.io/v1',
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
  // Update status
  router.put('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating status ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'batch/v1',
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
  // Update status
  router.put('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing status`);
      
      const resources = await storage.listResources('status');
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating status ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'networking.k8s.io/v1',
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
  // Update status
  router.put('/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'batch/v1',
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
  // Update status
  router.put('/apis/batch/v1/namespaces/:namespace/cronjobs/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing status`);
      
      const resources = await storage.listResources('status');
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating status ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'autoscaling/v1',
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
  // Update status
  router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'policy/v1',
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
  // Update status
  router.put('/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'apps/v1',
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
  // Update status
  router.put('/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'apps/v1',
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
  // Update status
  router.put('/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing status`);
      
      const resources = await storage.listResources('status');
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating status ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'autoscaling/v2',
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
  // Update status
  router.put('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  // Update status
  router.put('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
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
  // Update status
  router.put('/api/v1/namespaces/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
    
  
  
  // List status
  router.get('/api/v1/namespaces/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
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
    
  
  
  // List status
  router.get('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing status in namespace ${namespace}`);
      
      const resources = await storage.listResources('status', namespace);
      
      const response = {
        kind: 'StatusList',
        apiVersion: 'apps/v1',
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
  // Update status
  router.put('/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating status ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.createOrUpdateResource('status', resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
