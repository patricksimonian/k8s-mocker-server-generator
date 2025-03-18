/**
* IngressTLS describes the transport layer security associated with an ingress.
* @resourceType ingresstl
* @kind Ingresstl
*/
export interface io_k8s_api_networking_v1_IngressTLS {
/**
* hosts is a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
* @isArray
*/
hosts?: string[];
/**
* secretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the "Host" header is used for routing.
*/
secretName?: string;
}

/**
* Create a new Ingresstl with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressTLS instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressTLS(data?: Partial<io_k8s_api_networking_v1_IngressTLS>): io_k8s_api_networking_v1_IngressTLS {
 return {
   hosts: data?.hosts !== undefined ? data.hosts : [],
   secretName: data?.secretName !== undefined ? data.secretName : '',
 };
}
