/**
* VolumeAttachmentStatus is the status of a VolumeAttachment request.
*/
export interface io_k8s_api_storage_v1_VolumeAttachmentStatus {
/**
* VolumeError captures an error encountered during a volume operation.
*/
attachError?: { message?: string; time?: Date };
/**
* attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
*/
attached: boolean;
/**
* attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
*/
attachmentMetadata?: Record<string, any>;
/**
* VolumeError captures an error encountered during a volume operation.
*/
detachError?: { message?: string; time?: Date };
}

/**
* Create a new io_k8s_api_storage_v1_VolumeAttachmentStatus with default values
*/
export function createio_k8s_api_storage_v1_VolumeAttachmentStatus(data?: Partial<io_k8s_api_storage_v1_VolumeAttachmentStatus>): io_k8s_api_storage_v1_VolumeAttachmentStatus {
  return {
    attachError: data?.attachError !== undefined ? data.attachError : {},
    attached: data?.attached !== undefined ? data.attached : false,
    attachmentMetadata: data?.attachmentMetadata !== undefined ? data.attachmentMetadata : {},
    detachError: data?.detachError !== undefined ? data.detachError : {},
  };
}
