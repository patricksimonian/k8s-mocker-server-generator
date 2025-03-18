/**
* Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
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
*/
metadata?: { finalizers?: string[]; generateName?: string; labels?: Record<string, any>; name?: string; selfLink?: string; deletionGracePeriodSeconds?: number; namespace?: string; creationTimestamp?: Date; generation?: number; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; resourceVersion?: string; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }> };
/**
* PodSpec is a description of a pod.
*/
spec?: Record<string, any>;
/**
* PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
*/
status?: Record<string, any>;
}

/**
* Create a new io_k8s_api_core_v1_Pod with default values
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
