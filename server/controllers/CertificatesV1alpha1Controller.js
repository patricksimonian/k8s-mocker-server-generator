/**
 * The CertificatesV1alpha1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CertificatesV1alpha1Service');
const createCertificatesV1alpha1ClusterTrustBundle = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCertificatesV1alpha1ClusterTrustBundle);
};

const deleteCertificatesV1alpha1ClusterTrustBundle = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCertificatesV1alpha1ClusterTrustBundle);
};

const deleteCertificatesV1alpha1CollectionClusterTrustBundle = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCertificatesV1alpha1CollectionClusterTrustBundle);
};

const getCertificatesV1alpha1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getCertificatesV1alpha1APIResources);
};

const listCertificatesV1alpha1ClusterTrustBundle = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCertificatesV1alpha1ClusterTrustBundle);
};

const patchCertificatesV1alpha1ClusterTrustBundle = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCertificatesV1alpha1ClusterTrustBundle);
};

const readCertificatesV1alpha1ClusterTrustBundle = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCertificatesV1alpha1ClusterTrustBundle);
};

const replaceCertificatesV1alpha1ClusterTrustBundle = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCertificatesV1alpha1ClusterTrustBundle);
};

const watchCertificatesV1alpha1ClusterTrustBundle = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCertificatesV1alpha1ClusterTrustBundle);
};

const watchCertificatesV1alpha1ClusterTrustBundleList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCertificatesV1alpha1ClusterTrustBundleList);
};


module.exports = {
  createCertificatesV1alpha1ClusterTrustBundle,
  deleteCertificatesV1alpha1ClusterTrustBundle,
  deleteCertificatesV1alpha1CollectionClusterTrustBundle,
  getCertificatesV1alpha1APIResources,
  listCertificatesV1alpha1ClusterTrustBundle,
  patchCertificatesV1alpha1ClusterTrustBundle,
  readCertificatesV1alpha1ClusterTrustBundle,
  replaceCertificatesV1alpha1ClusterTrustBundle,
  watchCertificatesV1alpha1ClusterTrustBundle,
  watchCertificatesV1alpha1ClusterTrustBundleList,
};
