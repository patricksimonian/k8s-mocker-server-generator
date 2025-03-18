/**
* FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchema {
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
metadata?: { annotations?: Record<string, any>; finalizers?: string[]; generation?: number; name?: string; resourceVersion?: string; deletionTimestamp?: Date; labels?: Record<string, any>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; creationTimestamp?: Date; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; deletionGracePeriodSeconds?: number; generateName?: string; namespace?: string; selfLink?: string; uid?: string };
/**
* FlowSchemaSpec describes how the FlowSchema's specification looks like.
*/
spec?: { priorityLevelConfiguration: { name: string }; rules?: Array<{ nonResourceRules?: Array<{ nonResourceURLs: string[]; verbs: string[] }>; resourceRules?: Array<{ namespaces?: string[]; resources: string[]; verbs: string[]; apiGroups: string[]; clusterScope?: boolean }>; subjects: Array<{ group?: { name: string }; kind: string; serviceAccount?: { name: string; namespace: string }; user?: { name: string } }> }>; distinguisherMethod?: { type: string }; matchingPrecedence?: number };
/**
* FlowSchemaStatus represents the current state of a FlowSchema.
*/
status?: { conditions?: Array<{ reason?: string; status?: string; type?: string; lastTransitionTime?: Date; message?: string }> };
}

/**
* Create a new io_k8s_api_flowcontrol_v1_FlowSchema with default values
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchema(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchema>): io_k8s_api_flowcontrol_v1_FlowSchema {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { priorityLevelConfiguration: { name: '' } },
    status: data?.status !== undefined ? data.status : {},
  };
}
