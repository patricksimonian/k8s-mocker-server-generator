/**
 * The AuthenticationV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AuthenticationV1Service');
const createAuthenticationV1SelfSubjectReview = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAuthenticationV1SelfSubjectReview);
};

const createAuthenticationV1TokenReview = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAuthenticationV1TokenReview);
};

const getAuthenticationV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAuthenticationV1APIResources);
};


module.exports = {
  createAuthenticationV1SelfSubjectReview,
  createAuthenticationV1TokenReview,
  getAuthenticationV1APIResources,
};
