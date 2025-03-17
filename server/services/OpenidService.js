/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
*
* returns String
* */
const getServiceAccountIssuerOpenIDKeyset = () => new Promise(
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
  getServiceAccountIssuerOpenIDKeyset,
};
