/**
* NamespaceStatus is information about the current status of a Namespace.
*/
export interface io_k8s_api_core_v1_NamespaceStatus {
/**
* Represents the latest available observations of a namespace's current state.
*/
conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>;
/**
* Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/

Possible enum values:
 - `"Active"` means the namespace is available for use in the system
 - `"Terminating"` means the namespace is undergoing graceful termination
*/
phase?: 'Active' | 'Terminating';
}

/**
* Create a new io_k8s_api_core_v1_NamespaceStatus with default values
*/
export function createio_k8s_api_core_v1_NamespaceStatus(data?: Partial<io_k8s_api_core_v1_NamespaceStatus>): io_k8s_api_core_v1_NamespaceStatus {
  return {
    conditions: data?.conditions !== undefined ? data.conditions : [],
    phase: data?.phase !== undefined ? data.phase : '',
  };
}
