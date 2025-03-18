/**
* EndpointsList is a list of endpoints.
* @resourceType endpointslist
* @kind Endpointslist
*/
export interface io_k8s_api_core_v1_EndpointsList {
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of endpoints.
* @required
* @isArray
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { deletionGracePeriodSeconds?: number; resourceVersion?: string; selfLink?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; annotations?: Record<string, any>; creationTimestamp?: Date; generation?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; name?: string; uid?: string; deletionTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; generateName?: string; namespace?: string }; subsets?: Array<{ addresses?: Array<{ targetRef?: { apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string }; hostname?: string; ip: string; nodeName?: string }>; notReadyAddresses?: Array<{ hostname?: string; ip: string; nodeName?: string; targetRef?: { name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string } }>; ports?: Array<{ port: number; protocol?: 'SCTP' | 'TCP' | 'UDP'; appProtocol?: string; name?: string }> }> }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Endpointslist with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EndpointsList instance with defaults applied
*/
export function createio_k8s_api_core_v1_EndpointsList(data?: Partial<io_k8s_api_core_v1_EndpointsList>): io_k8s_api_core_v1_EndpointsList {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : [],
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
