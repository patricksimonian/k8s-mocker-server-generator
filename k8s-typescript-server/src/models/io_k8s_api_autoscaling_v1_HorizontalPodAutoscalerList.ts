/**
* list of horizontal pod autoscaler objects.
*/
export interface io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList {
/**
* items is the list of horizontal pod autoscaler objects.
*/
items: Array<{ status?: { currentReplicas: number; desiredReplicas: number; lastScaleTime?: Date; observedGeneration?: number; currentCPUUtilizationPercentage?: number }; apiVersion?: string; kind?: string; metadata?: { managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; uid?: string; creationTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionTimestamp?: Date; generation?: number; selfLink?: string; generateName?: string; name?: string; resourceVersion?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number }; spec?: { scaleTargetRef: { apiVersion?: string; kind: string; name: string }; targetCPUUtilizationPercentage?: number; maxReplicas: number; minReplicas?: number } }>;
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
* Create a new io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList with default values
*/
export function createio_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList(data?: Partial<io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList>): io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList {
  return {
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
