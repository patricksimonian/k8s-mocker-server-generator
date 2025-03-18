/**
* IngressStatus describe the current state of the Ingress.
*/
export interface io_k8s_api_networking_v1_IngressStatus {
/**
* IngressLoadBalancerStatus represents the status of a load-balancer.
*/
loadBalancer?: { ingress?: Array<{ hostname?: string; ip?: string; ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }> }> };
}

/**
* Create a new io_k8s_api_networking_v1_IngressStatus with default values
*/
export function createio_k8s_api_networking_v1_IngressStatus(data?: Partial<io_k8s_api_networking_v1_IngressStatus>): io_k8s_api_networking_v1_IngressStatus {
  return {
    loadBalancer: data?.loadBalancer !== undefined ? data.loadBalancer : {},
  };
}
