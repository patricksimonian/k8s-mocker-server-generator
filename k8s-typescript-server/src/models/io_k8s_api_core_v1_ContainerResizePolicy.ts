/**
* ContainerResizePolicy represents resource resize policy for the container.
*/
export interface io_k8s_api_core_v1_ContainerResizePolicy {
/**
* Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
*/
resourceName: string;
/**
* Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
*/
restartPolicy: string;
}

/**
* Create a new io_k8s_api_core_v1_ContainerResizePolicy with default values
*/
export function createio_k8s_api_core_v1_ContainerResizePolicy(data?: Partial<io_k8s_api_core_v1_ContainerResizePolicy>): io_k8s_api_core_v1_ContainerResizePolicy {
  return {
    resourceName: data?.resourceName !== undefined ? data.resourceName : '',
    restartPolicy: data?.restartPolicy !== undefined ? data.restartPolicy : '',
  };
}
