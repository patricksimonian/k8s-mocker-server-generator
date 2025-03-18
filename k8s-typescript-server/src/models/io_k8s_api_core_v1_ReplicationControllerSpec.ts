/**
* ReplicationControllerSpec is the specification of a replication controller.
*/
export interface io_k8s_api_core_v1_ReplicationControllerSpec {
/**
* Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
*/
minReadySeconds?: number;
/**
* Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
*/
replicas?: number;
/**
* Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
*/
selector?: Record<string, any>;
/**
* PodTemplateSpec describes the data a pod should have when created from a template
*/
template?: { metadata?: { deletionTimestamp?: Date; finalizers?: string[]; deletionGracePeriodSeconds?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; namespace?: string; resourceVersion?: string; selfLink?: string; uid?: string; generation?: number; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; generateName?: string; creationTimestamp?: Date; labels?: Record<string, any>; annotations?: Record<string, any> }; spec?: Record<string, any> };
}

/**
* Create a new io_k8s_api_core_v1_ReplicationControllerSpec with default values
*/
export function createio_k8s_api_core_v1_ReplicationControllerSpec(data?: Partial<io_k8s_api_core_v1_ReplicationControllerSpec>): io_k8s_api_core_v1_ReplicationControllerSpec {
  return {
    minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
    replicas: data?.replicas !== undefined ? data.replicas : 0,
    selector: data?.selector !== undefined ? data.selector : {},
    template: data?.template !== undefined ? data.template : {},
  };
}
