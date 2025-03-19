/**
* Job represents the configuration of a single job.
* @resourceType job
* @kind Job
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
* @isObject
*/
metadata?: { generateName?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; uid?: string; creationTimestamp?: Date; name?: string; finalizers?: string[]; generation?: number; labels?: Record<string, any>; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; selfLink?: string };
/**
* JobSpec describes how the job execution will look like.
* @isObject
*/
spec?: Record<string, any>;
/**
* JobStatus represents the current state of a Job.
* @isObject
*/
status?: { ready?: number; succeeded?: number; terminating?: number; uncountedTerminatedPods?: { failed?: string[]; succeeded?: string[] }; active?: number; failed?: number; failedIndexes?: string; startTime?: Date; completedIndexes?: string; completionTime?: Date; conditions?: Array<{ status: string; type: string; lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string }> };
}

/**
* Create a new Job with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_Job instance with defaults applied
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
