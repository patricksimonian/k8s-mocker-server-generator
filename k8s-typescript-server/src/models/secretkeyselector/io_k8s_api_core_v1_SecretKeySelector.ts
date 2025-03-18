/**
* SecretKeySelector selects a key of a Secret.
* @resourceType secretkeyselector
* @kind Secretkeyselector
*/
export interface io_k8s_api_core_v1_SecretKeySelector {
/**
* The key of the secret to select from.  Must be a valid secret key.
* @required
*/
key: string;
/**
* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
*/
name?: string;
/**
* Specify whether the Secret or its key must be defined
*/
optional?: boolean;
}

/**
* Create a new Secretkeyselector with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_SecretKeySelector instance with defaults applied
*/
export function createio_k8s_api_core_v1_SecretKeySelector(data?: Partial<io_k8s_api_core_v1_SecretKeySelector>): io_k8s_api_core_v1_SecretKeySelector {
 return {
   key: data?.key !== undefined ? data.key : '',
   name: data?.name !== undefined ? data.name : '',
   optional: data?.optional !== undefined ? data.optional : false,
 };
}
