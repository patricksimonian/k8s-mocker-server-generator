/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @resourceType labelselector
* @kind Labelselector
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector {
/**
* matchExpressions is a list of label selector requirements. The requirements are ANDed.
* @isArray
*/
matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>;
/**
* matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
*/
matchLabels?: Record<string, any>;
}

/**
* Create a new Labelselector with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector>): io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector {
 return {
   matchExpressions: data?.matchExpressions !== undefined ? data.matchExpressions : [],
   matchLabels: data?.matchLabels !== undefined ? data.matchLabels : {},
 };
}
