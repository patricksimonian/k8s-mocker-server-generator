/**
* JobTemplateSpec describes the data a Job should have when created from a template
*/
export interface io_k8s_api_batch_v1_JobTemplateSpec {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { name?: string; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; uid?: string; deletionTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; resourceVersion?: string; generateName?: string; generation?: number };
/**
* JobSpec describes how the job execution will look like.
*/
spec?: Record<string, any>;
}

/**
* Create a new io_k8s_api_batch_v1_JobTemplateSpec with default values
*/
export function createio_k8s_api_batch_v1_JobTemplateSpec(data?: Partial<io_k8s_api_batch_v1_JobTemplateSpec>): io_k8s_api_batch_v1_JobTemplateSpec {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { template: {} },
  };
}
