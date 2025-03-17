/**
 * The ResourceV1alpha3Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ResourceV1alpha3Service');
const createResourceV1alpha3DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceV1alpha3DeviceClass);
};

const createResourceV1alpha3NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceV1alpha3NamespacedResourceClaim);
};

const createResourceV1alpha3NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceV1alpha3NamespacedResourceClaimTemplate);
};

const createResourceV1alpha3ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.createResourceV1alpha3ResourceSlice);
};

const deleteResourceV1alpha3CollectionDeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1alpha3CollectionDeviceClass);
};

const deleteResourceV1alpha3CollectionNamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1alpha3CollectionNamespacedResourceClaim);
};

const deleteResourceV1alpha3CollectionNamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1alpha3CollectionNamespacedResourceClaimTemplate);
};

const deleteResourceV1alpha3CollectionResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1alpha3CollectionResourceSlice);
};

const deleteResourceV1alpha3DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1alpha3DeviceClass);
};

const deleteResourceV1alpha3NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1alpha3NamespacedResourceClaim);
};

const deleteResourceV1alpha3NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1alpha3NamespacedResourceClaimTemplate);
};

const deleteResourceV1alpha3ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteResourceV1alpha3ResourceSlice);
};

const getResourceV1alpha3APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getResourceV1alpha3APIResources);
};

const listResourceV1alpha3DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1alpha3DeviceClass);
};

const listResourceV1alpha3NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1alpha3NamespacedResourceClaim);
};

const listResourceV1alpha3NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1alpha3NamespacedResourceClaimTemplate);
};

const listResourceV1alpha3ResourceClaimForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1alpha3ResourceClaimForAllNamespaces);
};

const listResourceV1alpha3ResourceClaimTemplateForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1alpha3ResourceClaimTemplateForAllNamespaces);
};

const listResourceV1alpha3ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.listResourceV1alpha3ResourceSlice);
};

const patchResourceV1alpha3DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1alpha3DeviceClass);
};

const patchResourceV1alpha3NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1alpha3NamespacedResourceClaim);
};

const patchResourceV1alpha3NamespacedResourceClaimStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1alpha3NamespacedResourceClaimStatus);
};

const patchResourceV1alpha3NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1alpha3NamespacedResourceClaimTemplate);
};

const patchResourceV1alpha3ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchResourceV1alpha3ResourceSlice);
};

const readResourceV1alpha3DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1alpha3DeviceClass);
};

const readResourceV1alpha3NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1alpha3NamespacedResourceClaim);
};

const readResourceV1alpha3NamespacedResourceClaimStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1alpha3NamespacedResourceClaimStatus);
};

const readResourceV1alpha3NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1alpha3NamespacedResourceClaimTemplate);
};

const readResourceV1alpha3ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.readResourceV1alpha3ResourceSlice);
};

const replaceResourceV1alpha3DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1alpha3DeviceClass);
};

const replaceResourceV1alpha3NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1alpha3NamespacedResourceClaim);
};

const replaceResourceV1alpha3NamespacedResourceClaimStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1alpha3NamespacedResourceClaimStatus);
};

const replaceResourceV1alpha3NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1alpha3NamespacedResourceClaimTemplate);
};

const replaceResourceV1alpha3ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceResourceV1alpha3ResourceSlice);
};

const watchResourceV1alpha3DeviceClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3DeviceClass);
};

const watchResourceV1alpha3DeviceClassList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3DeviceClassList);
};

const watchResourceV1alpha3NamespacedResourceClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3NamespacedResourceClaim);
};

const watchResourceV1alpha3NamespacedResourceClaimList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3NamespacedResourceClaimList);
};

const watchResourceV1alpha3NamespacedResourceClaimTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3NamespacedResourceClaimTemplate);
};

const watchResourceV1alpha3NamespacedResourceClaimTemplateList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3NamespacedResourceClaimTemplateList);
};

const watchResourceV1alpha3ResourceClaimListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3ResourceClaimListForAllNamespaces);
};

const watchResourceV1alpha3ResourceClaimTemplateListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3ResourceClaimTemplateListForAllNamespaces);
};

const watchResourceV1alpha3ResourceSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3ResourceSlice);
};

const watchResourceV1alpha3ResourceSliceList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchResourceV1alpha3ResourceSliceList);
};


module.exports = {
  createResourceV1alpha3DeviceClass,
  createResourceV1alpha3NamespacedResourceClaim,
  createResourceV1alpha3NamespacedResourceClaimTemplate,
  createResourceV1alpha3ResourceSlice,
  deleteResourceV1alpha3CollectionDeviceClass,
  deleteResourceV1alpha3CollectionNamespacedResourceClaim,
  deleteResourceV1alpha3CollectionNamespacedResourceClaimTemplate,
  deleteResourceV1alpha3CollectionResourceSlice,
  deleteResourceV1alpha3DeviceClass,
  deleteResourceV1alpha3NamespacedResourceClaim,
  deleteResourceV1alpha3NamespacedResourceClaimTemplate,
  deleteResourceV1alpha3ResourceSlice,
  getResourceV1alpha3APIResources,
  listResourceV1alpha3DeviceClass,
  listResourceV1alpha3NamespacedResourceClaim,
  listResourceV1alpha3NamespacedResourceClaimTemplate,
  listResourceV1alpha3ResourceClaimForAllNamespaces,
  listResourceV1alpha3ResourceClaimTemplateForAllNamespaces,
  listResourceV1alpha3ResourceSlice,
  patchResourceV1alpha3DeviceClass,
  patchResourceV1alpha3NamespacedResourceClaim,
  patchResourceV1alpha3NamespacedResourceClaimStatus,
  patchResourceV1alpha3NamespacedResourceClaimTemplate,
  patchResourceV1alpha3ResourceSlice,
  readResourceV1alpha3DeviceClass,
  readResourceV1alpha3NamespacedResourceClaim,
  readResourceV1alpha3NamespacedResourceClaimStatus,
  readResourceV1alpha3NamespacedResourceClaimTemplate,
  readResourceV1alpha3ResourceSlice,
  replaceResourceV1alpha3DeviceClass,
  replaceResourceV1alpha3NamespacedResourceClaim,
  replaceResourceV1alpha3NamespacedResourceClaimStatus,
  replaceResourceV1alpha3NamespacedResourceClaimTemplate,
  replaceResourceV1alpha3ResourceSlice,
  watchResourceV1alpha3DeviceClass,
  watchResourceV1alpha3DeviceClassList,
  watchResourceV1alpha3NamespacedResourceClaim,
  watchResourceV1alpha3NamespacedResourceClaimList,
  watchResourceV1alpha3NamespacedResourceClaimTemplate,
  watchResourceV1alpha3NamespacedResourceClaimTemplateList,
  watchResourceV1alpha3ResourceClaimListForAllNamespaces,
  watchResourceV1alpha3ResourceClaimTemplateListForAllNamespaces,
  watchResourceV1alpha3ResourceSlice,
  watchResourceV1alpha3ResourceSliceList,
};
