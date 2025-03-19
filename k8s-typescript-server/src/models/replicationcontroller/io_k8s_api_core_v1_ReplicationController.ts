/**
* ReplicationController represents the configuration of a replication controller.
* @resourceType replicationcontroller
* @kind Replicationcontroller
*/
export interface io_k8s_api_core_v1_ReplicationController {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { uid?: string; deletionTimestamp?: Date; generateName?: string; namespace?: string; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; name?: string; selfLink?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; finalizers?: string[]; generation?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; labels?: Record<string, any> };
/**
* ReplicationControllerSpec is the specification of a replication controller.
* @isObject
*/
spec?: { selector?: Record<string, any>; template?: { spec?: Record<string, any>; metadata?: { deletionTimestamp?: Date; name?: string; selfLink?: string; resourceVersion?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; labels?: Record<string, any>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; generation?: number; deletionGracePeriodSeconds?: number; finalizers?: string[]; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; namespace?: string; uid?: string } }; minReadySeconds?: number; replicas?: number };
/**
* ReplicationControllerStatus represents the current status of a replication controller.
* @isObject
*/
status?: { fullyLabeledReplicas?: number; observedGeneration?: number; readyReplicas?: number; replicas: number; availableReplicas?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Replicationcontroller with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ReplicationController instance with defaults applied
*/
export function createio_k8s_api_core_v1_ReplicationController(data?: Partial<io_k8s_api_core_v1_ReplicationController>): io_k8s_api_core_v1_ReplicationController {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : { replicas: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
