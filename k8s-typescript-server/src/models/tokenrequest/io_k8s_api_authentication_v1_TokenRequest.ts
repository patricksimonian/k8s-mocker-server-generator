/**
* TokenRequest requests a token for a given service account.
* @resourceType tokenrequest
* @kind Tokenrequest
*/
export interface io_k8s_api_authentication_v1_TokenRequest {
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
metadata?: { creationTimestamp?: Date; deletionTimestamp?: Date; generation?: number; resourceVersion?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; name?: string; annotations?: Record<string, any>; namespace?: string; selfLink?: string; uid?: string; finalizers?: string[]; generateName?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }> };
/**
* TokenRequestSpec contains client provided parameters of a token request.
* @required
* @isObject
*/
spec: { audiences: string[]; boundObjectRef?: { name?: string; uid?: string; apiVersion?: string; kind?: string }; expirationSeconds?: number };
/**
* TokenRequestStatus is the result of a token request.
* @isObject
*/
status?: { token: string; expirationTimestamp: Date };
}

/**
* Create a new Tokenrequest with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenRequest instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenRequest(data?: Partial<io_k8s_api_authentication_v1_TokenRequest>): io_k8s_api_authentication_v1_TokenRequest {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { audiences: [] },
   status: data?.status !== undefined ? data.status : { expirationTimestamp: '', token: '' },
 };
}
