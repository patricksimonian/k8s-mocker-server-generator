/**
 * The StorageV1Controller file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/StorageV1Service');
const createStorageV1CSIDriver = async (request, response) => {
  await Controller.handleRequest(request, response, service.createStorageV1CSIDriver);
};

const createStorageV1CSINode = async (request, response) => {
  await Controller.handleRequest(request, response, service.createStorageV1CSINode);
};

const createStorageV1NamespacedCSIStorageCapacity = async (request, response) => {
  await Controller.handleRequest(request, response, service.createStorageV1NamespacedCSIStorageCapacity);
};

const createStorageV1StorageClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.createStorageV1StorageClass);
};

const createStorageV1VolumeAttachment = async (request, response) => {
  await Controller.handleRequest(request, response, service.createStorageV1VolumeAttachment);
};

const deleteStorageV1CSIDriver = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1CSIDriver);
};

const deleteStorageV1CSINode = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1CSINode);
};

const deleteStorageV1CollectionCSIDriver = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1CollectionCSIDriver);
};

const deleteStorageV1CollectionCSINode = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1CollectionCSINode);
};

const deleteStorageV1CollectionNamespacedCSIStorageCapacity = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1CollectionNamespacedCSIStorageCapacity);
};

const deleteStorageV1CollectionStorageClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1CollectionStorageClass);
};

const deleteStorageV1CollectionVolumeAttachment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1CollectionVolumeAttachment);
};

const deleteStorageV1NamespacedCSIStorageCapacity = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1NamespacedCSIStorageCapacity);
};

const deleteStorageV1StorageClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1StorageClass);
};

const deleteStorageV1VolumeAttachment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStorageV1VolumeAttachment);
};

const getStorageV1APIResources = async (request, response) => {
  await Controller.handleRequest(request, response, service.getStorageV1APIResources);
};

const listStorageV1CSIDriver = async (request, response) => {
  await Controller.handleRequest(request, response, service.listStorageV1CSIDriver);
};

const listStorageV1CSINode = async (request, response) => {
  await Controller.handleRequest(request, response, service.listStorageV1CSINode);
};

const listStorageV1CSIStorageCapacityForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.listStorageV1CSIStorageCapacityForAllNamespaces);
};

const listStorageV1NamespacedCSIStorageCapacity = async (request, response) => {
  await Controller.handleRequest(request, response, service.listStorageV1NamespacedCSIStorageCapacity);
};

const listStorageV1StorageClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.listStorageV1StorageClass);
};

const listStorageV1VolumeAttachment = async (request, response) => {
  await Controller.handleRequest(request, response, service.listStorageV1VolumeAttachment);
};

const patchStorageV1CSIDriver = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStorageV1CSIDriver);
};

const patchStorageV1CSINode = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStorageV1CSINode);
};

const patchStorageV1NamespacedCSIStorageCapacity = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStorageV1NamespacedCSIStorageCapacity);
};

const patchStorageV1StorageClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStorageV1StorageClass);
};

const patchStorageV1VolumeAttachment = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStorageV1VolumeAttachment);
};

const patchStorageV1VolumeAttachmentStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchStorageV1VolumeAttachmentStatus);
};

const readStorageV1CSIDriver = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStorageV1CSIDriver);
};

const readStorageV1CSINode = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStorageV1CSINode);
};

const readStorageV1NamespacedCSIStorageCapacity = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStorageV1NamespacedCSIStorageCapacity);
};

const readStorageV1StorageClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStorageV1StorageClass);
};

const readStorageV1VolumeAttachment = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStorageV1VolumeAttachment);
};

const readStorageV1VolumeAttachmentStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.readStorageV1VolumeAttachmentStatus);
};

const replaceStorageV1CSIDriver = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStorageV1CSIDriver);
};

const replaceStorageV1CSINode = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStorageV1CSINode);
};

const replaceStorageV1NamespacedCSIStorageCapacity = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStorageV1NamespacedCSIStorageCapacity);
};

const replaceStorageV1StorageClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStorageV1StorageClass);
};

const replaceStorageV1VolumeAttachment = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStorageV1VolumeAttachment);
};

const replaceStorageV1VolumeAttachmentStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.replaceStorageV1VolumeAttachmentStatus);
};

const watchStorageV1CSIDriver = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1CSIDriver);
};

const watchStorageV1CSIDriverList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1CSIDriverList);
};

const watchStorageV1CSINode = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1CSINode);
};

const watchStorageV1CSINodeList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1CSINodeList);
};

const watchStorageV1CSIStorageCapacityListForAllNamespaces = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1CSIStorageCapacityListForAllNamespaces);
};

const watchStorageV1NamespacedCSIStorageCapacity = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1NamespacedCSIStorageCapacity);
};

const watchStorageV1NamespacedCSIStorageCapacityList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1NamespacedCSIStorageCapacityList);
};

const watchStorageV1StorageClass = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1StorageClass);
};

const watchStorageV1StorageClassList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1StorageClassList);
};

const watchStorageV1VolumeAttachment = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1VolumeAttachment);
};

const watchStorageV1VolumeAttachmentList = async (request, response) => {
  await Controller.handleRequest(request, response, service.watchStorageV1VolumeAttachmentList);
};


module.exports = {
  createStorageV1CSIDriver,
  createStorageV1CSINode,
  createStorageV1NamespacedCSIStorageCapacity,
  createStorageV1StorageClass,
  createStorageV1VolumeAttachment,
  deleteStorageV1CSIDriver,
  deleteStorageV1CSINode,
  deleteStorageV1CollectionCSIDriver,
  deleteStorageV1CollectionCSINode,
  deleteStorageV1CollectionNamespacedCSIStorageCapacity,
  deleteStorageV1CollectionStorageClass,
  deleteStorageV1CollectionVolumeAttachment,
  deleteStorageV1NamespacedCSIStorageCapacity,
  deleteStorageV1StorageClass,
  deleteStorageV1VolumeAttachment,
  getStorageV1APIResources,
  listStorageV1CSIDriver,
  listStorageV1CSINode,
  listStorageV1CSIStorageCapacityForAllNamespaces,
  listStorageV1NamespacedCSIStorageCapacity,
  listStorageV1StorageClass,
  listStorageV1VolumeAttachment,
  patchStorageV1CSIDriver,
  patchStorageV1CSINode,
  patchStorageV1NamespacedCSIStorageCapacity,
  patchStorageV1StorageClass,
  patchStorageV1VolumeAttachment,
  patchStorageV1VolumeAttachmentStatus,
  readStorageV1CSIDriver,
  readStorageV1CSINode,
  readStorageV1NamespacedCSIStorageCapacity,
  readStorageV1StorageClass,
  readStorageV1VolumeAttachment,
  readStorageV1VolumeAttachmentStatus,
  replaceStorageV1CSIDriver,
  replaceStorageV1CSINode,
  replaceStorageV1NamespacedCSIStorageCapacity,
  replaceStorageV1StorageClass,
  replaceStorageV1VolumeAttachment,
  replaceStorageV1VolumeAttachmentStatus,
  watchStorageV1CSIDriver,
  watchStorageV1CSIDriverList,
  watchStorageV1CSINode,
  watchStorageV1CSINodeList,
  watchStorageV1CSIStorageCapacityListForAllNamespaces,
  watchStorageV1NamespacedCSIStorageCapacity,
  watchStorageV1NamespacedCSIStorageCapacityList,
  watchStorageV1StorageClass,
  watchStorageV1StorageClassList,
  watchStorageV1VolumeAttachment,
  watchStorageV1VolumeAttachmentList,
};
