/**
* ServiceStatus represents the current status of a service.
* @resourceType servicestatus
* @kind Servicestatus
*/
export interface io_k8s_api_core_v1_ServiceStatus {
/**
* LoadBalancerStatus represents the status of a load-balancer.
* @isObject
*/
loadBalancer?: { ingress?: Array<{ ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }>; hostname?: string; ip?: string; ipMode?: string }> };
/**
* Current service state
* @isArray
*/
conditions?: Array<{ lastTransitionTime: Date; message: string; observedGeneration?: number; reason: string; status: string; type: string }>;
}

/**
* Create a new Servicestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ServiceStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_ServiceStatus(data?: Partial<io_k8s_api_core_v1_ServiceStatus>): io_k8s_api_core_v1_ServiceStatus {
 return {
   loadBalancer: data?.loadBalancer !== undefined ? data.loadBalancer : {},
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
