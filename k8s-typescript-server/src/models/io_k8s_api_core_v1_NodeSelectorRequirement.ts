/**
* A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
*/
export interface io_k8s_api_core_v1_NodeSelectorRequirement {
/**
* The label key that the selector applies to.
*/
key: string;
/**
* Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.

Possible enum values:
 - `"DoesNotExist"`
 - `"Exists"`
 - `"Gt"`
 - `"In"`
 - `"Lt"`
 - `"NotIn"`
*/
operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn';
/**
* An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
*/
values?: string[];
}

/**
* Create a new io_k8s_api_core_v1_NodeSelectorRequirement with default values
*/
export function createio_k8s_api_core_v1_NodeSelectorRequirement(data?: Partial<io_k8s_api_core_v1_NodeSelectorRequirement>): io_k8s_api_core_v1_NodeSelectorRequirement {
  return {
    key: data?.key !== undefined ? data.key : '',
    operator: data?.operator !== undefined ? data.operator : '',
    values: data?.values !== undefined ? data.values : [],
  };
}
