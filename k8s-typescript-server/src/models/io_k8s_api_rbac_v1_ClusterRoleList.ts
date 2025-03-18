/**
* ClusterRoleList is a collection of ClusterRoles
*/
export interface io_k8s_api_rbac_v1_ClusterRoleList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is a list of ClusterRoles
*/
items: Array<{ kind?: string; metadata?: { resourceVersion?: string; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; generation?: number; namespace?: string; uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; creationTimestamp?: Date; labels?: Record<string, any>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; selfLink?: string }; rules?: Array<{ apiGroups?: string[]; nonResourceURLs?: string[]; resourceNames?: string[]; resources?: string[]; verbs: string[] }>; aggregationRule?: { clusterRoleSelectors?: Array<{ matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }> }; apiVersion?: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new io_k8s_api_rbac_v1_ClusterRoleList with default values
*/
export function createio_k8s_api_rbac_v1_ClusterRoleList(data?: Partial<io_k8s_api_rbac_v1_ClusterRoleList>): io_k8s_api_rbac_v1_ClusterRoleList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
