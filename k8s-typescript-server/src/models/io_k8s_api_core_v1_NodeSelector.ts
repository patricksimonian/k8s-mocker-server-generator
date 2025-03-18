/**
* A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
*/
export interface io_k8s_api_core_v1_NodeSelector {
/**
* Required. A list of node selector terms. The terms are ORed.
*/
nodeSelectorTerms: Array<{ matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ values?: string[]; key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn' }> }>;
}

/**
* Create a new io_k8s_api_core_v1_NodeSelector with default values
*/
export function createio_k8s_api_core_v1_NodeSelector(data?: Partial<io_k8s_api_core_v1_NodeSelector>): io_k8s_api_core_v1_NodeSelector {
  return {
    nodeSelectorTerms: data?.nodeSelectorTerms !== undefined ? data.nodeSelectorTerms : [],
  };
}
