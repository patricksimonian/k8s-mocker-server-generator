/**
* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
*/
export interface io_k8s_api_autoscaling_v2_PodsMetricSource {
/**
* MetricIdentifier defines the name and optionally selector for a metric
*/
metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
/**
* MetricTarget defines the target value, average value, or average utilization of a specific metric
*/
target: { value?: string; averageUtilization?: number; averageValue?: string; type: string };
}

/**
* Create a new io_k8s_api_autoscaling_v2_PodsMetricSource with default values
*/
export function createio_k8s_api_autoscaling_v2_PodsMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_PodsMetricSource>): io_k8s_api_autoscaling_v2_PodsMetricSource {
  return {
    metric: data?.metric !== undefined ? data.metric : { name: '' },
    target: data?.target !== undefined ? data.target : { type: '' },
  };
}
