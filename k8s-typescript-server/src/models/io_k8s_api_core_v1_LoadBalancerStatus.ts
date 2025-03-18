/**
* LoadBalancerStatus represents the status of a load-balancer.
*/
export interface io_k8s_api_core_v1_LoadBalancerStatus {
/**
* Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
*/
ingress?: Array<{ hostname?: string; ip?: string; ipMode?: string; ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }> }>;
}

/**
* Create a new io_k8s_api_core_v1_LoadBalancerStatus with default values
*/
export function createio_k8s_api_core_v1_LoadBalancerStatus(data?: Partial<io_k8s_api_core_v1_LoadBalancerStatus>): io_k8s_api_core_v1_LoadBalancerStatus {
  return {
    ingress: data?.ingress !== undefined ? data.ingress : [],
  };
}
