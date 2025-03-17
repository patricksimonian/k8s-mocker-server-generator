/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* get information of a group
*
* returns Object
* */
const getResourceAPIGroup = () => new Promise(
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
  getResourceAPIGroup,
};
