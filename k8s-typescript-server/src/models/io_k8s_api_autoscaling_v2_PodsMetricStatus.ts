/**
* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
*/
export interface io_k8s_api_autoscaling_v2_PodsMetricStatus {
/**
* MetricValueStatus holds the current value for a metric
*/
current: { averageUtilization?: number; averageValue?: string; value?: string };
/**
* MetricIdentifier defines the name and optionally selector for a metric
*/
metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
}

/**
* Create a new io_k8s_api_autoscaling_v2_PodsMetricStatus with default values
*/
export function createio_k8s_api_autoscaling_v2_PodsMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_PodsMetricStatus>): io_k8s_api_autoscaling_v2_PodsMetricStatus {
  return {
    current: data?.current !== undefined ? data.current : {},
    metric: data?.metric !== undefined ? data.metric : { name: '' },
  };
}
