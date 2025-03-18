/**
* EndpointSliceList represents a list of endpoint slices
*/
export interface io_k8s_api_discovery_v1_EndpointSliceList {
/**
* items is the list of endpoint slices
*/
items: Array<{ ports?: Array<{ appProtocol?: string; name?: string; port?: number; protocol?: 'SCTP' | 'TCP' | 'UDP' }>; addressType: 'FQDN' | 'IPv4' | 'IPv6'; apiVersion?: string; endpoints: Array<{ conditions?: { ready?: boolean; serving?: boolean; terminating?: boolean }; deprecatedTopology?: Record<string, any>; hints?: { forZones?: Array<{ name: string }> }; hostname?: string; nodeName?: string; targetRef?: { fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string }; zone?: string; addresses: string[] }>; kind?: string; metadata?: { deletionGracePeriodSeconds?: number; generation?: number; resourceVersion?: string; selfLink?: string; generateName?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; namespace?: string; annotations?: Record<string, any>; labels?: Record<string, any>; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[] } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_discovery_v1_EndpointSliceList with default values
*/
export function createio_k8s_api_discovery_v1_EndpointSliceList(data?: Partial<io_k8s_api_discovery_v1_EndpointSliceList>): io_k8s_api_discovery_v1_EndpointSliceList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
