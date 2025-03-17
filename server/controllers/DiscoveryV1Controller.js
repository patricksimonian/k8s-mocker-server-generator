/**
 * The DiscoveryV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DiscoveryV1Service');
const createDiscoveryV1NamespacedEndpointSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.createDiscoveryV1NamespacedEndpointSlice);
};

const deleteDiscoveryV1CollectionNamespacedEndpointSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteDiscoveryV1CollectionNamespacedEndpointSlice);
};

const deleteDiscoveryV1NamespacedEndpointSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteDiscoveryV1NamespacedEndpointSlice);
};

const getDiscoveryV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getDiscoveryV1APIResources);
};

const listDiscoveryV1EndpointSliceForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listDiscoveryV1EndpointSliceForAllNamespaces);
};

const listDiscoveryV1NamespacedEndpointSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.listDiscoveryV1NamespacedEndpointSlice);
};

const patchDiscoveryV1NamespacedEndpointSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchDiscoveryV1NamespacedEndpointSlice);
};

const readDiscoveryV1NamespacedEndpointSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.readDiscoveryV1NamespacedEndpointSlice);
};

const replaceDiscoveryV1NamespacedEndpointSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceDiscoveryV1NamespacedEndpointSlice);
};

const watchDiscoveryV1EndpointSliceListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchDiscoveryV1EndpointSliceListForAllNamespaces);
};

const watchDiscoveryV1NamespacedEndpointSlice = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchDiscoveryV1NamespacedEndpointSlice);
};

const watchDiscoveryV1NamespacedEndpointSliceList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchDiscoveryV1NamespacedEndpointSliceList);
};


module.exports = {
  createDiscoveryV1NamespacedEndpointSlice,
  deleteDiscoveryV1CollectionNamespacedEndpointSlice,
  deleteDiscoveryV1NamespacedEndpointSlice,
  getDiscoveryV1APIResources,
  listDiscoveryV1EndpointSliceForAllNamespaces,
  listDiscoveryV1NamespacedEndpointSlice,
  patchDiscoveryV1NamespacedEndpointSlice,
  readDiscoveryV1NamespacedEndpointSlice,
  replaceDiscoveryV1NamespacedEndpointSlice,
  watchDiscoveryV1EndpointSliceListForAllNamespaces,
  watchDiscoveryV1NamespacedEndpointSlice,
  watchDiscoveryV1NamespacedEndpointSliceList,
};
