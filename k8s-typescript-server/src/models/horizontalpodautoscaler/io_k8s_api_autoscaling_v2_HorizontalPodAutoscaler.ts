/**
* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
* @resourceType horizontalpodautoscaler
* @kind Horizontalpodautoscaler
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
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
metadata?: { managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; uid?: string; name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; selfLink?: string; finalizers?: string[]; generation?: number; generateName?: string; labels?: Record<string, any>; namespace?: string; creationTimestamp?: Date; deletionTimestamp?: Date };
/**
* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
* @isObject
*/
spec?: { scaleTargetRef: { name: string; apiVersion?: string; kind: string }; behavior?: { scaleDown?: { stabilizationWindowSeconds?: number; policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string }; scaleUp?: { policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string; stabilizationWindowSeconds?: number } }; maxReplicas: number; metrics?: Array<{ containerResource?: { container: string; name: string; target: { value?: string; averageUtilization?: number; averageValue?: string; type: string } }; external?: { metric: { name: string; selector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> } }; target: { averageValue?: string; type: string; value?: string; averageUtilization?: number } }; object?: { describedObject: { kind: string; name: string; apiVersion?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; pods?: { metric: { name: string; selector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ values?: string[]; key: string; operator: string }> } }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; resource?: { name: string; target: { averageValue?: string; type: string; value?: string; averageUtilization?: number } }; type: string }>; minReplicas?: number };
/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
* @isObject
*/
status?: { currentReplicas?: number; desiredReplicas: number; lastScaleTime?: Date; observedGeneration?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentMetrics?: Array<{ containerResource?: { container: string; current: { averageValue?: string; value?: string; averageUtilization?: number }; name: string }; external?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; object?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; describedObject: { apiVersion?: string; kind: string; name: string }; metric: { name: string; selector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ operator: string; values?: string[]; key: string }> } } }; pods?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; resource?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string }; type: string }> };
}

/**
* Create a new Horizontalpodautoscaler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscaler(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { scaleTargetRef: { kind: '', name: '' }, maxReplicas: 0 },
   status: data?.status !== undefined ? data.status : { desiredReplicas: 0 },
 };
}
