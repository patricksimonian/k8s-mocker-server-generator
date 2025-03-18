/**
* A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
* @resourceType labelselectorrequirement
* @kind Labelselectorrequirement
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirement {
/**
* key is the label key that the selector applies to.
* @required
*/
key: string;
/**
* operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
* @required
*/
operator: string;
/**
* values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
* @isArray
*/
values?: string[];
}

/**
* Create a new Labelselectorrequirement with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirement instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirement(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirement>): io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirement {
 return {
   key: data?.key !== undefined ? data.key : '',
   operator: data?.operator !== undefined ? data.operator : '',
   values: data?.values !== undefined ? data.values : [],
 };
}
