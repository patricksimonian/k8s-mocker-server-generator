/**
* SubjectAccessReview checks whether or not a user or group can perform an action.
* @resourceType subjectaccessreview
* @kind Subjectaccessreview
*/
export interface io_k8s_api_authorization_v1_SubjectAccessReview {
/**
* SubjectAccessReviewStatus
* @isObject
*/
status?: { allowed: boolean; denied?: boolean; evaluationError?: string; reason?: string };
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
metadata?: { finalizers?: string[]; generateName?: string; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; deletionGracePeriodSeconds?: number; selfLink?: string; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; creationTimestamp?: Date; generation?: number; name?: string; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; labels?: Record<string, any> };
/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
* @required
* @isObject
*/
spec: { user?: string; extra?: Record<string, any>; groups?: string[]; nonResourceAttributes?: { verb?: string; path?: string }; resourceAttributes?: { labelSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; namespace?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; group?: string; name?: string; resource?: string; subresource?: string; verb?: string; version?: string }; uid?: string };
}

/**
* Create a new Subjectaccessreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SubjectAccessReview instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_SubjectAccessReview>): io_k8s_api_authorization_v1_SubjectAccessReview {
 return {
   status: data?.status !== undefined ? data.status : { allowed: false },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
