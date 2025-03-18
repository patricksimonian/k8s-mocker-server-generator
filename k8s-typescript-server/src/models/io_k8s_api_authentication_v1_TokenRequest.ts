/**
* TokenRequest requests a token for a given service account.
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
*/
metadata?: { name?: string; generateName?: string; labels?: Record<string, any>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; uid?: string; creationTimestamp?: Date; namespace?: string; annotations?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; finalizers?: string[]; generation?: number; resourceVersion?: string; selfLink?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date };
/**
* TokenRequestSpec contains client provided parameters of a token request.
*/
spec: { audiences: string[]; boundObjectRef?: { apiVersion?: string; kind?: string; name?: string; uid?: string }; expirationSeconds?: number };
/**
* TokenRequestStatus is the result of a token request.
*/
status?: { expirationTimestamp: Date; token: string };
}

/**
* Create a new io_k8s_api_authentication_v1_TokenRequest with default values
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
