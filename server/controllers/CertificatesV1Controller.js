/**
 * The CertificatesV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CertificatesV1Service');
const createCertificatesV1CertificateSigningRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCertificatesV1CertificateSigningRequest);
};

const deleteCertificatesV1CertificateSigningRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCertificatesV1CertificateSigningRequest);
};

const deleteCertificatesV1CollectionCertificateSigningRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCertificatesV1CollectionCertificateSigningRequest);
};

const getCertificatesV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCertificatesV1APIResources);
};

const listCertificatesV1CertificateSigningRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCertificatesV1CertificateSigningRequest);
};

const patchCertificatesV1CertificateSigningRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCertificatesV1CertificateSigningRequest);
};

const patchCertificatesV1CertificateSigningRequestApproval = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCertificatesV1CertificateSigningRequestApproval);
};

const patchCertificatesV1CertificateSigningRequestStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCertificatesV1CertificateSigningRequestStatus);
};

const readCertificatesV1CertificateSigningRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCertificatesV1CertificateSigningRequest);
};

const readCertificatesV1CertificateSigningRequestApproval = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCertificatesV1CertificateSigningRequestApproval);
};

const readCertificatesV1CertificateSigningRequestStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCertificatesV1CertificateSigningRequestStatus);
};

const replaceCertificatesV1CertificateSigningRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCertificatesV1CertificateSigningRequest);
};

const replaceCertificatesV1CertificateSigningRequestApproval = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCertificatesV1CertificateSigningRequestApproval);
};

const replaceCertificatesV1CertificateSigningRequestStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCertificatesV1CertificateSigningRequestStatus);
};

const watchCertificatesV1CertificateSigningRequest = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCertificatesV1CertificateSigningRequest);
};

const watchCertificatesV1CertificateSigningRequestList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCertificatesV1CertificateSigningRequestList);
};


module.exports = {
  createCertificatesV1CertificateSigningRequest,
  deleteCertificatesV1CertificateSigningRequest,
  deleteCertificatesV1CollectionCertificateSigningRequest,
  getCertificatesV1APIResources,
  listCertificatesV1CertificateSigningRequest,
  patchCertificatesV1CertificateSigningRequest,
  patchCertificatesV1CertificateSigningRequestApproval,
  patchCertificatesV1CertificateSigningRequestStatus,
  readCertificatesV1CertificateSigningRequest,
  readCertificatesV1CertificateSigningRequestApproval,
  readCertificatesV1CertificateSigningRequestStatus,
  replaceCertificatesV1CertificateSigningRequest,
  replaceCertificatesV1CertificateSigningRequestApproval,
  replaceCertificatesV1CertificateSigningRequestStatus,
  watchCertificatesV1CertificateSigningRequest,
  watchCertificatesV1CertificateSigningRequestList,
};
