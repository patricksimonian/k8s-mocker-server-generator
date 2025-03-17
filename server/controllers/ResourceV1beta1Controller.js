/**
 * The ResourceV1beta1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ResourceV1beta1Service');
const createResourceV1beta1DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceV1beta1DeviceClass);
};

const createResourceV1beta1NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceV1beta1NamespacedResourceClaim);
};

const createResourceV1beta1NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceV1beta1NamespacedResourceClaimTemplate);
};

const createResourceV1beta1ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceV1beta1ResourceSlice);
};

const deleteResourceV1beta1CollectionDeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1beta1CollectionDeviceClass);
};

const deleteResourceV1beta1CollectionNamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1beta1CollectionNamespacedResourceClaim);
};

const deleteResourceV1beta1CollectionNamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1beta1CollectionNamespacedResourceClaimTemplate);
};

const deleteResourceV1beta1CollectionResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1beta1CollectionResourceSlice);
};

const deleteResourceV1beta1DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1beta1DeviceClass);
};

const deleteResourceV1beta1NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1beta1NamespacedResourceClaim);
};

const deleteResourceV1beta1NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1beta1NamespacedResourceClaimTemplate);
};

const deleteResourceV1beta1ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1beta1ResourceSlice);
};

const getResourceV1beta1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getResourceV1beta1APIResources);
};

const listResourceV1beta1DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1beta1DeviceClass);
};

const listResourceV1beta1NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1beta1NamespacedResourceClaim);
};

const listResourceV1beta1NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1beta1NamespacedResourceClaimTemplate);
};

const listResourceV1beta1ResourceClaimForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1beta1ResourceClaimForAllNamespaces);
};

const listResourceV1beta1ResourceClaimTemplateForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1beta1ResourceClaimTemplateForAllNamespaces);
};

const listResourceV1beta1ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1beta1ResourceSlice);
};

const patchResourceV1beta1DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1beta1DeviceClass);
};

const patchResourceV1beta1NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1beta1NamespacedResourceClaim);
};

const patchResourceV1beta1NamespacedResourceClaimStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1beta1NamespacedResourceClaimStatus);
};

const patchResourceV1beta1NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1beta1NamespacedResourceClaimTemplate);
};

const patchResourceV1beta1ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1beta1ResourceSlice);
};

const readResourceV1beta1DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1beta1DeviceClass);
};

const readResourceV1beta1NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1beta1NamespacedResourceClaim);
};

const readResourceV1beta1NamespacedResourceClaimStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1beta1NamespacedResourceClaimStatus);
};

const readResourceV1beta1NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1beta1NamespacedResourceClaimTemplate);
};

const readResourceV1beta1ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1beta1ResourceSlice);
};

const replaceResourceV1beta1DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1beta1DeviceClass);
};

const replaceResourceV1beta1NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1beta1NamespacedResourceClaim);
};

const replaceResourceV1beta1NamespacedResourceClaimStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1beta1NamespacedResourceClaimStatus);
};

const replaceResourceV1beta1NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1beta1NamespacedResourceClaimTemplate);
};

const replaceResourceV1beta1ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1beta1ResourceSlice);
};

const watchResourceV1beta1DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1DeviceClass);
};

const watchResourceV1beta1DeviceClassList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1DeviceClassList);
};

const watchResourceV1beta1NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1NamespacedResourceClaim);
};

const watchResourceV1beta1NamespacedResourceClaimList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1NamespacedResourceClaimList);
};

const watchResourceV1beta1NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1NamespacedResourceClaimTemplate);
};

const watchResourceV1beta1NamespacedResourceClaimTemplateList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1NamespacedResourceClaimTemplateList);
};

const watchResourceV1beta1ResourceClaimListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1ResourceClaimListForAllNamespaces);
};

const watchResourceV1beta1ResourceClaimTemplateListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1ResourceClaimTemplateListForAllNamespaces);
};

const watchResourceV1beta1ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1ResourceSlice);
};

const watchResourceV1beta1ResourceSliceList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1beta1ResourceSliceList);
};


module.exports = {
  createResourceV1beta1DeviceClass,
  createResourceV1beta1NamespacedResourceClaim,
  createResourceV1beta1NamespacedResourceClaimTemplate,
  createResourceV1beta1ResourceSlice,
  deleteResourceV1beta1CollectionDeviceClass,
  deleteResourceV1beta1CollectionNamespacedResourceClaim,
  deleteResourceV1beta1CollectionNamespacedResourceClaimTemplate,
  deleteResourceV1beta1CollectionResourceSlice,
  deleteResourceV1beta1DeviceClass,
  deleteResourceV1beta1NamespacedResourceClaim,
  deleteResourceV1beta1NamespacedResourceClaimTemplate,
  deleteResourceV1beta1ResourceSlice,
  getResourceV1beta1APIResources,
  listResourceV1beta1DeviceClass,
  listResourceV1beta1NamespacedResourceClaim,
  listResourceV1beta1NamespacedResourceClaimTemplate,
  listResourceV1beta1ResourceClaimForAllNamespaces,
  listResourceV1beta1ResourceClaimTemplateForAllNamespaces,
  listResourceV1beta1ResourceSlice,
  patchResourceV1beta1DeviceClass,
  patchResourceV1beta1NamespacedResourceClaim,
  patchResourceV1beta1NamespacedResourceClaimStatus,
  patchResourceV1beta1NamespacedResourceClaimTemplate,
  patchResourceV1beta1ResourceSlice,
  readResourceV1beta1DeviceClass,
  readResourceV1beta1NamespacedResourceClaim,
  readResourceV1beta1NamespacedResourceClaimStatus,
  readResourceV1beta1NamespacedResourceClaimTemplate,
  readResourceV1beta1ResourceSlice,
  replaceResourceV1beta1DeviceClass,
  replaceResourceV1beta1NamespacedResourceClaim,
  replaceResourceV1beta1NamespacedResourceClaimStatus,
  replaceResourceV1beta1NamespacedResourceClaimTemplate,
  replaceResourceV1beta1ResourceSlice,
  watchResourceV1beta1DeviceClass,
  watchResourceV1beta1DeviceClassList,
  watchResourceV1beta1NamespacedResourceClaim,
  watchResourceV1beta1NamespacedResourceClaimList,
  watchResourceV1beta1NamespacedResourceClaimTemplate,
  watchResourceV1beta1NamespacedResourceClaimTemplateList,
  watchResourceV1beta1ResourceClaimListForAllNamespaces,
  watchResourceV1beta1ResourceClaimTemplateListForAllNamespaces,
  watchResourceV1beta1ResourceSlice,
  watchResourceV1beta1ResourceSliceList,
};
