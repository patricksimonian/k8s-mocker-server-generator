/**
* EndpointHints provides hints describing how an endpoint should be consumed.
*/
export interface io_k8s_api_discovery_v1_EndpointHints {
/**
* forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
*/
forZones?: Array<{ name: string }>;
}

/**
* Create a new io_k8s_api_discovery_v1_EndpointHints with default values
*/
export function createio_k8s_api_discovery_v1_EndpointHints(data?: Partial<io_k8s_api_discovery_v1_EndpointHints>): io_k8s_api_discovery_v1_EndpointHints {
  return {
    forZones: data?.forZones !== undefined ? data.forZones : [],
  };
}
