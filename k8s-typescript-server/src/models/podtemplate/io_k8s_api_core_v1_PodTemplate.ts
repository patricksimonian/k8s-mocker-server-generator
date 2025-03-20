/**
* PodTemplate describes a template for creating copies of a predefined pod.
* @resourceType podtemplate
* @kind Podtemplate
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
* @isObject
*/
metadata?: { creationTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; name?: string; resourceVersion?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generateName?: string; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; uid?: string; annotations?: Record<string, any>; generation?: number; namespace?: string; selfLink?: string };
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @isObject
*/
template?: { metadata?: { annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; finalizers?: string[]; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; resourceVersion?: string; generation?: number; name?: string; uid?: string; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; selfLink?: string; labels?: Record<string, any>; namespace?: string }; spec?: Record<string, any> };
}

/**
* Create a new Podtemplate with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodTemplate instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodTemplate(data?: Partial<io_k8s_api_core_v1_PodTemplate>): io_k8s_api_core_v1_PodTemplate {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   template: data?.template !== undefined ? data.template : {},
 };
}
