/**
* PodTemplate describes a template for creating copies of a predefined pod.
*/
export interface io_k8s_api_core_v1_PodTemplate {
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
metadata?: { ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; resourceVersion?: string; creationTimestamp?: Date; finalizers?: string[]; generateName?: string; labels?: Record<string, any>; namespace?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; name?: string; deletionTimestamp?: Date; generation?: number; selfLink?: string; uid?: string };
/**
* PodTemplateSpec describes the data a pod should have when created from a template
*/
template?: { metadata?: { creationTimestamp?: Date; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; annotations?: Record<string, any>; deletionTimestamp?: Date; generation?: number; name?: string; selfLink?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; generateName?: string; labels?: Record<string, any>; namespace?: string; resourceVersion?: string; uid?: string }; spec?: Record<string, any> };
}

/**
* Create a new io_k8s_api_core_v1_PodTemplate with default values
*/
export function createio_k8s_api_core_v1_PodTemplate(data?: Partial<io_k8s_api_core_v1_PodTemplate>): io_k8s_api_core_v1_PodTemplate {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    template: data?.template !== undefined ? data.template : {},
  };
}
