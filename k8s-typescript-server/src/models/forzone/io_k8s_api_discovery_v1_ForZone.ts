/**
* ForZone provides information about which zones should consume this endpoint.
* @resourceType forzone
* @kind Forzone
*/
export interface io_k8s_api_discovery_v1_ForZone {
/**
* name represents the name of the zone.
* @required
*/
name: string;
}

/**
* Create a new Forzone with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_discovery_v1_ForZone instance with defaults applied
*/
export function createio_k8s_api_discovery_v1_ForZone(data?: Partial<io_k8s_api_discovery_v1_ForZone>): io_k8s_api_discovery_v1_ForZone {
 return {
   name: data?.name !== undefined ? data.name : '',
 };
}
