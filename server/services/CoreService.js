/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* get available API versions
*
* returns Object
* */
const getCoreAPIVersions = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        "kind": "APIVersions",
        "versions": ["v1"]
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
  getCoreAPIVersions,
};
