/**
 * The EventsV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EventsV1Service');
const createEventsV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.createEventsV1NamespacedEvent);
};

const deleteEventsV1CollectionNamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteEventsV1CollectionNamespacedEvent);
};

const deleteEventsV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteEventsV1NamespacedEvent);
};

const getEventsV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getEventsV1APIResources);
};

const listEventsV1EventForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listEventsV1EventForAllNamespaces);
};

const listEventsV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listEventsV1NamespacedEvent);
};

const patchEventsV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchEventsV1NamespacedEvent);
};

const readEventsV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.readEventsV1NamespacedEvent);
};

const replaceEventsV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceEventsV1NamespacedEvent);
};

const watchEventsV1EventListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchEventsV1EventListForAllNamespaces);
};

const watchEventsV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchEventsV1NamespacedEvent);
};

const watchEventsV1NamespacedEventList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchEventsV1NamespacedEventList);
};


module.exports = {
  createEventsV1NamespacedEvent,
  deleteEventsV1CollectionNamespacedEvent,
  deleteEventsV1NamespacedEvent,
  getEventsV1APIResources,
  listEventsV1EventForAllNamespaces,
  listEventsV1NamespacedEvent,
  patchEventsV1NamespacedEvent,
  readEventsV1NamespacedEvent,
  replaceEventsV1NamespacedEvent,
  watchEventsV1EventListForAllNamespaces,
  watchEventsV1NamespacedEvent,
  watchEventsV1NamespacedEventList,
};
