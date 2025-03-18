/**
* Represents an ephemeral volume that is handled by a normal storage driver.
*/
export interface io_k8s_api_core_v1_EphemeralVolumeSource {
/**
* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
*/
volumeClaimTemplate?: { metadata?: { uid?: string; annotations?: Record<string, any>; finalizers?: string[]; name?: string; generation?: number; labels?: Record<string, any>; resourceVersion?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generateName?: string; creationTimestamp?: Date; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; selfLink?: string }; spec: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; storageClassName?: string; volumeAttributesClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSource?: { apiGroup?: string; kind: string; name: string }; dataSourceRef?: { namespace?: string; apiGroup?: string; kind: string; name: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> } } };
}

/**
* Create a new io_k8s_api_core_v1_EphemeralVolumeSource with default values
*/
export function createio_k8s_api_core_v1_EphemeralVolumeSource(data?: Partial<io_k8s_api_core_v1_EphemeralVolumeSource>): io_k8s_api_core_v1_EphemeralVolumeSource {
  return {
    volumeClaimTemplate: data?.volumeClaimTemplate !== undefined ? data.volumeClaimTemplate : { spec: {} },
  };
}
