/**
 * The StorageV1alpha1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/StorageV1alpha1Service');
const createStorageV1alpha1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.createStorageV1alpha1VolumeAttributesClass);
};

const deleteStorageV1alpha1CollectionVolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1alpha1CollectionVolumeAttributesClass);
};

const deleteStorageV1alpha1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1alpha1VolumeAttributesClass);
};

const getStorageV1alpha1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getStorageV1alpha1APIResources);
};

const listStorageV1alpha1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.listStorageV1alpha1VolumeAttributesClass);
};

const patchStorageV1alpha1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStorageV1alpha1VolumeAttributesClass);
};

const readStorageV1alpha1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStorageV1alpha1VolumeAttributesClass);
};

const replaceStorageV1alpha1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStorageV1alpha1VolumeAttributesClass);
};

const watchStorageV1alpha1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1alpha1VolumeAttributesClass);
};

const watchStorageV1alpha1VolumeAttributesClassList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1alpha1VolumeAttributesClassList);
};


module.exports = {
  createStorageV1alpha1VolumeAttributesClass,
  deleteStorageV1alpha1CollectionVolumeAttributesClass,
  deleteStorageV1alpha1VolumeAttributesClass,
  getStorageV1alpha1APIResources,
  listStorageV1alpha1VolumeAttributesClass,
  patchStorageV1alpha1VolumeAttributesClass,
  readStorageV1alpha1VolumeAttributesClass,
  replaceStorageV1alpha1VolumeAttributesClass,
  watchStorageV1alpha1VolumeAttributesClass,
  watchStorageV1alpha1VolumeAttributesClassList,
};
