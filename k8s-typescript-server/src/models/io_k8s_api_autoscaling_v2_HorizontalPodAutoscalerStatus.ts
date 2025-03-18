/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus {
/**
* conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
*/
conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>;
/**
* currentMetrics is the last read state of the metrics used by this autoscaler.
*/
currentMetrics?: Array<{ type: string; containerResource?: { container: string; current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string }; external?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; object?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; describedObject: { name: string; apiVersion?: string; kind: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> } } }; pods?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> } } }; resource?: { current: { averageValue?: string; value?: string; averageUtilization?: number }; name: string } }>;
/**
* currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
*/
currentReplicas?: number;
/**
* desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
*/
desiredReplicas: number;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastScaleTime?: Date;
/**
* observedGeneration is the most recent generation observed by this autoscaler.
*/
observedGeneration?: number;
}

/**
* Create a new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus with default values
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus {
  return {
    conditions: data?.conditions !== undefined ? data.conditions : [],
    currentMetrics: data?.currentMetrics !== undefined ? data.currentMetrics : [],
    currentReplicas: data?.currentReplicas !== undefined ? data.currentReplicas : 0,
    desiredReplicas: data?.desiredReplicas !== undefined ? data.desiredReplicas : 0,
    lastScaleTime: data?.lastScaleTime !== undefined ? data.lastScaleTime : '',
    observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
  };
}
