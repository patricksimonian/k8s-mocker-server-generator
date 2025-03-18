/**
* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
*/
export interface io_k8s_api_rbac_v1_AggregationRule {
/**
* ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
*/
clusterRoleSelectors?: Array<{ matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }>;
}

/**
* Create a new io_k8s_api_rbac_v1_AggregationRule with default values
*/
export function createio_k8s_api_rbac_v1_AggregationRule(data?: Partial<io_k8s_api_rbac_v1_AggregationRule>): io_k8s_api_rbac_v1_AggregationRule {
  return {
    clusterRoleSelectors: data?.clusterRoleSelectors !== undefined ? data.clusterRoleSelectors : [],
  };
}
