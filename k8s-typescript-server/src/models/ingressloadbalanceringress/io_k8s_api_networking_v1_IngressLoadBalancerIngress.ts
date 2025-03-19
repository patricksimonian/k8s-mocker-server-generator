/**
* IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
* @resourceType ingressloadbalanceringress
* @kind Ingressloadbalanceringress
*/
export interface io_k8s_api_networking_v1_IngressLoadBalancerIngress {
/**
* ports provides information about the ports exposed by this LoadBalancer.
* @isArray
*/
ports?: Array<{ protocol: 'SCTP' | 'TCP' | 'UDP'; error?: string; port: number }>;
/**
* hostname is set for load-balancer ingress points that are DNS based.
*/
hostname?: string;
/**
* ip is set for load-balancer ingress points that are IP based.
*/
ip?: string;
}

/**
* Create a new Ingressloadbalanceringress with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressLoadBalancerIngress instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressLoadBalancerIngress(data?: Partial<io_k8s_api_networking_v1_IngressLoadBalancerIngress>): io_k8s_api_networking_v1_IngressLoadBalancerIngress {
 return {
   ports: data?.ports !== undefined ? data.ports : [],
   hostname: data?.hostname !== undefined ? data.hostname : '',
   ip: data?.ip !== undefined ? data.ip : '',
 };
}
