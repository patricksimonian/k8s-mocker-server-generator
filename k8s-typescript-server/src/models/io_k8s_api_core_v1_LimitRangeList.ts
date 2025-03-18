/**
* LimitRangeList is a list of LimitRange items.
*/
export interface io_k8s_api_core_v1_LimitRangeList {
/**
* Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
*/
items: Array<{ spec?: { limits: Array<{ default?: Record<string, any>; defaultRequest?: Record<string, any>; max?: Record<string, any>; maxLimitRequestRatio?: Record<string, any>; min?: Record<string, any>; type: string }> }; apiVersion?: string; kind?: string; metadata?: { generateName?: string; annotations?: Record<string, any>; labels?: Record<string, any>; namespace?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; resourceVersion?: string; uid?: string; deletionTimestamp?: Date; generation?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; selfLink?: string } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { resourceVersion?: string; selfLink?: string; continue?: string; remainingItemCount?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_core_v1_LimitRangeList with default values
*/
export function createio_k8s_api_core_v1_LimitRangeList(data?: Partial<io_k8s_api_core_v1_LimitRangeList>): io_k8s_api_core_v1_LimitRangeList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
