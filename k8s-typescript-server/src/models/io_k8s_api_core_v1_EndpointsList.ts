/**
* EndpointsList is a list of endpoints.
*/
export interface io_k8s_api_core_v1_EndpointsList {
/**
* List of endpoints.
*/
items: Array<{ metadata?: { deletionTimestamp?: Date; generateName?: string; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; creationTimestamp?: Date; finalizers?: string[]; generation?: number; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; name?: string; resourceVersion?: string; selfLink?: string; uid?: string }; subsets?: Array<{ ports?: Array<{ appProtocol?: string; name?: string; port: number; protocol?: 'SCTP' | 'TCP' | 'UDP' }>; addresses?: Array<{ hostname?: string; ip: string; nodeName?: string; targetRef?: { apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string } }>; notReadyAddresses?: Array<{ hostname?: string; ip: string; nodeName?: string; targetRef?: { name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string } }> }>; apiVersion?: string; kind?: string }>;
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
* Create a new io_k8s_api_core_v1_EndpointsList with default values
*/
export function createio_k8s_api_core_v1_EndpointsList(data?: Partial<io_k8s_api_core_v1_EndpointsList>): io_k8s_api_core_v1_EndpointsList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
