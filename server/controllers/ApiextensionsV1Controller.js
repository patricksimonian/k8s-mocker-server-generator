/**
 * The ApiextensionsV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ApiextensionsV1Service');
const createApiextensionsV1CustomResourceDefinition = async (request, response) => {
  await Controller.handleRequest(request, response, service.createApiextensionsV1CustomResourceDefinition);
};

const deleteApiextensionsV1CollectionCustomResourceDefinition = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteApiextensionsV1CollectionCustomResourceDefinition);
};

const deleteApiextensionsV1CustomResourceDefinition = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteApiextensionsV1CustomResourceDefinition);
};

const getApiextensionsV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getApiextensionsV1APIResources);
};

const listApiextensionsV1CustomResourceDefinition = async (request, response) => {
  await Controller.handleRequest(request, response, service.listApiextensionsV1CustomResourceDefinition);
};

const patchApiextensionsV1CustomResourceDefinition = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchApiextensionsV1CustomResourceDefinition);
};

const patchApiextensionsV1CustomResourceDefinitionStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchApiextensionsV1CustomResourceDefinitionStatus);
};

const readApiextensionsV1CustomResourceDefinition = async (request, response) => {
  await Controller.handleRequest(request, response, service.readApiextensionsV1CustomResourceDefinition);
};

const readApiextensionsV1CustomResourceDefinitionStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readApiextensionsV1CustomResourceDefinitionStatus);
};

const replaceApiextensionsV1CustomResourceDefinition = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceApiextensionsV1CustomResourceDefinition);
};

const replaceApiextensionsV1CustomResourceDefinitionStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceApiextensionsV1CustomResourceDefinitionStatus);
};

const watchApiextensionsV1CustomResourceDefinition = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchApiextensionsV1CustomResourceDefinition);
};

const watchApiextensionsV1CustomResourceDefinitionList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchApiextensionsV1CustomResourceDefinitionList);
};


module.exports = {
  createApiextensionsV1CustomResourceDefinition,
  deleteApiextensionsV1CollectionCustomResourceDefinition,
  deleteApiextensionsV1CustomResourceDefinition,
  getApiextensionsV1APIResources,
  listApiextensionsV1CustomResourceDefinition,
  patchApiextensionsV1CustomResourceDefinition,
  patchApiextensionsV1CustomResourceDefinitionStatus,
  readApiextensionsV1CustomResourceDefinition,
  readApiextensionsV1CustomResourceDefinitionStatus,
  replaceApiextensionsV1CustomResourceDefinition,
  replaceApiextensionsV1CustomResourceDefinitionStatus,
  watchApiextensionsV1CustomResourceDefinition,
  watchApiextensionsV1CustomResourceDefinitionList,
};
