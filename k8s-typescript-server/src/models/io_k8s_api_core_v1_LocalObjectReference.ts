/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
*/
export interface io_k8s_api_core_v1_LocalObjectReference {
/**
* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
*/
name?: string;
}

/**
* Create a new io_k8s_api_core_v1_LocalObjectReference with default values
*/
export function createio_k8s_api_core_v1_LocalObjectReference(data?: Partial<io_k8s_api_core_v1_LocalObjectReference>): io_k8s_api_core_v1_LocalObjectReference {
  return {
    name: data?.name !== undefined ? data.name : '',
  };
}
