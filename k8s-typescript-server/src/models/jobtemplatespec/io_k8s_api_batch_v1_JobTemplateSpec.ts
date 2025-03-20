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
metadata?: { finalizers?: string[]; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; name?: string; namespace?: string; resourceVersion?: string; selfLink?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; uid?: string; deletionTimestamp?: Date; generation?: number };
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
