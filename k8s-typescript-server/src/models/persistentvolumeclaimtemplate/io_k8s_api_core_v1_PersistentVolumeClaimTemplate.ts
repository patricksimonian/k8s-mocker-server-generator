/**
* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
* @resourceType persistentvolumeclaimtemplate
* @kind Persistentvolumeclaimtemplate
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaimTemplate {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionTimestamp?: Date; generation?: number; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; finalizers?: string[]; name?: string; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; uid?: string; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }> };
/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
* @required
* @isObject
*/
spec: { volumeAttributesClassName?: string; volumeName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; storageClassName?: string; dataSource?: { name: string; apiGroup?: string; kind: string }; volumeMode?: 'Block' | 'Filesystem' };
}

/**
* Create a new Persistentvolumeclaimtemplate with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeClaimTemplate instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaimTemplate(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaimTemplate>): io_k8s_api_core_v1_PersistentVolumeClaimTemplate {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
