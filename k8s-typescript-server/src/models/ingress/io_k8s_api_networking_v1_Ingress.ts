/**
* Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
* @resourceType ingress
* @kind Ingress
*/
export interface io_k8s_api_networking_v1_Ingress {
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
metadata?: { generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; resourceVersion?: string; deletionGracePeriodSeconds?: number; name?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; annotations?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string; labels?: Record<string, any>; selfLink?: string; finalizers?: string[]; namespace?: string; uid?: string };
/**
* IngressSpec describes the Ingress the user wishes to exist.
* @isObject
*/
spec?: { defaultBackend?: { resource?: { apiGroup?: string; kind: string; name: string }; service?: { name: string; port?: { name?: string; number?: number } } }; ingressClassName?: string; rules?: Array<{ host?: string; http?: { paths: Array<{ pathType: 'Exact' | 'ImplementationSpecific' | 'Prefix'; backend: { service?: { name: string; port?: { name?: string; number?: number } }; resource?: { apiGroup?: string; kind: string; name: string } }; path?: string }> } }>; tls?: Array<{ hosts?: string[]; secretName?: string }> };
/**
* IngressStatus describe the current state of the Ingress.
* @isObject
*/
status?: { loadBalancer?: { ingress?: Array<{ hostname?: string; ip?: string; ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }> }> } };
}

/**
* Create a new Ingress with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_Ingress instance with defaults applied
*/
export function createio_k8s_api_networking_v1_Ingress(data?: Partial<io_k8s_api_networking_v1_Ingress>): io_k8s_api_networking_v1_Ingress {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
 };
}
