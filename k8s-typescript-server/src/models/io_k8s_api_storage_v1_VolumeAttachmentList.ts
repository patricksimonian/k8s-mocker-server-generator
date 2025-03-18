/**
* VolumeAttachmentList is a collection of VolumeAttachment objects.
*/
export interface io_k8s_api_storage_v1_VolumeAttachmentList {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of VolumeAttachments
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { namespace?: string; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; name?: string; annotations?: Record<string, any>; generation?: number; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; uid?: string; labels?: Record<string, any>; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; resourceVersion?: string }; spec: { attacher: string; nodeName: string; source: { inlineVolumeSpec?: Record<string, any>; persistentVolumeName?: string } }; status?: { attachError?: { message?: string; time?: Date }; attached: boolean; attachmentMetadata?: Record<string, any>; detachError?: { message?: string; time?: Date } } }>;
}

/**
* Create a new io_k8s_api_storage_v1_VolumeAttachmentList with default values
*/
export function createio_k8s_api_storage_v1_VolumeAttachmentList(data?: Partial<io_k8s_api_storage_v1_VolumeAttachmentList>): io_k8s_api_storage_v1_VolumeAttachmentList {
  return {
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
  };
}
