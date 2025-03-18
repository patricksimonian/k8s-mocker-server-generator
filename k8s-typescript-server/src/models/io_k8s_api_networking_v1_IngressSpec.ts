/**
* IngressSpec describes the Ingress the user wishes to exist.
*/
export interface io_k8s_api_networking_v1_IngressSpec {
/**
* rules is a list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
*/
rules?: Array<{ host?: string; http?: { paths: Array<{ pathType: 'Exact' | 'ImplementationSpecific' | 'Prefix'; backend: { resource?: { apiGroup?: string; kind: string; name: string }; service?: { name: string; port?: { name?: string; number?: number } } }; path?: string }> } }>;
/**
* tls represents the TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
*/
tls?: Array<{ hosts?: string[]; secretName?: string }>;
/**
* IngressBackend describes all endpoints for a given service and port.
*/
defaultBackend?: { resource?: { name: string; apiGroup?: string; kind: string }; service?: { name: string; port?: { name?: string; number?: number } } };
/**
* ingressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.
*/
ingressClassName?: string;
}

/**
* Create a new io_k8s_api_networking_v1_IngressSpec with default values
*/
export function createio_k8s_api_networking_v1_IngressSpec(data?: Partial<io_k8s_api_networking_v1_IngressSpec>): io_k8s_api_networking_v1_IngressSpec {
  return {
    rules: data?.rules !== undefined ? data.rules : [],
    tls: data?.tls !== undefined ? data.tls : [],
    defaultBackend: data?.defaultBackend !== undefined ? data.defaultBackend : {},
    ingressClassName: data?.ingressClassName !== undefined ? data.ingressClassName : '',
  };
}
