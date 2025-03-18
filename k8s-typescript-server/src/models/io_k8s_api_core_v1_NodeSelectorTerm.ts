/**
* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
*/
export interface io_k8s_api_core_v1_NodeSelectorTerm {
/**
* A list of node selector requirements by node's labels.
*/
matchExpressions?: Array<{ values?: string[]; key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn' }>;
/**
* A list of node selector requirements by node's fields.
*/
matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>;
}

/**
* Create a new io_k8s_api_core_v1_NodeSelectorTerm with default values
*/
export function createio_k8s_api_core_v1_NodeSelectorTerm(data?: Partial<io_k8s_api_core_v1_NodeSelectorTerm>): io_k8s_api_core_v1_NodeSelectorTerm {
  return {
    matchExpressions: data?.matchExpressions !== undefined ? data.matchExpressions : [],
    matchFields: data?.matchFields !== undefined ? data.matchFields : [],
  };
}
