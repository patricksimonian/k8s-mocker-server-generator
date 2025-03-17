/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* get available API versions
*
* returns Object
* */
const getAPIVersions = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        kind: "APIGroupList",
        apiVersion: "v1",
        groups: []
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
  getAPIVersions,
};
