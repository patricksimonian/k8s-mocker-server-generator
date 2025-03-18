/**
* NamespaceSpec describes the attributes on a Namespace.
* @resourceType namespacespec
* @kind Namespacespec
*/
export interface io_k8s_api_core_v1_NamespaceSpec {
/**
* Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
* @isArray
*/
finalizers?: string[];
}

/**
* Create a new Namespacespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NamespaceSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_NamespaceSpec(data?: Partial<io_k8s_api_core_v1_NamespaceSpec>): io_k8s_api_core_v1_NamespaceSpec {
 return {
   finalizers: data?.finalizers !== undefined ? data.finalizers : [],
 };
}
