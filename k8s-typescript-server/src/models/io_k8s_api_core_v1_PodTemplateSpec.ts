/**
* PodTemplateSpec describes the data a pod should have when created from a template
*/
export interface io_k8s_api_core_v1_PodTemplateSpec {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { deletionGracePeriodSeconds?: number; generation?: number; namespace?: string; selfLink?: string; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; labels?: Record<string, any>; name?: string; deletionTimestamp?: Date; generateName?: string; resourceVersion?: string; finalizers?: string[]; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }> };
/**
* PodSpec is a description of a pod.
*/
spec?: Record<string, any>;
}

/**
* Create a new io_k8s_api_core_v1_PodTemplateSpec with default values
*/
export function createio_k8s_api_core_v1_PodTemplateSpec(data?: Partial<io_k8s_api_core_v1_PodTemplateSpec>): io_k8s_api_core_v1_PodTemplateSpec {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { containers: [] },
  };
}
