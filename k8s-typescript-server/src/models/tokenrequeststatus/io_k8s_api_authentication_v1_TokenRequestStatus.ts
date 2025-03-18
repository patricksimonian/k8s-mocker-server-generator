/**
* TokenRequestStatus is the result of a token request.
* @resourceType tokenrequeststatus
* @kind Tokenrequeststatus
*/
export interface io_k8s_api_authentication_v1_TokenRequestStatus {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* @required
*/
expirationTimestamp: Date;
/**
* Token is the opaque bearer token.
* @required
*/
token: string;
}

/**
* Create a new Tokenrequeststatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenRequestStatus instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenRequestStatus(data?: Partial<io_k8s_api_authentication_v1_TokenRequestStatus>): io_k8s_api_authentication_v1_TokenRequestStatus {
 return {
   expirationTimestamp: data?.expirationTimestamp !== undefined ? data.expirationTimestamp : '',
   token: data?.token !== undefined ? data.token : '',
 };
}
