/**
* ContainerStateRunning is a running state of a container.
* @resourceType containerstaterunning
* @kind Containerstaterunning
*/
export interface io_k8s_api_core_v1_ContainerStateRunning {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
startedAt?: Date;
}

/**
* Create a new Containerstaterunning with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerStateRunning instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerStateRunning(data?: Partial<io_k8s_api_core_v1_ContainerStateRunning>): io_k8s_api_core_v1_ContainerStateRunning {
 return {
   startedAt: data?.startedAt !== undefined ? data.startedAt : '',
 };
}
