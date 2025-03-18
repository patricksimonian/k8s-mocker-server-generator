/**
* HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of horizontal pod autoscaler objects.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { deletionTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; generation?: number; name?: string; creationTimestamp?: Date; generateName?: string; namespace?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; resourceVersion?: string; selfLink?: string; uid?: string }; spec?: { maxReplicas: number; metrics?: Array<{ type: string; containerResource?: { container: string; name: string; target: { averageValue?: string; type: string; value?: string; averageUtilization?: number } }; external?: { metric: { name: string; selector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> } }; target: { type: string; value?: string; averageUtilization?: number; averageValue?: string } }; object?: { describedObject: { apiVersion?: string; kind: string; name: string }; metric: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name: string }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; pods?: { metric: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name: string }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; resource?: { name: string; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } } }>; minReplicas?: number; scaleTargetRef: { apiVersion?: string; kind: string; name: string }; behavior?: { scaleDown?: { policies?: Array<{ type: string; value: number; periodSeconds: number }>; selectPolicy?: string; stabilizationWindowSeconds?: number }; scaleUp?: { policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string; stabilizationWindowSeconds?: number } } }; status?: { desiredReplicas: number; lastScaleTime?: Date; observedGeneration?: number; conditions?: Array<{ type: string; lastTransitionTime?: Date; message?: string; reason?: string; status: string }>; currentMetrics?: Array<{ containerResource?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string; container: string }; external?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> } } }; object?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; describedObject: { apiVersion?: string; kind: string; name: string }; metric: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name: string } }; pods?: { current: { value?: string; averageUtilization?: number; averageValue?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> } } }; resource?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string }; type: string }>; currentReplicas?: number } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList with default values
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
