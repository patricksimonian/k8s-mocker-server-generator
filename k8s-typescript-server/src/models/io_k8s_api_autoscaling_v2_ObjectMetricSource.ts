/**
* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
export interface io_k8s_api_autoscaling_v2_ObjectMetricSource {
/**
* MetricIdentifier defines the name and optionally selector for a metric
*/
metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
/**
* MetricTarget defines the target value, average value, or average utilization of a specific metric
*/
target: { averageValue?: string; type: string; value?: string; averageUtilization?: number };
/**
* CrossVersionObjectReference contains enough information to let you identify the referred resource.
*/
describedObject: { apiVersion?: string; kind: string; name: string };
}

/**
* Create a new io_k8s_api_autoscaling_v2_ObjectMetricSource with default values
*/
export function createio_k8s_api_autoscaling_v2_ObjectMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_ObjectMetricSource>): io_k8s_api_autoscaling_v2_ObjectMetricSource {
  return {
    metric: data?.metric !== undefined ? data.metric : { name: '' },
    target: data?.target !== undefined ? data.target : { type: '' },
    describedObject: data?.describedObject !== undefined ? data.describedObject : { kind: '', name: '' },
  };
}
