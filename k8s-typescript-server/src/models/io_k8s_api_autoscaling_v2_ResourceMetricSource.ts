/**
* ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
*/
export interface io_k8s_api_autoscaling_v2_ResourceMetricSource {
/**
* name is the name of the resource in question.
*/
name: string;
/**
* MetricTarget defines the target value, average value, or average utilization of a specific metric
*/
target: { averageUtilization?: number; averageValue?: string; type: string; value?: string };
}

/**
* Create a new io_k8s_api_autoscaling_v2_ResourceMetricSource with default values
*/
export function createio_k8s_api_autoscaling_v2_ResourceMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_ResourceMetricSource>): io_k8s_api_autoscaling_v2_ResourceMetricSource {
  return {
    name: data?.name !== undefined ? data.name : '',
    target: data?.target !== undefined ? data.target : { type: '' },
  };
}
