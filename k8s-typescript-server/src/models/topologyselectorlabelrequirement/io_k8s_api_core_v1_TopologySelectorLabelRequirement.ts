/**
* A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
* @resourceType topologyselectorlabelrequirement
* @kind Topologyselectorlabelrequirement
*/
export interface io_k8s_api_core_v1_TopologySelectorLabelRequirement {
/**
* The label key that the selector applies to.
* @required
*/
key: string;
/**
* An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
* @required
* @isArray
*/
values: string[];
}

/**
* Create a new Topologyselectorlabelrequirement with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_TopologySelectorLabelRequirement instance with defaults applied
*/
export function createio_k8s_api_core_v1_TopologySelectorLabelRequirement(data?: Partial<io_k8s_api_core_v1_TopologySelectorLabelRequirement>): io_k8s_api_core_v1_TopologySelectorLabelRequirement {
 return {
   key: data?.key !== undefined ? data.key : '',
   values: data?.values !== undefined ? data.values : [],
 };
}
