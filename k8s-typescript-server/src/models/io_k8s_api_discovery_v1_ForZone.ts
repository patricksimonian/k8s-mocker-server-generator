/**
* ForZone provides information about which zones should consume this endpoint.
*/
export interface io_k8s_api_discovery_v1_ForZone {
/**
* name represents the name of the zone.
*/
name: string;
}

/**
* Create a new io_k8s_api_discovery_v1_ForZone with default values
*/
export function createio_k8s_api_discovery_v1_ForZone(data?: Partial<io_k8s_api_discovery_v1_ForZone>): io_k8s_api_discovery_v1_ForZone {
  return {
    name: data?.name !== undefined ? data.name : '',
  };
}
