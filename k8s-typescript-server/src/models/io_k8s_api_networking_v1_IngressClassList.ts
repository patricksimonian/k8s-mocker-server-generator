/**
* IngressClassList is a collection of IngressClasses.
*/
export interface io_k8s_api_networking_v1_IngressClassList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of IngressClasses.
*/
items: Array<{ kind?: string; metadata?: { finalizers?: string[]; generation?: number; labels?: Record<string, any>; annotations?: Record<string, any>; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; selfLink?: string; generateName?: string; deletionTimestamp?: Date; name?: string; resourceVersion?: string; deletionGracePeriodSeconds?: number; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; uid?: string; creationTimestamp?: Date }; spec?: { parameters?: { namespace?: string; scope?: string; apiGroup?: string; kind: string; name: string }; controller?: string }; apiVersion?: string }>;
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
* Create a new io_k8s_api_networking_v1_IngressClassList with default values
*/
export function createio_k8s_api_networking_v1_IngressClassList(data?: Partial<io_k8s_api_networking_v1_IngressClassList>): io_k8s_api_networking_v1_IngressClassList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
