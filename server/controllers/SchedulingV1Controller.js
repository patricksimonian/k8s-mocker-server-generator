/**
 * The SchedulingV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/SchedulingV1Service');
const createSchedulingV1PriorityClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.createSchedulingV1PriorityClass);
};

const deleteSchedulingV1CollectionPriorityClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteSchedulingV1CollectionPriorityClass);
};

const deleteSchedulingV1PriorityClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteSchedulingV1PriorityClass);
};

const getSchedulingV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSchedulingV1APIResources);
};

const listSchedulingV1PriorityClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.listSchedulingV1PriorityClass);
};

const patchSchedulingV1PriorityClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchSchedulingV1PriorityClass);
};

const readSchedulingV1PriorityClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.readSchedulingV1PriorityClass);
};

const replaceSchedulingV1PriorityClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceSchedulingV1PriorityClass);
};

const watchSchedulingV1PriorityClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchSchedulingV1PriorityClass);
};

const watchSchedulingV1PriorityClassList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchSchedulingV1PriorityClassList);
};


module.exports = {
  createSchedulingV1PriorityClass,
  deleteSchedulingV1CollectionPriorityClass,
  deleteSchedulingV1PriorityClass,
  getSchedulingV1APIResources,
  listSchedulingV1PriorityClass,
  patchSchedulingV1PriorityClass,
  readSchedulingV1PriorityClass,
  replaceSchedulingV1PriorityClass,
  watchSchedulingV1PriorityClass,
  watchSchedulingV1PriorityClassList,
};
