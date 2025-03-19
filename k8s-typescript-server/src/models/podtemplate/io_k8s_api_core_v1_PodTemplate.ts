/**
* PodTemplate describes a template for creating copies of a predefined pod.
* @resourceType podtemplate
* @kind Podtemplate
*/
export interface io_k8s_api_core_v1_PodTemplate {
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @isObject
*/
template?: { metadata?: { creationTimestamp?: Date; finalizers?: string[]; generateName?: string; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; selfLink?: string; annotations?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; resourceVersion?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; uid?: string; generation?: number; labels?: Record<string, any>; name?: string }; spec?: Record<string, any> };
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
metadata?: { labels?: Record<string, any>; name?: string; namespace?: string; deletionTimestamp?: Date; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; resourceVersion?: string; generateName?: string; generation?: number; uid?: string };
}

/**
* Create a new Podtemplate with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodTemplate instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodTemplate(data?: Partial<io_k8s_api_core_v1_PodTemplate>): io_k8s_api_core_v1_PodTemplate {
 return {
   template: data?.template !== undefined ? data.template : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
