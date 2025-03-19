/**
* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
* @resourceType podsmetricstatus
* @kind Podsmetricstatus
*/
export interface io_k8s_api_autoscaling_v2_PodsMetricStatus {
/**
* MetricIdentifier defines the name and optionally selector for a metric
* @required
* @isObject
*/
metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
/**
* MetricValueStatus holds the current value for a metric
* @required
* @isObject
*/
current: { value?: string; averageUtilization?: number; averageValue?: string };
}

/**
* Create a new Podsmetricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_PodsMetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_PodsMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_PodsMetricStatus>): io_k8s_api_autoscaling_v2_PodsMetricStatus {
 return {
   metric: data?.metric !== undefined ? data.metric : { name: '' },
   current: data?.current !== undefined ? data.current : {},
 };
}
