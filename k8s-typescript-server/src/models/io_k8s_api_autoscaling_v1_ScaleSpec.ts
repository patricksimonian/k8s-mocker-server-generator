/**
* ScaleSpec describes the attributes of a scale subresource.
*/
export interface io_k8s_api_autoscaling_v1_ScaleSpec {
/**
* replicas is the desired number of instances for the scaled object.
*/
replicas?: number;
}

/**
* Create a new io_k8s_api_autoscaling_v1_ScaleSpec with default values
*/
export function createio_k8s_api_autoscaling_v1_ScaleSpec(data?: Partial<io_k8s_api_autoscaling_v1_ScaleSpec>): io_k8s_api_autoscaling_v1_ScaleSpec {
  return {
    replicas: data?.replicas !== undefined ? data.replicas : 0,
  };
}
