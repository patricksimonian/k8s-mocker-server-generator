/**
* ScaleStatus represents the current status of a scale subresource.
*/
export interface io_k8s_api_autoscaling_v1_ScaleStatus {
/**
* replicas is the actual number of observed instances of the scaled object.
*/
replicas: number;
/**
* selector is the label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
*/
selector?: string;
}

/**
* Create a new io_k8s_api_autoscaling_v1_ScaleStatus with default values
*/
export function createio_k8s_api_autoscaling_v1_ScaleStatus(data?: Partial<io_k8s_api_autoscaling_v1_ScaleStatus>): io_k8s_api_autoscaling_v1_ScaleStatus {
  return {
    replicas: data?.replicas !== undefined ? data.replicas : 0,
    selector: data?.selector !== undefined ? data.selector : '',
  };
}
