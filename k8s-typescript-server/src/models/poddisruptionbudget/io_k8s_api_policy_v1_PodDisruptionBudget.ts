/**
* PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
* @resourceType poddisruptionbudget
* @kind Poddisruptionbudget
*/
export interface io_k8s_api_policy_v1_PodDisruptionBudget {
/**
* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
* @isObject
*/
spec?: { maxUnavailable?: string; minAvailable?: string; selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; unhealthyPodEvictionPolicy?: 'AlwaysAllow' | 'IfHealthyBudget' };
/**
* PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
* @isObject
*/
status?: { disruptionsAllowed: number; expectedPods: number; observedGeneration?: number; conditions?: Array<{ lastTransitionTime: Date; message: string; observedGeneration?: number; reason: string; status: string; type: string }>; currentHealthy: number; desiredHealthy: number; disruptedPods?: Record<string, any> };
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
metadata?: { annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; selfLink?: string; generateName?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generation?: number; labels?: Record<string, any>; name?: string; namespace?: string; uid?: string };
}

/**
* Create a new Poddisruptionbudget with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_policy_v1_PodDisruptionBudget instance with defaults applied
*/
export function createio_k8s_api_policy_v1_PodDisruptionBudget(data?: Partial<io_k8s_api_policy_v1_PodDisruptionBudget>): io_k8s_api_policy_v1_PodDisruptionBudget {
 return {
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : { disruptionsAllowed: 0, expectedPods: 0, currentHealthy: 0, desiredHealthy: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
