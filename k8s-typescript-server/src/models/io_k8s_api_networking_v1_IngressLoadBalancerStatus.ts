/**
* IngressLoadBalancerStatus represents the status of a load-balancer.
*/
export interface io_k8s_api_networking_v1_IngressLoadBalancerStatus {
/**
* ingress is a list containing ingress points for the load-balancer.
*/
ingress?: Array<{ hostname?: string; ip?: string; ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }> }>;
}

/**
* Create a new io_k8s_api_networking_v1_IngressLoadBalancerStatus with default values
*/
export function createio_k8s_api_networking_v1_IngressLoadBalancerStatus(data?: Partial<io_k8s_api_networking_v1_IngressLoadBalancerStatus>): io_k8s_api_networking_v1_IngressLoadBalancerStatus {
  return {
    ingress: data?.ingress !== undefined ? data.ingress : [],
  };
}
