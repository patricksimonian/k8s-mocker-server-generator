/**
* Deployment enables declarative updates for Pods and ReplicaSets.
*/
export interface io_k8s_api_apps_v1_Deployment {
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
metadata?: { finalizers?: string[]; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; creationTimestamp?: Date; deletionTimestamp?: Date; resourceVersion?: string; uid?: string; annotations?: Record<string, any>; namespace?: string; labels?: Record<string, any>; name?: string; deletionGracePeriodSeconds?: number; generateName?: string; generation?: number };
/**
* DeploymentSpec is the specification of the desired behavior of the Deployment.
*/
spec?: { selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; strategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'Recreate' | 'RollingUpdate' }; template: { metadata?: { name?: string; resourceVersion?: string; uid?: string; labels?: Record<string, any>; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; deletionTimestamp?: Date; finalizers?: string[]; namespace?: string; creationTimestamp?: Date; generation?: number; generateName?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number }; spec?: Record<string, any> }; minReadySeconds?: number; paused?: boolean; progressDeadlineSeconds?: number; replicas?: number; revisionHistoryLimit?: number };
/**
* DeploymentStatus is the most recently observed status of the Deployment.
*/
status?: { readyReplicas?: number; replicas?: number; unavailableReplicas?: number; updatedReplicas?: number; availableReplicas?: number; collisionCount?: number; conditions?: Array<{ lastUpdateTime?: Date; message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }>; observedGeneration?: number };
}

/**
* Create a new io_k8s_api_apps_v1_Deployment with default values
*/
export function createio_k8s_api_apps_v1_Deployment(data?: Partial<io_k8s_api_apps_v1_Deployment>): io_k8s_api_apps_v1_Deployment {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { selector: {}, template: {} },
    status: data?.status !== undefined ? data.status : {},
  };
}
