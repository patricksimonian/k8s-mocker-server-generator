/**
* Deployment enables declarative updates for Pods and ReplicaSets.
* @resourceType deployment
* @kind Deployment
*/
export interface io_k8s_api_apps_v1_Deployment {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; deletionTimestamp?: Date; name?: string; namespace?: string; generation?: number; labels?: Record<string, any>; selfLink?: string; uid?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; resourceVersion?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; annotations?: Record<string, any>; finalizers?: string[]; generateName?: string };
/**
* DeploymentSpec is the specification of the desired behavior of the Deployment.
* @isObject
*/
spec?: { template: { spec?: Record<string, any>; metadata?: { deletionGracePeriodSeconds?: number; generation?: number; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string; resourceVersion?: string; finalizers?: string[]; name?: string } }; minReadySeconds?: number; paused?: boolean; progressDeadlineSeconds?: number; replicas?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; strategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'Recreate' | 'RollingUpdate' } };
/**
* DeploymentStatus is the most recently observed status of the Deployment.
* @isObject
*/
status?: { replicas?: number; unavailableReplicas?: number; updatedReplicas?: number; availableReplicas?: number; collisionCount?: number; conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; lastUpdateTime?: Date; message?: string; reason?: string }>; observedGeneration?: number; readyReplicas?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Deployment with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_Deployment instance with defaults applied
*/
export function createio_k8s_api_apps_v1_Deployment(data?: Partial<io_k8s_api_apps_v1_Deployment>): io_k8s_api_apps_v1_Deployment {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { selector: {}, template: {} },
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
