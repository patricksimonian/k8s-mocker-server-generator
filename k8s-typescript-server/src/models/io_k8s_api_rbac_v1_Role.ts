/**
* Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
*/
export interface io_k8s_api_rbac_v1_Role {
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
*/
metadata?: { labels?: Record<string, any>; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; name?: string; deletionGracePeriodSeconds?: number; generation?: number; deletionTimestamp?: Date; resourceVersion?: string; namespace?: string; selfLink?: string; finalizers?: string[]; generateName?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date };
/**
* Rules holds all the PolicyRules for this Role
*/
rules?: Array<{ resources?: string[]; verbs: string[]; apiGroups?: string[]; nonResourceURLs?: string[]; resourceNames?: string[] }>;
}

/**
* Create a new io_k8s_api_rbac_v1_Role with default values
*/
export function createio_k8s_api_rbac_v1_Role(data?: Partial<io_k8s_api_rbac_v1_Role>): io_k8s_api_rbac_v1_Role {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    rules: data?.rules !== undefined ? data.rules : [],
  };
}
