/**
* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaimTemplate {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; selfLink?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; name?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; uid?: string; deletionGracePeriodSeconds?: number; creationTimestamp?: Date; finalizers?: string[]; generateName?: string; namespace?: string; resourceVersion?: string };
/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
*/
spec: { resources?: { requests?: Record<string, any>; limits?: Record<string, any> }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; volumeAttributesClassName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSource?: { kind: string; name: string; apiGroup?: string }; dataSourceRef?: { kind: string; name: string; namespace?: string; apiGroup?: string }; storageClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string };
}

/**
* Create a new io_k8s_api_core_v1_PersistentVolumeClaimTemplate with default values
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaimTemplate(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaimTemplate>): io_k8s_api_core_v1_PersistentVolumeClaimTemplate {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
  };
}
