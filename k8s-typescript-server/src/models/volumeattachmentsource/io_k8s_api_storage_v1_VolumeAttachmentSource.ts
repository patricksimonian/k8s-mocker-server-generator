/**
* VolumeAttachmentSource represents a volume that should be attached. Right now only PersistentVolumes can be attached via external attacher, in the future we may allow also inline volumes in pods. Exactly one member can be set.
* @resourceType volumeattachmentsource
* @kind Volumeattachmentsource
*/
export interface io_k8s_api_storage_v1_VolumeAttachmentSource {
/**
* PersistentVolumeSpec is the specification of a persistent volume.
* @isObject
*/
inlineVolumeSpec?: Record<string, any>;
/**
* persistentVolumeName represents the name of the persistent volume to attach.
*/
persistentVolumeName?: string;
}

/**
* Create a new Volumeattachmentsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeAttachmentSource instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeAttachmentSource(data?: Partial<io_k8s_api_storage_v1_VolumeAttachmentSource>): io_k8s_api_storage_v1_VolumeAttachmentSource {
 return {
   inlineVolumeSpec: data?.inlineVolumeSpec !== undefined ? data.inlineVolumeSpec : {},
   persistentVolumeName: data?.persistentVolumeName !== undefined ? data.persistentVolumeName : '',
 };
}
