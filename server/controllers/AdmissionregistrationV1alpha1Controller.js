/**
 * The AdmissionregistrationV1alpha1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AdmissionregistrationV1alpha1Service');
const createAdmissionregistrationV1alpha1MutatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAdmissionregistrationV1alpha1MutatingAdmissionPolicy);
};

const createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding);
};

const deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicy);
};

const deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicyBinding);
};

const deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy);
};

const deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding);
};

const getAdmissionregistrationV1alpha1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAdmissionregistrationV1alpha1APIResources);
};

const listAdmissionregistrationV1alpha1MutatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAdmissionregistrationV1alpha1MutatingAdmissionPolicy);
};

const listAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding);
};

const patchAdmissionregistrationV1alpha1MutatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1alpha1MutatingAdmissionPolicy);
};

const patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding);
};

const readAdmissionregistrationV1alpha1MutatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1alpha1MutatingAdmissionPolicy);
};

const readAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding);
};

const replaceAdmissionregistrationV1alpha1MutatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1alpha1MutatingAdmissionPolicy);
};

const replaceAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding);
};

const watchAdmissionregistrationV1alpha1MutatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1alpha1MutatingAdmissionPolicy);
};

const watchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding);
};

const watchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBindingList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBindingList);
};

const watchAdmissionregistrationV1alpha1MutatingAdmissionPolicyList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1alpha1MutatingAdmissionPolicyList);
};


module.exports = {
  createAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  createAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicy,
  deleteAdmissionregistrationV1alpha1CollectionMutatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  deleteAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  getAdmissionregistrationV1alpha1APIResources,
  listAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  listAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  patchAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  patchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  readAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  readAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  replaceAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  replaceAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  watchAdmissionregistrationV1alpha1MutatingAdmissionPolicy,
  watchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBinding,
  watchAdmissionregistrationV1alpha1MutatingAdmissionPolicyBindingList,
  watchAdmissionregistrationV1alpha1MutatingAdmissionPolicyList,
};
