import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createDiscoveryRoutes(storage: Storage): express.Router {
  const router = express.Router();

  // Root path handler
  router.get('/', async (req, res, next) => {
    try {
      await handleRootPath(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  // API versions handler
  router.get('/api', async (req, res, next) => {
    try {
      await handleApiVersions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  // API groups handler
  router.get('/apis', async (req, res, next) => {
    try {
      await handleApiGroups(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  // API resources handler
  router.get('/api/v1', async (req, res, next) => {
    try {
      await handleApiResources(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  // API group resources handler
  router.get('/apis/:group/:version', async (req, res, next) => {
    try {
      await handleApiGroupResources(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
 * Handler for GET /
 */
async function handleRootPath(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  logger.info('Getting API discovery information');

  const paths = {
    paths: ['/api', '/apis']
  };

  res.json(paths);
}

/**
 * Handler for GET /api
 */
async function handleApiVersions(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  logger.info('Getting API versions');

  const apiVersions = {
    kind: 'APIVersions',
    versions: ['v1'],
    serverAddressByClientCIDRs: [
      {
        clientCIDR: '0.0.0.0/0',
        serverAddress: req.headers.host || 'localhost'
      }
    ]
  };

  res.json(apiVersions);
}

/**
 * Handler for GET /apis
 */
async function handleApiGroups(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  logger.info('Getting API groups');

  // Extract unique API groups from the IR
  const groups = new Set<string>();
  
  
  
  
  
  
  groups.add('authorization.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('authentication.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('authorization.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('authentication.k8s.io');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('authorization.k8s.io');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('authentication.k8s.io');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('authorization.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('policy');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('node.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('admissionregistration.k8s.io');
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  groups.add('networking.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('apiextensions.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('authentication.k8s.io');
  
  
  
  
  
  
  groups.add('scheduling.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  groups.add('apiregistration.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('authorization.k8s.io');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('events.k8s.io');
  
  
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('authorization.k8s.io');
  
  
  
  
  
  
  groups.add('coordination.k8s.io');
  
  
  
  
  
  
  groups.add('batch');
  
  
  
  
  
  
  groups.add('discovery.k8s.io');
  
  
  
  
  
  
  groups.add('certificates.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('apps');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  groups.add('flowcontrol.apiserver.k8s.io');
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('rbac.authorization.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  groups.add('storage.k8s.io');
  
  
  
  
  
  
  
  
  
  
  
  
  groups.add('autoscaling');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const apiGroups = {
    kind: 'APIGroupList',
    apiVersion: 'v1',
    groups: Array.from(groups).map(group => ({
      name: group,
      versions: [
        {
          groupVersion: `${group}/v1`,
          version: 'v1'
        }
      ],
      preferredVersion: {
        groupVersion: `${group}/v1`,
        version: 'v1'
      }
    }))
  };

  res.json(apiGroups);
}

/**
 * Handler for GET /api/v1
 */
async function handleApiResources(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  logger.info('Getting API resources for core v1');

  // Extract resources from the IR for core API
  const resources = [];
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'endpoints',
    singularName: 'endpoints',
    namespaced: false,
    kind: 'Endpoints',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'limitranges',
    singularName: 'limitranges',
    namespaced: false,
    kind: 'Limitranges',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'resourcequotas',
    singularName: 'resourcequotas',
    namespaced: false,
    kind: 'Resourcequotas',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'configmaps',
    singularName: 'configmaps',
    namespaced: false,
    kind: 'Configmaps',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'events',
    singularName: 'events',
    namespaced: false,
    kind: 'Events',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'pods',
    singularName: 'pods',
    namespaced: false,
    kind: 'Pods',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'secrets',
    singularName: 'secrets',
    namespaced: false,
    kind: 'Secrets',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'services',
    singularName: 'services',
    namespaced: false,
    kind: 'Services',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumes',
    singularName: 'persistentvolumes',
    namespaced: false,
    kind: 'Persistentvolumes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'replicationcontrollers',
    singularName: 'replicationcontrollers',
    namespaced: false,
    kind: 'Replicationcontrollers',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'serviceaccounts',
    singularName: 'serviceaccounts',
    namespaced: false,
    kind: 'Serviceaccounts',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'componentstatuses',
    singularName: 'componentstatuses',
    namespaced: false,
    kind: 'Componentstatuses',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'podtemplates',
    singularName: 'podtemplates',
    namespaced: false,
    kind: 'Podtemplates',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'componentstatuses',
    singularName: 'componentstatuses',
    namespaced: false,
    kind: 'Componentstatuses',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'persistentvolumeclaims',
    singularName: 'persistentvolumeclaims',
    namespaced: false,
    kind: 'Persistentvolumeclaims',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: true,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'watch',
    singularName: 'watch',
    namespaced: false,
    kind: 'Watch',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  
  
  
  
  
  
  
  resources.push({
    name: 'nodes',
    singularName: 'nodes',
    namespaced: false,
    kind: 'Nodes',
    verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
  });
  
  
  
  
  

  const apiResourceList = {
    kind: 'APIResourceList',
    apiVersion: 'v1',
    groupVersion: 'v1',
    resources: resources
  };

  res.json(apiResourceList);
}

/**
 * Handler for GET /apis/:group/:version
 */
async function handleApiGroupResources(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  const group = req.params.group;
  const version = req.params.version;
  
  logger.info(`Getting API resources for group ${group}/${version}`);

  try {
    // Extract resources from the IR for the specified API group
    const resources = [];
    
    
    
    
    
    
    
    
    
    if ('authorization.k8s.io' === group && 'v1' === version && 'selfsubjectrulesreviews' !== '') {
      resources.push({
        name: 'selfsubjectrulesreviews',
        singularName: 'selfsubjectrulesreviews',
        namespaced: false,
        kind: 'Selfsubjectrulesreviews',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'leases' !== '') {
      resources.push({
        name: 'leases',
        singularName: 'leases',
        namespaced: false,
        kind: 'Leases',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'horizontalpodautoscalers' !== '') {
      resources.push({
        name: 'horizontalpodautoscalers',
        singularName: 'horizontalpodautoscalers',
        namespaced: false,
        kind: 'Horizontalpodautoscalers',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && 'runtimeclasses' !== '') {
      resources.push({
        name: 'runtimeclasses',
        singularName: 'runtimeclasses',
        namespaced: false,
        kind: 'Runtimeclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && 'runtimeclasses' !== '') {
      resources.push({
        name: 'runtimeclasses',
        singularName: 'runtimeclasses',
        namespaced: false,
        kind: 'Runtimeclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && 'runtimeclasses' !== '') {
      resources.push({
        name: 'runtimeclasses',
        singularName: 'runtimeclasses',
        namespaced: false,
        kind: 'Runtimeclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csidrivers' !== '') {
      resources.push({
        name: 'csidrivers',
        singularName: 'csidrivers',
        namespaced: false,
        kind: 'Csidrivers',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csidrivers' !== '') {
      resources.push({
        name: 'csidrivers',
        singularName: 'csidrivers',
        namespaced: false,
        kind: 'Csidrivers',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csidrivers' !== '') {
      resources.push({
        name: 'csidrivers',
        singularName: 'csidrivers',
        namespaced: false,
        kind: 'Csidrivers',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csidrivers' !== '') {
      resources.push({
        name: 'csidrivers',
        singularName: 'csidrivers',
        namespaced: false,
        kind: 'Csidrivers',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'mutatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'mutatingwebhookconfigurations',
        singularName: 'mutatingwebhookconfigurations',
        namespaced: false,
        kind: 'Mutatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'mutatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'mutatingwebhookconfigurations',
        singularName: 'mutatingwebhookconfigurations',
        namespaced: false,
        kind: 'Mutatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'mutatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'mutatingwebhookconfigurations',
        singularName: 'mutatingwebhookconfigurations',
        namespaced: false,
        kind: 'Mutatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'mutatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'mutatingwebhookconfigurations',
        singularName: 'mutatingwebhookconfigurations',
        namespaced: false,
        kind: 'Mutatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'rolebindings' !== '') {
      resources.push({
        name: 'rolebindings',
        singularName: 'rolebindings',
        namespaced: false,
        kind: 'Rolebindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('authorization.k8s.io' === group && 'v1' === version && 'subjectaccessreviews' !== '') {
      resources.push({
        name: 'subjectaccessreviews',
        singularName: 'subjectaccessreviews',
        namespaced: false,
        kind: 'Subjectaccessreviews',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'daemonsets' !== '') {
      resources.push({
        name: 'daemonsets',
        singularName: 'daemonsets',
        namespaced: false,
        kind: 'Daemonsets',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('authentication.k8s.io' === group && 'v1' === version && 'tokenreviews' !== '') {
      resources.push({
        name: 'tokenreviews',
        singularName: 'tokenreviews',
        namespaced: false,
        kind: 'Tokenreviews',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('authorization.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'cronjobs' !== '') {
      resources.push({
        name: 'cronjobs',
        singularName: 'cronjobs',
        namespaced: false,
        kind: 'Cronjobs',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'networkpolicies' !== '') {
      resources.push({
        name: 'networkpolicies',
        singularName: 'networkpolicies',
        namespaced: false,
        kind: 'Networkpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'storageclasses' !== '') {
      resources.push({
        name: 'storageclasses',
        singularName: 'storageclasses',
        namespaced: false,
        kind: 'Storageclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'storageclasses' !== '') {
      resources.push({
        name: 'storageclasses',
        singularName: 'storageclasses',
        namespaced: false,
        kind: 'Storageclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'storageclasses' !== '') {
      resources.push({
        name: 'storageclasses',
        singularName: 'storageclasses',
        namespaced: false,
        kind: 'Storageclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csinodes' !== '') {
      resources.push({
        name: 'csinodes',
        singularName: 'csinodes',
        namespaced: false,
        kind: 'Csinodes',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csinodes' !== '') {
      resources.push({
        name: 'csinodes',
        singularName: 'csinodes',
        namespaced: false,
        kind: 'Csinodes',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csinodes' !== '') {
      resources.push({
        name: 'csinodes',
        singularName: 'csinodes',
        namespaced: false,
        kind: 'Csinodes',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csinodes' !== '') {
      resources.push({
        name: 'csinodes',
        singularName: 'csinodes',
        namespaced: false,
        kind: 'Csinodes',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'statefulsets' !== '') {
      resources.push({
        name: 'statefulsets',
        singularName: 'statefulsets',
        namespaced: false,
        kind: 'Statefulsets',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'ingressclasses' !== '') {
      resources.push({
        name: 'ingressclasses',
        singularName: 'ingressclasses',
        namespaced: false,
        kind: 'Ingressclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'ingressclasses' !== '') {
      resources.push({
        name: 'ingressclasses',
        singularName: 'ingressclasses',
        namespaced: false,
        kind: 'Ingressclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'ingressclasses' !== '') {
      resources.push({
        name: 'ingressclasses',
        singularName: 'ingressclasses',
        namespaced: false,
        kind: 'Ingressclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicybindings' !== '') {
      resources.push({
        name: 'validatingadmissionpolicybindings',
        singularName: 'validatingadmissionpolicybindings',
        namespaced: false,
        kind: 'Validatingadmissionpolicybindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicybindings' !== '') {
      resources.push({
        name: 'validatingadmissionpolicybindings',
        singularName: 'validatingadmissionpolicybindings',
        namespaced: false,
        kind: 'Validatingadmissionpolicybindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicybindings' !== '') {
      resources.push({
        name: 'validatingadmissionpolicybindings',
        singularName: 'validatingadmissionpolicybindings',
        namespaced: false,
        kind: 'Validatingadmissionpolicybindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicybindings' !== '') {
      resources.push({
        name: 'validatingadmissionpolicybindings',
        singularName: 'validatingadmissionpolicybindings',
        namespaced: false,
        kind: 'Validatingadmissionpolicybindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('authentication.k8s.io' === group && 'v1' === version && 'selfsubjectreviews' !== '') {
      resources.push({
        name: 'selfsubjectreviews',
        singularName: 'selfsubjectreviews',
        namespaced: false,
        kind: 'Selfsubjectreviews',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'customresourcedefinitions' !== '') {
      resources.push({
        name: 'customresourcedefinitions',
        singularName: 'customresourcedefinitions',
        namespaced: false,
        kind: 'Customresourcedefinitions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicybindings' !== '') {
      resources.push({
        name: 'validatingadmissionpolicybindings',
        singularName: 'validatingadmissionpolicybindings',
        namespaced: false,
        kind: 'Validatingadmissionpolicybindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicybindings' !== '') {
      resources.push({
        name: 'validatingadmissionpolicybindings',
        singularName: 'validatingadmissionpolicybindings',
        namespaced: false,
        kind: 'Validatingadmissionpolicybindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicybindings' !== '') {
      resources.push({
        name: 'validatingadmissionpolicybindings',
        singularName: 'validatingadmissionpolicybindings',
        namespaced: false,
        kind: 'Validatingadmissionpolicybindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'flowschemas' !== '') {
      resources.push({
        name: 'flowschemas',
        singularName: 'flowschemas',
        namespaced: false,
        kind: 'Flowschemas',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'jobs' !== '') {
      resources.push({
        name: 'jobs',
        singularName: 'jobs',
        namespaced: false,
        kind: 'Jobs',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'prioritylevelconfigurations' !== '') {
      resources.push({
        name: 'prioritylevelconfigurations',
        singularName: 'prioritylevelconfigurations',
        namespaced: false,
        kind: 'Prioritylevelconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && 'priorityclasses' !== '') {
      resources.push({
        name: 'priorityclasses',
        singularName: 'priorityclasses',
        namespaced: false,
        kind: 'Priorityclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && 'priorityclasses' !== '') {
      resources.push({
        name: 'priorityclasses',
        singularName: 'priorityclasses',
        namespaced: false,
        kind: 'Priorityclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && 'priorityclasses' !== '') {
      resources.push({
        name: 'priorityclasses',
        singularName: 'priorityclasses',
        namespaced: false,
        kind: 'Priorityclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingadmissionpolicies' !== '') {
      resources.push({
        name: 'validatingadmissionpolicies',
        singularName: 'validatingadmissionpolicies',
        namespaced: false,
        kind: 'Validatingadmissionpolicies',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'mutatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'mutatingwebhookconfigurations',
        singularName: 'mutatingwebhookconfigurations',
        namespaced: false,
        kind: 'Mutatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'mutatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'mutatingwebhookconfigurations',
        singularName: 'mutatingwebhookconfigurations',
        namespaced: false,
        kind: 'Mutatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'mutatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'mutatingwebhookconfigurations',
        singularName: 'mutatingwebhookconfigurations',
        namespaced: false,
        kind: 'Mutatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'poddisruptionbudgets' !== '') {
      resources.push({
        name: 'poddisruptionbudgets',
        singularName: 'poddisruptionbudgets',
        namespaced: false,
        kind: 'Poddisruptionbudgets',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'controllerrevisions' !== '') {
      resources.push({
        name: 'controllerrevisions',
        singularName: 'controllerrevisions',
        namespaced: false,
        kind: 'Controllerrevisions',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'replicasets' !== '') {
      resources.push({
        name: 'replicasets',
        singularName: 'replicasets',
        namespaced: false,
        kind: 'Replicasets',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'validatingwebhookconfigurations',
        singularName: 'validatingwebhookconfigurations',
        namespaced: false,
        kind: 'Validatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'validatingwebhookconfigurations',
        singularName: 'validatingwebhookconfigurations',
        namespaced: false,
        kind: 'Validatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'validatingwebhookconfigurations',
        singularName: 'validatingwebhookconfigurations',
        namespaced: false,
        kind: 'Validatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'validatingwebhookconfigurations',
        singularName: 'validatingwebhookconfigurations',
        namespaced: false,
        kind: 'Validatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'validatingwebhookconfigurations',
        singularName: 'validatingwebhookconfigurations',
        namespaced: false,
        kind: 'Validatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'validatingwebhookconfigurations',
        singularName: 'validatingwebhookconfigurations',
        namespaced: false,
        kind: 'Validatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'validatingwebhookconfigurations' !== '') {
      resources.push({
        name: 'validatingwebhookconfigurations',
        singularName: 'validatingwebhookconfigurations',
        namespaced: false,
        kind: 'Validatingwebhookconfigurations',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterrolebindings' !== '') {
      resources.push({
        name: 'clusterrolebindings',
        singularName: 'clusterrolebindings',
        namespaced: false,
        kind: 'Clusterrolebindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterrolebindings' !== '') {
      resources.push({
        name: 'clusterrolebindings',
        singularName: 'clusterrolebindings',
        namespaced: false,
        kind: 'Clusterrolebindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterrolebindings' !== '') {
      resources.push({
        name: 'clusterrolebindings',
        singularName: 'clusterrolebindings',
        namespaced: false,
        kind: 'Clusterrolebindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'roles' !== '') {
      resources.push({
        name: 'roles',
        singularName: 'roles',
        namespaced: false,
        kind: 'Roles',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'events' !== '') {
      resources.push({
        name: 'events',
        singularName: 'events',
        namespaced: false,
        kind: 'Events',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'ingresses' !== '') {
      resources.push({
        name: 'ingresses',
        singularName: 'ingresses',
        namespaced: false,
        kind: 'Ingresses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterrolebindings' !== '') {
      resources.push({
        name: 'clusterrolebindings',
        singularName: 'clusterrolebindings',
        namespaced: false,
        kind: 'Clusterrolebindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterrolebindings' !== '') {
      resources.push({
        name: 'clusterrolebindings',
        singularName: 'clusterrolebindings',
        namespaced: false,
        kind: 'Clusterrolebindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterrolebindings' !== '') {
      resources.push({
        name: 'clusterrolebindings',
        singularName: 'clusterrolebindings',
        namespaced: false,
        kind: 'Clusterrolebindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterrolebindings' !== '') {
      resources.push({
        name: 'clusterrolebindings',
        singularName: 'clusterrolebindings',
        namespaced: false,
        kind: 'Clusterrolebindings',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'storageclasses' !== '') {
      resources.push({
        name: 'storageclasses',
        singularName: 'storageclasses',
        namespaced: false,
        kind: 'Storageclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'storageclasses' !== '') {
      resources.push({
        name: 'storageclasses',
        singularName: 'storageclasses',
        namespaced: false,
        kind: 'Storageclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'storageclasses' !== '') {
      resources.push({
        name: 'storageclasses',
        singularName: 'storageclasses',
        namespaced: false,
        kind: 'Storageclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'storageclasses' !== '') {
      resources.push({
        name: 'storageclasses',
        singularName: 'storageclasses',
        namespaced: false,
        kind: 'Storageclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('authorization.k8s.io' === group && 'v1' === version && 'selfsubjectaccessreviews' !== '') {
      resources.push({
        name: 'selfsubjectaccessreviews',
        singularName: 'selfsubjectaccessreviews',
        namespaced: false,
        kind: 'Selfsubjectaccessreviews',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'deployments' !== '') {
      resources.push({
        name: 'deployments',
        singularName: 'deployments',
        namespaced: false,
        kind: 'Deployments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && 'runtimeclasses' !== '') {
      resources.push({
        name: 'runtimeclasses',
        singularName: 'runtimeclasses',
        namespaced: false,
        kind: 'Runtimeclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && 'runtimeclasses' !== '') {
      resources.push({
        name: 'runtimeclasses',
        singularName: 'runtimeclasses',
        namespaced: false,
        kind: 'Runtimeclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && 'runtimeclasses' !== '') {
      resources.push({
        name: 'runtimeclasses',
        singularName: 'runtimeclasses',
        namespaced: false,
        kind: 'Runtimeclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && 'runtimeclasses' !== '') {
      resources.push({
        name: 'runtimeclasses',
        singularName: 'runtimeclasses',
        namespaced: false,
        kind: 'Runtimeclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterroles' !== '') {
      resources.push({
        name: 'clusterroles',
        singularName: 'clusterroles',
        namespaced: false,
        kind: 'Clusterroles',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterroles' !== '') {
      resources.push({
        name: 'clusterroles',
        singularName: 'clusterroles',
        namespaced: false,
        kind: 'Clusterroles',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterroles' !== '') {
      resources.push({
        name: 'clusterroles',
        singularName: 'clusterroles',
        namespaced: false,
        kind: 'Clusterroles',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterroles' !== '') {
      resources.push({
        name: 'clusterroles',
        singularName: 'clusterroles',
        namespaced: false,
        kind: 'Clusterroles',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'volumeattachments' !== '') {
      resources.push({
        name: 'volumeattachments',
        singularName: 'volumeattachments',
        namespaced: false,
        kind: 'Volumeattachments',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'endpointslices' !== '') {
      resources.push({
        name: 'endpointslices',
        singularName: 'endpointslices',
        namespaced: false,
        kind: 'Endpointslices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('policy' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csistoragecapacities' !== '') {
      resources.push({
        name: 'csistoragecapacities',
        singularName: 'csistoragecapacities',
        namespaced: false,
        kind: 'Csistoragecapacities',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'horizontalpodautoscalers' !== '') {
      resources.push({
        name: 'horizontalpodautoscalers',
        singularName: 'horizontalpodautoscalers',
        namespaced: false,
        kind: 'Horizontalpodautoscalers',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && 'certificatesigningrequests' !== '') {
      resources.push({
        name: 'certificatesigningrequests',
        singularName: 'certificatesigningrequests',
        namespaced: false,
        kind: 'Certificatesigningrequests',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && 'priorityclasses' !== '') {
      resources.push({
        name: 'priorityclasses',
        singularName: 'priorityclasses',
        namespaced: false,
        kind: 'Priorityclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && 'priorityclasses' !== '') {
      resources.push({
        name: 'priorityclasses',
        singularName: 'priorityclasses',
        namespaced: false,
        kind: 'Priorityclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && 'priorityclasses' !== '') {
      resources.push({
        name: 'priorityclasses',
        singularName: 'priorityclasses',
        namespaced: false,
        kind: 'Priorityclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && 'priorityclasses' !== '') {
      resources.push({
        name: 'priorityclasses',
        singularName: 'priorityclasses',
        namespaced: false,
        kind: 'Priorityclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('node.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csinodes' !== '') {
      resources.push({
        name: 'csinodes',
        singularName: 'csinodes',
        namespaced: false,
        kind: 'Csinodes',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csinodes' !== '') {
      resources.push({
        name: 'csinodes',
        singularName: 'csinodes',
        namespaced: false,
        kind: 'Csinodes',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csinodes' !== '') {
      resources.push({
        name: 'csinodes',
        singularName: 'csinodes',
        namespaced: false,
        kind: 'Csinodes',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    if ('admissionregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('events.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'ingressclasses' !== '') {
      resources.push({
        name: 'ingressclasses',
        singularName: 'ingressclasses',
        namespaced: false,
        kind: 'Ingressclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'ingressclasses' !== '') {
      resources.push({
        name: 'ingressclasses',
        singularName: 'ingressclasses',
        namespaced: false,
        kind: 'Ingressclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'ingressclasses' !== '') {
      resources.push({
        name: 'ingressclasses',
        singularName: 'ingressclasses',
        namespaced: false,
        kind: 'Ingressclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('networking.k8s.io' === group && 'v1' === version && 'ingressclasses' !== '') {
      resources.push({
        name: 'ingressclasses',
        singularName: 'ingressclasses',
        namespaced: false,
        kind: 'Ingressclasses',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterroles' !== '') {
      resources.push({
        name: 'clusterroles',
        singularName: 'clusterroles',
        namespaced: false,
        kind: 'Clusterroles',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterroles' !== '') {
      resources.push({
        name: 'clusterroles',
        singularName: 'clusterroles',
        namespaced: false,
        kind: 'Clusterroles',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'clusterroles' !== '') {
      resources.push({
        name: 'clusterroles',
        singularName: 'clusterroles',
        namespaced: false,
        kind: 'Clusterroles',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    if ('apiextensions.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('authentication.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('scheduling.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csidrivers' !== '') {
      resources.push({
        name: 'csidrivers',
        singularName: 'csidrivers',
        namespaced: false,
        kind: 'Csidrivers',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csidrivers' !== '') {
      resources.push({
        name: 'csidrivers',
        singularName: 'csidrivers',
        namespaced: false,
        kind: 'Csidrivers',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'csidrivers' !== '') {
      resources.push({
        name: 'csidrivers',
        singularName: 'csidrivers',
        namespaced: false,
        kind: 'Csidrivers',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apiregistration.k8s.io' === group && 'v1' === version && 'apiservices' !== '') {
      resources.push({
        name: 'apiservices',
        singularName: 'apiservices',
        namespaced: false,
        kind: 'Apiservices',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('batch' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('authorization.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('coordination.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('discovery.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('certificates.k8s.io' === group && 'v1' === version && '' !== '') {
      resources.push({
        name: '',
        singularName: '',
        namespaced: false,
        kind: '',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('apps' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('flowcontrol.apiserver.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: true,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('rbac.authorization.k8s.io' === group && 'v1' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    if ('storage.k8s.io' === group && 'v1' === version && 'namespaces' !== '') {
      resources.push({
        name: 'namespaces',
        singularName: 'namespaces',
        namespaced: true,
        kind: 'Namespaces',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if ('autoscaling' === group && 'v2' === version && 'watch' !== '') {
      resources.push({
        name: 'watch',
        singularName: 'watch',
        namespaced: false,
        kind: 'Watch',
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    const apiResourceList = {
      kind: 'APIResourceList',
      apiVersion: 'v1',
      groupVersion: `${group}/${version}`,
      resources: resources
    };

    res.json(apiResourceList);
  } catch (error) {
    handleResourceError(error, res);
  }
}
