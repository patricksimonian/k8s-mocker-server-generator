/**
 * The CoordinationV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CoordinationV1Service');
const createCoordinationV1NamespacedLease = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoordinationV1NamespacedLease);
};

const deleteCoordinationV1CollectionNamespacedLease = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoordinationV1CollectionNamespacedLease);
};

const deleteCoordinationV1NamespacedLease = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoordinationV1NamespacedLease);
};

const getCoordinationV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCoordinationV1APIResources);
};

const listCoordinationV1LeaseForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoordinationV1LeaseForAllNamespaces);
};

const listCoordinationV1NamespacedLease = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoordinationV1NamespacedLease);
};

const patchCoordinationV1NamespacedLease = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoordinationV1NamespacedLease);
};

const readCoordinationV1NamespacedLease = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoordinationV1NamespacedLease);
};

const replaceCoordinationV1NamespacedLease = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoordinationV1NamespacedLease);
};

const watchCoordinationV1LeaseListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoordinationV1LeaseListForAllNamespaces);
};

const watchCoordinationV1NamespacedLease = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoordinationV1NamespacedLease);
};

const watchCoordinationV1NamespacedLeaseList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoordinationV1NamespacedLeaseList);
};


module.exports = {
  createCoordinationV1NamespacedLease,
  deleteCoordinationV1CollectionNamespacedLease,
  deleteCoordinationV1NamespacedLease,
  getCoordinationV1APIResources,
  listCoordinationV1LeaseForAllNamespaces,
  listCoordinationV1NamespacedLease,
  patchCoordinationV1NamespacedLease,
  readCoordinationV1NamespacedLease,
  replaceCoordinationV1NamespacedLease,
  watchCoordinationV1LeaseListForAllNamespaces,
  watchCoordinationV1NamespacedLease,
  watchCoordinationV1NamespacedLeaseList,
};
