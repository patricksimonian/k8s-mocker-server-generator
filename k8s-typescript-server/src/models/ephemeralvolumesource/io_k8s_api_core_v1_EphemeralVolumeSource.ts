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
volumeClaimTemplate?: { metadata?: { namespace?: string; uid?: string; annotations?: Record<string, any>; labels?: Record<string, any>; name?: string; deletionTimestamp?: Date; generation?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; generateName?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionGracePeriodSeconds?: number; finalizers?: string[] }; spec: { accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSource?: { apiGroup?: string; kind: string; name: string }; storageClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string; dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; volumeAttributesClassName?: string } };
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
