/**
* ContainerStateWaiting is a waiting state of a container.
* @resourceType containerstatewaiting
* @kind Containerstatewaiting
*/
export interface io_k8s_api_core_v1_ContainerStateWaiting {
/**
* Message regarding why the container is not yet running.
*/
message?: string;
/**
* (brief) reason the container is not yet running.
*/
reason?: string;
}

/**
* Create a new Containerstatewaiting with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerStateWaiting instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerStateWaiting(data?: Partial<io_k8s_api_core_v1_ContainerStateWaiting>): io_k8s_api_core_v1_ContainerStateWaiting {
 return {
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
 };
}
