/**
* Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
* @resourceType ingress
* @kind Ingress
*/
export interface io_k8s_api_networking_v1_Ingress {
/**
* IngressStatus describe the current state of the Ingress.
* @isObject
*/
status?: { loadBalancer?: { ingress?: Array<{ hostname?: string; ip?: string; ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }> }> } };
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
* @isObject
*/
metadata?: { name?: string; uid?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; namespace?: string; resourceVersion?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; generateName?: string; generation?: number; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string };
/**
* IngressSpec describes the Ingress the user wishes to exist.
* @isObject
*/
spec?: { defaultBackend?: { resource?: { apiGroup?: string; kind: string; name: string }; service?: { port?: { number?: number; name?: string }; name: string } }; ingressClassName?: string; rules?: Array<{ host?: string; http?: { paths: Array<{ backend: { resource?: { name: string; apiGroup?: string; kind: string }; service?: { name: string; port?: { name?: string; number?: number } } }; path?: string; pathType: 'Exact' | 'ImplementationSpecific' | 'Prefix' }> } }>; tls?: Array<{ hosts?: string[]; secretName?: string }> };
}

/**
* Create a new Ingress with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_Ingress instance with defaults applied
*/
export function createio_k8s_api_networking_v1_Ingress(data?: Partial<io_k8s_api_networking_v1_Ingress>): io_k8s_api_networking_v1_Ingress {
 return {
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
