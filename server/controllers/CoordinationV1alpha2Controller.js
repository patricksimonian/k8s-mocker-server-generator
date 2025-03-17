/**
 * The CoordinationV1alpha2Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CoordinationV1alpha2Service');
const createCoordinationV1alpha2NamespacedLeaseCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoordinationV1alpha2NamespacedLeaseCandidate);
};

const deleteCoordinationV1alpha2CollectionNamespacedLeaseCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoordinationV1alpha2CollectionNamespacedLeaseCandidate);
};

const deleteCoordinationV1alpha2NamespacedLeaseCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoordinationV1alpha2NamespacedLeaseCandidate);
};

const getCoordinationV1alpha2APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCoordinationV1alpha2APIResources);
};

const listCoordinationV1alpha2LeaseCandidateForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoordinationV1alpha2LeaseCandidateForAllNamespaces);
};

const listCoordinationV1alpha2NamespacedLeaseCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoordinationV1alpha2NamespacedLeaseCandidate);
};

const patchCoordinationV1alpha2NamespacedLeaseCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoordinationV1alpha2NamespacedLeaseCandidate);
};

const readCoordinationV1alpha2NamespacedLeaseCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoordinationV1alpha2NamespacedLeaseCandidate);
};

const replaceCoordinationV1alpha2NamespacedLeaseCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoordinationV1alpha2NamespacedLeaseCandidate);
};

const watchCoordinationV1alpha2LeaseCandidateListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoordinationV1alpha2LeaseCandidateListForAllNamespaces);
};

const watchCoordinationV1alpha2NamespacedLeaseCandidate = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoordinationV1alpha2NamespacedLeaseCandidate);
};

const watchCoordinationV1alpha2NamespacedLeaseCandidateList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoordinationV1alpha2NamespacedLeaseCandidateList);
};


module.exports = {
  createCoordinationV1alpha2NamespacedLeaseCandidate,
  deleteCoordinationV1alpha2CollectionNamespacedLeaseCandidate,
  deleteCoordinationV1alpha2NamespacedLeaseCandidate,
  getCoordinationV1alpha2APIResources,
  listCoordinationV1alpha2LeaseCandidateForAllNamespaces,
  listCoordinationV1alpha2NamespacedLeaseCandidate,
  patchCoordinationV1alpha2NamespacedLeaseCandidate,
  readCoordinationV1alpha2NamespacedLeaseCandidate,
  replaceCoordinationV1alpha2NamespacedLeaseCandidate,
  watchCoordinationV1alpha2LeaseCandidateListForAllNamespaces,
  watchCoordinationV1alpha2NamespacedLeaseCandidate,
  watchCoordinationV1alpha2NamespacedLeaseCandidateList,
};
