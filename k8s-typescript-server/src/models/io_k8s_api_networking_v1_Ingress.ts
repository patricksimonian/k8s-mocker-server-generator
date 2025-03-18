/**
* Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
*/
export interface io_k8s_api_networking_v1_Ingress {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { annotations?: Record<string, any>; resourceVersion?: string; uid?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generateName?: string; finalizers?: string[]; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; deletionTimestamp?: Date; generation?: number; name?: string };
/**
* IngressSpec describes the Ingress the user wishes to exist.
*/
spec?: { defaultBackend?: { resource?: { apiGroup?: string; kind: string; name: string }; service?: { port?: { name?: string; number?: number }; name: string } }; ingressClassName?: string; rules?: Array<{ host?: string; http?: { paths: Array<{ backend: { service?: { name: string; port?: { name?: string; number?: number } }; resource?: { apiGroup?: string; kind: string; name: string } }; path?: string; pathType: 'Exact' | 'ImplementationSpecific' | 'Prefix' }> } }>; tls?: Array<{ hosts?: string[]; secretName?: string }> };
/**
* IngressStatus describe the current state of the Ingress.
*/
status?: { loadBalancer?: { ingress?: Array<{ hostname?: string; ip?: string; ports?: Array<{ port: number; protocol: 'SCTP' | 'TCP' | 'UDP'; error?: string }> }> } };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_networking_v1_Ingress with default values
*/
export function createio_k8s_api_networking_v1_Ingress(data?: Partial<io_k8s_api_networking_v1_Ingress>): io_k8s_api_networking_v1_Ingress {
  return {
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
