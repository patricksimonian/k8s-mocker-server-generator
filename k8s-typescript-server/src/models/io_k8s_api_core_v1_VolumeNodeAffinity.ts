/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
*/
export interface io_k8s_api_core_v1_VolumeNodeAffinity {
/**
* A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
*/
required?: { nodeSelectorTerms: Array<{ matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchExpressions?: Array<{ values?: string[]; key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn' }> }> };
}

/**
* Create a new io_k8s_api_core_v1_VolumeNodeAffinity with default values
*/
export function createio_k8s_api_core_v1_VolumeNodeAffinity(data?: Partial<io_k8s_api_core_v1_VolumeNodeAffinity>): io_k8s_api_core_v1_VolumeNodeAffinity {
  return {
    required: data?.required !== undefined ? data.required : { nodeSelectorTerms: [] },
  };
}
