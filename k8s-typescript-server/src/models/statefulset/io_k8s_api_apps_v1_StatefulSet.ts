/**
* StatefulSet represents a set of pods with consistent identities. Identities are defined as:
  - Network: A single stable DNS and hostname.
  - Storage: As many VolumeClaims as requested.

The StatefulSet guarantees that a given network identity will always map to the same storage identity.
* @resourceType statefulset
* @kind Statefulset
*/
export interface io_k8s_api_apps_v1_StatefulSet {
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
* @isObject
*/
metadata?: { generation?: number; labels?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; name?: string; resourceVersion?: string; annotations?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; selfLink?: string; uid?: string };
/**
* A StatefulSetSpec is the specification of a StatefulSet.
* @isObject
*/
spec?: { persistentVolumeClaimRetentionPolicy?: { whenDeleted?: string; whenScaled?: string }; podManagementPolicy?: 'OrderedReady' | 'Parallel'; replicas?: number; template: { metadata?: { deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; generation?: number; name?: string; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; resourceVersion?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; namespace?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; selfLink?: string }; spec?: Record<string, any> }; updateStrategy?: { rollingUpdate?: { maxUnavailable?: string; partition?: number }; type?: 'OnDelete' | 'RollingUpdate' }; minReadySeconds?: number; ordinals?: { start?: number }; revisionHistoryLimit?: number; selector: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> }; serviceName: string; volumeClaimTemplates?: Array<{ status?: { accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; allocatedResourceStatuses?: Record<string, any>; allocatedResources?: Record<string, any>; capacity?: Record<string, any>; conditions?: Array<{ lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentVolumeAttributesClassName?: string; modifyVolumeStatus?: { status: 'InProgress' | 'Infeasible' | 'Pending'; targetVolumeAttributesClassName?: string }; phase?: 'Bound' | 'Lost' | 'Pending' }; apiVersion?: string; kind?: string; metadata?: { resourceVersion?: string; creationTimestamp?: Date; finalizers?: string[]; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; selfLink?: string; annotations?: Record<string, any>; generateName?: string; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; generation?: number; name?: string; uid?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date }; spec?: { volumeMode?: 'Block' | 'Filesystem'; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; resources?: { requests?: Record<string, any>; limits?: Record<string, any> }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; storageClassName?: string; volumeAttributesClassName?: string; dataSource?: { apiGroup?: string; kind: string; name: string }; volumeName?: string } }> };
/**
* StatefulSetStatus represents the current state of a StatefulSet.
* @isObject
*/
status?: { replicas: number; updateRevision?: string; collisionCount?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentRevision?: string; readyReplicas?: number; availableReplicas?: number; currentReplicas?: number; observedGeneration?: number; updatedReplicas?: number };
}

/**
* Create a new Statefulset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSet(data?: Partial<io_k8s_api_apps_v1_StatefulSet>): io_k8s_api_apps_v1_StatefulSet {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { template: {}, serviceName: '', selector: {} },
   status: data?.status !== undefined ? data.status : { replicas: 0 },
 };
}
