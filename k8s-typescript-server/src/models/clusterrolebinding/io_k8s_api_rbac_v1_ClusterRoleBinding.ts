/**
* ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
* @resourceType clusterrolebinding
* @kind Clusterrolebinding
*/
export interface io_k8s_api_rbac_v1_ClusterRoleBinding {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; resourceVersion?: string; deletionTimestamp?: Date; labels?: Record<string, any>; selfLink?: string; name?: string; namespace?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generateName?: string; finalizers?: string[]; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; uid?: string };
/**
* RoleRef contains information that points to the role being used
* @required
* @isObject
*/
roleRef: { apiGroup: string; kind: string; name: string };
/**
* Subjects holds references to the objects the role applies to.
* @isArray
*/
subjects?: Array<{ apiGroup?: string; kind: string; name: string; namespace?: string }>;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Clusterrolebinding with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_ClusterRoleBinding instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_ClusterRoleBinding(data?: Partial<io_k8s_api_rbac_v1_ClusterRoleBinding>): io_k8s_api_rbac_v1_ClusterRoleBinding {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   roleRef: data?.roleRef !== undefined ? data.roleRef : { apiGroup: '', kind: '', name: '' },
   subjects: data?.subjects !== undefined ? data.subjects : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
