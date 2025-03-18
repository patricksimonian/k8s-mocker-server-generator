/**
* ClusterRoleBindingList is a collection of ClusterRoleBindings
*/
export interface io_k8s_api_rbac_v1_ClusterRoleBindingList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is a list of ClusterRoleBindings
*/
items: Array<{ roleRef: { name: string; apiGroup: string; kind: string }; subjects?: Array<{ apiGroup?: string; kind: string; name: string; namespace?: string }>; apiVersion?: string; kind?: string; metadata?: { finalizers?: string[]; generateName?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; namespace?: string; resourceVersion?: string; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; name?: string } }>;
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
* Create a new io_k8s_api_rbac_v1_ClusterRoleBindingList with default values
*/
export function createio_k8s_api_rbac_v1_ClusterRoleBindingList(data?: Partial<io_k8s_api_rbac_v1_ClusterRoleBindingList>): io_k8s_api_rbac_v1_ClusterRoleBindingList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
