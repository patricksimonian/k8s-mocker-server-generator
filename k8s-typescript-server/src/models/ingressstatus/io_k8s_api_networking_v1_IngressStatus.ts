/**
* IngressStatus describe the current state of the Ingress.
* @resourceType ingressstatus
* @kind Ingressstatus
*/
export interface io_k8s_api_networking_v1_IngressStatus {
/**
* IngressLoadBalancerStatus represents the status of a load-balancer.
* @isObject
*/
loadBalancer?: { ingress?: Array<{ hostname?: string; ip?: string; ports?: Array<{ port: number; protocol: 'SCTP' | 'TCP' | 'UDP'; error?: string }> }> };
}

/**
* Create a new Ingressstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressStatus instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressStatus(data?: Partial<io_k8s_api_networking_v1_IngressStatus>): io_k8s_api_networking_v1_IngressStatus {
 return {
   loadBalancer: data?.loadBalancer !== undefined ? data.loadBalancer : {},
 };
}
