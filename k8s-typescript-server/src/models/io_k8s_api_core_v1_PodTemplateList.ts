/**
* PodTemplateList is a list of PodTemplates.
*/
export interface io_k8s_api_core_v1_PodTemplateList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of pod templates
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generation?: number; name?: string; namespace?: string; selfLink?: string; generateName?: string; labels?: Record<string, any>; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string }; template?: { metadata?: { creationTimestamp?: Date; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; namespace?: string; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; finalizers?: string[]; generation?: number; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; uid?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; name?: string; deletionTimestamp?: Date; generateName?: string }; spec?: Record<string, any> } }>;
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
* Create a new io_k8s_api_core_v1_PodTemplateList with default values
*/
export function createio_k8s_api_core_v1_PodTemplateList(data?: Partial<io_k8s_api_core_v1_PodTemplateList>): io_k8s_api_core_v1_PodTemplateList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
