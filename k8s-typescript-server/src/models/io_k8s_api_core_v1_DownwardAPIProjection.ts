/**
* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
*/
export interface io_k8s_api_core_v1_DownwardAPIProjection {
/**
* Items is a list of DownwardAPIVolume file
*/
items?: Array<{ fieldRef?: { apiVersion?: string; fieldPath: string }; mode?: number; path: string; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string } }>;
}

/**
* Create a new io_k8s_api_core_v1_DownwardAPIProjection with default values
*/
export function createio_k8s_api_core_v1_DownwardAPIProjection(data?: Partial<io_k8s_api_core_v1_DownwardAPIProjection>): io_k8s_api_core_v1_DownwardAPIProjection {
  return {
    items: data?.items !== undefined ? data.items : [],
  };
}
