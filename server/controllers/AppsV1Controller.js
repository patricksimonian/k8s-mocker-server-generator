/**
 * The AppsV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AppsV1Service');
const createAppsV1NamespacedControllerRevision = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAppsV1NamespacedControllerRevision);
};

const createAppsV1NamespacedDaemonSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAppsV1NamespacedDaemonSet);
};

const createAppsV1NamespacedDeployment = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAppsV1NamespacedDeployment);
};

const createAppsV1NamespacedReplicaSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAppsV1NamespacedReplicaSet);
};

const createAppsV1NamespacedStatefulSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.createAppsV1NamespacedStatefulSet);
};

const deleteAppsV1CollectionNamespacedControllerRevision = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1CollectionNamespacedControllerRevision);
};

const deleteAppsV1CollectionNamespacedDaemonSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1CollectionNamespacedDaemonSet);
};

const deleteAppsV1CollectionNamespacedDeployment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1CollectionNamespacedDeployment);
};

const deleteAppsV1CollectionNamespacedReplicaSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1CollectionNamespacedReplicaSet);
};

const deleteAppsV1CollectionNamespacedStatefulSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1CollectionNamespacedStatefulSet);
};

const deleteAppsV1NamespacedControllerRevision = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1NamespacedControllerRevision);
};

const deleteAppsV1NamespacedDaemonSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1NamespacedDaemonSet);
};

const deleteAppsV1NamespacedDeployment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1NamespacedDeployment);
};

const deleteAppsV1NamespacedReplicaSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1NamespacedReplicaSet);
};

const deleteAppsV1NamespacedStatefulSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAppsV1NamespacedStatefulSet);
};

const getAppsV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAppsV1APIResources);
};

const listAppsV1ControllerRevisionForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1ControllerRevisionForAllNamespaces);
};

const listAppsV1DaemonSetForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1DaemonSetForAllNamespaces);
};

const listAppsV1DeploymentForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1DeploymentForAllNamespaces);
};

const listAppsV1NamespacedControllerRevision = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1NamespacedControllerRevision);
};

const listAppsV1NamespacedDaemonSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1NamespacedDaemonSet);
};

const listAppsV1NamespacedDeployment = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1NamespacedDeployment);
};

const listAppsV1NamespacedReplicaSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1NamespacedReplicaSet);
};

const listAppsV1NamespacedStatefulSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1NamespacedStatefulSet);
};

const listAppsV1ReplicaSetForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1ReplicaSetForAllNamespaces);
};

const listAppsV1StatefulSetForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listAppsV1StatefulSetForAllNamespaces);
};

const patchAppsV1NamespacedControllerRevision = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedControllerRevision);
};

const patchAppsV1NamespacedDaemonSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedDaemonSet);
};

const patchAppsV1NamespacedDaemonSetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedDaemonSetStatus);
};

const patchAppsV1NamespacedDeployment = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedDeployment);
};

const patchAppsV1NamespacedDeploymentScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedDeploymentScale);
};

const patchAppsV1NamespacedDeploymentStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedDeploymentStatus);
};

const patchAppsV1NamespacedReplicaSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedReplicaSet);
};

const patchAppsV1NamespacedReplicaSetScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedReplicaSetScale);
};

const patchAppsV1NamespacedReplicaSetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedReplicaSetStatus);
};

const patchAppsV1NamespacedStatefulSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedStatefulSet);
};

const patchAppsV1NamespacedStatefulSetScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedStatefulSetScale);
};

const patchAppsV1NamespacedStatefulSetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchAppsV1NamespacedStatefulSetStatus);
};

const readAppsV1NamespacedControllerRevision = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedControllerRevision);
};

const readAppsV1NamespacedDaemonSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedDaemonSet);
};

const readAppsV1NamespacedDaemonSetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedDaemonSetStatus);
};

const readAppsV1NamespacedDeployment = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedDeployment);
};

const readAppsV1NamespacedDeploymentScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedDeploymentScale);
};

const readAppsV1NamespacedDeploymentStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedDeploymentStatus);
};

const readAppsV1NamespacedReplicaSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedReplicaSet);
};

const readAppsV1NamespacedReplicaSetScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedReplicaSetScale);
};

const readAppsV1NamespacedReplicaSetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedReplicaSetStatus);
};

const readAppsV1NamespacedStatefulSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedStatefulSet);
};

const readAppsV1NamespacedStatefulSetScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedStatefulSetScale);
};

const readAppsV1NamespacedStatefulSetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readAppsV1NamespacedStatefulSetStatus);
};

const replaceAppsV1NamespacedControllerRevision = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedControllerRevision);
};

const replaceAppsV1NamespacedDaemonSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedDaemonSet);
};

const replaceAppsV1NamespacedDaemonSetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedDaemonSetStatus);
};

const replaceAppsV1NamespacedDeployment = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedDeployment);
};

const replaceAppsV1NamespacedDeploymentScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedDeploymentScale);
};

const replaceAppsV1NamespacedDeploymentStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedDeploymentStatus);
};

const replaceAppsV1NamespacedReplicaSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedReplicaSet);
};

const replaceAppsV1NamespacedReplicaSetScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedReplicaSetScale);
};

const replaceAppsV1NamespacedReplicaSetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedReplicaSetStatus);
};

const replaceAppsV1NamespacedStatefulSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedStatefulSet);
};

const replaceAppsV1NamespacedStatefulSetScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedStatefulSetScale);
};

const replaceAppsV1NamespacedStatefulSetStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceAppsV1NamespacedStatefulSetStatus);
};

const watchAppsV1ControllerRevisionListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1ControllerRevisionListForAllNamespaces);
};

const watchAppsV1DaemonSetListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1DaemonSetListForAllNamespaces);
};

const watchAppsV1DeploymentListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1DeploymentListForAllNamespaces);
};

const watchAppsV1NamespacedControllerRevision = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedControllerRevision);
};

const watchAppsV1NamespacedControllerRevisionList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedControllerRevisionList);
};

const watchAppsV1NamespacedDaemonSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedDaemonSet);
};

const watchAppsV1NamespacedDaemonSetList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedDaemonSetList);
};

const watchAppsV1NamespacedDeployment = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedDeployment);
};

const watchAppsV1NamespacedDeploymentList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedDeploymentList);
};

const watchAppsV1NamespacedReplicaSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedReplicaSet);
};

const watchAppsV1NamespacedReplicaSetList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedReplicaSetList);
};

const watchAppsV1NamespacedStatefulSet = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedStatefulSet);
};

const watchAppsV1NamespacedStatefulSetList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1NamespacedStatefulSetList);
};

const watchAppsV1ReplicaSetListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1ReplicaSetListForAllNamespaces);
};

const watchAppsV1StatefulSetListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchAppsV1StatefulSetListForAllNamespaces);
};


module.exports = {
  createAppsV1NamespacedControllerRevision,
  createAppsV1NamespacedDaemonSet,
  createAppsV1NamespacedDeployment,
  createAppsV1NamespacedReplicaSet,
  createAppsV1NamespacedStatefulSet,
  deleteAppsV1CollectionNamespacedControllerRevision,
  deleteAppsV1CollectionNamespacedDaemonSet,
  deleteAppsV1CollectionNamespacedDeployment,
  deleteAppsV1CollectionNamespacedReplicaSet,
  deleteAppsV1CollectionNamespacedStatefulSet,
  deleteAppsV1NamespacedControllerRevision,
  deleteAppsV1NamespacedDaemonSet,
  deleteAppsV1NamespacedDeployment,
  deleteAppsV1NamespacedReplicaSet,
  deleteAppsV1NamespacedStatefulSet,
  getAppsV1APIResources,
  listAppsV1ControllerRevisionForAllNamespaces,
  listAppsV1DaemonSetForAllNamespaces,
  listAppsV1DeploymentForAllNamespaces,
  listAppsV1NamespacedControllerRevision,
  listAppsV1NamespacedDaemonSet,
  listAppsV1NamespacedDeployment,
  listAppsV1NamespacedReplicaSet,
  listAppsV1NamespacedStatefulSet,
  listAppsV1ReplicaSetForAllNamespaces,
  listAppsV1StatefulSetForAllNamespaces,
  patchAppsV1NamespacedControllerRevision,
  patchAppsV1NamespacedDaemonSet,
  patchAppsV1NamespacedDaemonSetStatus,
  patchAppsV1NamespacedDeployment,
  patchAppsV1NamespacedDeploymentScale,
  patchAppsV1NamespacedDeploymentStatus,
  patchAppsV1NamespacedReplicaSet,
  patchAppsV1NamespacedReplicaSetScale,
  patchAppsV1NamespacedReplicaSetStatus,
  patchAppsV1NamespacedStatefulSet,
  patchAppsV1NamespacedStatefulSetScale,
  patchAppsV1NamespacedStatefulSetStatus,
  readAppsV1NamespacedControllerRevision,
  readAppsV1NamespacedDaemonSet,
  readAppsV1NamespacedDaemonSetStatus,
  readAppsV1NamespacedDeployment,
  readAppsV1NamespacedDeploymentScale,
  readAppsV1NamespacedDeploymentStatus,
  readAppsV1NamespacedReplicaSet,
  readAppsV1NamespacedReplicaSetScale,
  readAppsV1NamespacedReplicaSetStatus,
  readAppsV1NamespacedStatefulSet,
  readAppsV1NamespacedStatefulSetScale,
  readAppsV1NamespacedStatefulSetStatus,
  replaceAppsV1NamespacedControllerRevision,
  replaceAppsV1NamespacedDaemonSet,
  replaceAppsV1NamespacedDaemonSetStatus,
  replaceAppsV1NamespacedDeployment,
  replaceAppsV1NamespacedDeploymentScale,
  replaceAppsV1NamespacedDeploymentStatus,
  replaceAppsV1NamespacedReplicaSet,
  replaceAppsV1NamespacedReplicaSetScale,
  replaceAppsV1NamespacedReplicaSetStatus,
  replaceAppsV1NamespacedStatefulSet,
  replaceAppsV1NamespacedStatefulSetScale,
  replaceAppsV1NamespacedStatefulSetStatus,
  watchAppsV1ControllerRevisionListForAllNamespaces,
  watchAppsV1DaemonSetListForAllNamespaces,
  watchAppsV1DeploymentListForAllNamespaces,
  watchAppsV1NamespacedControllerRevision,
  watchAppsV1NamespacedControllerRevisionList,
  watchAppsV1NamespacedDaemonSet,
  watchAppsV1NamespacedDaemonSetList,
  watchAppsV1NamespacedDeployment,
  watchAppsV1NamespacedDeploymentList,
  watchAppsV1NamespacedReplicaSet,
  watchAppsV1NamespacedReplicaSetList,
  watchAppsV1NamespacedStatefulSet,
  watchAppsV1NamespacedStatefulSetList,
  watchAppsV1ReplicaSetListForAllNamespaces,
  watchAppsV1StatefulSetListForAllNamespaces,
};
