/**
* LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
* @resourceType localsubjectaccessreview
* @kind Localsubjectaccessreview
*/
export interface io_k8s_api_authorization_v1_LocalSubjectAccessReview {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generateName?: string; generation?: number; namespace?: string; resourceVersion?: string; labels?: Record<string, any>; selfLink?: string; deletionTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; uid?: string };
/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
* @required
* @isObject
*/
spec: { extra?: Record<string, any>; groups?: string[]; nonResourceAttributes?: { path?: string; verb?: string }; resourceAttributes?: { group?: string; name?: string; verb?: string; fieldSelector?: { requirements?: Array<{ key: string; operator: string; values?: string[] }>; rawSelector?: string }; labelSelector?: { requirements?: Array<{ operator: string; values?: string[]; key: string }>; rawSelector?: string }; namespace?: string; resource?: string; subresource?: string; version?: string }; uid?: string; user?: string };
/**
* SubjectAccessReviewStatus
* @isObject
*/
status?: { evaluationError?: string; reason?: string; allowed: boolean; denied?: boolean };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Localsubjectaccessreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_LocalSubjectAccessReview instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_LocalSubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_LocalSubjectAccessReview>): io_k8s_api_authorization_v1_LocalSubjectAccessReview {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : { allowed: false },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
