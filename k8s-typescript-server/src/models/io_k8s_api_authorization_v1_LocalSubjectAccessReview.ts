/**
* LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
*/
export interface io_k8s_api_authorization_v1_LocalSubjectAccessReview {
/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
spec: { user?: string; extra?: Record<string, any>; groups?: string[]; nonResourceAttributes?: { path?: string; verb?: string }; resourceAttributes?: { group?: string; namespace?: string; subresource?: string; version?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; labelSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; name?: string; resource?: string; verb?: string }; uid?: string };
/**
* SubjectAccessReviewStatus
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
*/
metadata?: { deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; name?: string; namespace?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; creationTimestamp?: Date; generateName?: string; generation?: number; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; labels?: Record<string, any>; uid?: string; finalizers?: string[] };
}

/**
* Create a new io_k8s_api_authorization_v1_LocalSubjectAccessReview with default values
*/
export function createio_k8s_api_authorization_v1_LocalSubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_LocalSubjectAccessReview>): io_k8s_api_authorization_v1_LocalSubjectAccessReview {
  return {
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : { allowed: false },
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
