/**
* Job represents the configuration of a single job.
*/
export interface io_k8s_api_batch_v1_Job {
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
metadata?: { annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; finalizers?: string[]; generateName?: string; resourceVersion?: string; uid?: string; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; name?: string; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; selfLink?: string };
/**
* JobSpec describes how the job execution will look like.
*/
spec?: Record<string, any>;
/**
* JobStatus represents the current state of a Job.
*/
status?: { failedIndexes?: string; startTime?: Date; terminating?: number; uncountedTerminatedPods?: { succeeded?: string[]; failed?: string[] }; active?: number; conditions?: Array<{ lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; failed?: number; succeeded?: number; completedIndexes?: string; completionTime?: Date; ready?: number };
}

/**
* Create a new io_k8s_api_batch_v1_Job with default values
*/
export function createio_k8s_api_batch_v1_Job(data?: Partial<io_k8s_api_batch_v1_Job>): io_k8s_api_batch_v1_Job {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { template: {} },
    status: data?.status !== undefined ? data.status : {},
  };
}
