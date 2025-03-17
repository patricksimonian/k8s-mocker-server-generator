/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* get service account issuer OpenID configuration, also known as the 'OIDC discovery doc'
*
* returns String
* */
const getServiceAccountIssuerOpenIDConfiguration = () => new Promise(
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
  getServiceAccountIssuerOpenIDConfiguration,
};
