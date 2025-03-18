/**
* VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
*/
export interface io_k8s_api_storage_v1_VolumeAttachment {
/**
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
*/
spec: { attacher: string; nodeName: string; source: { inlineVolumeSpec?: Record<string, any>; persistentVolumeName?: string } };
/**
* VolumeAttachmentStatus is the status of a VolumeAttachment request.
*/
status?: { attachError?: { message?: string; time?: Date }; attached: boolean; attachmentMetadata?: Record<string, any>; detachError?: { message?: string; time?: Date } };
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
metadata?: { annotations?: Record<string, any>; deletionTimestamp?: Date; generateName?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; finalizers?: string[]; labels?: Record<string, any>; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; name?: string; namespace?: string; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generation?: number; uid?: string };
}

/**
* Create a new io_k8s_api_storage_v1_VolumeAttachment with default values
*/
export function createio_k8s_api_storage_v1_VolumeAttachment(data?: Partial<io_k8s_api_storage_v1_VolumeAttachment>): io_k8s_api_storage_v1_VolumeAttachment {
  return {
    spec: data?.spec !== undefined ? data.spec : { attacher: '', nodeName: '', source: {} },
    status: data?.status !== undefined ? data.status : { attached: false },
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
