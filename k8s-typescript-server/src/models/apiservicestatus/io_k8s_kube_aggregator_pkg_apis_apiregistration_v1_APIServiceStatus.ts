/**
* APIServiceStatus contains derived information about an API server
* @resourceType apiservicestatus
* @kind Apiservicestatus
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus {
/**
* Current service state of apiService.
* @isArray
*/
conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }>;
}

/**
* Create a new Apiservicestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus instance with defaults applied
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus {
 return {
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
