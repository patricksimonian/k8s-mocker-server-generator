/**
* TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
*/
export interface io_k8s_api_core_v1_TypedLocalObjectReference {
/**
* Kind is the type of resource being referenced
*/
kind: string;
/**
* Name is the name of resource being referenced
*/
name: string;
/**
* APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
*/
apiGroup?: string;
}

/**
* Create a new io_k8s_api_core_v1_TypedLocalObjectReference with default values
*/
export function createio_k8s_api_core_v1_TypedLocalObjectReference(data?: Partial<io_k8s_api_core_v1_TypedLocalObjectReference>): io_k8s_api_core_v1_TypedLocalObjectReference {
  return {
    kind: data?.kind !== undefined ? data.kind : '',
    name: data?.name !== undefined ? data.name : '',
    apiGroup: data?.apiGroup !== undefined ? data.apiGroup : '',
  };
}
