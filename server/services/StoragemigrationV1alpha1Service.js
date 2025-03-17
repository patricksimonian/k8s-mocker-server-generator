/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* create a StorageVersionMigration
*
* body Object 
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const createStoragemigrationV1alpha1StorageVersionMigration = ({ body, dryRun, fieldValidation }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        body,
        dryRun,
        fieldValidation,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* delete collection of StorageVersionMigration
*
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* returns Object
* */
const deleteStoragemigrationV1alpha1CollectionStorageVersionMigration = ({ dryRun }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        dryRun,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* delete a StorageVersionMigration
*
* name String name of the StorageVersionMigration
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* returns Object
* */
const deleteStoragemigrationV1alpha1StorageVersionMigration = ({ name, dryRun }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        dryRun,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* get available resources
*
* returns Object
* */
const getStoragemigrationV1alpha1APIResources = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* list or watch objects of kind StorageVersionMigration
*
* returns Object
* */
const listStoragemigrationV1alpha1StorageVersionMigration = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* partially update the specified StorageVersionMigration
*
* name String name of the StorageVersionMigration
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const patchStoragemigrationV1alpha1StorageVersionMigration = ({ name, dryRun, fieldValidation }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        dryRun,
        fieldValidation,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* partially update status of the specified StorageVersionMigration
*
* name String name of the StorageVersionMigration
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const patchStoragemigrationV1alpha1StorageVersionMigrationStatus = ({ name, dryRun, fieldValidation }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        dryRun,
        fieldValidation,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* read the specified StorageVersionMigration
*
* name String name of the StorageVersionMigration
* returns Object
* */
const readStoragemigrationV1alpha1StorageVersionMigration = ({ name }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* read status of the specified StorageVersionMigration
*
* name String name of the StorageVersionMigration
* returns Object
* */
const readStoragemigrationV1alpha1StorageVersionMigrationStatus = ({ name }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* replace the specified StorageVersionMigration
*
* name String name of the StorageVersionMigration
* body Object 
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const replaceStoragemigrationV1alpha1StorageVersionMigration = ({ name, body, dryRun, fieldValidation }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        body,
        dryRun,
        fieldValidation,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* replace status of the specified StorageVersionMigration
*
* name String name of the StorageVersionMigration
* body Object 
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const replaceStoragemigrationV1alpha1StorageVersionMigrationStatus = ({ name, body, dryRun, fieldValidation }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
        body,
        dryRun,
        fieldValidation,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* watch changes to an object of kind StorageVersionMigration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
*
* name String name of the StorageVersionMigration
* returns Object
* */
const watchStoragemigrationV1alpha1StorageVersionMigration = ({ name }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        name,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* watch individual changes to a list of StorageVersionMigration. deprecated: use the 'watch' parameter with a list operation instead.
*
* returns Object
* */
const watchStoragemigrationV1alpha1StorageVersionMigrationList = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createStoragemigrationV1alpha1StorageVersionMigration,
  deleteStoragemigrationV1alpha1CollectionStorageVersionMigration,
  deleteStoragemigrationV1alpha1StorageVersionMigration,
  getStoragemigrationV1alpha1APIResources,
  listStoragemigrationV1alpha1StorageVersionMigration,
  patchStoragemigrationV1alpha1StorageVersionMigration,
  patchStoragemigrationV1alpha1StorageVersionMigrationStatus,
  readStoragemigrationV1alpha1StorageVersionMigration,
  readStoragemigrationV1alpha1StorageVersionMigrationStatus,
  replaceStoragemigrationV1alpha1StorageVersionMigration,
  replaceStoragemigrationV1alpha1StorageVersionMigrationStatus,
  watchStoragemigrationV1alpha1StorageVersionMigration,
  watchStoragemigrationV1alpha1StorageVersionMigrationList,
};
