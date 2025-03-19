/**
* Represents a projected volume source
* @resourceType projectedvolumesource
* @kind Projectedvolumesource
*/
export interface io_k8s_api_core_v1_ProjectedVolumeSource {
/**
* defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
*/
defaultMode?: number;
/**
* sources is the list of volume projections. Each entry in this list handles one source.
* @isArray
*/
sources?: Array<{ secret?: { items?: Array<{ path: string; key: string; mode?: number }>; name?: string; optional?: boolean }; serviceAccountToken?: { expirationSeconds?: number; path: string; audience?: string }; clusterTrustBundle?: { optional?: boolean; path: string; signerName?: string; labelSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; name?: string }; configMap?: { items?: Array<{ key: string; mode?: number; path: string }>; name?: string; optional?: boolean }; downwardAPI?: { items?: Array<{ fieldRef?: { apiVersion?: string; fieldPath: string }; mode?: number; path: string; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string } }> } }>;
}

/**
* Create a new Projectedvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ProjectedVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ProjectedVolumeSource(data?: Partial<io_k8s_api_core_v1_ProjectedVolumeSource>): io_k8s_api_core_v1_ProjectedVolumeSource {
 return {
   defaultMode: data?.defaultMode !== undefined ? data.defaultMode : 0,
   sources: data?.sources !== undefined ? data.sources : [],
 };
}
