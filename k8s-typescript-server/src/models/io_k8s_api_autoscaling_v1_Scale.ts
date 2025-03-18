/**
* Scale represents a scaling request for a resource.
*/
export interface io_k8s_api_autoscaling_v1_Scale {
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
metadata?: { labels?: Record<string, any>; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; deletionTimestamp?: Date; finalizers?: string[]; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; generateName?: string; name?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; uid?: string; creationTimestamp?: Date; generation?: number; namespace?: string };
/**
* ScaleSpec describes the attributes of a scale subresource.
*/
spec?: { replicas?: number };
/**
* ScaleStatus represents the current status of a scale subresource.
*/
status?: { replicas: number; selector?: string };
}

/**
* Create a new io_k8s_api_autoscaling_v1_Scale with default values
*/
export function createio_k8s_api_autoscaling_v1_Scale(data?: Partial<io_k8s_api_autoscaling_v1_Scale>): io_k8s_api_autoscaling_v1_Scale {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : { replicas: 0 },
  };
}
