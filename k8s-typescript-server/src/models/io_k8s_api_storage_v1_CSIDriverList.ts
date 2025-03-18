/**
* CSIDriverList is a collection of CSIDriver objects.
*/
export interface io_k8s_api_storage_v1_CSIDriverList {
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of CSIDriver
*/
items: Array<{ kind?: string; metadata?: { managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; resourceVersion?: string; creationTimestamp?: Date; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; generation?: number; finalizers?: string[]; generateName?: string; labels?: Record<string, any>; namespace?: string; selfLink?: string; deletionGracePeriodSeconds?: number }; spec: { tokenRequests?: Array<{ audience: string; expirationSeconds?: number }>; volumeLifecycleModes?: string[]; attachRequired?: boolean; fsGroupPolicy?: string; podInfoOnMount?: boolean; requiresRepublish?: boolean; seLinuxMount?: boolean; storageCapacity?: boolean }; apiVersion?: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_storage_v1_CSIDriverList with default values
*/
export function createio_k8s_api_storage_v1_CSIDriverList(data?: Partial<io_k8s_api_storage_v1_CSIDriverList>): io_k8s_api_storage_v1_CSIDriverList {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
