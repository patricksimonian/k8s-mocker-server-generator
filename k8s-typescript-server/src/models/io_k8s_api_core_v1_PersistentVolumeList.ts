/**
* PersistentVolumeList is a list of PersistentVolume items.
*/
export interface io_k8s_api_core_v1_PersistentVolumeList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is a list of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
*/
items: Array<{ kind?: string; metadata?: { creationTimestamp?: Date; deletionTimestamp?: Date; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; resourceVersion?: string; uid?: string; namespace?: string; annotations?: Record<string, any>; labels?: Record<string, any>; selfLink?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; generateName?: string; generation?: number; name?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }> }; spec?: Record<string, any>; status?: { lastPhaseTransitionTime?: Date; message?: string; phase?: 'Available' | 'Bound' | 'Failed' | 'Pending' | 'Released'; reason?: string }; apiVersion?: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
}

/**
* Create a new io_k8s_api_core_v1_PersistentVolumeList with default values
*/
export function createio_k8s_api_core_v1_PersistentVolumeList(data?: Partial<io_k8s_api_core_v1_PersistentVolumeList>): io_k8s_api_core_v1_PersistentVolumeList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
