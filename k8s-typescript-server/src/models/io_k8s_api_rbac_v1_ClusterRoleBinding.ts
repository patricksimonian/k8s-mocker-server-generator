/**
* ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
*/
export interface io_k8s_api_rbac_v1_ClusterRoleBinding {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; name?: string; deletionTimestamp?: Date; finalizers?: string[]; creationTimestamp?: Date; generation?: number; uid?: string };
/**
* RoleRef contains information that points to the role being used
*/
roleRef: { apiGroup: string; kind: string; name: string };
/**
* Subjects holds references to the objects the role applies to.
*/
subjects?: Array<{ apiGroup?: string; kind: string; name: string; namespace?: string }>;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_rbac_v1_ClusterRoleBinding with default values
*/
export function createio_k8s_api_rbac_v1_ClusterRoleBinding(data?: Partial<io_k8s_api_rbac_v1_ClusterRoleBinding>): io_k8s_api_rbac_v1_ClusterRoleBinding {
  return {
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    roleRef: data?.roleRef !== undefined ? data.roleRef : { apiGroup: '', kind: '', name: '' },
    subjects: data?.subjects !== undefined ? data.subjects : [],
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
