/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @resourceType podtemplatespec
* @kind Podtemplatespec
*/
export interface io_k8s_api_core_v1_PodTemplateSpec {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionGracePeriodSeconds?: number; generateName?: string; namespace?: string; resourceVersion?: string; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; name?: string; uid?: string; deletionTimestamp?: Date; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; finalizers?: string[]; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }> };
/**
* PodSpec is a description of a pod.
* @isObject
*/
spec?: Record<string, any>;
}

/**
* Create a new Podtemplatespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodTemplateSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodTemplateSpec(data?: Partial<io_k8s_api_core_v1_PodTemplateSpec>): io_k8s_api_core_v1_PodTemplateSpec {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { containers: [] },
 };
}
