/**
* CSIStorageCapacityList is a collection of CSIStorageCapacity objects.
*/
export interface io_k8s_api_storage_v1_CSIStorageCapacityList {
/**
* items is the list of CSIStorageCapacity objects.
*/
items: Array<{ storageClassName: string; apiVersion?: string; capacity?: string; kind?: string; maximumVolumeSize?: string; metadata?: { generation?: number; name?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; namespace?: string; resourceVersion?: string; uid?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; annotations?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string }; nodeTopology?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_storage_v1_CSIStorageCapacityList with default values
*/
export function createio_k8s_api_storage_v1_CSIStorageCapacityList(data?: Partial<io_k8s_api_storage_v1_CSIStorageCapacityList>): io_k8s_api_storage_v1_CSIStorageCapacityList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
