/**
* PodList is a list of Pods.
*/
export interface io_k8s_api_core_v1_PodList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of pods. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { resourceVersion?: string; generateName?: string; generation?: number; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; creationTimestamp?: Date; finalizers?: string[]; annotations?: Record<string, any>; uid?: string; labels?: Record<string, any>; name?: string; selfLink?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date }; spec?: Record<string, any>; status?: Record<string, any> }>;
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
* Create a new io_k8s_api_core_v1_PodList with default values
*/
export function createio_k8s_api_core_v1_PodList(data?: Partial<io_k8s_api_core_v1_PodList>): io_k8s_api_core_v1_PodList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
