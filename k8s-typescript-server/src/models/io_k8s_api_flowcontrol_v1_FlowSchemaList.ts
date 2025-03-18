/**
* FlowSchemaList is a list of FlowSchema objects.
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchemaList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* `items` is a list of FlowSchemas.
*/
items: Array<{ kind?: string; metadata?: { name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; generateName?: string; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; selfLink?: string; finalizers?: string[]; generation?: number; labels?: Record<string, any>; resourceVersion?: string; deletionGracePeriodSeconds?: number; namespace?: string; creationTimestamp?: Date }; spec?: { distinguisherMethod?: { type: string }; matchingPrecedence?: number; priorityLevelConfiguration: { name: string }; rules?: Array<{ nonResourceRules?: Array<{ nonResourceURLs: string[]; verbs: string[] }>; resourceRules?: Array<{ apiGroups: string[]; clusterScope?: boolean; namespaces?: string[]; resources: string[]; verbs: string[] }>; subjects: Array<{ group?: { name: string }; kind: string; serviceAccount?: { name: string; namespace: string }; user?: { name: string } }> }> }; status?: { conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status?: string; type?: string }> }; apiVersion?: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { resourceVersion?: string; selfLink?: string; continue?: string; remainingItemCount?: number };
}

/**
* Create a new io_k8s_api_flowcontrol_v1_FlowSchemaList with default values
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchemaList(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchemaList>): io_k8s_api_flowcontrol_v1_FlowSchemaList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
