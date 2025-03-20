/**
* Scale represents a scaling request for a resource.
* @resourceType scale
* @kind Scale
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
* @isObject
*/
metadata?: { finalizers?: string[]; namespace?: string; labels?: Record<string, any>; resourceVersion?: string; uid?: string; creationTimestamp?: Date; generateName?: string; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; name?: string; selfLink?: string; annotations?: Record<string, any>; generation?: number };
/**
* ScaleSpec describes the attributes of a scale subresource.
* @isObject
*/
spec?: { replicas?: number };
/**
* ScaleStatus represents the current status of a scale subresource.
* @isObject
*/
status?: { replicas: number; selector?: string };
}

/**
* Create a new Scale with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_Scale instance with defaults applied
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
