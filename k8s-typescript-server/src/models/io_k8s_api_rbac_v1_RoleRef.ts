/**
* RoleRef contains information that points to the role being used
*/
export interface io_k8s_api_rbac_v1_RoleRef {
/**
* Name is the name of resource being referenced
*/
name: string;
/**
* APIGroup is the group for the resource being referenced
*/
apiGroup: string;
/**
* Kind is the type of resource being referenced
*/
kind: string;
}

/**
* Create a new io_k8s_api_rbac_v1_RoleRef with default values
*/
export function createio_k8s_api_rbac_v1_RoleRef(data?: Partial<io_k8s_api_rbac_v1_RoleRef>): io_k8s_api_rbac_v1_RoleRef {
  return {
    name: data?.name !== undefined ? data.name : '',
    apiGroup: data?.apiGroup !== undefined ? data.apiGroup : '',
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
