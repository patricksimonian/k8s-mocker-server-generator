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
metadata?: { deletionTimestamp?: Date; name?: string; uid?: string; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; selfLink?: string; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; finalizers?: string[]; generation?: number };
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @isObject
*/
template?: { metadata?: { deletionGracePeriodSeconds?: number; finalizers?: string[]; resourceVersion?: string; generateName?: string; generation?: number; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; name?: string; namespace?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; labels?: Record<string, any>; selfLink?: string; uid?: string }; spec?: Record<string, any> };
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
