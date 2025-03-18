/**
* ControllerRevisionList is a resource containing a list of ControllerRevision objects.
*/
export interface io_k8s_api_apps_v1_ControllerRevisionList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is the list of ControllerRevisions
*/
items: Array<{ apiVersion?: string; data?: Record<string, any>; kind?: string; metadata?: { namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; name?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; generateName?: string; generation?: number; selfLink?: string; resourceVersion?: string; uid?: string }; revision: number }>;
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
* Create a new io_k8s_api_apps_v1_ControllerRevisionList with default values
*/
export function createio_k8s_api_apps_v1_ControllerRevisionList(data?: Partial<io_k8s_api_apps_v1_ControllerRevisionList>): io_k8s_api_apps_v1_ControllerRevisionList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
