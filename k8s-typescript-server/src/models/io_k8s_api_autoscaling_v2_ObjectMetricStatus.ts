/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
export interface io_k8s_api_autoscaling_v2_ObjectMetricStatus {
/**
* MetricValueStatus holds the current value for a metric
*/
current: { averageValue?: string; value?: string; averageUtilization?: number };
/**
* CrossVersionObjectReference contains enough information to let you identify the referred resource.
*/
describedObject: { kind: string; name: string; apiVersion?: string };
/**
* MetricIdentifier defines the name and optionally selector for a metric
*/
metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
}

/**
* Create a new io_k8s_api_autoscaling_v2_ObjectMetricStatus with default values
*/
export function createio_k8s_api_autoscaling_v2_ObjectMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_ObjectMetricStatus>): io_k8s_api_autoscaling_v2_ObjectMetricStatus {
  return {
    current: data?.current !== undefined ? data.current : {},
    describedObject: data?.describedObject !== undefined ? data.describedObject : { kind: '', name: '' },
    metric: data?.metric !== undefined ? data.metric : { name: '' },
  };
}
