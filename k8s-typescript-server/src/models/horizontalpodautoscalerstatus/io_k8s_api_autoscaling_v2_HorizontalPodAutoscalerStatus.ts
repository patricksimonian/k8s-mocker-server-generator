/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
* @resourceType horizontalpodautoscalerstatus
* @kind Horizontalpodautoscalerstatus
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastScaleTime?: Date;
/**
* observedGeneration is the most recent generation observed by this autoscaler.
*/
observedGeneration?: number;
/**
* conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
* @isArray
*/
conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }>;
/**
* currentMetrics is the last read state of the metrics used by this autoscaler.
* @isArray
*/
currentMetrics?: Array<{ containerResource?: { name: string; container: string; current: { averageUtilization?: number; averageValue?: string; value?: string } }; external?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; object?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; describedObject: { apiVersion?: string; kind: string; name: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; pods?: { current: { averageValue?: string; value?: string; averageUtilization?: number }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; resource?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string }; type: string }>;
/**
* currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
*/
currentReplicas?: number;
/**
* desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
* @required
*/
desiredReplicas: number;
}

/**
* Create a new Horizontalpodautoscalerstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus {
 return {
   lastScaleTime: data?.lastScaleTime !== undefined ? data.lastScaleTime : '',
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   conditions: data?.conditions !== undefined ? data.conditions : [],
   currentMetrics: data?.currentMetrics !== undefined ? data.currentMetrics : [],
   currentReplicas: data?.currentReplicas !== undefined ? data.currentReplicas : 0,
   desiredReplicas: data?.desiredReplicas !== undefined ? data.desiredReplicas : 0,
 };
}
