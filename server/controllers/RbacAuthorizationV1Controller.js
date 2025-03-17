/**
 * The RbacAuthorizationV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/RbacAuthorizationV1Service');
const createRbacAuthorizationV1ClusterRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.createRbacAuthorizationV1ClusterRole);
};

const createRbacAuthorizationV1ClusterRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.createRbacAuthorizationV1ClusterRoleBinding);
};

const createRbacAuthorizationV1NamespacedRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.createRbacAuthorizationV1NamespacedRole);
};

const createRbacAuthorizationV1NamespacedRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.createRbacAuthorizationV1NamespacedRoleBinding);
};

const deleteRbacAuthorizationV1ClusterRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRbacAuthorizationV1ClusterRole);
};

const deleteRbacAuthorizationV1ClusterRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRbacAuthorizationV1ClusterRoleBinding);
};

const deleteRbacAuthorizationV1CollectionClusterRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRbacAuthorizationV1CollectionClusterRole);
};

const deleteRbacAuthorizationV1CollectionClusterRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRbacAuthorizationV1CollectionClusterRoleBinding);
};

const deleteRbacAuthorizationV1CollectionNamespacedRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRbacAuthorizationV1CollectionNamespacedRole);
};

const deleteRbacAuthorizationV1CollectionNamespacedRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRbacAuthorizationV1CollectionNamespacedRoleBinding);
};

const deleteRbacAuthorizationV1NamespacedRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRbacAuthorizationV1NamespacedRole);
};

const deleteRbacAuthorizationV1NamespacedRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRbacAuthorizationV1NamespacedRoleBinding);
};

const getRbacAuthorizationV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getRbacAuthorizationV1APIResources);
};

const listRbacAuthorizationV1ClusterRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.listRbacAuthorizationV1ClusterRole);
};

const listRbacAuthorizationV1ClusterRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.listRbacAuthorizationV1ClusterRoleBinding);
};

const listRbacAuthorizationV1NamespacedRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.listRbacAuthorizationV1NamespacedRole);
};

const listRbacAuthorizationV1NamespacedRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.listRbacAuthorizationV1NamespacedRoleBinding);
};

const listRbacAuthorizationV1RoleBindingForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listRbacAuthorizationV1RoleBindingForAllNamespaces);
};

const listRbacAuthorizationV1RoleForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listRbacAuthorizationV1RoleForAllNamespaces);
};

const patchRbacAuthorizationV1ClusterRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchRbacAuthorizationV1ClusterRole);
};

const patchRbacAuthorizationV1ClusterRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchRbacAuthorizationV1ClusterRoleBinding);
};

const patchRbacAuthorizationV1NamespacedRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchRbacAuthorizationV1NamespacedRole);
};

const patchRbacAuthorizationV1NamespacedRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchRbacAuthorizationV1NamespacedRoleBinding);
};

const readRbacAuthorizationV1ClusterRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.readRbacAuthorizationV1ClusterRole);
};

const readRbacAuthorizationV1ClusterRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.readRbacAuthorizationV1ClusterRoleBinding);
};

const readRbacAuthorizationV1NamespacedRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.readRbacAuthorizationV1NamespacedRole);
};

const readRbacAuthorizationV1NamespacedRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.readRbacAuthorizationV1NamespacedRoleBinding);
};

const replaceRbacAuthorizationV1ClusterRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceRbacAuthorizationV1ClusterRole);
};

const replaceRbacAuthorizationV1ClusterRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceRbacAuthorizationV1ClusterRoleBinding);
};

const replaceRbacAuthorizationV1NamespacedRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceRbacAuthorizationV1NamespacedRole);
};

const replaceRbacAuthorizationV1NamespacedRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceRbacAuthorizationV1NamespacedRoleBinding);
};

const watchRbacAuthorizationV1ClusterRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1ClusterRole);
};

const watchRbacAuthorizationV1ClusterRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1ClusterRoleBinding);
};

const watchRbacAuthorizationV1ClusterRoleBindingList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1ClusterRoleBindingList);
};

const watchRbacAuthorizationV1ClusterRoleList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1ClusterRoleList);
};

const watchRbacAuthorizationV1NamespacedRole = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1NamespacedRole);
};

const watchRbacAuthorizationV1NamespacedRoleBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1NamespacedRoleBinding);
};

const watchRbacAuthorizationV1NamespacedRoleBindingList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1NamespacedRoleBindingList);
};

const watchRbacAuthorizationV1NamespacedRoleList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1NamespacedRoleList);
};

const watchRbacAuthorizationV1RoleBindingListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1RoleBindingListForAllNamespaces);
};

const watchRbacAuthorizationV1RoleListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchRbacAuthorizationV1RoleListForAllNamespaces);
};


module.exports = {
  createRbacAuthorizationV1ClusterRole,
  createRbacAuthorizationV1ClusterRoleBinding,
  createRbacAuthorizationV1NamespacedRole,
  createRbacAuthorizationV1NamespacedRoleBinding,
  deleteRbacAuthorizationV1ClusterRole,
  deleteRbacAuthorizationV1ClusterRoleBinding,
  deleteRbacAuthorizationV1CollectionClusterRole,
  deleteRbacAuthorizationV1CollectionClusterRoleBinding,
  deleteRbacAuthorizationV1CollectionNamespacedRole,
  deleteRbacAuthorizationV1CollectionNamespacedRoleBinding,
  deleteRbacAuthorizationV1NamespacedRole,
  deleteRbacAuthorizationV1NamespacedRoleBinding,
  getRbacAuthorizationV1APIResources,
  listRbacAuthorizationV1ClusterRole,
  listRbacAuthorizationV1ClusterRoleBinding,
  listRbacAuthorizationV1NamespacedRole,
  listRbacAuthorizationV1NamespacedRoleBinding,
  listRbacAuthorizationV1RoleBindingForAllNamespaces,
  listRbacAuthorizationV1RoleForAllNamespaces,
  patchRbacAuthorizationV1ClusterRole,
  patchRbacAuthorizationV1ClusterRoleBinding,
  patchRbacAuthorizationV1NamespacedRole,
  patchRbacAuthorizationV1NamespacedRoleBinding,
  readRbacAuthorizationV1ClusterRole,
  readRbacAuthorizationV1ClusterRoleBinding,
  readRbacAuthorizationV1NamespacedRole,
  readRbacAuthorizationV1NamespacedRoleBinding,
  replaceRbacAuthorizationV1ClusterRole,
  replaceRbacAuthorizationV1ClusterRoleBinding,
  replaceRbacAuthorizationV1NamespacedRole,
  replaceRbacAuthorizationV1NamespacedRoleBinding,
  watchRbacAuthorizationV1ClusterRole,
  watchRbacAuthorizationV1ClusterRoleBinding,
  watchRbacAuthorizationV1ClusterRoleBindingList,
  watchRbacAuthorizationV1ClusterRoleList,
  watchRbacAuthorizationV1NamespacedRole,
  watchRbacAuthorizationV1NamespacedRoleBinding,
  watchRbacAuthorizationV1NamespacedRoleBindingList,
  watchRbacAuthorizationV1NamespacedRoleList,
  watchRbacAuthorizationV1RoleBindingListForAllNamespaces,
  watchRbacAuthorizationV1RoleListForAllNamespaces,
};
