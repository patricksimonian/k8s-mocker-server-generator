/**
* TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
* @resourceType tokenreview
* @kind Tokenreview
*/
export interface io_k8s_api_authentication_v1_TokenReview {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionGracePeriodSeconds?: number; finalizers?: string[]; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string; namespace?: string; uid?: string; annotations?: Record<string, any>; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; labels?: Record<string, any>; name?: string };
/**
* TokenReviewSpec is a description of the token authentication request.
* @required
* @isObject
*/
spec: { audiences?: string[]; token?: string };
/**
* TokenReviewStatus is the result of the token authentication request.
* @isObject
*/
status?: { authenticated?: boolean; error?: string; user?: { extra?: Record<string, any>; groups?: string[]; uid?: string; username?: string }; audiences?: string[] };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Tokenreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenReview instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenReview(data?: Partial<io_k8s_api_authentication_v1_TokenReview>): io_k8s_api_authentication_v1_TokenReview {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
