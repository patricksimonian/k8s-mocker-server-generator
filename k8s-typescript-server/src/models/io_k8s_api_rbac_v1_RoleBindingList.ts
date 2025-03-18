/**
* RoleBindingList is a collection of RoleBindings
*/
export interface io_k8s_api_rbac_v1_RoleBindingList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is a list of RoleBindings
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; name?: string; resourceVersion?: string; deletionGracePeriodSeconds?: number; generation?: number; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; selfLink?: string; creationTimestamp?: Date }; roleRef: { apiGroup: string; kind: string; name: string }; subjects?: Array<{ namespace?: string; apiGroup?: string; kind: string; name: string }> }>;
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
* Create a new io_k8s_api_rbac_v1_RoleBindingList with default values
*/
export function createio_k8s_api_rbac_v1_RoleBindingList(data?: Partial<io_k8s_api_rbac_v1_RoleBindingList>): io_k8s_api_rbac_v1_RoleBindingList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
