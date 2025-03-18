/**
* TokenRequestStatus is the result of a token request.
*/
export interface io_k8s_api_authentication_v1_TokenRequestStatus {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
expirationTimestamp: Date;
/**
* Token is the opaque bearer token.
*/
token: string;
}

/**
* Create a new io_k8s_api_authentication_v1_TokenRequestStatus with default values
*/
export function createio_k8s_api_authentication_v1_TokenRequestStatus(data?: Partial<io_k8s_api_authentication_v1_TokenRequestStatus>): io_k8s_api_authentication_v1_TokenRequestStatus {
  return {
    expirationTimestamp: data?.expirationTimestamp !== undefined ? data.expirationTimestamp : '',
    token: data?.token !== undefined ? data.token : '',
  };
}
