/**
* ScaleSpec describes the attributes of a scale subresource.
* @resourceType scalespec
* @kind Scalespec
*/
export interface io_k8s_api_autoscaling_v1_ScaleSpec {
/**
* replicas is the desired number of instances for the scaled object.
*/
replicas?: number;
}

/**
* Create a new Scalespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_ScaleSpec instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_ScaleSpec(data?: Partial<io_k8s_api_autoscaling_v1_ScaleSpec>): io_k8s_api_autoscaling_v1_ScaleSpec {
 return {
   replicas: data?.replicas !== undefined ? data.replicas : 0,
 };
}
