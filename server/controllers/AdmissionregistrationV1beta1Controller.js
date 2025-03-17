/**
 * The AdmissionregistrationV1beta1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AdmissionregistrationV1beta1Service');
const createAdmissionregistrationV1beta1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAdmissionregistrationV1beta1ValidatingAdmissionPolicy);
};

const createAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding);
};

const deleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicy);
};

const deleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyBinding);
};

const deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicy);
};

const deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding);
};

const getAdmissionregistrationV1beta1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAdmissionregistrationV1beta1APIResources);
};

const listAdmissionregistrationV1beta1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAdmissionregistrationV1beta1ValidatingAdmissionPolicy);
};

const listAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding);
};

const patchAdmissionregistrationV1beta1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1beta1ValidatingAdmissionPolicy);
};

const patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding);
};

const patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus);
};

const readAdmissionregistrationV1beta1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1beta1ValidatingAdmissionPolicy);
};

const readAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding);
};

const readAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus);
};

const replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicy);
};

const replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding);
};

const replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus);
};

const watchAdmissionregistrationV1beta1ValidatingAdmissionPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1beta1ValidatingAdmissionPolicy);
};

const watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding);
};

const watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList);
};

const watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyList);
};


module.exports = {
  createAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  createAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicy,
  deleteAdmissionregistrationV1beta1CollectionValidatingAdmissionPolicyBinding,
  deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  deleteAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding,
  getAdmissionregistrationV1beta1APIResources,
  listAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  listAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding,
  patchAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding,
  patchAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus,
  readAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  readAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding,
  readAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus,
  replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding,
  replaceAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus,
  watchAdmissionregistrationV1beta1ValidatingAdmissionPolicy,
  watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding,
  watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingList,
  watchAdmissionregistrationV1beta1ValidatingAdmissionPolicyList,
};
