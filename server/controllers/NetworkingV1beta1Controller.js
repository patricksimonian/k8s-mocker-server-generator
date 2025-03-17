/**
 * The NetworkingV1beta1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NetworkingV1beta1Service');
const createNetworkingV1beta1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.createNetworkingV1beta1IPAddress);
};

const createNetworkingV1beta1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.createNetworkingV1beta1ServiceCIDR);
};

const deleteNetworkingV1beta1CollectionIPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1beta1CollectionIPAddress);
};

const deleteNetworkingV1beta1CollectionServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1beta1CollectionServiceCIDR);
};

const deleteNetworkingV1beta1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1beta1IPAddress);
};

const deleteNetworkingV1beta1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteNetworkingV1beta1ServiceCIDR);
};

const getNetworkingV1beta1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getNetworkingV1beta1APIResources);
};

const listNetworkingV1beta1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNetworkingV1beta1IPAddress);
};

const listNetworkingV1beta1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.listNetworkingV1beta1ServiceCIDR);
};

const patchNetworkingV1beta1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1beta1IPAddress);
};

const patchNetworkingV1beta1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1beta1ServiceCIDR);
};

const patchNetworkingV1beta1ServiceCIDRStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchNetworkingV1beta1ServiceCIDRStatus);
};

const readNetworkingV1beta1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1beta1IPAddress);
};

const readNetworkingV1beta1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1beta1ServiceCIDR);
};

const readNetworkingV1beta1ServiceCIDRStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readNetworkingV1beta1ServiceCIDRStatus);
};

const replaceNetworkingV1beta1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1beta1IPAddress);
};

const replaceNetworkingV1beta1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1beta1ServiceCIDR);
};

const replaceNetworkingV1beta1ServiceCIDRStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceNetworkingV1beta1ServiceCIDRStatus);
};

const watchNetworkingV1beta1IPAddress = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1beta1IPAddress);
};

const watchNetworkingV1beta1IPAddressList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1beta1IPAddressList);
};

const watchNetworkingV1beta1ServiceCIDR = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1beta1ServiceCIDR);
};

const watchNetworkingV1beta1ServiceCIDRList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchNetworkingV1beta1ServiceCIDRList);
};


module.exports = {
  createNetworkingV1beta1IPAddress,
  createNetworkingV1beta1ServiceCIDR,
  deleteNetworkingV1beta1CollectionIPAddress,
  deleteNetworkingV1beta1CollectionServiceCIDR,
  deleteNetworkingV1beta1IPAddress,
  deleteNetworkingV1beta1ServiceCIDR,
  getNetworkingV1beta1APIResources,
  listNetworkingV1beta1IPAddress,
  listNetworkingV1beta1ServiceCIDR,
  patchNetworkingV1beta1IPAddress,
  patchNetworkingV1beta1ServiceCIDR,
  patchNetworkingV1beta1ServiceCIDRStatus,
  readNetworkingV1beta1IPAddress,
  readNetworkingV1beta1ServiceCIDR,
  readNetworkingV1beta1ServiceCIDRStatus,
  replaceNetworkingV1beta1IPAddress,
  replaceNetworkingV1beta1ServiceCIDR,
  replaceNetworkingV1beta1ServiceCIDRStatus,
  watchNetworkingV1beta1IPAddress,
  watchNetworkingV1beta1IPAddressList,
  watchNetworkingV1beta1ServiceCIDR,
  watchNetworkingV1beta1ServiceCIDRList,
};
