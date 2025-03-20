/**
* PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
* @resourceType poddisruptionbudget
* @kind Poddisruptionbudget
*/
export interface io_k8s_api_policy_v1_PodDisruptionBudget {
/**
* PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
* @isObject
*/
status?: { disruptionsAllowed: number; expectedPods: number; observedGeneration?: number; conditions?: Array<{ status: string; type: string; lastTransitionTime: Date; message: string; observedGeneration?: number; reason: string }>; currentHealthy: number; desiredHealthy: number; disruptedPods?: Record<string, any> };
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
metadata?: { resourceVersion?: string; deletionTimestamp?: Date; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; creationTimestamp?: Date; generation?: number; name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; generateName?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; namespace?: string; uid?: string; annotations?: Record<string, any> };
/**
* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
* @isObject
*/
spec?: { maxUnavailable?: string; minAvailable?: string; selector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; unhealthyPodEvictionPolicy?: 'AlwaysAllow' | 'IfHealthyBudget' };
}

/**
* Create a new Poddisruptionbudget with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_policy_v1_PodDisruptionBudget instance with defaults applied
*/
export function createio_k8s_api_policy_v1_PodDisruptionBudget(data?: Partial<io_k8s_api_policy_v1_PodDisruptionBudget>): io_k8s_api_policy_v1_PodDisruptionBudget {
 return {
   status: data?.status !== undefined ? data.status : { currentHealthy: 0, desiredHealthy: 0, disruptionsAllowed: 0, expectedPods: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
