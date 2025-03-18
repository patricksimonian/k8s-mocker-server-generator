/**
* PodReadinessGate contains the reference to a pod condition
* @resourceType podreadinessgate
* @kind Podreadinessgate
*/
export interface io_k8s_api_core_v1_PodReadinessGate {
/**
* ConditionType refers to a condition in the pod's condition list with matching type.
* @required
*/
conditionType: string;
}

/**
* Create a new Podreadinessgate with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodReadinessGate instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodReadinessGate(data?: Partial<io_k8s_api_core_v1_PodReadinessGate>): io_k8s_api_core_v1_PodReadinessGate {
 return {
   conditionType: data?.conditionType !== undefined ? data.conditionType : '',
 };
}
