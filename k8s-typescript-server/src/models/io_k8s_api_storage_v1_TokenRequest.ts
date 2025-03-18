/**
* TokenRequest contains parameters of a service account token.
*/
export interface io_k8s_api_storage_v1_TokenRequest {
/**
* expirationSeconds is the duration of validity of the token in "TokenRequestSpec". It has the same default value of "ExpirationSeconds" in "TokenRequestSpec".
*/
expirationSeconds?: number;
/**
* audience is the intended audience of the token in "TokenRequestSpec". It will default to the audiences of kube apiserver.
*/
audience: string;
}

/**
* Create a new io_k8s_api_storage_v1_TokenRequest with default values
*/
export function createio_k8s_api_storage_v1_TokenRequest(data?: Partial<io_k8s_api_storage_v1_TokenRequest>): io_k8s_api_storage_v1_TokenRequest {
  return {
    expirationSeconds: data?.expirationSeconds !== undefined ? data.expirationSeconds : 0,
    audience: data?.audience !== undefined ? data.audience : '',
  };
}
