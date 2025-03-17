/**
 * The NodeV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NodeV1Service');
const createNodeV1RuntimeClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.createNodeV1RuntimeClass);
};

const deleteNodeV1CollectionRuntimeClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNodeV1CollectionRuntimeClass);
};

const deleteNodeV1RuntimeClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNodeV1RuntimeClass);
};

const getNodeV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getNodeV1APIResources);
};

const listNodeV1RuntimeClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNodeV1RuntimeClass);
};

const patchNodeV1RuntimeClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNodeV1RuntimeClass);
};

const readNodeV1RuntimeClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNodeV1RuntimeClass);
};

const replaceNodeV1RuntimeClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNodeV1RuntimeClass);
};

const watchNodeV1RuntimeClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNodeV1RuntimeClass);
};

const watchNodeV1RuntimeClassList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNodeV1RuntimeClassList);
};


module.exports = {
  createNodeV1RuntimeClass,
  deleteNodeV1CollectionRuntimeClass,
  deleteNodeV1RuntimeClass,
  getNodeV1APIResources,
  listNodeV1RuntimeClass,
  patchNodeV1RuntimeClass,
  readNodeV1RuntimeClass,
  replaceNodeV1RuntimeClass,
  watchNodeV1RuntimeClass,
  watchNodeV1RuntimeClassList,
};
