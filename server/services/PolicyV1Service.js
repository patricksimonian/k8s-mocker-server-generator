/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* create a PodDisruptionBudget
*
* body Object 
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const createPolicyV1NamespacedPodDisruptionBudget = ({ body, dryRun, fieldValidation }) => new Promise(
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
* delete collection of PodDisruptionBudget
*
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* returns Object
* */
const deletePolicyV1CollectionNamespacedPodDisruptionBudget = ({ dryRun }) => new Promise(
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
* delete a PodDisruptionBudget
*
* name String name of the PodDisruptionBudget
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* returns Object
* */
const deletePolicyV1NamespacedPodDisruptionBudget = ({ name, dryRun }) => new Promise(
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
const getPolicyV1APIResources = () => new Promise(
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
* list or watch objects of kind PodDisruptionBudget
*
* returns Object
* */
const listPolicyV1NamespacedPodDisruptionBudget = () => new Promise(
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
* list or watch objects of kind PodDisruptionBudget
*
* returns Object
* */
const listPolicyV1PodDisruptionBudgetForAllNamespaces = () => new Promise(
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
* partially update the specified PodDisruptionBudget
*
* name String name of the PodDisruptionBudget
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const patchPolicyV1NamespacedPodDisruptionBudget = ({ name, dryRun, fieldValidation }) => new Promise(
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
* partially update status of the specified PodDisruptionBudget
*
* name String name of the PodDisruptionBudget
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const patchPolicyV1NamespacedPodDisruptionBudgetStatus = ({ name, dryRun, fieldValidation }) => new Promise(
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
* read the specified PodDisruptionBudget
*
* name String name of the PodDisruptionBudget
* returns Object
* */
const readPolicyV1NamespacedPodDisruptionBudget = ({ name }) => new Promise(
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
* read status of the specified PodDisruptionBudget
*
* name String name of the PodDisruptionBudget
* returns Object
* */
const readPolicyV1NamespacedPodDisruptionBudgetStatus = ({ name }) => new Promise(
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
* replace the specified PodDisruptionBudget
*
* name String name of the PodDisruptionBudget
* body Object 
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const replacePolicyV1NamespacedPodDisruptionBudget = ({ name, body, dryRun, fieldValidation }) => new Promise(
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
* replace status of the specified PodDisruptionBudget
*
* name String name of the PodDisruptionBudget
* body Object 
* dryRun String When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed (optional)
* fieldValidation String fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. (optional)
* returns Object
* */
const replacePolicyV1NamespacedPodDisruptionBudgetStatus = ({ name, body, dryRun, fieldValidation }) => new Promise(
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
* watch changes to an object of kind PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
*
* name String name of the PodDisruptionBudget
* returns Object
* */
const watchPolicyV1NamespacedPodDisruptionBudget = ({ name }) => new Promise(
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
* watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
*
* returns Object
* */
const watchPolicyV1NamespacedPodDisruptionBudgetList = () => new Promise(
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
* watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
*
* returns Object
* */
const watchPolicyV1PodDisruptionBudgetListForAllNamespaces = () => new Promise(
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
  createPolicyV1NamespacedPodDisruptionBudget,
  deletePolicyV1CollectionNamespacedPodDisruptionBudget,
  deletePolicyV1NamespacedPodDisruptionBudget,
  getPolicyV1APIResources,
  listPolicyV1NamespacedPodDisruptionBudget,
  listPolicyV1PodDisruptionBudgetForAllNamespaces,
  patchPolicyV1NamespacedPodDisruptionBudget,
  patchPolicyV1NamespacedPodDisruptionBudgetStatus,
  readPolicyV1NamespacedPodDisruptionBudget,
  readPolicyV1NamespacedPodDisruptionBudgetStatus,
  replacePolicyV1NamespacedPodDisruptionBudget,
  replacePolicyV1NamespacedPodDisruptionBudgetStatus,
  watchPolicyV1NamespacedPodDisruptionBudget,
  watchPolicyV1NamespacedPodDisruptionBudgetList,
  watchPolicyV1PodDisruptionBudgetListForAllNamespaces,
};
