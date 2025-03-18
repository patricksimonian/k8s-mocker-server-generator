/**
* A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
*/
export interface io_k8s_api_core_v1_TopologySelectorTerm {
/**
* A list of topology selector requirements by labels.
*/
matchLabelExpressions?: Array<{ key: string; values: string[] }>;
}

/**
* Create a new io_k8s_api_core_v1_TopologySelectorTerm with default values
*/
export function createio_k8s_api_core_v1_TopologySelectorTerm(data?: Partial<io_k8s_api_core_v1_TopologySelectorTerm>): io_k8s_api_core_v1_TopologySelectorTerm {
  return {
    matchLabelExpressions: data?.matchLabelExpressions !== undefined ? data.matchLabelExpressions : [],
  };
}
