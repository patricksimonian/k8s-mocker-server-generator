/**
 * The AutoscalingV2Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AutoscalingV2Service');
const createAutoscalingV2NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAutoscalingV2NamespacedHorizontalPodAutoscaler);
};

const deleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscaler);
};

const deleteAutoscalingV2NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAutoscalingV2NamespacedHorizontalPodAutoscaler);
};

const getAutoscalingV2APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAutoscalingV2APIResources);
};

const listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces);
};

const listAutoscalingV2NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAutoscalingV2NamespacedHorizontalPodAutoscaler);
};

const patchAutoscalingV2NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAutoscalingV2NamespacedHorizontalPodAutoscaler);
};

const patchAutoscalingV2NamespacedHorizontalPodAutoscalerStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAutoscalingV2NamespacedHorizontalPodAutoscalerStatus);
};

const readAutoscalingV2NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAutoscalingV2NamespacedHorizontalPodAutoscaler);
};

const readAutoscalingV2NamespacedHorizontalPodAutoscalerStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAutoscalingV2NamespacedHorizontalPodAutoscalerStatus);
};

const replaceAutoscalingV2NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAutoscalingV2NamespacedHorizontalPodAutoscaler);
};

const replaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatus);
};

const watchAutoscalingV2HorizontalPodAutoscalerListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAutoscalingV2HorizontalPodAutoscalerListForAllNamespaces);
};

const watchAutoscalingV2NamespacedHorizontalPodAutoscaler = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAutoscalingV2NamespacedHorizontalPodAutoscaler);
};

const watchAutoscalingV2NamespacedHorizontalPodAutoscalerList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAutoscalingV2NamespacedHorizontalPodAutoscalerList);
};


module.exports = {
  createAutoscalingV2NamespacedHorizontalPodAutoscaler,
  deleteAutoscalingV2CollectionNamespacedHorizontalPodAutoscaler,
  deleteAutoscalingV2NamespacedHorizontalPodAutoscaler,
  getAutoscalingV2APIResources,
  listAutoscalingV2HorizontalPodAutoscalerForAllNamespaces,
  listAutoscalingV2NamespacedHorizontalPodAutoscaler,
  patchAutoscalingV2NamespacedHorizontalPodAutoscaler,
  patchAutoscalingV2NamespacedHorizontalPodAutoscalerStatus,
  readAutoscalingV2NamespacedHorizontalPodAutoscaler,
  readAutoscalingV2NamespacedHorizontalPodAutoscalerStatus,
  replaceAutoscalingV2NamespacedHorizontalPodAutoscaler,
  replaceAutoscalingV2NamespacedHorizontalPodAutoscalerStatus,
  watchAutoscalingV2HorizontalPodAutoscalerListForAllNamespaces,
  watchAutoscalingV2NamespacedHorizontalPodAutoscaler,
  watchAutoscalingV2NamespacedHorizontalPodAutoscalerList,
};
