/**
* ReplicationController represents the configuration of a replication controller.
* @resourceType replicationcontroller
* @kind Replicationcontroller
*/
export interface io_k8s_api_core_v1_ReplicationController {
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
metadata?: { selfLink?: string; uid?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; generateName?: string; generation?: number; name?: string; creationTimestamp?: Date; resourceVersion?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; labels?: Record<string, any>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; namespace?: string };
/**
* ReplicationControllerSpec is the specification of a replication controller.
* @isObject
*/
spec?: { template?: { spec?: Record<string, any>; metadata?: { generateName?: string; name?: string; uid?: string; deletionTimestamp?: Date; labels?: Record<string, any>; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; selfLink?: string; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string } }; minReadySeconds?: number; replicas?: number; selector?: Record<string, any> };
/**
* ReplicationControllerStatus represents the current status of a replication controller.
* @isObject
*/
status?: { fullyLabeledReplicas?: number; observedGeneration?: number; readyReplicas?: number; replicas: number; availableReplicas?: number; conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }> };
}

/**
* Create a new Replicationcontroller with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ReplicationController instance with defaults applied
*/
export function createio_k8s_api_core_v1_ReplicationController(data?: Partial<io_k8s_api_core_v1_ReplicationController>): io_k8s_api_core_v1_ReplicationController {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : { replicas: 0 },
 };
}
