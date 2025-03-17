/**
 * The AdmissionregistrationV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AdmissionregistrationV1Service');
const createAdmissionregistrationV1MutatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAdmissionregistrationV1MutatingWebhookConfiguration);
};

const createAdmissionregistrationV1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAdmissionregistrationV1ValidatingAdmissionPolicy);
};

const createAdmissionregistrationV1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAdmissionregistrationV1ValidatingAdmissionPolicyBinding);
};

const createAdmissionregistrationV1ValidatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAdmissionregistrationV1ValidatingWebhookConfiguration);
};

const deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration);
};

const deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy);
};

const deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding);
};

const deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration);
};

const deleteAdmissionregistrationV1MutatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1MutatingWebhookConfiguration);
};

const deleteAdmissionregistrationV1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1ValidatingAdmissionPolicy);
};

const deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding);
};

const deleteAdmissionregistrationV1ValidatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1ValidatingWebhookConfiguration);
};

const getAdmissionregistrationV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAdmissionregistrationV1APIResources);
};

const listAdmissionregistrationV1MutatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAdmissionregistrationV1MutatingWebhookConfiguration);
};

const listAdmissionregistrationV1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAdmissionregistrationV1ValidatingAdmissionPolicy);
};

const listAdmissionregistrationV1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAdmissionregistrationV1ValidatingAdmissionPolicyBinding);
};

const listAdmissionregistrationV1ValidatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAdmissionregistrationV1ValidatingWebhookConfiguration);
};

const patchAdmissionregistrationV1MutatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1MutatingWebhookConfiguration);
};

const patchAdmissionregistrationV1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1ValidatingAdmissionPolicy);
};

const patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding);
};

const patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus);
};

const patchAdmissionregistrationV1ValidatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1ValidatingWebhookConfiguration);
};

const readAdmissionregistrationV1MutatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1MutatingWebhookConfiguration);
};

const readAdmissionregistrationV1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1ValidatingAdmissionPolicy);
};

const readAdmissionregistrationV1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1ValidatingAdmissionPolicyBinding);
};

const readAdmissionregistrationV1ValidatingAdmissionPolicyStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1ValidatingAdmissionPolicyStatus);
};

const readAdmissionregistrationV1ValidatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1ValidatingWebhookConfiguration);
};

const replaceAdmissionregistrationV1MutatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1MutatingWebhookConfiguration);
};

const replaceAdmissionregistrationV1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1ValidatingAdmissionPolicy);
};

const replaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding);
};

const replaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus);
};

const replaceAdmissionregistrationV1ValidatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1ValidatingWebhookConfiguration);
};

const watchAdmissionregistrationV1MutatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1MutatingWebhookConfiguration);
};

const watchAdmissionregistrationV1MutatingWebhookConfigurationList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1MutatingWebhookConfigurationList);
};

const watchAdmissionregistrationV1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1ValidatingAdmissionPolicy);
};

const watchAdmissionregistrationV1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1ValidatingAdmissionPolicyBinding);
};

const watchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList);
};

const watchAdmissionregistrationV1ValidatingAdmissionPolicyList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1ValidatingAdmissionPolicyList);
};

const watchAdmissionregistrationV1ValidatingWebhookConfiguration = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1ValidatingWebhookConfiguration);
};

const watchAdmissionregistrationV1ValidatingWebhookConfigurationList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1ValidatingWebhookConfigurationList);
};


module.exports = {
  createAdmissionregistrationV1MutatingWebhookConfiguration,
  createAdmissionregistrationV1ValidatingAdmissionPolicy,
  createAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  createAdmissionregistrationV1ValidatingWebhookConfiguration,
  deleteAdmissionregistrationV1CollectionMutatingWebhookConfiguration,
  deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicy,
  deleteAdmissionregistrationV1CollectionValidatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1CollectionValidatingWebhookConfiguration,
  deleteAdmissionregistrationV1MutatingWebhookConfiguration,
  deleteAdmissionregistrationV1ValidatingAdmissionPolicy,
  deleteAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1ValidatingWebhookConfiguration,
  getAdmissionregistrationV1APIResources,
  listAdmissionregistrationV1MutatingWebhookConfiguration,
  listAdmissionregistrationV1ValidatingAdmissionPolicy,
  listAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  listAdmissionregistrationV1ValidatingWebhookConfiguration,
  patchAdmissionregistrationV1MutatingWebhookConfiguration,
  patchAdmissionregistrationV1ValidatingAdmissionPolicy,
  patchAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  patchAdmissionregistrationV1ValidatingAdmissionPolicyStatus,
  patchAdmissionregistrationV1ValidatingWebhookConfiguration,
  readAdmissionregistrationV1MutatingWebhookConfiguration,
  readAdmissionregistrationV1ValidatingAdmissionPolicy,
  readAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  readAdmissionregistrationV1ValidatingAdmissionPolicyStatus,
  readAdmissionregistrationV1ValidatingWebhookConfiguration,
  replaceAdmissionregistrationV1MutatingWebhookConfiguration,
  replaceAdmissionregistrationV1ValidatingAdmissionPolicy,
  replaceAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  replaceAdmissionregistrationV1ValidatingAdmissionPolicyStatus,
  replaceAdmissionregistrationV1ValidatingWebhookConfiguration,
  watchAdmissionregistrationV1MutatingWebhookConfiguration,
  watchAdmissionregistrationV1MutatingWebhookConfigurationList,
  watchAdmissionregistrationV1ValidatingAdmissionPolicy,
  watchAdmissionregistrationV1ValidatingAdmissionPolicyBinding,
  watchAdmissionregistrationV1ValidatingAdmissionPolicyBindingList,
  watchAdmissionregistrationV1ValidatingAdmissionPolicyList,
  watchAdmissionregistrationV1ValidatingWebhookConfiguration,
  watchAdmissionregistrationV1ValidatingWebhookConfigurationList,
};
