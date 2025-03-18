/**
* BoundObjectReference is a reference to an object that a token is bound to.
*/
export interface io_k8s_api_authentication_v1_BoundObjectReference {
/**
* API version of the referent.
*/
apiVersion?: string;
/**
* Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
*/
kind?: string;
/**
* Name of the referent.
*/
name?: string;
/**
* UID of the referent.
*/
uid?: string;
}

/**
* Create a new io_k8s_api_authentication_v1_BoundObjectReference with default values
*/
export function createio_k8s_api_authentication_v1_BoundObjectReference(data?: Partial<io_k8s_api_authentication_v1_BoundObjectReference>): io_k8s_api_authentication_v1_BoundObjectReference {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    name: data?.name !== undefined ? data.name : '',
    uid: data?.uid !== undefined ? data.uid : '',
  };
}
