/**
* SelfSubjectReview contains the user information that the kube-apiserver has about the user making this request. When using impersonation, users will receive the user info of the user being impersonated.  If impersonation or request header authentication is used, any extra keys will have their case ignored and returned as lowercase.
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
*/
metadata?: { name?: string; uid?: string; annotations?: Record<string, any>; labels?: Record<string, any>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; generateName?: string; deletionTimestamp?: Date; generation?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; namespace?: string; resourceVersion?: string; creationTimestamp?: Date; finalizers?: string[]; selfLink?: string; deletionGracePeriodSeconds?: number };
/**
* SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
*/
status?: { userInfo?: { extra?: Record<string, any>; groups?: string[]; uid?: string; username?: string } };
}

/**
* Create a new io_k8s_api_authentication_v1_SelfSubjectReview with default values
*/
export function createio_k8s_api_authentication_v1_SelfSubjectReview(data?: Partial<io_k8s_api_authentication_v1_SelfSubjectReview>): io_k8s_api_authentication_v1_SelfSubjectReview {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    status: data?.status !== undefined ? data.status : {},
  };
}
