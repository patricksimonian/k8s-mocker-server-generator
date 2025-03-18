/**
* SecretList is a list of Secret.
*/
export interface io_k8s_api_core_v1_SecretList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret
*/
items: Array<{ immutable?: boolean; kind?: string; metadata?: { annotations?: Record<string, any>; finalizers?: string[]; generation?: number; name?: string; namespace?: string; deletionGracePeriodSeconds?: number; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; uid?: string; deletionTimestamp?: Date; labels?: Record<string, any>; selfLink?: string; creationTimestamp?: Date; generateName?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }> }; stringData?: Record<string, any>; type?: string; apiVersion?: string; data?: Record<string, any> }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
}

/**
* Create a new io_k8s_api_core_v1_SecretList with default values
*/
export function createio_k8s_api_core_v1_SecretList(data?: Partial<io_k8s_api_core_v1_SecretList>): io_k8s_api_core_v1_SecretList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
