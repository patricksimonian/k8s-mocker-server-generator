/**
* SelfSubjectReview contains the user information that the kube-apiserver has about the user making this request. When using impersonation, users will receive the user info of the user being impersonated.  If impersonation or request header authentication is used, any extra keys will have their case ignored and returned as lowercase.
* @resourceType selfsubjectreview
* @kind Selfsubjectreview
*/
export interface io_k8s_api_authentication_v1_SelfSubjectReview {
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
metadata?: { annotations?: Record<string, any>; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; selfLink?: string; finalizers?: string[]; name?: string; deletionGracePeriodSeconds?: number; generateName?: string; generation?: number; labels?: Record<string, any>; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; resourceVersion?: string; uid?: string; creationTimestamp?: Date; deletionTimestamp?: Date; namespace?: string };
/**
* SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
* @isObject
*/
status?: { userInfo?: { extra?: Record<string, any>; groups?: string[]; uid?: string; username?: string } };
}

/**
* Create a new Selfsubjectreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_SelfSubjectReview instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_SelfSubjectReview(data?: Partial<io_k8s_api_authentication_v1_SelfSubjectReview>): io_k8s_api_authentication_v1_SelfSubjectReview {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   status: data?.status !== undefined ? data.status : {},
 };
}
