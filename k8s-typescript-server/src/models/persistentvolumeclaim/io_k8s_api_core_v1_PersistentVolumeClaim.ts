/**
* PersistentVolumeClaim is a user's request for and claim to a persistent volume
* @resourceType persistentvolumeclaim
* @kind Persistentvolumeclaim
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaim {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; selfLink?: string; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; generation?: number; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; uid?: string; annotations?: Record<string, any>; labels?: Record<string, any>; namespace?: string; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; name?: string };
/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
* @isObject
*/
spec?: { resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; volumeAttributesClassName?: string; dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; dataSource?: { apiGroup?: string; kind: string; name: string }; storageClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[] };
/**
* PersistentVolumeClaimStatus is the current status of a persistent volume claim.
* @isObject
*/
status?: { phase?: 'Bound' | 'Lost' | 'Pending'; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; allocatedResourceStatuses?: Record<string, any>; allocatedResources?: Record<string, any>; capacity?: Record<string, any>; conditions?: Array<{ lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentVolumeAttributesClassName?: string; modifyVolumeStatus?: { status: 'InProgress' | 'Infeasible' | 'Pending'; targetVolumeAttributesClassName?: string } };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Persistentvolumeclaim with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeClaim instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaim(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaim>): io_k8s_api_core_v1_PersistentVolumeClaim {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
