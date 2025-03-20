/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
* @resourceType objectmetricstatus
* @kind Objectmetricstatus
*/
export interface io_k8s_api_autoscaling_v2_ObjectMetricStatus {
/**
* CrossVersionObjectReference contains enough information to let you identify the referred resource.
* @required
* @isObject
*/
describedObject: { apiVersion?: string; kind: string; name: string };
/**
* MetricIdentifier defines the name and optionally selector for a metric
* @required
* @isObject
*/
metric: { name: string; selector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> } };
/**
* MetricValueStatus holds the current value for a metric
* @required
* @isObject
*/
current: { averageUtilization?: number; averageValue?: string; value?: string };
}

/**
* Create a new Objectmetricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ObjectMetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ObjectMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_ObjectMetricStatus>): io_k8s_api_autoscaling_v2_ObjectMetricStatus {
 return {
   describedObject: data?.describedObject !== undefined ? data.describedObject : { kind: '', name: '' },
   metric: data?.metric !== undefined ? data.metric : { name: '' },
   current: data?.current !== undefined ? data.current : {},
 };
}
