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
metadata?: { creationTimestamp?: Date; annotations?: Record<string, any>; finalizers?: string[]; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; name?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; namespace?: string; uid?: string; deletionTimestamp?: Date; generateName?: string; generation?: number; resourceVersion?: string; selfLink?: string };
/**
* A StatefulSetSpec is the specification of a StatefulSet.
* @isObject
*/
spec?: { persistentVolumeClaimRetentionPolicy?: { whenScaled?: string; whenDeleted?: string }; podManagementPolicy?: 'OrderedReady' | 'Parallel'; revisionHistoryLimit?: number; minReadySeconds?: number; ordinals?: { start?: number }; replicas?: number; selector: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; serviceName: string; template: { metadata?: { deletionTimestamp?: Date; generateName?: string; namespace?: string; deletionGracePeriodSeconds?: number; name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generation?: number; selfLink?: string; finalizers?: string[]; labels?: Record<string, any>; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; uid?: string }; spec?: Record<string, any> }; updateStrategy?: { type?: 'OnDelete' | 'RollingUpdate'; rollingUpdate?: { partition?: number; maxUnavailable?: string } }; volumeClaimTemplates?: Array<{ kind?: string; metadata?: { labels?: Record<string, any>; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; generateName?: string; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; uid?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; annotations?: Record<string, any>; generation?: number; selfLink?: string; deletionTimestamp?: Date; name?: string; resourceVersion?: string }; spec?: { dataSource?: { apiGroup?: string; kind: string; name: string }; dataSourceRef?: { kind: string; name: string; namespace?: string; apiGroup?: string }; resources?: { requests?: Record<string, any>; limits?: Record<string, any> }; selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; storageClassName?: string; volumeAttributesClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string }; status?: { capacity?: Record<string, any>; conditions?: Array<{ lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentVolumeAttributesClassName?: string; modifyVolumeStatus?: { status: 'InProgress' | 'Infeasible' | 'Pending'; targetVolumeAttributesClassName?: string }; phase?: 'Bound' | 'Lost' | 'Pending'; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; allocatedResourceStatuses?: Record<string, any>; allocatedResources?: Record<string, any> }; apiVersion?: string }> };
/**
* StatefulSetStatus represents the current state of a StatefulSet.
* @isObject
*/
status?: { updateRevision?: string; updatedReplicas?: number; availableReplicas?: number; currentReplicas?: number; observedGeneration?: number; readyReplicas?: number; replicas: number; collisionCount?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentRevision?: string };
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
