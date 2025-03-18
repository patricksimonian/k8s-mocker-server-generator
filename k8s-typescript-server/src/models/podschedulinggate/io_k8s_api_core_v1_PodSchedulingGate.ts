/**
* PodSchedulingGate is associated to a Pod to guard its scheduling.
* @resourceType podschedulinggate
* @kind Podschedulinggate
*/
export interface io_k8s_api_core_v1_PodSchedulingGate {
/**
* Name of the scheduling gate. Each scheduling gate must have a unique name field.
* @required
*/
name: string;
}

/**
* Create a new Podschedulinggate with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodSchedulingGate instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodSchedulingGate(data?: Partial<io_k8s_api_core_v1_PodSchedulingGate>): io_k8s_api_core_v1_PodSchedulingGate {
 return {
   name: data?.name !== undefined ? data.name : '',
 };
}
