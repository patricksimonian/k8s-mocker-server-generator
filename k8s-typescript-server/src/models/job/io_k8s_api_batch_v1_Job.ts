/**
* Job represents the configuration of a single job.
* @resourceType job
* @kind Job
*/
export interface io_k8s_api_batch_v1_Job {
/**
* JobSpec describes how the job execution will look like.
* @isObject
*/
spec?: Record<string, any>;
/**
* JobStatus represents the current state of a Job.
* @isObject
*/
status?: { active?: number; conditions?: Array<{ status: string; type: string; lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string }>; failed?: number; ready?: number; uncountedTerminatedPods?: { failed?: string[]; succeeded?: string[] }; completedIndexes?: string; completionTime?: Date; failedIndexes?: string; startTime?: Date; succeeded?: number; terminating?: number };
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
metadata?: { managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; uid?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; labels?: Record<string, any>; resourceVersion?: string; creationTimestamp?: Date; finalizers?: string[]; namespace?: string; annotations?: Record<string, any>; generateName?: string; selfLink?: string; generation?: number; name?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }> };
}

/**
* Create a new Job with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_Job instance with defaults applied
*/
export function createio_k8s_api_batch_v1_Job(data?: Partial<io_k8s_api_batch_v1_Job>): io_k8s_api_batch_v1_Job {
 return {
   spec: data?.spec !== undefined ? data.spec : { template: {} },
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
