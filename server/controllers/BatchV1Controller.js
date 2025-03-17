/**
 * The BatchV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BatchV1Service');
const createBatchV1NamespacedCronJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.createBatchV1NamespacedCronJob);
};

const createBatchV1NamespacedJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.createBatchV1NamespacedJob);
};

const deleteBatchV1CollectionNamespacedCronJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBatchV1CollectionNamespacedCronJob);
};

const deleteBatchV1CollectionNamespacedJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBatchV1CollectionNamespacedJob);
};

const deleteBatchV1NamespacedCronJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBatchV1NamespacedCronJob);
};

const deleteBatchV1NamespacedJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBatchV1NamespacedJob);
};

const getBatchV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getBatchV1APIResources);
};

const listBatchV1CronJobForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listBatchV1CronJobForAllNamespaces);
};

const listBatchV1JobForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listBatchV1JobForAllNamespaces);
};

const listBatchV1NamespacedCronJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.listBatchV1NamespacedCronJob);
};

const listBatchV1NamespacedJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.listBatchV1NamespacedJob);
};

const patchBatchV1NamespacedCronJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchBatchV1NamespacedCronJob);
};

const patchBatchV1NamespacedCronJobStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchBatchV1NamespacedCronJobStatus);
};

const patchBatchV1NamespacedJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchBatchV1NamespacedJob);
};

const patchBatchV1NamespacedJobStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchBatchV1NamespacedJobStatus);
};

const readBatchV1NamespacedCronJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.readBatchV1NamespacedCronJob);
};

const readBatchV1NamespacedCronJobStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readBatchV1NamespacedCronJobStatus);
};

const readBatchV1NamespacedJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.readBatchV1NamespacedJob);
};

const readBatchV1NamespacedJobStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readBatchV1NamespacedJobStatus);
};

const replaceBatchV1NamespacedCronJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceBatchV1NamespacedCronJob);
};

const replaceBatchV1NamespacedCronJobStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceBatchV1NamespacedCronJobStatus);
};

const replaceBatchV1NamespacedJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceBatchV1NamespacedJob);
};

const replaceBatchV1NamespacedJobStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceBatchV1NamespacedJobStatus);
};

const watchBatchV1CronJobListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchBatchV1CronJobListForAllNamespaces);
};

const watchBatchV1JobListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchBatchV1JobListForAllNamespaces);
};

const watchBatchV1NamespacedCronJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchBatchV1NamespacedCronJob);
};

const watchBatchV1NamespacedCronJobList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchBatchV1NamespacedCronJobList);
};

const watchBatchV1NamespacedJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchBatchV1NamespacedJob);
};

const watchBatchV1NamespacedJobList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchBatchV1NamespacedJobList);
};


module.exports = {
  createBatchV1NamespacedCronJob,
  createBatchV1NamespacedJob,
  deleteBatchV1CollectionNamespacedCronJob,
  deleteBatchV1CollectionNamespacedJob,
  deleteBatchV1NamespacedCronJob,
  deleteBatchV1NamespacedJob,
  getBatchV1APIResources,
  listBatchV1CronJobForAllNamespaces,
  listBatchV1JobForAllNamespaces,
  listBatchV1NamespacedCronJob,
  listBatchV1NamespacedJob,
  patchBatchV1NamespacedCronJob,
  patchBatchV1NamespacedCronJobStatus,
  patchBatchV1NamespacedJob,
  patchBatchV1NamespacedJobStatus,
  readBatchV1NamespacedCronJob,
  readBatchV1NamespacedCronJobStatus,
  readBatchV1NamespacedJob,
  readBatchV1NamespacedJobStatus,
  replaceBatchV1NamespacedCronJob,
  replaceBatchV1NamespacedCronJobStatus,
  replaceBatchV1NamespacedJob,
  replaceBatchV1NamespacedJobStatus,
  watchBatchV1CronJobListForAllNamespaces,
  watchBatchV1JobListForAllNamespaces,
  watchBatchV1NamespacedCronJob,
  watchBatchV1NamespacedCronJobList,
  watchBatchV1NamespacedJob,
  watchBatchV1NamespacedJobList,
};
