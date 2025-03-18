/**
* ContainerStateTerminated is a terminated state of a container.
*/
export interface io_k8s_api_core_v1_ContainerStateTerminated {
/**
* (brief) reason from the last termination of the container
*/
reason?: string;
/**
* Signal from the last termination of the container
*/
signal?: number;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
startedAt?: Date;
/**
* Container's ID in the format '<type>://<container_id>'
*/
containerID?: string;
/**
* Exit status from the last termination of the container
*/
exitCode: number;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
finishedAt?: Date;
/**
* Message regarding the last termination of the container
*/
message?: string;
}

/**
* Create a new io_k8s_api_core_v1_ContainerStateTerminated with default values
*/
export function createio_k8s_api_core_v1_ContainerStateTerminated(data?: Partial<io_k8s_api_core_v1_ContainerStateTerminated>): io_k8s_api_core_v1_ContainerStateTerminated {
  return {
    reason: data?.reason !== undefined ? data.reason : '',
    signal: data?.signal !== undefined ? data.signal : 0,
    startedAt: data?.startedAt !== undefined ? data.startedAt : '',
    containerID: data?.containerID !== undefined ? data.containerID : '',
    exitCode: data?.exitCode !== undefined ? data.exitCode : 0,
    finishedAt: data?.finishedAt !== undefined ? data.finishedAt : '',
    message: data?.message !== undefined ? data.message : '',
  };
}
