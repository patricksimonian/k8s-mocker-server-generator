/**
* SubjectAccessReview checks whether or not a user or group can perform an action.
*/
export interface io_k8s_api_authorization_v1_SubjectAccessReview {
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
metadata?: { labels?: Record<string, any>; name?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; deletionTimestamp?: Date; generateName?: string; selfLink?: string; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; namespace?: string };
/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
spec: { uid?: string; user?: string; extra?: Record<string, any>; groups?: string[]; nonResourceAttributes?: { path?: string; verb?: string }; resourceAttributes?: { group?: string; verb?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ values?: string[]; key: string; operator: string }> }; labelSelector?: { requirements?: Array<{ key: string; operator: string; values?: string[] }>; rawSelector?: string }; name?: string; namespace?: string; resource?: string; subresource?: string; version?: string } };
/**
* SubjectAccessReviewStatus
*/
status?: { denied?: boolean; evaluationError?: string; reason?: string; allowed: boolean };
}

/**
* Create a new io_k8s_api_authorization_v1_SubjectAccessReview with default values
*/
export function createio_k8s_api_authorization_v1_SubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_SubjectAccessReview>): io_k8s_api_authorization_v1_SubjectAccessReview {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : { allowed: false },
  };
}
