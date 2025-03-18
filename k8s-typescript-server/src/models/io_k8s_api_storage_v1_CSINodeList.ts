/**
* CSINodeList is a collection of CSINode objects.
*/
export interface io_k8s_api_storage_v1_CSINodeList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of CSINode
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { deletionTimestamp?: Date; uid?: string; generation?: number; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; creationTimestamp?: Date; finalizers?: string[]; generateName?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; name?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; resourceVersion?: string; selfLink?: string }; spec: { drivers: Array<{ allocatable?: { count?: number }; name: string; nodeID: string; topologyKeys?: string[] }> } }>;
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
* Create a new io_k8s_api_storage_v1_CSINodeList with default values
*/
export function createio_k8s_api_storage_v1_CSINodeList(data?: Partial<io_k8s_api_storage_v1_CSINodeList>): io_k8s_api_storage_v1_CSINodeList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
