/**
* Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
*/
export interface io_k8s_api_rbac_v1_Subject {
/**
* APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
*/
apiGroup?: string;
/**
* Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
*/
kind: string;
/**
* Name of the object being referenced.
*/
name: string;
/**
* Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
*/
namespace?: string;
}

/**
* Create a new io_k8s_api_rbac_v1_Subject with default values
*/
export function createio_k8s_api_rbac_v1_Subject(data?: Partial<io_k8s_api_rbac_v1_Subject>): io_k8s_api_rbac_v1_Subject {
  return {
    apiGroup: data?.apiGroup !== undefined ? data.apiGroup : '',
    kind: data?.kind !== undefined ? data.kind : '',
    name: data?.name !== undefined ? data.name : '',
    namespace: data?.namespace !== undefined ? data.namespace : '',
  };
}
