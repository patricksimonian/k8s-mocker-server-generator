/**
 * The NetworkingV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NetworkingV1Service');
const createNetworkingV1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.createNetworkingV1IPAddress);
};

const createNetworkingV1IngressClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.createNetworkingV1IngressClass);
};

const createNetworkingV1NamespacedIngress = async (request, response) => {
  await Controller.handleRequest(request, response, service.createNetworkingV1NamespacedIngress);
};

const createNetworkingV1NamespacedNetworkPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.createNetworkingV1NamespacedNetworkPolicy);
};

const createNetworkingV1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.createNetworkingV1ServiceCIDR);
};

const deleteNetworkingV1CollectionIPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1CollectionIPAddress);
};

const deleteNetworkingV1CollectionIngressClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1CollectionIngressClass);
};

const deleteNetworkingV1CollectionNamespacedIngress = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1CollectionNamespacedIngress);
};

const deleteNetworkingV1CollectionNamespacedNetworkPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1CollectionNamespacedNetworkPolicy);
};

const deleteNetworkingV1CollectionServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1CollectionServiceCIDR);
};

const deleteNetworkingV1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1IPAddress);
};

const deleteNetworkingV1IngressClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1IngressClass);
};

const deleteNetworkingV1NamespacedIngress = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1NamespacedIngress);
};

const deleteNetworkingV1NamespacedNetworkPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1NamespacedNetworkPolicy);
};

const deleteNetworkingV1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1ServiceCIDR);
};

const getNetworkingV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getNetworkingV1APIResources);
};

const listNetworkingV1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNetworkingV1IPAddress);
};

const listNetworkingV1IngressClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNetworkingV1IngressClass);
};

const listNetworkingV1IngressForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNetworkingV1IngressForAllNamespaces);
};

const listNetworkingV1NamespacedIngress = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNetworkingV1NamespacedIngress);
};

const listNetworkingV1NamespacedNetworkPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNetworkingV1NamespacedNetworkPolicy);
};

const listNetworkingV1NetworkPolicyForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNetworkingV1NetworkPolicyForAllNamespaces);
};

const listNetworkingV1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNetworkingV1ServiceCIDR);
};

const patchNetworkingV1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1IPAddress);
};

const patchNetworkingV1IngressClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1IngressClass);
};

const patchNetworkingV1NamespacedIngress = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1NamespacedIngress);
};

const patchNetworkingV1NamespacedIngressStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1NamespacedIngressStatus);
};

const patchNetworkingV1NamespacedNetworkPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1NamespacedNetworkPolicy);
};

const patchNetworkingV1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1ServiceCIDR);
};

const patchNetworkingV1ServiceCIDRStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1ServiceCIDRStatus);
};

const readNetworkingV1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1IPAddress);
};

const readNetworkingV1IngressClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1IngressClass);
};

const readNetworkingV1NamespacedIngress = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1NamespacedIngress);
};

const readNetworkingV1NamespacedIngressStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1NamespacedIngressStatus);
};

const readNetworkingV1NamespacedNetworkPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1NamespacedNetworkPolicy);
};

const readNetworkingV1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1ServiceCIDR);
};

const readNetworkingV1ServiceCIDRStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1ServiceCIDRStatus);
};

const replaceNetworkingV1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1IPAddress);
};

const replaceNetworkingV1IngressClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1IngressClass);
};

const replaceNetworkingV1NamespacedIngress = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1NamespacedIngress);
};

const replaceNetworkingV1NamespacedIngressStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1NamespacedIngressStatus);
};

const replaceNetworkingV1NamespacedNetworkPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1NamespacedNetworkPolicy);
};

const replaceNetworkingV1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1ServiceCIDR);
};

const replaceNetworkingV1ServiceCIDRStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1ServiceCIDRStatus);
};

const watchNetworkingV1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1IPAddress);
};

const watchNetworkingV1IPAddressList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1IPAddressList);
};

const watchNetworkingV1IngressClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1IngressClass);
};

const watchNetworkingV1IngressClassList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1IngressClassList);
};

const watchNetworkingV1IngressListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1IngressListForAllNamespaces);
};

const watchNetworkingV1NamespacedIngress = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1NamespacedIngress);
};

const watchNetworkingV1NamespacedIngressList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1NamespacedIngressList);
};

const watchNetworkingV1NamespacedNetworkPolicy = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1NamespacedNetworkPolicy);
};

const watchNetworkingV1NamespacedNetworkPolicyList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1NamespacedNetworkPolicyList);
};

const watchNetworkingV1NetworkPolicyListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1NetworkPolicyListForAllNamespaces);
};

const watchNetworkingV1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1ServiceCIDR);
};

const watchNetworkingV1ServiceCIDRList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1ServiceCIDRList);
};


module.exports = {
  createNetworkingV1IPAddress,
  createNetworkingV1IngressClass,
  createNetworkingV1NamespacedIngress,
  createNetworkingV1NamespacedNetworkPolicy,
  createNetworkingV1ServiceCIDR,
  deleteNetworkingV1CollectionIPAddress,
  deleteNetworkingV1CollectionIngressClass,
  deleteNetworkingV1CollectionNamespacedIngress,
  deleteNetworkingV1CollectionNamespacedNetworkPolicy,
  deleteNetworkingV1CollectionServiceCIDR,
  deleteNetworkingV1IPAddress,
  deleteNetworkingV1IngressClass,
  deleteNetworkingV1NamespacedIngress,
  deleteNetworkingV1NamespacedNetworkPolicy,
  deleteNetworkingV1ServiceCIDR,
  getNetworkingV1APIResources,
  listNetworkingV1IPAddress,
  listNetworkingV1IngressClass,
  listNetworkingV1IngressForAllNamespaces,
  listNetworkingV1NamespacedIngress,
  listNetworkingV1NamespacedNetworkPolicy,
  listNetworkingV1NetworkPolicyForAllNamespaces,
  listNetworkingV1ServiceCIDR,
  patchNetworkingV1IPAddress,
  patchNetworkingV1IngressClass,
  patchNetworkingV1NamespacedIngress,
  patchNetworkingV1NamespacedIngressStatus,
  patchNetworkingV1NamespacedNetworkPolicy,
  patchNetworkingV1ServiceCIDR,
  patchNetworkingV1ServiceCIDRStatus,
  readNetworkingV1IPAddress,
  readNetworkingV1IngressClass,
  readNetworkingV1NamespacedIngress,
  readNetworkingV1NamespacedIngressStatus,
  readNetworkingV1NamespacedNetworkPolicy,
  readNetworkingV1ServiceCIDR,
  readNetworkingV1ServiceCIDRStatus,
  replaceNetworkingV1IPAddress,
  replaceNetworkingV1IngressClass,
  replaceNetworkingV1NamespacedIngress,
  replaceNetworkingV1NamespacedIngressStatus,
  replaceNetworkingV1NamespacedNetworkPolicy,
  replaceNetworkingV1ServiceCIDR,
  replaceNetworkingV1ServiceCIDRStatus,
  watchNetworkingV1IPAddress,
  watchNetworkingV1IPAddressList,
  watchNetworkingV1IngressClass,
  watchNetworkingV1IngressClassList,
  watchNetworkingV1IngressListForAllNamespaces,
  watchNetworkingV1NamespacedIngress,
  watchNetworkingV1NamespacedIngressList,
  watchNetworkingV1NamespacedNetworkPolicy,
  watchNetworkingV1NamespacedNetworkPolicyList,
  watchNetworkingV1NetworkPolicyListForAllNamespaces,
  watchNetworkingV1ServiceCIDR,
  watchNetworkingV1ServiceCIDRList,
};
