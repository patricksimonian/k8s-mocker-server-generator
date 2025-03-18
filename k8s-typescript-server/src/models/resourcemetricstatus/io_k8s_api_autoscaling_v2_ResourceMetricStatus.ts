/**
* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* @resourceType resourcemetricstatus
* @kind Resourcemetricstatus
*/
export interface io_k8s_api_autoscaling_v2_ResourceMetricStatus {
/**
* MetricValueStatus holds the current value for a metric
* @required
* @isObject
*/
current: { value?: string; averageUtilization?: number; averageValue?: string };
/**
* name is the name of the resource in question.
* @required
*/
name: string;
}

/**
* Create a new Resourcemetricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ResourceMetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ResourceMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_ResourceMetricStatus>): io_k8s_api_autoscaling_v2_ResourceMetricStatus {
 return {
   current: data?.current !== undefined ? data.current : {},
   name: data?.name !== undefined ? data.name : '',
 };
}
