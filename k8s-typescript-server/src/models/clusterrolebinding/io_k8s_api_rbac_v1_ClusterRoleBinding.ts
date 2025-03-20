/**
* ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
* @resourceType clusterrolebinding
* @kind Clusterrolebinding
*/
export interface io_k8s_api_rbac_v1_ClusterRoleBinding {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string; name?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; uid?: string; finalizers?: string[]; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; namespace?: string };
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
}

/**
* Create a new Clusterrolebinding with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_ClusterRoleBinding instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_ClusterRoleBinding(data?: Partial<io_k8s_api_rbac_v1_ClusterRoleBinding>): io_k8s_api_rbac_v1_ClusterRoleBinding {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   roleRef: data?.roleRef !== undefined ? data.roleRef : { kind: '', name: '', apiGroup: '' },
   subjects: data?.subjects !== undefined ? data.subjects : [],
 };
}
