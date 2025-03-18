/**
* PodSchedulingGate is associated to a Pod to guard its scheduling.
*/
export interface io_k8s_api_core_v1_PodSchedulingGate {
/**
* Name of the scheduling gate. Each scheduling gate must have a unique name field.
*/
name: string;
}

/**
* Create a new io_k8s_api_core_v1_PodSchedulingGate with default values
*/
export function createio_k8s_api_core_v1_PodSchedulingGate(data?: Partial<io_k8s_api_core_v1_PodSchedulingGate>): io_k8s_api_core_v1_PodSchedulingGate {
  return {
    name: data?.name !== undefined ? data.name : '',
  };
}
