/**
* MetricIdentifier defines the name and optionally selector for a metric
*/
export interface io_k8s_api_autoscaling_v2_MetricIdentifier {
/**
* name is the name of the given metric
*/
name: string;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
*/
selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
}

/**
* Create a new io_k8s_api_autoscaling_v2_MetricIdentifier with default values
*/
export function createio_k8s_api_autoscaling_v2_MetricIdentifier(data?: Partial<io_k8s_api_autoscaling_v2_MetricIdentifier>): io_k8s_api_autoscaling_v2_MetricIdentifier {
  return {
    name: data?.name !== undefined ? data.name : '',
    selector: data?.selector !== undefined ? data.selector : {},
  };
}
