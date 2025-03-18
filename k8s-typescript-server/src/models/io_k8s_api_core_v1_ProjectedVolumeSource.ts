/**
* Represents a projected volume source
*/
export interface io_k8s_api_core_v1_ProjectedVolumeSource {
/**
* defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
*/
defaultMode?: number;
/**
* sources is the list of volume projections. Each entry in this list handles one source.
*/
sources?: Array<{ clusterTrustBundle?: { signerName?: string; labelSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; name?: string; optional?: boolean; path: string }; configMap?: { items?: Array<{ path: string; key: string; mode?: number }>; name?: string; optional?: boolean }; downwardAPI?: { items?: Array<{ fieldRef?: { apiVersion?: string; fieldPath: string }; mode?: number; path: string; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string } }> }; secret?: { items?: Array<{ key: string; mode?: number; path: string }>; name?: string; optional?: boolean }; serviceAccountToken?: { audience?: string; expirationSeconds?: number; path: string } }>;
}

/**
* Create a new io_k8s_api_core_v1_ProjectedVolumeSource with default values
*/
export function createio_k8s_api_core_v1_ProjectedVolumeSource(data?: Partial<io_k8s_api_core_v1_ProjectedVolumeSource>): io_k8s_api_core_v1_ProjectedVolumeSource {
  return {
    defaultMode: data?.defaultMode !== undefined ? data.defaultMode : 0,
    sources: data?.sources !== undefined ? data.sources : [],
  };
}
