import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createDiscoveryRoutes(storage: Storage): express.Router {
 const router = express.Router();

 
 
 /**
  * GET /apis/rbac.authorization.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/rbac.authorization.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/scheduling.k8s.io/
  * get information of a group
  */
 router.get('/apis/scheduling.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Scheduling_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/certificates.k8s.io/
  * get information of a group
  */
 router.get('/apis/certificates.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Certificates_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/events.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/events.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Events_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/flowcontrol.apiserver.k8s.io/
  * get information of a group
  */
 router.get('/apis/flowcontrol.apiserver.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/storage.k8s.io/
  * get information of a group
  */
 router.get('/apis/storage.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Storage_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /api/
  * get available API versions
  */
 router.get('/api/', async (req, res, next) => {
   try {
     await handlegetModel_Api_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/rbac.authorization.k8s.io/
  * get information of a group
  */
 router.get('/apis/rbac.authorization.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Rbac_Authorization_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/admissionregistration.k8s.io/
  * get information of a group
  */
 router.get('/apis/admissionregistration.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Admissionregistration_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/autoscaling/v1/
  * get available resources
  */
 router.get('/apis/autoscaling/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Autoscaling_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/discovery.k8s.io/
  * get information of a group
  */
 router.get('/apis/discovery.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Discovery_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/
  * get available API versions
  */
 router.get('/apis/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/admissionregistration.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/admissionregistration.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Admissionregistration_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/apps/
  * get information of a group
  */
 router.get('/apis/apps/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Apps_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/discovery.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/discovery.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Discovery_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/policy/
  * get information of a group
  */
 router.get('/apis/policy/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Policy_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/apiextensions.k8s.io/
  * get information of a group
  */
 router.get('/apis/apiextensions.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Apiextensions_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/node.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/node.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Node_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/batch/
  * get information of a group
  */
 router.get('/apis/batch/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Batch_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /.well-known/openid-configuration/
  * get service account issuer OpenID configuration, also known as the 'OIDC discovery doc'
  */
 router.get('/.well-known/openid-configuration/', async (req, res, next) => {
   try {
     await handlegetModel__Well_Known_Openid_Configuration_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/policy/v1/
  * get available resources
  */
 router.get('/apis/policy/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Policy_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/autoscaling/v2/
  * get available resources
  */
 router.get('/apis/autoscaling/v2/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Autoscaling_V2_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/networking.k8s.io/
  * get information of a group
  */
 router.get('/apis/networking.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Networking_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/authorization.k8s.io/
  * get information of a group
  */
 router.get('/apis/authorization.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Authorization_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/coordination.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/coordination.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Coordination_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /api/v1/
  * get available resources
  */
 router.get('/api/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Api_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/events.k8s.io/
  * get information of a group
  */
 router.get('/apis/events.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Events_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/storage.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/storage.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Storage_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/apiregistration.k8s.io/
  * get information of a group
  */
 router.get('/apis/apiregistration.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Apiregistration_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/coordination.k8s.io/
  * get information of a group
  */
 router.get('/apis/coordination.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Coordination_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/authentication.k8s.io/
  * get information of a group
  */
 router.get('/apis/authentication.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Authentication_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/apiregistration.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/apiregistration.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Apiregistration_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/authorization.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/authorization.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Authorization_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/scheduling.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/scheduling.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Scheduling_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/networking.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/networking.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Networking_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/flowcontrol.apiserver.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/flowcontrol.apiserver.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/apps/v1/
  * get available resources
  */
 router.get('/apis/apps/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Apps_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/autoscaling/
  * get information of a group
  */
 router.get('/apis/autoscaling/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Autoscaling_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/batch/v1/
  * get available resources
  */
 router.get('/apis/batch/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Batch_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /version/
  * get the code version
  */
 router.get('/version/', async (req, res, next) => {
   try {
     await handlegetModel_Version_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/authentication.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/authentication.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Authentication_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/certificates.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/certificates.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Certificates_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/apiextensions.k8s.io/v1/
  * get available resources
  */
 router.get('/apis/apiextensions.k8s.io/v1/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Apiextensions_K8s_Io_V1_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 /**
  * GET /apis/node.k8s.io/
  * get information of a group
  */
 router.get('/apis/node.k8s.io/', async (req, res, next) => {
   try {
     await handlegetModel_Apis_Node_K8s_Io_(req, res, storage);
   } catch (error) {
     next(error);
   }
 });
 
 

 return router;
}



/**
* Handler for GET /apis/rbac.authorization.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/rbac.authorization.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/scheduling.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Scheduling_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/scheduling.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/certificates.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Certificates_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/certificates.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/events.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Events_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/events.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/flowcontrol.apiserver.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/storage.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Storage_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/storage.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /api/
* get available API versions
*/
async function handlegetModel_Api_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /api/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/rbac.authorization.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Rbac_Authorization_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/rbac.authorization.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/admissionregistration.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/admissionregistration.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/autoscaling/v1/
* get available resources
*/
async function handlegetModel_Apis_Autoscaling_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/autoscaling/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/discovery.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Discovery_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/discovery.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/
* get available API versions
*/
async function handlegetModel_Apis_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/admissionregistration.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Admissionregistration_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/admissionregistration.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/apps/
* get information of a group
*/
async function handlegetModel_Apis_Apps_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/apps/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/discovery.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Discovery_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/discovery.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/policy/
* get information of a group
*/
async function handlegetModel_Apis_Policy_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/policy/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/apiextensions.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Apiextensions_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/apiextensions.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/node.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Node_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/node.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/batch/
* get information of a group
*/
async function handlegetModel_Apis_Batch_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/batch/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /.well-known/openid-configuration/
* get service account issuer OpenID configuration, also known as the 'OIDC discovery doc'
*/
async function handlegetModel__Well_Known_Openid_Configuration_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /.well-known/openid-configuration/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/policy/v1/
* get available resources
*/
async function handlegetModel_Apis_Policy_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/policy/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/autoscaling/v2/
* get available resources
*/
async function handlegetModel_Apis_Autoscaling_V2_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/autoscaling/v2/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/networking.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Networking_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/networking.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/authorization.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Authorization_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/authorization.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/coordination.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Coordination_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/coordination.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /api/v1/
* get available resources
*/
async function handlegetModel_Api_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /api/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/events.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Events_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/events.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/storage.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Storage_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/storage.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/apiregistration.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Apiregistration_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/apiregistration.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/coordination.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Coordination_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/coordination.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/authentication.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Authentication_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/authentication.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/apiregistration.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Apiregistration_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/apiregistration.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/authorization.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Authorization_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/authorization.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/scheduling.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Scheduling_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/scheduling.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/networking.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Networking_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/networking.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/flowcontrol.apiserver.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Flowcontrol_Apiserver_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/flowcontrol.apiserver.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/apps/v1/
* get available resources
*/
async function handlegetModel_Apis_Apps_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/apps/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/autoscaling/
* get information of a group
*/
async function handlegetModel_Apis_Autoscaling_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/autoscaling/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/batch/v1/
* get available resources
*/
async function handlegetModel_Apis_Batch_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/batch/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /version/
* get the code version
*/
async function handlegetModel_Version_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /version/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/authentication.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Authentication_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/authentication.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/certificates.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Certificates_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/certificates.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/apiextensions.k8s.io/v1/
* get available resources
*/
async function handlegetModel_Apis_Apiextensions_K8s_Io_V1_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/apiextensions.k8s.io/v1/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}

/**
* Handler for GET /apis/node.k8s.io/
* get information of a group
*/
async function handlegetModel_Apis_Node_K8s_Io_(
 req: express.Request, 
 res: express.Response, 
 storage: Storage
): Promise<void> {
 
 // Generic handler for other discovery endpoints
 logger.info(`Handling discovery endpoint: /apis/node.k8s.io/`);
 
 // Implement custom logic for this discovery endpoint
 res.json({
   kind: 'Status',
   apiVersion: 'v1',
   status: 'Success',
   message: 'Discovery endpoint handled successfully'
 });
 
}


