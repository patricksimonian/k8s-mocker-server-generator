/**
* Represents an ephemeral volume that is handled by a normal storage driver.
* @resourceType ephemeralvolumesource
* @kind Ephemeralvolumesource
*/
export interface io_k8s_api_core_v1_EphemeralVolumeSource {
/**
* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
* @isObject
*/
volumeClaimTemplate?: { metadata?: { finalizers?: string[]; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; uid?: string; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; creationTimestamp?: Date; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; deletionTimestamp?: Date; generation?: number; name?: string; namespace?: string }; spec: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; storageClassName?: string; volumeAttributesClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; dataSource?: { apiGroup?: string; kind: string; name: string }; dataSourceRef?: { kind: string; name: string; namespace?: string; apiGroup?: string }; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[] } };
}

/**
* Create a new Ephemeralvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EphemeralVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_EphemeralVolumeSource(data?: Partial<io_k8s_api_core_v1_EphemeralVolumeSource>): io_k8s_api_core_v1_EphemeralVolumeSource {
 return {
   volumeClaimTemplate: data?.volumeClaimTemplate !== undefined ? data.volumeClaimTemplate : { spec: {} },
 };
}
