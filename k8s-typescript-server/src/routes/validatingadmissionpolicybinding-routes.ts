// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createvalidatingadmissionpolicybindingRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      logger.info(`Listing validatingadmissionpolicybinding`);
      
      const resources = await storage.listResources('validatingadmissionpolicybinding');
      
      const response = {
        kind: 'ValidatingadmissionpolicybindingList',
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

//read the specified ValidatingAdmissionPolicyBinding
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingadmissionpolicybinding ${name}`);
      
      const resource = await storage.getResource('validatingadmissionpolicybinding', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified ValidatingAdmissionPolicyBinding
  router.put('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating validatingadmissionpolicybinding ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('validatingadmissionpolicybinding', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a ValidatingAdmissionPolicyBinding
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting validatingadmissionpolicybinding ${name}`);
      
      try {

        const deleted = await storage.deleteResource('validatingadmissionpolicybinding', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'validatingadmissionpolicybinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingadmissionpolicybinding ${name}`);
      
      const resource = await storage.getResource('validatingadmissionpolicybinding', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingadmissionpolicybinding ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of ValidatingAdmissionPolicyBinding
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('validatingadmissionpolicybinding');
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingadmissionpolicybinding not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingadmissionpolicybinding not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'validatingadmissionpolicybinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ValidatingAdmissionPolicyBinding
  router.get('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      logger.info(`Listing validatingadmissionpolicybinding`);
      
      const resources = await storage.listResources('validatingadmissionpolicybinding');
      
      const response = {
        kind: 'ValidatingadmissionpolicybindingList',
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

//create a ValidatingAdmissionPolicyBinding
  router.post('/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings', async (req, res, next) => {
    try {
      logger.info(`Creating validatingadmissionpolicybinding`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('validatingadmissionpolicybinding', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
