/**
* PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
*/
export interface io_k8s_api_policy_v1_PodDisruptionBudgetList {
/**
* Items is a list of PodDisruptionBudgets
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { finalizers?: string[]; namespace?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generateName?: string; labels?: Record<string, any>; uid?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; generation?: number; name?: string; resourceVersion?: string }; spec?: { minAvailable?: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; unhealthyPodEvictionPolicy?: 'AlwaysAllow' | 'IfHealthyBudget'; maxUnavailable?: string }; status?: { currentHealthy: number; desiredHealthy: number; disruptedPods?: Record<string, any>; disruptionsAllowed: number; expectedPods: number; observedGeneration?: number; conditions?: Array<{ reason: string; status: string; type: string; lastTransitionTime: Date; message: string; observedGeneration?: number }> } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_policy_v1_PodDisruptionBudgetList with default values
*/
export function createio_k8s_api_policy_v1_PodDisruptionBudgetList(data?: Partial<io_k8s_api_policy_v1_PodDisruptionBudgetList>): io_k8s_api_policy_v1_PodDisruptionBudgetList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
