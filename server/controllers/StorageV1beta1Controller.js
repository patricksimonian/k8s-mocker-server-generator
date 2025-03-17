/**
 * The StorageV1beta1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/StorageV1beta1Service');
const createStorageV1beta1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.createStorageV1beta1VolumeAttributesClass);
};

const deleteStorageV1beta1CollectionVolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1beta1CollectionVolumeAttributesClass);
};

const deleteStorageV1beta1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1beta1VolumeAttributesClass);
};

const getStorageV1beta1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getStorageV1beta1APIResources);
};

const listStorageV1beta1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.listStorageV1beta1VolumeAttributesClass);
};

const patchStorageV1beta1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStorageV1beta1VolumeAttributesClass);
};

const readStorageV1beta1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStorageV1beta1VolumeAttributesClass);
};

const replaceStorageV1beta1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStorageV1beta1VolumeAttributesClass);
};

const watchStorageV1beta1VolumeAttributesClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1beta1VolumeAttributesClass);
};

const watchStorageV1beta1VolumeAttributesClassList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1beta1VolumeAttributesClassList);
};


module.exports = {
  createStorageV1beta1VolumeAttributesClass,
  deleteStorageV1beta1CollectionVolumeAttributesClass,
  deleteStorageV1beta1VolumeAttributesClass,
  getStorageV1beta1APIResources,
  listStorageV1beta1VolumeAttributesClass,
  patchStorageV1beta1VolumeAttributesClass,
  readStorageV1beta1VolumeAttributesClass,
  replaceStorageV1beta1VolumeAttributesClass,
  watchStorageV1beta1VolumeAttributesClass,
  watchStorageV1beta1VolumeAttributesClassList,
};
