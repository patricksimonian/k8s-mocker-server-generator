/**
* SelectableField specifies the JSON path of a field that may be used with field selectors.
* @resourceType selectablefield
* @kind Selectablefield
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableField {
/**
* jsonPath is a simple JSON path which is evaluated against each custom resource to produce a field selector value. Only JSON paths without the array notation are allowed. Must point to a field of type string, boolean or integer. Types with enum values and strings with formats are allowed. If jsonPath refers to absent field in a resource, the jsonPath evaluates to an empty string. Must not point to metdata fields. Required.
* @required
*/
jsonPath: string;
}

/**
* Create a new Selectablefield with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableField instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableField(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableField>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableField {
 return {
   jsonPath: data?.jsonPath !== undefined ? data.jsonPath : '',
 };
}
