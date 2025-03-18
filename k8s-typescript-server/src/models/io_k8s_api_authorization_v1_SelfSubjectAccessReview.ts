/**
* SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
*/
export interface io_k8s_api_authorization_v1_SelfSubjectAccessReview {
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
metadata?: { generation?: number; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; namespace?: string; uid?: string; deletionGracePeriodSeconds?: number; generateName?: string; deletionTimestamp?: Date; finalizers?: string[]; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; name?: string; annotations?: Record<string, any>; labels?: Record<string, any> };
/**
* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
spec: { nonResourceAttributes?: { path?: string; verb?: string }; resourceAttributes?: { name?: string; namespace?: string; verb?: string; version?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ values?: string[]; key: string; operator: string }> }; group?: string; labelSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; resource?: string; subresource?: string } };
/**
* SubjectAccessReviewStatus
*/
status?: { evaluationError?: string; reason?: string; allowed: boolean; denied?: boolean };
}

/**
* Create a new io_k8s_api_authorization_v1_SelfSubjectAccessReview with default values
*/
export function createio_k8s_api_authorization_v1_SelfSubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectAccessReview>): io_k8s_api_authorization_v1_SelfSubjectAccessReview {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : { allowed: false },
  };
}
