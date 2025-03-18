/**
* Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
* @resourceType pod
* @kind Pod
*/
export interface io_k8s_api_core_v1_Pod {
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
metadata?: { deletionTimestamp?: Date; finalizers?: string[]; name?: string; uid?: string; namespace?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; generateName?: string; labels?: Record<string, any>; resourceVersion?: string };
/**
* PodSpec is a description of a pod.
* @isObject
*/
spec?: Record<string, any>;
/**
* PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
* @isObject
*/
status?: Record<string, any>;
}

/**
* Create a new Pod with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Pod instance with defaults applied
*/
export function createio_k8s_api_core_v1_Pod(data?: Partial<io_k8s_api_core_v1_Pod>): io_k8s_api_core_v1_Pod {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { containers: [] },
   status: data?.status !== undefined ? data.status : {},
 };
}
