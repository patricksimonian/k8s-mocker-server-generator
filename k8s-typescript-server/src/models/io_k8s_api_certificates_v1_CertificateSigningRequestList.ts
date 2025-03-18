/**
* CertificateSigningRequestList is a collection of CertificateSigningRequest objects
*/
export interface io_k8s_api_certificates_v1_CertificateSigningRequestList {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { remainingItemCount?: number; resourceVersion?: string; selfLink?: string; continue?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is a collection of CertificateSigningRequest objects
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { selfLink?: string; uid?: string; annotations?: Record<string, any>; finalizers?: string[]; generation?: number; generateName?: string; name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; resourceVersion?: string; labels?: Record<string, any>; namespace?: string }; spec: { extra?: Record<string, any>; groups?: string[]; request: string; signerName: string; uid?: string; usages?: 'any' | 'cert sign' | 'client auth' | 'code signing' | 'content commitment' | 'crl sign' | 'data encipherment' | 'decipher only' | 'digital signature' | 'email protection' | 'encipher only' | 'ipsec end system' | 'ipsec tunnel' | 'ipsec user' | 'key agreement' | 'key encipherment' | 'microsoft sgc' | 'netscape sgc' | 'ocsp signing' | 's/mime' | 'server auth' | 'signing' | 'timestamping'[]; username?: string; expirationSeconds?: number }; status?: { certificate?: string; conditions?: Array<{ type: string; lastTransitionTime?: Date; lastUpdateTime?: Date; message?: string; reason?: string; status: string }> } }>;
}

/**
* Create a new io_k8s_api_certificates_v1_CertificateSigningRequestList with default values
*/
export function createio_k8s_api_certificates_v1_CertificateSigningRequestList(data?: Partial<io_k8s_api_certificates_v1_CertificateSigningRequestList>): io_k8s_api_certificates_v1_CertificateSigningRequestList {
  return {
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
  };
}
