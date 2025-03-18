/**
* ServiceStatus represents the current status of a service.
*/
export interface io_k8s_api_core_v1_ServiceStatus {
/**
* Current service state
*/
conditions?: Array<{ type: string; lastTransitionTime: Date; message: string; observedGeneration?: number; reason: string; status: string }>;
/**
* LoadBalancerStatus represents the status of a load-balancer.
*/
loadBalancer?: { ingress?: Array<{ ipMode?: string; ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }>; hostname?: string; ip?: string }> };
}

/**
* Create a new io_k8s_api_core_v1_ServiceStatus with default values
*/
export function createio_k8s_api_core_v1_ServiceStatus(data?: Partial<io_k8s_api_core_v1_ServiceStatus>): io_k8s_api_core_v1_ServiceStatus {
  return {
    conditions: data?.conditions !== undefined ? data.conditions : [],
    loadBalancer: data?.loadBalancer !== undefined ? data.loadBalancer : {},
  };
}
