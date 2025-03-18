/**
* StatefulSetList is a collection of StatefulSets.
*/
export interface io_k8s_api_apps_v1_StatefulSetList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is the list of stateful sets.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { uid?: string; annotations?: Record<string, any>; generation?: number; labels?: Record<string, any>; deletionGracePeriodSeconds?: number; finalizers?: string[]; generateName?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; namespace?: string; resourceVersion?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; selfLink?: string; creationTimestamp?: Date; deletionTimestamp?: Date; name?: string }; spec?: { template: { metadata?: { deletionGracePeriodSeconds?: number; labels?: Record<string, any>; name?: string; namespace?: string; annotations?: Record<string, any>; generateName?: string; generation?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; uid?: string; deletionTimestamp?: Date; finalizers?: string[]; selfLink?: string; creationTimestamp?: Date }; spec?: Record<string, any> }; updateStrategy?: { type?: 'OnDelete' | 'RollingUpdate'; rollingUpdate?: { maxUnavailable?: string; partition?: number } }; volumeClaimTemplates?: Array<{ apiVersion?: string; kind?: string; metadata?: { selfLink?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; namespace?: string; labels?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; resourceVersion?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; finalizers?: string[]; generation?: number; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string }; spec?: { volumeName?: string; dataSource?: { apiGroup?: string; kind: string; name: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; storageClassName?: string; volumeAttributesClassName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; volumeMode?: 'Block' | 'Filesystem' }; status?: { allocatedResources?: Record<string, any>; capacity?: Record<string, any>; conditions?: Array<{ type: string; lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string }>; currentVolumeAttributesClassName?: string; modifyVolumeStatus?: { status: 'InProgress' | 'Infeasible' | 'Pending'; targetVolumeAttributesClassName?: string }; phase?: 'Bound' | 'Lost' | 'Pending'; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; allocatedResourceStatuses?: Record<string, any> } }>; persistentVolumeClaimRetentionPolicy?: { whenDeleted?: string; whenScaled?: string }; serviceName: string; podManagementPolicy?: 'OrderedReady' | 'Parallel'; replicas?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; minReadySeconds?: number; ordinals?: { start?: number } }; status?: { replicas: number; availableReplicas?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentReplicas?: number; currentRevision?: string; observedGeneration?: number; readyReplicas?: number; collisionCount?: number; updateRevision?: string; updatedReplicas?: number } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { remainingItemCount?: number; resourceVersion?: string; selfLink?: string; continue?: string };
}

/**
* Create a new io_k8s_api_apps_v1_StatefulSetList with default values
*/
export function createio_k8s_api_apps_v1_StatefulSetList(data?: Partial<io_k8s_api_apps_v1_StatefulSetList>): io_k8s_api_apps_v1_StatefulSetList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
