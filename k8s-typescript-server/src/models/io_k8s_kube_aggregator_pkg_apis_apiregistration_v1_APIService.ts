/**
* APIService represents a server for a particular GroupVersion. Name must be "version.group".
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService {
/**
* APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
*/
spec?: { group?: string; groupPriorityMinimum: number; insecureSkipTLSVerify?: boolean; service?: { name?: string; namespace?: string; port?: number }; version?: string; versionPriority: number; caBundle?: string };
/**
* APIServiceStatus contains derived information about an API server
*/
status?: { conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { finalizers?: string[]; labels?: Record<string, any>; name?: string; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; namespace?: string; deletionTimestamp?: Date; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; selfLink?: string; generateName?: string; generation?: number; resourceVersion?: string };
}

/**
* Create a new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService with default values
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService {
  return {
    spec: data?.spec !== undefined ? data.spec : { groupPriorityMinimum: 0, versionPriority: 0 },
    status: data?.status !== undefined ? data.status : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
