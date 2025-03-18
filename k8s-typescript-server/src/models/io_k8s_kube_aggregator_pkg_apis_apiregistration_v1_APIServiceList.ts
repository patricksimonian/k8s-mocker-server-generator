/**
* APIServiceList is a list of APIService objects.
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is the list of APIService
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { deletionGracePeriodSeconds?: number; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; labels?: Record<string, any>; namespace?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; name?: string; resourceVersion?: string; uid?: string; creationTimestamp?: Date; generation?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; selfLink?: string; finalizers?: string[]; generateName?: string }; spec?: { versionPriority: number; caBundle?: string; group?: string; groupPriorityMinimum: number; insecureSkipTLSVerify?: boolean; service?: { namespace?: string; port?: number; name?: string }; version?: string }; status?: { conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }> } }>;
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
* Create a new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList with default values
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
