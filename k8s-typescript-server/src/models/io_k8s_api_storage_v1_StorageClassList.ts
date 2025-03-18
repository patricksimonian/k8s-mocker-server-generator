/**
* StorageClassList is a collection of storage classes.
*/
export interface io_k8s_api_storage_v1_StorageClassList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of StorageClasses
*/
items: Array<{ allowVolumeExpansion?: boolean; kind?: string; provisioner: string; reclaimPolicy?: 'Delete' | 'Recycle' | 'Retain'; volumeBindingMode?: 'Immediate' | 'WaitForFirstConsumer'; allowedTopologies?: Array<{ matchLabelExpressions?: Array<{ key: string; values: string[] }> }>; apiVersion?: string; metadata?: { deletionGracePeriodSeconds?: number; finalizers?: string[]; generation?: number; labels?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string; resourceVersion?: string; uid?: string; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; namespace?: string; selfLink?: string }; mountOptions?: string[]; parameters?: Record<string, any> }>;
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
* Create a new io_k8s_api_storage_v1_StorageClassList with default values
*/
export function createio_k8s_api_storage_v1_StorageClassList(data?: Partial<io_k8s_api_storage_v1_StorageClassList>): io_k8s_api_storage_v1_StorageClassList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
