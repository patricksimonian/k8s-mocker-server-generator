/**
* APIServiceStatus contains derived information about an API server
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus {
/**
* Current service state of apiService.
*/
conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>;
}

/**
* Create a new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus with default values
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus {
  return {
    conditions: data?.conditions !== undefined ? data.conditions : [],
  };
}
