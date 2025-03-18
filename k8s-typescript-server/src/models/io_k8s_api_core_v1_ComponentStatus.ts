/**
* ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+
*/
export interface io_k8s_api_core_v1_ComponentStatus {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of component conditions observed
*/
conditions?: Array<{ error?: string; message?: string; status: string; type: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; finalizers?: string[]; generateName?: string; generation?: number; selfLink?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; labels?: Record<string, any>; name?: string; namespace?: string; resourceVersion?: string };
}

/**
* Create a new io_k8s_api_core_v1_ComponentStatus with default values
*/
export function createio_k8s_api_core_v1_ComponentStatus(data?: Partial<io_k8s_api_core_v1_ComponentStatus>): io_k8s_api_core_v1_ComponentStatus {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    conditions: data?.conditions !== undefined ? data.conditions : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
