/**
* DeploymentList is a list of Deployments.
*/
export interface io_k8s_api_apps_v1_DeploymentList {
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is the list of Deployments.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { annotations?: Record<string, any>; generateName?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; name?: string; uid?: string; finalizers?: string[]; generation?: number; labels?: Record<string, any>; namespace?: string; resourceVersion?: string }; spec?: { revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; strategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'Recreate' | 'RollingUpdate' }; template: { metadata?: { annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; finalizers?: string[]; name?: string; selfLink?: string; deletionGracePeriodSeconds?: number; resourceVersion?: string; uid?: string; deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }> }; spec?: Record<string, any> }; minReadySeconds?: number; paused?: boolean; progressDeadlineSeconds?: number; replicas?: number }; status?: { conditions?: Array<{ lastTransitionTime?: Date; lastUpdateTime?: Date; message?: string; reason?: string; status: string; type: string }>; observedGeneration?: number; readyReplicas?: number; replicas?: number; unavailableReplicas?: number; updatedReplicas?: number; availableReplicas?: number; collisionCount?: number } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_apps_v1_DeploymentList with default values
*/
export function createio_k8s_api_apps_v1_DeploymentList(data?: Partial<io_k8s_api_apps_v1_DeploymentList>): io_k8s_api_apps_v1_DeploymentList {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
