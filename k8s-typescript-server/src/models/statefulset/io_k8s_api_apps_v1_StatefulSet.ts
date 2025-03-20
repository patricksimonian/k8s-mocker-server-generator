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
metadata?: { ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; deletionTimestamp?: Date; labels?: Record<string, any>; namespace?: string; creationTimestamp?: Date; finalizers?: string[]; resourceVersion?: string; uid?: string; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; annotations?: Record<string, any>; generation?: number };
/**
* A StatefulSetSpec is the specification of a StatefulSet.
* @isObject
*/
spec?: { podManagementPolicy?: 'OrderedReady' | 'Parallel'; replicas?: number; revisionHistoryLimit?: number; serviceName: string; template: { metadata?: { deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; annotations?: Record<string, any>; namespace?: string; creationTimestamp?: Date; name?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; selfLink?: string; uid?: string; generation?: number; labels?: Record<string, any>; resourceVersion?: string }; spec?: Record<string, any> }; minReadySeconds?: number; ordinals?: { start?: number }; persistentVolumeClaimRetentionPolicy?: { whenDeleted?: string; whenScaled?: string }; updateStrategy?: { rollingUpdate?: { maxUnavailable?: string; partition?: number }; type?: 'OnDelete' | 'RollingUpdate' }; volumeClaimTemplates?: Array<{ apiVersion?: string; kind?: string; metadata?: { finalizers?: string[]; labels?: Record<string, any>; namespace?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generation?: number; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; name?: string; resourceVersion?: string; uid?: string; selfLink?: string }; spec?: { dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; volumeMode?: 'Block' | 'Filesystem'; storageClassName?: string; volumeAttributesClassName?: string; volumeName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSource?: { name: string; apiGroup?: string; kind: string }; selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> } }; status?: { phase?: 'Bound' | 'Lost' | 'Pending'; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; allocatedResourceStatuses?: Record<string, any>; allocatedResources?: Record<string, any>; capacity?: Record<string, any>; conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastProbeTime?: Date; lastTransitionTime?: Date }>; currentVolumeAttributesClassName?: string; modifyVolumeStatus?: { status: 'InProgress' | 'Infeasible' | 'Pending'; targetVolumeAttributesClassName?: string } } }>; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
/**
* StatefulSetStatus represents the current state of a StatefulSet.
* @isObject
*/
status?: { availableReplicas?: number; collisionCount?: number; currentRevision?: string; replicas: number; updatedReplicas?: number; conditions?: Array<{ type: string; lastTransitionTime?: Date; message?: string; reason?: string; status: string }>; currentReplicas?: number; observedGeneration?: number; readyReplicas?: number; updateRevision?: string };
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
   spec: data?.spec !== undefined ? data.spec : { selector: {}, serviceName: '', template: {} },
   status: data?.status !== undefined ? data.status : { replicas: 0 },
 };
}
