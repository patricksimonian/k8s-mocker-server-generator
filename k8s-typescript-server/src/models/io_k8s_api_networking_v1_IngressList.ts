/**
* IngressList is a collection of Ingress.
*/
export interface io_k8s_api_networking_v1_IngressList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of Ingress.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { namespace?: string; uid?: string; annotations?: Record<string, any>; generateName?: string; name?: string; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; deletionTimestamp?: Date; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; selfLink?: string }; spec?: { rules?: Array<{ host?: string; http?: { paths: Array<{ pathType: 'Exact' | 'ImplementationSpecific' | 'Prefix'; backend: { resource?: { apiGroup?: string; kind: string; name: string }; service?: { name: string; port?: { name?: string; number?: number } } }; path?: string }> } }>; tls?: Array<{ hosts?: string[]; secretName?: string }>; defaultBackend?: { resource?: { name: string; apiGroup?: string; kind: string }; service?: { name: string; port?: { name?: string; number?: number } } }; ingressClassName?: string }; status?: { loadBalancer?: { ingress?: Array<{ ip?: string; ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }>; hostname?: string }> } } }>;
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
* Create a new io_k8s_api_networking_v1_IngressList with default values
*/
export function createio_k8s_api_networking_v1_IngressList(data?: Partial<io_k8s_api_networking_v1_IngressList>): io_k8s_api_networking_v1_IngressList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
