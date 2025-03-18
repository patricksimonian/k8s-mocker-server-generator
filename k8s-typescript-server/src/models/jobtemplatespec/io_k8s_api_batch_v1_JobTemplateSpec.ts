/**
* JobTemplateSpec describes the data a Job should have when created from a template
* @resourceType jobtemplatespec
* @kind Jobtemplatespec
*/
export interface io_k8s_api_batch_v1_JobTemplateSpec {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; labels?: Record<string, any>; namespace?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; finalizers?: string[]; uid?: string; generateName?: string; name?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; generation?: number };
/**
* JobSpec describes how the job execution will look like.
* @isObject
*/
spec?: Record<string, any>;
}

/**
* Create a new Jobtemplatespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_JobTemplateSpec instance with defaults applied
*/
export function createio_k8s_api_batch_v1_JobTemplateSpec(data?: Partial<io_k8s_api_batch_v1_JobTemplateSpec>): io_k8s_api_batch_v1_JobTemplateSpec {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { template: {} },
 };
}
