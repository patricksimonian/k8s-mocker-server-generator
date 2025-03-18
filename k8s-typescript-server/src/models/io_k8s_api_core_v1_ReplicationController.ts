/**
* ReplicationController represents the configuration of a replication controller.
*/
export interface io_k8s_api_core_v1_ReplicationController {
/**
* ReplicationControllerStatus represents the current status of a replication controller.
*/
status?: { availableReplicas?: number; conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }>; fullyLabeledReplicas?: number; observedGeneration?: number; readyReplicas?: number; replicas: number };
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
metadata?: { annotations?: Record<string, any>; deletionTimestamp?: Date; generation?: number; resourceVersion?: string; selfLink?: string; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; finalizers?: string[]; creationTimestamp?: Date; labels?: Record<string, any>; name?: string; namespace?: string; uid?: string };
/**
* ReplicationControllerSpec is the specification of a replication controller.
*/
spec?: { minReadySeconds?: number; replicas?: number; selector?: Record<string, any>; template?: { metadata?: { uid?: string; annotations?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; deletionGracePeriodSeconds?: number; generateName?: string; resourceVersion?: string; generation?: number; labels?: Record<string, any>; name?: string; namespace?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }> }; spec?: Record<string, any> } };
}

/**
* Create a new io_k8s_api_core_v1_ReplicationController with default values
*/
export function createio_k8s_api_core_v1_ReplicationController(data?: Partial<io_k8s_api_core_v1_ReplicationController>): io_k8s_api_core_v1_ReplicationController {
  return {
    status: data?.status !== undefined ? data.status : { replicas: 0 },
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
  };
}
