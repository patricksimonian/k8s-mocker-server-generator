/**
 * The InternalApiserverV1alpha1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/InternalApiserverV1alpha1Service');
const createInternalApiserverV1alpha1StorageVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.createInternalApiserverV1alpha1StorageVersion);
};

const deleteInternalApiserverV1alpha1CollectionStorageVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteInternalApiserverV1alpha1CollectionStorageVersion);
};

const deleteInternalApiserverV1alpha1StorageVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteInternalApiserverV1alpha1StorageVersion);
};

const getInternalApiserverV1alpha1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getInternalApiserverV1alpha1APIResources);
};

const listInternalApiserverV1alpha1StorageVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.listInternalApiserverV1alpha1StorageVersion);
};

const patchInternalApiserverV1alpha1StorageVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchInternalApiserverV1alpha1StorageVersion);
};

const patchInternalApiserverV1alpha1StorageVersionStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchInternalApiserverV1alpha1StorageVersionStatus);
};

const readInternalApiserverV1alpha1StorageVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.readInternalApiserverV1alpha1StorageVersion);
};

const readInternalApiserverV1alpha1StorageVersionStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readInternalApiserverV1alpha1StorageVersionStatus);
};

const replaceInternalApiserverV1alpha1StorageVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceInternalApiserverV1alpha1StorageVersion);
};

const replaceInternalApiserverV1alpha1StorageVersionStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceInternalApiserverV1alpha1StorageVersionStatus);
};

const watchInternalApiserverV1alpha1StorageVersion = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchInternalApiserverV1alpha1StorageVersion);
};

const watchInternalApiserverV1alpha1StorageVersionList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchInternalApiserverV1alpha1StorageVersionList);
};


module.exports = {
  createInternalApiserverV1alpha1StorageVersion,
  deleteInternalApiserverV1alpha1CollectionStorageVersion,
  deleteInternalApiserverV1alpha1StorageVersion,
  getInternalApiserverV1alpha1APIResources,
  listInternalApiserverV1alpha1StorageVersion,
  patchInternalApiserverV1alpha1StorageVersion,
  patchInternalApiserverV1alpha1StorageVersionStatus,
  readInternalApiserverV1alpha1StorageVersion,
  readInternalApiserverV1alpha1StorageVersionStatus,
  replaceInternalApiserverV1alpha1StorageVersion,
  replaceInternalApiserverV1alpha1StorageVersionStatus,
  watchInternalApiserverV1alpha1StorageVersion,
  watchInternalApiserverV1alpha1StorageVersionList,
};
