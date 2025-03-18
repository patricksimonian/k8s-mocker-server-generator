/**
* TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
*/
export interface io_k8s_api_authentication_v1_TokenReview {
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
metadata?: { creationTimestamp?: Date; uid?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; labels?: Record<string, any>; selfLink?: string; namespace?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; resourceVersion?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; generateName?: string; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string };
/**
* TokenReviewSpec is a description of the token authentication request.
*/
spec: { token?: string; audiences?: string[] };
/**
* TokenReviewStatus is the result of the token authentication request.
*/
status?: { audiences?: string[]; authenticated?: boolean; error?: string; user?: { groups?: string[]; uid?: string; username?: string; extra?: Record<string, any> } };
}

/**
* Create a new io_k8s_api_authentication_v1_TokenReview with default values
*/
export function createio_k8s_api_authentication_v1_TokenReview(data?: Partial<io_k8s_api_authentication_v1_TokenReview>): io_k8s_api_authentication_v1_TokenReview {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : {},
  };
}
