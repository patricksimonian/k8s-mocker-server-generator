/**
* Deployment enables declarative updates for Pods and ReplicaSets.
* @resourceType deployment
* @kind Deployment
*/
export interface io_k8s_api_apps_v1_Deployment {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { annotations?: Record<string, any>; deletionTimestamp?: Date; name?: string; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; uid?: string; generation?: number; finalizers?: string[]; namespace?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }> };
/**
* DeploymentSpec is the specification of the desired behavior of the Deployment.
* @isObject
*/
spec?: { strategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'Recreate' | 'RollingUpdate' }; template: { metadata?: { finalizers?: string[]; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; resourceVersion?: string; creationTimestamp?: Date; generateName?: string; labels?: Record<string, any>; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; deletionGracePeriodSeconds?: number; uid?: string; generation?: number; deletionTimestamp?: Date; name?: string; namespace?: string; selfLink?: string; annotations?: Record<string, any> }; spec?: Record<string, any> }; minReadySeconds?: number; paused?: boolean; progressDeadlineSeconds?: number; replicas?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
/**
* DeploymentStatus is the most recently observed status of the Deployment.
* @isObject
*/
status?: { conditions?: Array<{ lastTransitionTime?: Date; lastUpdateTime?: Date; message?: string; reason?: string; status: string; type: string }>; observedGeneration?: number; readyReplicas?: number; replicas?: number; unavailableReplicas?: number; updatedReplicas?: number; availableReplicas?: number; collisionCount?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Deployment with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_Deployment instance with defaults applied
*/
export function createio_k8s_api_apps_v1_Deployment(data?: Partial<io_k8s_api_apps_v1_Deployment>): io_k8s_api_apps_v1_Deployment {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { selector: {}, template: {} },
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
