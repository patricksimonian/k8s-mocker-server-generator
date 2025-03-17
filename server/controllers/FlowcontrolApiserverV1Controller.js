/**
 * The FlowcontrolApiserverV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/FlowcontrolApiserverV1Service');
const createFlowcontrolApiserverV1FlowSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.createFlowcontrolApiserverV1FlowSchema);
};

const createFlowcontrolApiserverV1PriorityLevelConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.createFlowcontrolApiserverV1PriorityLevelConfiguration);
};

const deleteFlowcontrolApiserverV1CollectionFlowSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteFlowcontrolApiserverV1CollectionFlowSchema);
};

const deleteFlowcontrolApiserverV1CollectionPriorityLevelConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteFlowcontrolApiserverV1CollectionPriorityLevelConfiguration);
};

const deleteFlowcontrolApiserverV1FlowSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteFlowcontrolApiserverV1FlowSchema);
};

const deleteFlowcontrolApiserverV1PriorityLevelConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteFlowcontrolApiserverV1PriorityLevelConfiguration);
};

const getFlowcontrolApiserverV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getFlowcontrolApiserverV1APIResources);
};

const listFlowcontrolApiserverV1FlowSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.listFlowcontrolApiserverV1FlowSchema);
};

const listFlowcontrolApiserverV1PriorityLevelConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.listFlowcontrolApiserverV1PriorityLevelConfiguration);
};

const patchFlowcontrolApiserverV1FlowSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchFlowcontrolApiserverV1FlowSchema);
};

const patchFlowcontrolApiserverV1FlowSchemaStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchFlowcontrolApiserverV1FlowSchemaStatus);
};

const patchFlowcontrolApiserverV1PriorityLevelConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchFlowcontrolApiserverV1PriorityLevelConfiguration);
};

const patchFlowcontrolApiserverV1PriorityLevelConfigurationStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchFlowcontrolApiserverV1PriorityLevelConfigurationStatus);
};

const readFlowcontrolApiserverV1FlowSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.readFlowcontrolApiserverV1FlowSchema);
};

const readFlowcontrolApiserverV1FlowSchemaStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readFlowcontrolApiserverV1FlowSchemaStatus);
};

const readFlowcontrolApiserverV1PriorityLevelConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.readFlowcontrolApiserverV1PriorityLevelConfiguration);
};

const readFlowcontrolApiserverV1PriorityLevelConfigurationStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readFlowcontrolApiserverV1PriorityLevelConfigurationStatus);
};

const replaceFlowcontrolApiserverV1FlowSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceFlowcontrolApiserverV1FlowSchema);
};

const replaceFlowcontrolApiserverV1FlowSchemaStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceFlowcontrolApiserverV1FlowSchemaStatus);
};

const replaceFlowcontrolApiserverV1PriorityLevelConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceFlowcontrolApiserverV1PriorityLevelConfiguration);
};

const replaceFlowcontrolApiserverV1PriorityLevelConfigurationStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceFlowcontrolApiserverV1PriorityLevelConfigurationStatus);
};

const watchFlowcontrolApiserverV1FlowSchema = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchFlowcontrolApiserverV1FlowSchema);
};

const watchFlowcontrolApiserverV1FlowSchemaList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchFlowcontrolApiserverV1FlowSchemaList);
};

const watchFlowcontrolApiserverV1PriorityLevelConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchFlowcontrolApiserverV1PriorityLevelConfiguration);
};

const watchFlowcontrolApiserverV1PriorityLevelConfigurationList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchFlowcontrolApiserverV1PriorityLevelConfigurationList);
};


module.exports = {
  createFlowcontrolApiserverV1FlowSchema,
  createFlowcontrolApiserverV1PriorityLevelConfiguration,
  deleteFlowcontrolApiserverV1CollectionFlowSchema,
  deleteFlowcontrolApiserverV1CollectionPriorityLevelConfiguration,
  deleteFlowcontrolApiserverV1FlowSchema,
  deleteFlowcontrolApiserverV1PriorityLevelConfiguration,
  getFlowcontrolApiserverV1APIResources,
  listFlowcontrolApiserverV1FlowSchema,
  listFlowcontrolApiserverV1PriorityLevelConfiguration,
  patchFlowcontrolApiserverV1FlowSchema,
  patchFlowcontrolApiserverV1FlowSchemaStatus,
  patchFlowcontrolApiserverV1PriorityLevelConfiguration,
  patchFlowcontrolApiserverV1PriorityLevelConfigurationStatus,
  readFlowcontrolApiserverV1FlowSchema,
  readFlowcontrolApiserverV1FlowSchemaStatus,
  readFlowcontrolApiserverV1PriorityLevelConfiguration,
  readFlowcontrolApiserverV1PriorityLevelConfigurationStatus,
  replaceFlowcontrolApiserverV1FlowSchema,
  replaceFlowcontrolApiserverV1FlowSchemaStatus,
  replaceFlowcontrolApiserverV1PriorityLevelConfiguration,
  replaceFlowcontrolApiserverV1PriorityLevelConfigurationStatus,
  watchFlowcontrolApiserverV1FlowSchema,
  watchFlowcontrolApiserverV1FlowSchemaList,
  watchFlowcontrolApiserverV1PriorityLevelConfiguration,
  watchFlowcontrolApiserverV1PriorityLevelConfigurationList,
};
