/**
* TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
* @resourceType tokenreview
* @kind Tokenreview
*/
export interface io_k8s_api_authentication_v1_TokenReview {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { finalizers?: string[]; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; annotations?: Record<string, any>; creationTimestamp?: Date; resourceVersion?: string; uid?: string; generateName?: string; labels?: Record<string, any>; name?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; selfLink?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generation?: number; namespace?: string };
/**
* TokenReviewSpec is a description of the token authentication request.
* @required
* @isObject
*/
spec: { token?: string; audiences?: string[] };
/**
* TokenReviewStatus is the result of the token authentication request.
* @isObject
*/
status?: { error?: string; user?: { extra?: Record<string, any>; groups?: string[]; uid?: string; username?: string }; audiences?: string[]; authenticated?: boolean };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Tokenreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenReview instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenReview(data?: Partial<io_k8s_api_authentication_v1_TokenReview>): io_k8s_api_authentication_v1_TokenReview {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
