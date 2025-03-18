/**
* StatefulSet represents a set of pods with consistent identities. Identities are defined as:
  - Network: A single stable DNS and hostname.
  - Storage: As many VolumeClaims as requested.

The StatefulSet guarantees that a given network identity will always map to the same storage identity.
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
*/
metadata?: { ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; creationTimestamp?: Date; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; generateName?: string; namespace?: string; resourceVersion?: string; uid?: string; deletionTimestamp?: Date; finalizers?: string[]; generation?: number; selfLink?: string };
/**
* A StatefulSetSpec is the specification of a StatefulSet.
*/
spec?: { updateStrategy?: { rollingUpdate?: { maxUnavailable?: string; partition?: number }; type?: 'OnDelete' | 'RollingUpdate' }; minReadySeconds?: number; ordinals?: { start?: number }; replicas?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; template: { metadata?: { annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; resourceVersion?: string; selfLink?: string; generation?: number; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; deletionTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; name?: string; generateName?: string; namespace?: string; uid?: string }; spec?: Record<string, any> }; persistentVolumeClaimRetentionPolicy?: { whenDeleted?: string; whenScaled?: string }; podManagementPolicy?: 'OrderedReady' | 'Parallel'; serviceName: string; volumeClaimTemplates?: Array<{ kind?: string; metadata?: { finalizers?: string[]; generateName?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; uid?: string; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; resourceVersion?: string; deletionGracePeriodSeconds?: number; name?: string; selfLink?: string }; spec?: { accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; volumeAttributesClassName?: string; dataSource?: { apiGroup?: string; kind: string; name: string }; dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; storageClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string }; status?: { allocatedResources?: Record<string, any>; capacity?: Record<string, any>; conditions?: Array<{ lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentVolumeAttributesClassName?: string; modifyVolumeStatus?: { status: 'InProgress' | 'Infeasible' | 'Pending'; targetVolumeAttributesClassName?: string }; phase?: 'Bound' | 'Lost' | 'Pending'; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; allocatedResourceStatuses?: Record<string, any> }; apiVersion?: string }> };
/**
* StatefulSetStatus represents the current state of a StatefulSet.
*/
status?: { currentReplicas?: number; observedGeneration?: number; replicas: number; updatedReplicas?: number; collisionCount?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; readyReplicas?: number; updateRevision?: string; availableReplicas?: number; currentRevision?: string };
}

/**
* Create a new io_k8s_api_apps_v1_StatefulSet with default values
*/
export function createio_k8s_api_apps_v1_StatefulSet(data?: Partial<io_k8s_api_apps_v1_StatefulSet>): io_k8s_api_apps_v1_StatefulSet {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { selector: {}, template: {}, serviceName: '' },
    status: data?.status !== undefined ? data.status : { replicas: 0 },
  };
}
