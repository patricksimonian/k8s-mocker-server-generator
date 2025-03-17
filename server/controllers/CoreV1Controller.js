/**
 * The CoreV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CoreV1Service');
const connectCoreV1DeleteNamespacedPodProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1DeleteNamespacedPodProxy);
};

const connectCoreV1DeleteNamespacedPodProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1DeleteNamespacedPodProxyWithPath);
};

const connectCoreV1DeleteNamespacedServiceProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1DeleteNamespacedServiceProxy);
};

const connectCoreV1DeleteNamespacedServiceProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1DeleteNamespacedServiceProxyWithPath);
};

const connectCoreV1DeleteNodeProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1DeleteNodeProxy);
};

const connectCoreV1DeleteNodeProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1DeleteNodeProxyWithPath);
};

const connectCoreV1GetNamespacedPodAttach = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1GetNamespacedPodAttach);
};

const connectCoreV1GetNamespacedPodExec = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1GetNamespacedPodExec);
};

const connectCoreV1GetNamespacedPodPortforward = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1GetNamespacedPodPortforward);
};

const connectCoreV1GetNamespacedPodProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1GetNamespacedPodProxy);
};

const connectCoreV1GetNamespacedPodProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1GetNamespacedPodProxyWithPath);
};

const connectCoreV1GetNamespacedServiceProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1GetNamespacedServiceProxy);
};

const connectCoreV1GetNamespacedServiceProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1GetNamespacedServiceProxyWithPath);
};

const connectCoreV1GetNodeProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1GetNodeProxy);
};

const connectCoreV1GetNodeProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1GetNodeProxyWithPath);
};

const connectCoreV1HeadNamespacedPodProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1HeadNamespacedPodProxy);
};

const connectCoreV1HeadNamespacedPodProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1HeadNamespacedPodProxyWithPath);
};

const connectCoreV1HeadNamespacedServiceProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1HeadNamespacedServiceProxy);
};

const connectCoreV1HeadNamespacedServiceProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1HeadNamespacedServiceProxyWithPath);
};

const connectCoreV1HeadNodeProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1HeadNodeProxy);
};

const connectCoreV1HeadNodeProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1HeadNodeProxyWithPath);
};

const connectCoreV1OptionsNamespacedPodProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1OptionsNamespacedPodProxy);
};

const connectCoreV1OptionsNamespacedPodProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1OptionsNamespacedPodProxyWithPath);
};

const connectCoreV1OptionsNamespacedServiceProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1OptionsNamespacedServiceProxy);
};

const connectCoreV1OptionsNamespacedServiceProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1OptionsNamespacedServiceProxyWithPath);
};

const connectCoreV1OptionsNodeProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1OptionsNodeProxy);
};

const connectCoreV1OptionsNodeProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1OptionsNodeProxyWithPath);
};

const connectCoreV1PatchNamespacedPodProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PatchNamespacedPodProxy);
};

const connectCoreV1PatchNamespacedPodProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PatchNamespacedPodProxyWithPath);
};

const connectCoreV1PatchNamespacedServiceProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PatchNamespacedServiceProxy);
};

const connectCoreV1PatchNamespacedServiceProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PatchNamespacedServiceProxyWithPath);
};

const connectCoreV1PatchNodeProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PatchNodeProxy);
};

const connectCoreV1PatchNodeProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PatchNodeProxyWithPath);
};

const connectCoreV1PostNamespacedPodAttach = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PostNamespacedPodAttach);
};

const connectCoreV1PostNamespacedPodExec = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PostNamespacedPodExec);
};

const connectCoreV1PostNamespacedPodPortforward = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PostNamespacedPodPortforward);
};

const connectCoreV1PostNamespacedPodProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PostNamespacedPodProxy);
};

const connectCoreV1PostNamespacedPodProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PostNamespacedPodProxyWithPath);
};

const connectCoreV1PostNamespacedServiceProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PostNamespacedServiceProxy);
};

const connectCoreV1PostNamespacedServiceProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PostNamespacedServiceProxyWithPath);
};

const connectCoreV1PostNodeProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PostNodeProxy);
};

const connectCoreV1PostNodeProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PostNodeProxyWithPath);
};

const connectCoreV1PutNamespacedPodProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PutNamespacedPodProxy);
};

const connectCoreV1PutNamespacedPodProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PutNamespacedPodProxyWithPath);
};

const connectCoreV1PutNamespacedServiceProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PutNamespacedServiceProxy);
};

const connectCoreV1PutNamespacedServiceProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PutNamespacedServiceProxyWithPath);
};

const connectCoreV1PutNodeProxy = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PutNodeProxy);
};

const connectCoreV1PutNodeProxyWithPath = async (request, response) => {
  await Controller.handleRequest(request, response, service.connectCoreV1PutNodeProxyWithPath);
};

const createCoreV1Namespace = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1Namespace);
};

const createCoreV1NamespacedBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedBinding);
};

const createCoreV1NamespacedConfigMap = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedConfigMap);
};

const createCoreV1NamespacedEndpoints = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedEndpoints);
};

const createCoreV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedEvent);
};

const createCoreV1NamespacedLimitRange = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedLimitRange);
};

const createCoreV1NamespacedPersistentVolumeClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedPersistentVolumeClaim);
};

const createCoreV1NamespacedPod = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedPod);
};

const createCoreV1NamespacedPodBinding = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedPodBinding);
};

const createCoreV1NamespacedPodEviction = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedPodEviction);
};

const createCoreV1NamespacedPodTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedPodTemplate);
};

const createCoreV1NamespacedReplicationController = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedReplicationController);
};

const createCoreV1NamespacedResourceQuota = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedResourceQuota);
};

const createCoreV1NamespacedSecret = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedSecret);
};

const createCoreV1NamespacedService = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedService);
};

const createCoreV1NamespacedServiceAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedServiceAccount);
};

const createCoreV1NamespacedServiceAccountToken = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1NamespacedServiceAccountToken);
};

const createCoreV1Node = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1Node);
};

const createCoreV1PersistentVolume = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCoreV1PersistentVolume);
};

const deleteCoreV1CollectionNamespacedConfigMap = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedConfigMap);
};

const deleteCoreV1CollectionNamespacedEndpoints = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedEndpoints);
};

const deleteCoreV1CollectionNamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedEvent);
};

const deleteCoreV1CollectionNamespacedLimitRange = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedLimitRange);
};

const deleteCoreV1CollectionNamespacedPersistentVolumeClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedPersistentVolumeClaim);
};

const deleteCoreV1CollectionNamespacedPod = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedPod);
};

const deleteCoreV1CollectionNamespacedPodTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedPodTemplate);
};

const deleteCoreV1CollectionNamespacedReplicationController = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedReplicationController);
};

const deleteCoreV1CollectionNamespacedResourceQuota = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedResourceQuota);
};

const deleteCoreV1CollectionNamespacedSecret = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedSecret);
};

const deleteCoreV1CollectionNamespacedService = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedService);
};

const deleteCoreV1CollectionNamespacedServiceAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNamespacedServiceAccount);
};

const deleteCoreV1CollectionNode = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionNode);
};

const deleteCoreV1CollectionPersistentVolume = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1CollectionPersistentVolume);
};

const deleteCoreV1Namespace = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1Namespace);
};

const deleteCoreV1NamespacedConfigMap = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedConfigMap);
};

const deleteCoreV1NamespacedEndpoints = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedEndpoints);
};

const deleteCoreV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedEvent);
};

const deleteCoreV1NamespacedLimitRange = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedLimitRange);
};

const deleteCoreV1NamespacedPersistentVolumeClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedPersistentVolumeClaim);
};

const deleteCoreV1NamespacedPod = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedPod);
};

const deleteCoreV1NamespacedPodTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedPodTemplate);
};

const deleteCoreV1NamespacedReplicationController = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedReplicationController);
};

const deleteCoreV1NamespacedResourceQuota = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedResourceQuota);
};

const deleteCoreV1NamespacedSecret = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedSecret);
};

const deleteCoreV1NamespacedService = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedService);
};

const deleteCoreV1NamespacedServiceAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1NamespacedServiceAccount);
};

const deleteCoreV1Node = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1Node);
};

const deleteCoreV1PersistentVolume = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCoreV1PersistentVolume);
};

const getCoreV1APIResources = async (request, response) => {
  console.log('getCoreV1APIResources', request.body, request.params);
  await Controller.handleRequest(request, response, service.getCoreV1APIResources);
};

const listCoreV1ComponentStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1ComponentStatus);
};

const listCoreV1ConfigMapForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1ConfigMapForAllNamespaces);
};

const listCoreV1EndpointsForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1EndpointsForAllNamespaces);
};

const listCoreV1EventForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1EventForAllNamespaces);
};

const listCoreV1LimitRangeForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1LimitRangeForAllNamespaces);
};

const listCoreV1Namespace = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1Namespace);
};

const listCoreV1NamespacedConfigMap = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedConfigMap);
};

const listCoreV1NamespacedEndpoints = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedEndpoints);
};

const listCoreV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedEvent);
};

const listCoreV1NamespacedLimitRange = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedLimitRange);
};

const listCoreV1NamespacedPersistentVolumeClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedPersistentVolumeClaim);
};

const listCoreV1NamespacedPod = async (request, response) => {
  console.log('getCoreV1APIResources', request.body, request.params);
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedPod);
};

const listCoreV1NamespacedPodTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedPodTemplate);
};

const listCoreV1NamespacedReplicationController = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedReplicationController);
};

const listCoreV1NamespacedResourceQuota = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedResourceQuota);
};

const listCoreV1NamespacedSecret = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedSecret);
};

const listCoreV1NamespacedService = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedService);
};

const listCoreV1NamespacedServiceAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1NamespacedServiceAccount);
};

const listCoreV1Node = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1Node);
};

const listCoreV1PersistentVolume = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1PersistentVolume);
};

const listCoreV1PersistentVolumeClaimForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1PersistentVolumeClaimForAllNamespaces);
};

const listCoreV1PodForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1PodForAllNamespaces);
};

const listCoreV1PodTemplateForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1PodTemplateForAllNamespaces);
};

const listCoreV1ReplicationControllerForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1ReplicationControllerForAllNamespaces);
};

const listCoreV1ResourceQuotaForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1ResourceQuotaForAllNamespaces);
};

const listCoreV1SecretForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1SecretForAllNamespaces);
};

const listCoreV1ServiceAccountForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1ServiceAccountForAllNamespaces);
};

const listCoreV1ServiceForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCoreV1ServiceForAllNamespaces);
};

const patchCoreV1Namespace = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1Namespace);
};

const patchCoreV1NamespaceStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespaceStatus);
};

const patchCoreV1NamespacedConfigMap = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedConfigMap);
};

const patchCoreV1NamespacedEndpoints = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedEndpoints);
};

const patchCoreV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedEvent);
};

const patchCoreV1NamespacedLimitRange = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedLimitRange);
};

const patchCoreV1NamespacedPersistentVolumeClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedPersistentVolumeClaim);
};

const patchCoreV1NamespacedPersistentVolumeClaimStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedPersistentVolumeClaimStatus);
};

const patchCoreV1NamespacedPod = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedPod);
};

const patchCoreV1NamespacedPodEphemeralcontainers = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedPodEphemeralcontainers);
};

const patchCoreV1NamespacedPodResize = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedPodResize);
};

const patchCoreV1NamespacedPodStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedPodStatus);
};

const patchCoreV1NamespacedPodTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedPodTemplate);
};

const patchCoreV1NamespacedReplicationController = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedReplicationController);
};

const patchCoreV1NamespacedReplicationControllerScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedReplicationControllerScale);
};

const patchCoreV1NamespacedReplicationControllerStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedReplicationControllerStatus);
};

const patchCoreV1NamespacedResourceQuota = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedResourceQuota);
};

const patchCoreV1NamespacedResourceQuotaStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedResourceQuotaStatus);
};

const patchCoreV1NamespacedSecret = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedSecret);
};

const patchCoreV1NamespacedService = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedService);
};

const patchCoreV1NamespacedServiceAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedServiceAccount);
};

const patchCoreV1NamespacedServiceStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NamespacedServiceStatus);
};

const patchCoreV1Node = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1Node);
};

const patchCoreV1NodeStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1NodeStatus);
};

const patchCoreV1PersistentVolume = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1PersistentVolume);
};

const patchCoreV1PersistentVolumeStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCoreV1PersistentVolumeStatus);
};

const readCoreV1ComponentStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1ComponentStatus);
};

const readCoreV1Namespace = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1Namespace);
};

const readCoreV1NamespaceStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespaceStatus);
};

const readCoreV1NamespacedConfigMap = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedConfigMap);
};

const readCoreV1NamespacedEndpoints = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedEndpoints);
};

const readCoreV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedEvent);
};

const readCoreV1NamespacedLimitRange = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedLimitRange);
};

const readCoreV1NamespacedPersistentVolumeClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedPersistentVolumeClaim);
};

const readCoreV1NamespacedPersistentVolumeClaimStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedPersistentVolumeClaimStatus);
};

const readCoreV1NamespacedPod = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedPod);
};

const readCoreV1NamespacedPodEphemeralcontainers = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedPodEphemeralcontainers);
};

const readCoreV1NamespacedPodLog = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedPodLog);
};

const readCoreV1NamespacedPodResize = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedPodResize);
};

const readCoreV1NamespacedPodStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedPodStatus);
};

const readCoreV1NamespacedPodTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedPodTemplate);
};

const readCoreV1NamespacedReplicationController = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedReplicationController);
};

const readCoreV1NamespacedReplicationControllerScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedReplicationControllerScale);
};

const readCoreV1NamespacedReplicationControllerStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedReplicationControllerStatus);
};

const readCoreV1NamespacedResourceQuota = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedResourceQuota);
};

const readCoreV1NamespacedResourceQuotaStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedResourceQuotaStatus);
};

const readCoreV1NamespacedSecret = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedSecret);
};

const readCoreV1NamespacedService = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedService);
};

const readCoreV1NamespacedServiceAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedServiceAccount);
};

const readCoreV1NamespacedServiceStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NamespacedServiceStatus);
};

const readCoreV1Node = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1Node);
};

const readCoreV1NodeStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1NodeStatus);
};

const readCoreV1PersistentVolume = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1PersistentVolume);
};

const readCoreV1PersistentVolumeStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readCoreV1PersistentVolumeStatus);
};

const replaceCoreV1Namespace = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1Namespace);
};

const replaceCoreV1NamespaceFinalize = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespaceFinalize);
};

const replaceCoreV1NamespaceStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespaceStatus);
};

const replaceCoreV1NamespacedConfigMap = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedConfigMap);
};

const replaceCoreV1NamespacedEndpoints = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedEndpoints);
};

const replaceCoreV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedEvent);
};

const replaceCoreV1NamespacedLimitRange = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedLimitRange);
};

const replaceCoreV1NamespacedPersistentVolumeClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedPersistentVolumeClaim);
};

const replaceCoreV1NamespacedPersistentVolumeClaimStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedPersistentVolumeClaimStatus);
};

const replaceCoreV1NamespacedPod = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedPod);
};

const replaceCoreV1NamespacedPodEphemeralcontainers = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedPodEphemeralcontainers);
};

const replaceCoreV1NamespacedPodResize = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedPodResize);
};

const replaceCoreV1NamespacedPodStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedPodStatus);
};

const replaceCoreV1NamespacedPodTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedPodTemplate);
};

const replaceCoreV1NamespacedReplicationController = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedReplicationController);
};

const replaceCoreV1NamespacedReplicationControllerScale = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedReplicationControllerScale);
};

const replaceCoreV1NamespacedReplicationControllerStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedReplicationControllerStatus);
};

const replaceCoreV1NamespacedResourceQuota = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedResourceQuota);
};

const replaceCoreV1NamespacedResourceQuotaStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedResourceQuotaStatus);
};

const replaceCoreV1NamespacedSecret = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedSecret);
};

const replaceCoreV1NamespacedService = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedService);
};

const replaceCoreV1NamespacedServiceAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedServiceAccount);
};

const replaceCoreV1NamespacedServiceStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NamespacedServiceStatus);
};

const replaceCoreV1Node = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1Node);
};

const replaceCoreV1NodeStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1NodeStatus);
};

const replaceCoreV1PersistentVolume = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1PersistentVolume);
};

const replaceCoreV1PersistentVolumeStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceCoreV1PersistentVolumeStatus);
};

const watchCoreV1ConfigMapListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1ConfigMapListForAllNamespaces);
};

const watchCoreV1EndpointsListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1EndpointsListForAllNamespaces);
};

const watchCoreV1EventListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1EventListForAllNamespaces);
};

const watchCoreV1LimitRangeListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1LimitRangeListForAllNamespaces);
};

const watchCoreV1Namespace = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1Namespace);
};

const watchCoreV1NamespaceList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespaceList);
};

const watchCoreV1NamespacedConfigMap = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedConfigMap);
};

const watchCoreV1NamespacedConfigMapList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedConfigMapList);
};

const watchCoreV1NamespacedEndpoints = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedEndpoints);
};

const watchCoreV1NamespacedEndpointsList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedEndpointsList);
};

const watchCoreV1NamespacedEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedEvent);
};

const watchCoreV1NamespacedEventList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedEventList);
};

const watchCoreV1NamespacedLimitRange = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedLimitRange);
};

const watchCoreV1NamespacedLimitRangeList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedLimitRangeList);
};

const watchCoreV1NamespacedPersistentVolumeClaim = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedPersistentVolumeClaim);
};

const watchCoreV1NamespacedPersistentVolumeClaimList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedPersistentVolumeClaimList);
};

const watchCoreV1NamespacedPod = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedPod);
};

const watchCoreV1NamespacedPodList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedPodList);
};

const watchCoreV1NamespacedPodTemplate = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedPodTemplate);
};

const watchCoreV1NamespacedPodTemplateList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedPodTemplateList);
};

const watchCoreV1NamespacedReplicationController = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedReplicationController);
};

const watchCoreV1NamespacedReplicationControllerList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedReplicationControllerList);
};

const watchCoreV1NamespacedResourceQuota = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedResourceQuota);
};

const watchCoreV1NamespacedResourceQuotaList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedResourceQuotaList);
};

const watchCoreV1NamespacedSecret = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedSecret);
};

const watchCoreV1NamespacedSecretList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedSecretList);
};

const watchCoreV1NamespacedService = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedService);
};

const watchCoreV1NamespacedServiceAccount = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedServiceAccount);
};

const watchCoreV1NamespacedServiceAccountList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedServiceAccountList);
};

const watchCoreV1NamespacedServiceList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NamespacedServiceList);
};

const watchCoreV1Node = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1Node);
};

const watchCoreV1NodeList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1NodeList);
};

const watchCoreV1PersistentVolume = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1PersistentVolume);
};

const watchCoreV1PersistentVolumeClaimListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1PersistentVolumeClaimListForAllNamespaces);
};

const watchCoreV1PersistentVolumeList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1PersistentVolumeList);
};

const watchCoreV1PodListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1PodListForAllNamespaces);
};

const watchCoreV1PodTemplateListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1PodTemplateListForAllNamespaces);
};

const watchCoreV1ReplicationControllerListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1ReplicationControllerListForAllNamespaces);
};

const watchCoreV1ResourceQuotaListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1ResourceQuotaListForAllNamespaces);
};

const watchCoreV1SecretListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1SecretListForAllNamespaces);
};

const watchCoreV1ServiceAccountListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1ServiceAccountListForAllNamespaces);
};

const watchCoreV1ServiceListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchCoreV1ServiceListForAllNamespaces);
};


module.exports = {
  connectCoreV1DeleteNamespacedPodProxy,
  connectCoreV1DeleteNamespacedPodProxyWithPath,
  connectCoreV1DeleteNamespacedServiceProxy,
  connectCoreV1DeleteNamespacedServiceProxyWithPath,
  connectCoreV1DeleteNodeProxy,
  connectCoreV1DeleteNodeProxyWithPath,
  connectCoreV1GetNamespacedPodAttach,
  connectCoreV1GetNamespacedPodExec,
  connectCoreV1GetNamespacedPodPortforward,
  connectCoreV1GetNamespacedPodProxy,
  connectCoreV1GetNamespacedPodProxyWithPath,
  connectCoreV1GetNamespacedServiceProxy,
  connectCoreV1GetNamespacedServiceProxyWithPath,
  connectCoreV1GetNodeProxy,
  connectCoreV1GetNodeProxyWithPath,
  connectCoreV1HeadNamespacedPodProxy,
  connectCoreV1HeadNamespacedPodProxyWithPath,
  connectCoreV1HeadNamespacedServiceProxy,
  connectCoreV1HeadNamespacedServiceProxyWithPath,
  connectCoreV1HeadNodeProxy,
  connectCoreV1HeadNodeProxyWithPath,
  connectCoreV1OptionsNamespacedPodProxy,
  connectCoreV1OptionsNamespacedPodProxyWithPath,
  connectCoreV1OptionsNamespacedServiceProxy,
  connectCoreV1OptionsNamespacedServiceProxyWithPath,
  connectCoreV1OptionsNodeProxy,
  connectCoreV1OptionsNodeProxyWithPath,
  connectCoreV1PatchNamespacedPodProxy,
  connectCoreV1PatchNamespacedPodProxyWithPath,
  connectCoreV1PatchNamespacedServiceProxy,
  connectCoreV1PatchNamespacedServiceProxyWithPath,
  connectCoreV1PatchNodeProxy,
  connectCoreV1PatchNodeProxyWithPath,
  connectCoreV1PostNamespacedPodAttach,
  connectCoreV1PostNamespacedPodExec,
  connectCoreV1PostNamespacedPodPortforward,
  connectCoreV1PostNamespacedPodProxy,
  connectCoreV1PostNamespacedPodProxyWithPath,
  connectCoreV1PostNamespacedServiceProxy,
  connectCoreV1PostNamespacedServiceProxyWithPath,
  connectCoreV1PostNodeProxy,
  connectCoreV1PostNodeProxyWithPath,
  connectCoreV1PutNamespacedPodProxy,
  connectCoreV1PutNamespacedPodProxyWithPath,
  connectCoreV1PutNamespacedServiceProxy,
  connectCoreV1PutNamespacedServiceProxyWithPath,
  connectCoreV1PutNodeProxy,
  connectCoreV1PutNodeProxyWithPath,
  createCoreV1Namespace,
  createCoreV1NamespacedBinding,
  createCoreV1NamespacedConfigMap,
  createCoreV1NamespacedEndpoints,
  createCoreV1NamespacedEvent,
  createCoreV1NamespacedLimitRange,
  createCoreV1NamespacedPersistentVolumeClaim,
  createCoreV1NamespacedPod,
  createCoreV1NamespacedPodBinding,
  createCoreV1NamespacedPodEviction,
  createCoreV1NamespacedPodTemplate,
  createCoreV1NamespacedReplicationController,
  createCoreV1NamespacedResourceQuota,
  createCoreV1NamespacedSecret,
  createCoreV1NamespacedService,
  createCoreV1NamespacedServiceAccount,
  createCoreV1NamespacedServiceAccountToken,
  createCoreV1Node,
  createCoreV1PersistentVolume,
  deleteCoreV1CollectionNamespacedConfigMap,
  deleteCoreV1CollectionNamespacedEndpoints,
  deleteCoreV1CollectionNamespacedEvent,
  deleteCoreV1CollectionNamespacedLimitRange,
  deleteCoreV1CollectionNamespacedPersistentVolumeClaim,
  deleteCoreV1CollectionNamespacedPod,
  deleteCoreV1CollectionNamespacedPodTemplate,
  deleteCoreV1CollectionNamespacedReplicationController,
  deleteCoreV1CollectionNamespacedResourceQuota,
  deleteCoreV1CollectionNamespacedSecret,
  deleteCoreV1CollectionNamespacedService,
  deleteCoreV1CollectionNamespacedServiceAccount,
  deleteCoreV1CollectionNode,
  deleteCoreV1CollectionPersistentVolume,
  deleteCoreV1Namespace,
  deleteCoreV1NamespacedConfigMap,
  deleteCoreV1NamespacedEndpoints,
  deleteCoreV1NamespacedEvent,
  deleteCoreV1NamespacedLimitRange,
  deleteCoreV1NamespacedPersistentVolumeClaim,
  deleteCoreV1NamespacedPod,
  deleteCoreV1NamespacedPodTemplate,
  deleteCoreV1NamespacedReplicationController,
  deleteCoreV1NamespacedResourceQuota,
  deleteCoreV1NamespacedSecret,
  deleteCoreV1NamespacedService,
  deleteCoreV1NamespacedServiceAccount,
  deleteCoreV1Node,
  deleteCoreV1PersistentVolume,
  getCoreV1APIResources,
  listCoreV1ComponentStatus,
  listCoreV1ConfigMapForAllNamespaces,
  listCoreV1EndpointsForAllNamespaces,
  listCoreV1EventForAllNamespaces,
  listCoreV1LimitRangeForAllNamespaces,
  listCoreV1Namespace,
  listCoreV1NamespacedConfigMap,
  listCoreV1NamespacedEndpoints,
  listCoreV1NamespacedEvent,
  listCoreV1NamespacedLimitRange,
  listCoreV1NamespacedPersistentVolumeClaim,
  listCoreV1NamespacedPod,
  listCoreV1NamespacedPodTemplate,
  listCoreV1NamespacedReplicationController,
  listCoreV1NamespacedResourceQuota,
  listCoreV1NamespacedSecret,
  listCoreV1NamespacedService,
  listCoreV1NamespacedServiceAccount,
  listCoreV1Node,
  listCoreV1PersistentVolume,
  listCoreV1PersistentVolumeClaimForAllNamespaces,
  listCoreV1PodForAllNamespaces,
  listCoreV1PodTemplateForAllNamespaces,
  listCoreV1ReplicationControllerForAllNamespaces,
  listCoreV1ResourceQuotaForAllNamespaces,
  listCoreV1SecretForAllNamespaces,
  listCoreV1ServiceAccountForAllNamespaces,
  listCoreV1ServiceForAllNamespaces,
  patchCoreV1Namespace,
  patchCoreV1NamespaceStatus,
  patchCoreV1NamespacedConfigMap,
  patchCoreV1NamespacedEndpoints,
  patchCoreV1NamespacedEvent,
  patchCoreV1NamespacedLimitRange,
  patchCoreV1NamespacedPersistentVolumeClaim,
  patchCoreV1NamespacedPersistentVolumeClaimStatus,
  patchCoreV1NamespacedPod,
  patchCoreV1NamespacedPodEphemeralcontainers,
  patchCoreV1NamespacedPodResize,
  patchCoreV1NamespacedPodStatus,
  patchCoreV1NamespacedPodTemplate,
  patchCoreV1NamespacedReplicationController,
  patchCoreV1NamespacedReplicationControllerScale,
  patchCoreV1NamespacedReplicationControllerStatus,
  patchCoreV1NamespacedResourceQuota,
  patchCoreV1NamespacedResourceQuotaStatus,
  patchCoreV1NamespacedSecret,
  patchCoreV1NamespacedService,
  patchCoreV1NamespacedServiceAccount,
  patchCoreV1NamespacedServiceStatus,
  patchCoreV1Node,
  patchCoreV1NodeStatus,
  patchCoreV1PersistentVolume,
  patchCoreV1PersistentVolumeStatus,
  readCoreV1ComponentStatus,
  readCoreV1Namespace,
  readCoreV1NamespaceStatus,
  readCoreV1NamespacedConfigMap,
  readCoreV1NamespacedEndpoints,
  readCoreV1NamespacedEvent,
  readCoreV1NamespacedLimitRange,
  readCoreV1NamespacedPersistentVolumeClaim,
  readCoreV1NamespacedPersistentVolumeClaimStatus,
  readCoreV1NamespacedPod,
  readCoreV1NamespacedPodEphemeralcontainers,
  readCoreV1NamespacedPodLog,
  readCoreV1NamespacedPodResize,
  readCoreV1NamespacedPodStatus,
  readCoreV1NamespacedPodTemplate,
  readCoreV1NamespacedReplicationController,
  readCoreV1NamespacedReplicationControllerScale,
  readCoreV1NamespacedReplicationControllerStatus,
  readCoreV1NamespacedResourceQuota,
  readCoreV1NamespacedResourceQuotaStatus,
  readCoreV1NamespacedSecret,
  readCoreV1NamespacedService,
  readCoreV1NamespacedServiceAccount,
  readCoreV1NamespacedServiceStatus,
  readCoreV1Node,
  readCoreV1NodeStatus,
  readCoreV1PersistentVolume,
  readCoreV1PersistentVolumeStatus,
  replaceCoreV1Namespace,
  replaceCoreV1NamespaceFinalize,
  replaceCoreV1NamespaceStatus,
  replaceCoreV1NamespacedConfigMap,
  replaceCoreV1NamespacedEndpoints,
  replaceCoreV1NamespacedEvent,
  replaceCoreV1NamespacedLimitRange,
  replaceCoreV1NamespacedPersistentVolumeClaim,
  replaceCoreV1NamespacedPersistentVolumeClaimStatus,
  replaceCoreV1NamespacedPod,
  replaceCoreV1NamespacedPodEphemeralcontainers,
  replaceCoreV1NamespacedPodResize,
  replaceCoreV1NamespacedPodStatus,
  replaceCoreV1NamespacedPodTemplate,
  replaceCoreV1NamespacedReplicationController,
  replaceCoreV1NamespacedReplicationControllerScale,
  replaceCoreV1NamespacedReplicationControllerStatus,
  replaceCoreV1NamespacedResourceQuota,
  replaceCoreV1NamespacedResourceQuotaStatus,
  replaceCoreV1NamespacedSecret,
  replaceCoreV1NamespacedService,
  replaceCoreV1NamespacedServiceAccount,
  replaceCoreV1NamespacedServiceStatus,
  replaceCoreV1Node,
  replaceCoreV1NodeStatus,
  replaceCoreV1PersistentVolume,
  replaceCoreV1PersistentVolumeStatus,
  watchCoreV1ConfigMapListForAllNamespaces,
  watchCoreV1EndpointsListForAllNamespaces,
  watchCoreV1EventListForAllNamespaces,
  watchCoreV1LimitRangeListForAllNamespaces,
  watchCoreV1Namespace,
  watchCoreV1NamespaceList,
  watchCoreV1NamespacedConfigMap,
  watchCoreV1NamespacedConfigMapList,
  watchCoreV1NamespacedEndpoints,
  watchCoreV1NamespacedEndpointsList,
  watchCoreV1NamespacedEvent,
  watchCoreV1NamespacedEventList,
  watchCoreV1NamespacedLimitRange,
  watchCoreV1NamespacedLimitRangeList,
  watchCoreV1NamespacedPersistentVolumeClaim,
  watchCoreV1NamespacedPersistentVolumeClaimList,
  watchCoreV1NamespacedPod,
  watchCoreV1NamespacedPodList,
  watchCoreV1NamespacedPodTemplate,
  watchCoreV1NamespacedPodTemplateList,
  watchCoreV1NamespacedReplicationController,
  watchCoreV1NamespacedReplicationControllerList,
  watchCoreV1NamespacedResourceQuota,
  watchCoreV1NamespacedResourceQuotaList,
  watchCoreV1NamespacedSecret,
  watchCoreV1NamespacedSecretList,
  watchCoreV1NamespacedService,
  watchCoreV1NamespacedServiceAccount,
  watchCoreV1NamespacedServiceAccountList,
  watchCoreV1NamespacedServiceList,
  watchCoreV1Node,
  watchCoreV1NodeList,
  watchCoreV1PersistentVolume,
  watchCoreV1PersistentVolumeClaimListForAllNamespaces,
  watchCoreV1PersistentVolumeList,
  watchCoreV1PodListForAllNamespaces,
  watchCoreV1PodTemplateListForAllNamespaces,
  watchCoreV1ReplicationControllerListForAllNamespaces,
  watchCoreV1ResourceQuotaListForAllNamespaces,
  watchCoreV1SecretListForAllNamespaces,
  watchCoreV1ServiceAccountListForAllNamespaces,
  watchCoreV1ServiceListForAllNamespaces,
};
