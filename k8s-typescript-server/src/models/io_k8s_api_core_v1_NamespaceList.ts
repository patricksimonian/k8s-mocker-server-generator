/**
* NamespaceList is a list of Namespaces.
*/
export interface io_k8s_api_core_v1_NamespaceList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
*/
items: Array<{ metadata?: { deletionGracePeriodSeconds?: number; creationTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; name?: string; namespace?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; uid?: string; annotations?: Record<string, any>; resourceVersion?: string; selfLink?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; generateName?: string; generation?: number; deletionTimestamp?: Date }; spec?: { finalizers?: string[] }; status?: { conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }>; phase?: 'Active' | 'Terminating' }; apiVersion?: string; kind?: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { remainingItemCount?: number; resourceVersion?: string; selfLink?: string; continue?: string };
}

/**
* Create a new io_k8s_api_core_v1_NamespaceList with default values
*/
export function createio_k8s_api_core_v1_NamespaceList(data?: Partial<io_k8s_api_core_v1_NamespaceList>): io_k8s_api_core_v1_NamespaceList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
