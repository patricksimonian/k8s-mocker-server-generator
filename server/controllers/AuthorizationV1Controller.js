/**
 * The AuthorizationV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AuthorizationV1Service');
const createAuthorizationV1NamespacedLocalSubjectAccessReview = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAuthorizationV1NamespacedLocalSubjectAccessReview);
};

const createAuthorizationV1SelfSubjectAccessReview = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAuthorizationV1SelfSubjectAccessReview);
};

const createAuthorizationV1SelfSubjectRulesReview = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAuthorizationV1SelfSubjectRulesReview);
};

const createAuthorizationV1SubjectAccessReview = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAuthorizationV1SubjectAccessReview);
};

const getAuthorizationV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAuthorizationV1APIResources);
};


module.exports = {
  createAuthorizationV1NamespacedLocalSubjectAccessReview,
  createAuthorizationV1SelfSubjectAccessReview,
  createAuthorizationV1SelfSubjectRulesReview,
  createAuthorizationV1SubjectAccessReview,
  getAuthorizationV1APIResources,
};
