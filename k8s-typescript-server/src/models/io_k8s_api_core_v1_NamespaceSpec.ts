/**
* NamespaceSpec describes the attributes on a Namespace.
*/
export interface io_k8s_api_core_v1_NamespaceSpec {
/**
* Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/
*/
finalizers?: string[];
}

/**
* Create a new io_k8s_api_core_v1_NamespaceSpec with default values
*/
export function createio_k8s_api_core_v1_NamespaceSpec(data?: Partial<io_k8s_api_core_v1_NamespaceSpec>): io_k8s_api_core_v1_NamespaceSpec {
  return {
    finalizers: data?.finalizers !== undefined ? data.finalizers : [],
  };
}
