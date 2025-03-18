/**
* ContainerStatus contains details for the current status of this container.
*/
export interface io_k8s_api_core_v1_ContainerStatus {
/**
* Status of volume mounts.
*/
volumeMounts?: Array<{ name: string; readOnly?: boolean; recursiveReadOnly?: string; mountPath: string }>;
/**
* ContainerID is the ID of the container in the format '<type>://<container_id>'. Where type is a container runtime identifier, returned from Version call of CRI API (for example "containerd").
*/
containerID?: string;
/**
* ImageID is the image ID of the container's image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
*/
imageID: string;
/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
*/
lastState?: { running?: { startedAt?: Date }; terminated?: { containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date }; waiting?: { message?: string; reason?: string } };
/**
* AllocatedResourcesStatus represents the status of various resources allocated for this Pod.
*/
allocatedResourcesStatus?: Array<{ name: string; resources?: Array<{ health?: string; resourceID: string }> }>;
/**
* Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
*/
started?: boolean;
/**
* ContainerUser represents user identity information
*/
user?: { linux?: { uid: number; gid: number; supplementalGroups?: number[] } };
/**
* Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
*/
image: string;
/**
* Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).

The value is typically used to determine whether a container is ready to accept traffic.
*/
ready: boolean;
/**
* RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
*/
restartCount: number;
/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
*/
state?: { running?: { startedAt?: Date }; terminated?: { message?: string; reason?: string; signal?: number; startedAt?: Date; containerID?: string; exitCode: number; finishedAt?: Date }; waiting?: { message?: string; reason?: string } };
/**
* AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
*/
allocatedResources?: Record<string, any>;
/**
* Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
*/
name: string;
/**
* ResourceRequirements describes the compute resource requirements.
*/
resources?: { claims?: Array<{ name: string; request?: string }>; limits?: Record<string, any>; requests?: Record<string, any> };
}

/**
* Create a new io_k8s_api_core_v1_ContainerStatus with default values
*/
export function createio_k8s_api_core_v1_ContainerStatus(data?: Partial<io_k8s_api_core_v1_ContainerStatus>): io_k8s_api_core_v1_ContainerStatus {
  return {
    volumeMounts: data?.volumeMounts !== undefined ? data.volumeMounts : [],
    containerID: data?.containerID !== undefined ? data.containerID : '',
    imageID: data?.imageID !== undefined ? data.imageID : '',
    lastState: data?.lastState !== undefined ? data.lastState : {},
    allocatedResourcesStatus: data?.allocatedResourcesStatus !== undefined ? data.allocatedResourcesStatus : [],
    started: data?.started !== undefined ? data.started : false,
    user: data?.user !== undefined ? data.user : {},
    image: data?.image !== undefined ? data.image : '',
    ready: data?.ready !== undefined ? data.ready : false,
    restartCount: data?.restartCount !== undefined ? data.restartCount : 0,
    state: data?.state !== undefined ? data.state : {},
    allocatedResources: data?.allocatedResources !== undefined ? data.allocatedResources : {},
    name: data?.name !== undefined ? data.name : '',
    resources: data?.resources !== undefined ? data.resources : {},
  };
}
