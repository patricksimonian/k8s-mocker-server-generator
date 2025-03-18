/**
* ConfigMapList is a resource containing a list of ConfigMap objects.
*/
export interface io_k8s_api_core_v1_ConfigMapList {
/**
* Items is the list of ConfigMaps.
*/
items: Array<{ apiVersion?: string; binaryData?: Record<string, any>; data?: Record<string, any>; immutable?: boolean; kind?: string; metadata?: { name?: string; namespace?: string; annotations?: Record<string, any>; generation?: number; generateName?: string; labels?: Record<string, any>; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; uid?: string; deletionTimestamp?: Date; finalizers?: string[] } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_core_v1_ConfigMapList with default values
*/
export function createio_k8s_api_core_v1_ConfigMapList(data?: Partial<io_k8s_api_core_v1_ConfigMapList>): io_k8s_api_core_v1_ConfigMapList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
