/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
*/
export interface io_k8s_api_core_v1_ContainerState {
/**
* ContainerStateWaiting is a waiting state of a container.
*/
waiting?: { message?: string; reason?: string };
/**
* ContainerStateRunning is a running state of a container.
*/
running?: { startedAt?: Date };
/**
* ContainerStateTerminated is a terminated state of a container.
*/
terminated?: { startedAt?: Date; containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number };
}

/**
* Create a new io_k8s_api_core_v1_ContainerState with default values
*/
export function createio_k8s_api_core_v1_ContainerState(data?: Partial<io_k8s_api_core_v1_ContainerState>): io_k8s_api_core_v1_ContainerState {
  return {
    waiting: data?.waiting !== undefined ? data.waiting : {},
    running: data?.running !== undefined ? data.running : {},
    terminated: data?.terminated !== undefined ? data.terminated : { exitCode: 0 },
  };
}
