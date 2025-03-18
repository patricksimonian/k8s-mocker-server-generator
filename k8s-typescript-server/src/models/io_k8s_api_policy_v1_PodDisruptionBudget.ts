/**
* PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
*/
export interface io_k8s_api_policy_v1_PodDisruptionBudget {
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
metadata?: { resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; generateName?: string; generation?: number; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; namespace?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; uid?: string; creationTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }> };
/**
* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
*/
spec?: { minAvailable?: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; unhealthyPodEvictionPolicy?: 'AlwaysAllow' | 'IfHealthyBudget'; maxUnavailable?: string };
/**
* PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
*/
status?: { currentHealthy: number; desiredHealthy: number; disruptedPods?: Record<string, any>; disruptionsAllowed: number; expectedPods: number; observedGeneration?: number; conditions?: Array<{ observedGeneration?: number; reason: string; status: string; type: string; lastTransitionTime: Date; message: string }> };
}

/**
* Create a new io_k8s_api_policy_v1_PodDisruptionBudget with default values
*/
export function createio_k8s_api_policy_v1_PodDisruptionBudget(data?: Partial<io_k8s_api_policy_v1_PodDisruptionBudget>): io_k8s_api_policy_v1_PodDisruptionBudget {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : { currentHealthy: 0, desiredHealthy: 0, disruptionsAllowed: 0, expectedPods: 0 },
  };
}
