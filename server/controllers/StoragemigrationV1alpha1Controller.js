/**
 * The StoragemigrationV1alpha1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/StoragemigrationV1alpha1Service');
const createStoragemigrationV1alpha1StorageVersionMigration = async (request, response) => {
  await Controller.handleRequest(request, response, service.createStoragemigrationV1alpha1StorageVersionMigration);
};

const deleteStoragemigrationV1alpha1CollectionStorageVersionMigration = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStoragemigrationV1alpha1CollectionStorageVersionMigration);
};

const deleteStoragemigrationV1alpha1StorageVersionMigration = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStoragemigrationV1alpha1StorageVersionMigration);
};

const getStoragemigrationV1alpha1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getStoragemigrationV1alpha1APIResources);
};

const listStoragemigrationV1alpha1StorageVersionMigration = async (request, response) => {
  await Controller.handleRequest(request, response, service.listStoragemigrationV1alpha1StorageVersionMigration);
};

const patchStoragemigrationV1alpha1StorageVersionMigration = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStoragemigrationV1alpha1StorageVersionMigration);
};

const patchStoragemigrationV1alpha1StorageVersionMigrationStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStoragemigrationV1alpha1StorageVersionMigrationStatus);
};

const readStoragemigrationV1alpha1StorageVersionMigration = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStoragemigrationV1alpha1StorageVersionMigration);
};

const readStoragemigrationV1alpha1StorageVersionMigrationStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStoragemigrationV1alpha1StorageVersionMigrationStatus);
};

const replaceStoragemigrationV1alpha1StorageVersionMigration = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStoragemigrationV1alpha1StorageVersionMigration);
};

const replaceStoragemigrationV1alpha1StorageVersionMigrationStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStoragemigrationV1alpha1StorageVersionMigrationStatus);
};

const watchStoragemigrationV1alpha1StorageVersionMigration = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStoragemigrationV1alpha1StorageVersionMigration);
};

const watchStoragemigrationV1alpha1StorageVersionMigrationList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStoragemigrationV1alpha1StorageVersionMigrationList);
};


module.exports = {
  createStoragemigrationV1alpha1StorageVersionMigration,
  deleteStoragemigrationV1alpha1CollectionStorageVersionMigration,
  deleteStoragemigrationV1alpha1StorageVersionMigration,
  getStoragemigrationV1alpha1APIResources,
  listStoragemigrationV1alpha1StorageVersionMigration,
  patchStoragemigrationV1alpha1StorageVersionMigration,
  patchStoragemigrationV1alpha1StorageVersionMigrationStatus,
  readStoragemigrationV1alpha1StorageVersionMigration,
  readStoragemigrationV1alpha1StorageVersionMigrationStatus,
  replaceStoragemigrationV1alpha1StorageVersionMigration,
  replaceStoragemigrationV1alpha1StorageVersionMigrationStatus,
  watchStoragemigrationV1alpha1StorageVersionMigration,
  watchStoragemigrationV1alpha1StorageVersionMigrationList,
};
