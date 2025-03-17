/**
 * The AutoscalingV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AutoscalingV1Service');
const createAutoscalingV1NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAutoscalingV1NamespacedHorizontalPodAutoscaler);
};

const deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler);
};

const deleteAutoscalingV1NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAutoscalingV1NamespacedHorizontalPodAutoscaler);
};

const getAutoscalingV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAutoscalingV1APIResources);
};

const listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces);
};

const listAutoscalingV1NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAutoscalingV1NamespacedHorizontalPodAutoscaler);
};

const patchAutoscalingV1NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAutoscalingV1NamespacedHorizontalPodAutoscaler);
};

const patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus);
};

const readAutoscalingV1NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAutoscalingV1NamespacedHorizontalPodAutoscaler);
};

const readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus);
};

const replaceAutoscalingV1NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAutoscalingV1NamespacedHorizontalPodAutoscaler);
};

const replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus);
};

const watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces);
};

const watchAutoscalingV1NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAutoscalingV1NamespacedHorizontalPodAutoscaler);
};

const watchAutoscalingV1NamespacedHorizontalPodAutoscalerList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAutoscalingV1NamespacedHorizontalPodAutoscalerList);
};


module.exports = {
  createAutoscalingV1NamespacedHorizontalPodAutoscaler,
  deleteAutoscalingV1CollectionNamespacedHorizontalPodAutoscaler,
  deleteAutoscalingV1NamespacedHorizontalPodAutoscaler,
  getAutoscalingV1APIResources,
  listAutoscalingV1HorizontalPodAutoscalerForAllNamespaces,
  listAutoscalingV1NamespacedHorizontalPodAutoscaler,
  patchAutoscalingV1NamespacedHorizontalPodAutoscaler,
  patchAutoscalingV1NamespacedHorizontalPodAutoscalerStatus,
  readAutoscalingV1NamespacedHorizontalPodAutoscaler,
  readAutoscalingV1NamespacedHorizontalPodAutoscalerStatus,
  replaceAutoscalingV1NamespacedHorizontalPodAutoscaler,
  replaceAutoscalingV1NamespacedHorizontalPodAutoscalerStatus,
  watchAutoscalingV1HorizontalPodAutoscalerListForAllNamespaces,
  watchAutoscalingV1NamespacedHorizontalPodAutoscaler,
  watchAutoscalingV1NamespacedHorizontalPodAutoscalerList,
};
