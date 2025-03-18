/**
* CustomResourceValidation is a list of validation methods for CustomResources.
* @resourceType customresourcevalidation
* @kind Customresourcevalidation
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation {
/**
* openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.
*/
openAPIV3Schema?: Record<string, any>;
}

/**
* Create a new Customresourcevalidation with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation {
 return {
   openAPIV3Schema: data?.openAPIV3Schema !== undefined ? data.openAPIV3Schema : {},
 };
}
