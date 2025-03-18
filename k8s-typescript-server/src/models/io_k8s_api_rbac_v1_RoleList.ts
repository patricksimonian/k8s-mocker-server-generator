/**
* RoleList is a collection of Roles
*/
export interface io_k8s_api_rbac_v1_RoleList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is a list of Roles
*/
items: Array<{ rules?: Array<{ nonResourceURLs?: string[]; resourceNames?: string[]; resources?: string[]; verbs: string[]; apiGroups?: string[] }>; apiVersion?: string; kind?: string; metadata?: { deletionTimestamp?: Date; uid?: string; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; labels?: Record<string, any>; name?: string; annotations?: Record<string, any>; generateName?: string; selfLink?: string } }>;
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
* Create a new io_k8s_api_rbac_v1_RoleList with default values
*/
export function createio_k8s_api_rbac_v1_RoleList(data?: Partial<io_k8s_api_rbac_v1_RoleList>): io_k8s_api_rbac_v1_RoleList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
