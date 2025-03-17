/**
 * The ApiregistrationV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ApiregistrationV1Service');
const createApiregistrationV1APIService = async (request, response) => {
  await Controller.handleRequest(request, response, service.createApiregistrationV1APIService);
};

const deleteApiregistrationV1APIService = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteApiregistrationV1APIService);
};

const deleteApiregistrationV1CollectionAPIService = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteApiregistrationV1CollectionAPIService);
};

const getApiregistrationV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getApiregistrationV1APIResources);
};

const listApiregistrationV1APIService = async (request, response) => {
  await Controller.handleRequest(request, response, service.listApiregistrationV1APIService);
};

const patchApiregistrationV1APIService = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchApiregistrationV1APIService);
};

const patchApiregistrationV1APIServiceStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchApiregistrationV1APIServiceStatus);
};

const readApiregistrationV1APIService = async (request, response) => {
  await Controller.handleRequest(request, response, service.readApiregistrationV1APIService);
};

const readApiregistrationV1APIServiceStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readApiregistrationV1APIServiceStatus);
};

const replaceApiregistrationV1APIService = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceApiregistrationV1APIService);
};

const replaceApiregistrationV1APIServiceStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceApiregistrationV1APIServiceStatus);
};

const watchApiregistrationV1APIService = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchApiregistrationV1APIService);
};

const watchApiregistrationV1APIServiceList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchApiregistrationV1APIServiceList);
};


module.exports = {
  createApiregistrationV1APIService,
  deleteApiregistrationV1APIService,
  deleteApiregistrationV1CollectionAPIService,
  getApiregistrationV1APIResources,
  listApiregistrationV1APIService,
  patchApiregistrationV1APIService,
  patchApiregistrationV1APIServiceStatus,
  readApiregistrationV1APIService,
  readApiregistrationV1APIServiceStatus,
  replaceApiregistrationV1APIService,
  replaceApiregistrationV1APIServiceStatus,
  watchApiregistrationV1APIService,
  watchApiregistrationV1APIServiceList,
};
