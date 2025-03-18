/**
* RuntimeClassList is a list of RuntimeClass objects.
*/
export interface io_k8s_api_node_v1_RuntimeClassList {
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is a list of schema objects.
*/
items: Array<{ kind?: string; metadata?: { namespace?: string; uid?: string; creationTimestamp?: Date; labels?: Record<string, any>; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; deletionTimestamp?: Date; name?: string; resourceVersion?: string; selfLink?: string; generateName?: string; generation?: number; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; finalizers?: string[] }; overhead?: { podFixed?: Record<string, any> }; scheduling?: { nodeSelector?: Record<string, any>; tolerations?: Array<{ effect?: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key?: string; operator?: 'Equal' | 'Exists'; tolerationSeconds?: number; value?: string }> }; apiVersion?: string; handler: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_node_v1_RuntimeClassList with default values
*/
export function createio_k8s_api_node_v1_RuntimeClassList(data?: Partial<io_k8s_api_node_v1_RuntimeClassList>): io_k8s_api_node_v1_RuntimeClassList {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
