/**
* PodReadinessGate contains the reference to a pod condition
*/
export interface io_k8s_api_core_v1_PodReadinessGate {
/**
* ConditionType refers to a condition in the pod's condition list with matching type.
*/
conditionType: string;
}

/**
* Create a new io_k8s_api_core_v1_PodReadinessGate with default values
*/
export function createio_k8s_api_core_v1_PodReadinessGate(data?: Partial<io_k8s_api_core_v1_PodReadinessGate>): io_k8s_api_core_v1_PodReadinessGate {
  return {
    conditionType: data?.conditionType !== undefined ? data.conditionType : '',
  };
}
