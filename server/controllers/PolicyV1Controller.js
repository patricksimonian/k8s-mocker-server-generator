/**
 * The PolicyV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PolicyV1Service');
const createPolicyV1NamespacedPodDisruptionBudget = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPolicyV1NamespacedPodDisruptionBudget);
};

const deletePolicyV1CollectionNamespacedPodDisruptionBudget = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletePolicyV1CollectionNamespacedPodDisruptionBudget);
};

const deletePolicyV1NamespacedPodDisruptionBudget = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletePolicyV1NamespacedPodDisruptionBudget);
};

const getPolicyV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPolicyV1APIResources);
};

const listPolicyV1NamespacedPodDisruptionBudget = async (request, response) => {
  await Controller.handleRequest(request, response, service.listPolicyV1NamespacedPodDisruptionBudget);
};

const listPolicyV1PodDisruptionBudgetForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listPolicyV1PodDisruptionBudgetForAllNamespaces);
};

const patchPolicyV1NamespacedPodDisruptionBudget = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchPolicyV1NamespacedPodDisruptionBudget);
};

const patchPolicyV1NamespacedPodDisruptionBudgetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchPolicyV1NamespacedPodDisruptionBudgetStatus);
};

const readPolicyV1NamespacedPodDisruptionBudget = async (request, response) => {
  await Controller.handleRequest(request, response, service.readPolicyV1NamespacedPodDisruptionBudget);
};

const readPolicyV1NamespacedPodDisruptionBudgetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readPolicyV1NamespacedPodDisruptionBudgetStatus);
};

const replacePolicyV1NamespacedPodDisruptionBudget = async (request, response) => {
  await Controller.handleRequest(request, response, service.replacePolicyV1NamespacedPodDisruptionBudget);
};

const replacePolicyV1NamespacedPodDisruptionBudgetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replacePolicyV1NamespacedPodDisruptionBudgetStatus);
};

const watchPolicyV1NamespacedPodDisruptionBudget = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchPolicyV1NamespacedPodDisruptionBudget);
};

const watchPolicyV1NamespacedPodDisruptionBudgetList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchPolicyV1NamespacedPodDisruptionBudgetList);
};

const watchPolicyV1PodDisruptionBudgetListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchPolicyV1PodDisruptionBudgetListForAllNamespaces);
};


module.exports = {
  createPolicyV1NamespacedPodDisruptionBudget,
  deletePolicyV1CollectionNamespacedPodDisruptionBudget,
  deletePolicyV1NamespacedPodDisruptionBudget,
  getPolicyV1APIResources,
  listPolicyV1NamespacedPodDisruptionBudget,
  listPolicyV1PodDisruptionBudgetForAllNamespaces,
  patchPolicyV1NamespacedPodDisruptionBudget,
  patchPolicyV1NamespacedPodDisruptionBudgetStatus,
  readPolicyV1NamespacedPodDisruptionBudget,
  readPolicyV1NamespacedPodDisruptionBudgetStatus,
  replacePolicyV1NamespacedPodDisruptionBudget,
  replacePolicyV1NamespacedPodDisruptionBudgetStatus,
  watchPolicyV1NamespacedPodDisruptionBudget,
  watchPolicyV1NamespacedPodDisruptionBudgetList,
  watchPolicyV1PodDisruptionBudgetListForAllNamespaces,
};
