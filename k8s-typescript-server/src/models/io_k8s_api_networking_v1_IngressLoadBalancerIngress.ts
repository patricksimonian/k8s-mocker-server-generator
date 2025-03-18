/**
* IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
*/
export interface io_k8s_api_networking_v1_IngressLoadBalancerIngress {
/**
* hostname is set for load-balancer ingress points that are DNS based.
*/
hostname?: string;
/**
* ip is set for load-balancer ingress points that are IP based.
*/
ip?: string;
/**
* ports provides information about the ports exposed by this LoadBalancer.
*/
ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }>;
}

/**
* Create a new io_k8s_api_networking_v1_IngressLoadBalancerIngress with default values
*/
export function createio_k8s_api_networking_v1_IngressLoadBalancerIngress(data?: Partial<io_k8s_api_networking_v1_IngressLoadBalancerIngress>): io_k8s_api_networking_v1_IngressLoadBalancerIngress {
  return {
    hostname: data?.hostname !== undefined ? data.hostname : '',
    ip: data?.ip !== undefined ? data.ip : '',
    ports: data?.ports !== undefined ? data.ports : [],
  };
}
