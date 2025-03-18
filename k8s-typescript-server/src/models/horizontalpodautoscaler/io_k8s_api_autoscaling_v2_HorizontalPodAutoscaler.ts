/**
* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
* @resourceType horizontalpodautoscaler
* @kind Horizontalpodautoscaler
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
/**
* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
* @isObject
*/
spec?: { maxReplicas: number; metrics?: Array<{ pods?: { metric: { name: string; selector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> } }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; resource?: { name: string; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; type: string; containerResource?: { container: string; name: string; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; external?: { metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { type: string; value?: string; averageUtilization?: number; averageValue?: string } }; object?: { describedObject: { apiVersion?: string; kind: string; name: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } } }>; minReplicas?: number; scaleTargetRef: { kind: string; name: string; apiVersion?: string }; behavior?: { scaleDown?: { policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string; stabilizationWindowSeconds?: number }; scaleUp?: { policies?: Array<{ value: number; periodSeconds: number; type: string }>; selectPolicy?: string; stabilizationWindowSeconds?: number } } };
/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
* @isObject
*/
status?: { conditions?: Array<{ type: string; lastTransitionTime?: Date; message?: string; reason?: string; status: string }>; currentMetrics?: Array<{ containerResource?: { container: string; current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string }; external?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; object?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; describedObject: { apiVersion?: string; kind: string; name: string }; metric: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name: string } }; pods?: { current: { averageValue?: string; value?: string; averageUtilization?: number }; metric: { name: string; selector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> } } }; resource?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string }; type: string }>; currentReplicas?: number; desiredReplicas: number; lastScaleTime?: Date; observedGeneration?: number };
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
metadata?: { labels?: Record<string, any>; resourceVersion?: string; uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; generateName?: string; name?: string; namespace?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; selfLink?: string; creationTimestamp?: Date; finalizers?: string[]; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; deletionTimestamp?: Date };
}

/**
* Create a new Horizontalpodautoscaler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscaler(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
 return {
   spec: data?.spec !== undefined ? data.spec : { scaleTargetRef: { kind: '', name: '' }, maxReplicas: 0 },
   status: data?.status !== undefined ? data.status : { desiredReplicas: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
