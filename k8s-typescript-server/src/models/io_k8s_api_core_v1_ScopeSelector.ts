/**
* A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
*/
export interface io_k8s_api_core_v1_ScopeSelector {
/**
* A list of scope selector requirements by scope of the resources.
*/
matchExpressions?: Array<{ operator: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn'; scopeName: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'; values?: string[] }>;
}

/**
* Create a new io_k8s_api_core_v1_ScopeSelector with default values
*/
export function createio_k8s_api_core_v1_ScopeSelector(data?: Partial<io_k8s_api_core_v1_ScopeSelector>): io_k8s_api_core_v1_ScopeSelector {
  return {
    matchExpressions: data?.matchExpressions !== undefined ? data.matchExpressions : [],
  };
}
