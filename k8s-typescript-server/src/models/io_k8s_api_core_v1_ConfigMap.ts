/**
* ConfigMap holds configuration data for pods to consume.
*/
export interface io_k8s_api_core_v1_ConfigMap {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { deletionTimestamp?: Date; labels?: Record<string, any>; resourceVersion?: string; uid?: string; finalizers?: string[]; generateName?: string; name?: string; creationTimestamp?: Date; generation?: number; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet.
*/
binaryData?: Record<string, any>;
/**
* Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
*/
data?: Record<string, any>;
/**
* Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
*/
immutable?: boolean;
}

/**
* Create a new io_k8s_api_core_v1_ConfigMap with default values
*/
export function createio_k8s_api_core_v1_ConfigMap(data?: Partial<io_k8s_api_core_v1_ConfigMap>): io_k8s_api_core_v1_ConfigMap {
  return {
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    binaryData: data?.binaryData !== undefined ? data.binaryData : {},
    data: data?.data !== undefined ? data.data : {},
    immutable: data?.immutable !== undefined ? data.immutable : false,
  };
}
