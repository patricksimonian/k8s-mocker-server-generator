/**
* A StatefulSetSpec is the specification of a StatefulSet.
* @resourceType statefulsetspec
* @kind Statefulsetspec
*/
export interface io_k8s_api_apps_v1_StatefulSetSpec {
/**
* Minimum number of seconds for which a newly created pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
*/
minReadySeconds?: number;
/**
* StatefulSetOrdinals describes the policy used for replica ordinal assignment in this StatefulSet.
* @isObject
*/
ordinals?: { start?: number };
/**
* podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.

Possible enum values:
 - `"OrderedReady"` will create pods in strictly increasing order on scale up and strictly decreasing order on scale down, progressing only when the previous pod is ready or terminated. At most one pod will be changed at any time.
 - `"Parallel"` will create and delete pods as soon as the stateful set replica count is changed, and will not wait for pods to be ready or complete termination.
*/
podManagementPolicy?: 'OrderedReady' | 'Parallel';
/**
* serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
* @required
*/
serviceName: string;
/**
* StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
* @isObject
*/
updateStrategy?: { rollingUpdate?: { maxUnavailable?: string; partition?: number }; type?: 'OnDelete' | 'RollingUpdate' };
/**
* volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
* @isArray
*/
volumeClaimTemplates?: Array<{ kind?: string; metadata?: { creationTimestamp?: Date; finalizers?: string[]; namespace?: string; deletionTimestamp?: Date; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; uid?: string; generation?: number; labels?: Record<string, any>; name?: string; resourceVersion?: string }; spec?: { accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; volumeName?: string; dataSource?: { apiGroup?: string; kind: string; name: string }; storageClassName?: string; volumeAttributesClassName?: string; volumeMode?: 'Block' | 'Filesystem' }; status?: { capacity?: Record<string, any>; conditions?: Array<{ lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentVolumeAttributesClassName?: string; modifyVolumeStatus?: { status: 'InProgress' | 'Infeasible' | 'Pending'; targetVolumeAttributesClassName?: string }; phase?: 'Bound' | 'Lost' | 'Pending'; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; allocatedResourceStatuses?: Record<string, any>; allocatedResources?: Record<string, any> }; apiVersion?: string }>;
/**
* StatefulSetPersistentVolumeClaimRetentionPolicy describes the policy used for PVCs created from the StatefulSet VolumeClaimTemplates.
* @isObject
*/
persistentVolumeClaimRetentionPolicy?: { whenDeleted?: string; whenScaled?: string };
/**
* replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
*/
replicas?: number;
/**
* revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
*/
revisionHistoryLimit?: number;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @required
* @isObject
*/
selector: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> };
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @required
* @isObject
*/
template: { spec?: Record<string, any>; metadata?: { finalizers?: string[]; generateName?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; labels?: Record<string, any>; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generation?: number; name?: string; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; uid?: string } };
}

/**
* Create a new Statefulsetspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSetSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSetSpec(data?: Partial<io_k8s_api_apps_v1_StatefulSetSpec>): io_k8s_api_apps_v1_StatefulSetSpec {
 return {
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   ordinals: data?.ordinals !== undefined ? data.ordinals : {},
   podManagementPolicy: data?.podManagementPolicy !== undefined ? data.podManagementPolicy : '',
   serviceName: data?.serviceName !== undefined ? data.serviceName : '',
   updateStrategy: data?.updateStrategy !== undefined ? data.updateStrategy : {},
   volumeClaimTemplates: data?.volumeClaimTemplates !== undefined ? data.volumeClaimTemplates : [],
   persistentVolumeClaimRetentionPolicy: data?.persistentVolumeClaimRetentionPolicy !== undefined ? data.persistentVolumeClaimRetentionPolicy : {},
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   revisionHistoryLimit: data?.revisionHistoryLimit !== undefined ? data.revisionHistoryLimit : 0,
   selector: data?.selector !== undefined ? data.selector : {},
   template: data?.template !== undefined ? data.template : {},
 };
}
