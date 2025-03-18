/**
* ContainerStatus contains details for the current status of this container.
* @resourceType containerstatus
* @kind Containerstatus
*/
export interface io_k8s_api_core_v1_ContainerStatus {
/**
* AllocatedResourcesStatus represents the status of various resources allocated for this Pod.
* @isArray
*/
allocatedResourcesStatus?: Array<{ name: string; resources?: Array<{ health?: string; resourceID: string }> }>;
/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
* @isObject
*/
lastState?: { terminated?: { containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date }; waiting?: { message?: string; reason?: string }; running?: { startedAt?: Date } };
/**
* Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).

The value is typically used to determine whether a container is ready to accept traffic.
* @required
*/
ready: boolean;
/**
* ContainerUser represents user identity information
* @isObject
*/
user?: { linux?: { uid: number; gid: number; supplementalGroups?: number[] } };
/**
* Status of volume mounts.
* @isArray
*/
volumeMounts?: Array<{ mountPath: string; name: string; readOnly?: boolean; recursiveReadOnly?: string }>;
/**
* Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
* @required
*/
name: string;
/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
* @isObject
*/
state?: { running?: { startedAt?: Date }; terminated?: { startedAt?: Date; containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number }; waiting?: { message?: string; reason?: string } };
/**
* ContainerID is the ID of the container in the format '<type>://<container_id>'. Where type is a container runtime identifier, returned from Version call of CRI API (for example "containerd").
*/
containerID?: string;
/**
* Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
* @required
*/
image: string;
/**
* RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
* @required
*/
restartCount: number;
/**
* AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
*/
allocatedResources?: Record<string, any>;
/**
* ImageID is the image ID of the container's image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
* @required
*/
imageID: string;
/**
* ResourceRequirements describes the compute resource requirements.
* @isObject
*/
resources?: { claims?: Array<{ request?: string; name: string }>; limits?: Record<string, any>; requests?: Record<string, any> };
/**
* Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
*/
started?: boolean;
}

/**
* Create a new Containerstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerStatus(data?: Partial<io_k8s_api_core_v1_ContainerStatus>): io_k8s_api_core_v1_ContainerStatus {
 return {
   allocatedResourcesStatus: data?.allocatedResourcesStatus !== undefined ? data.allocatedResourcesStatus : [],
   lastState: data?.lastState !== undefined ? data.lastState : {},
   ready: data?.ready !== undefined ? data.ready : false,
   user: data?.user !== undefined ? data.user : {},
   volumeMounts: data?.volumeMounts !== undefined ? data.volumeMounts : [],
   name: data?.name !== undefined ? data.name : '',
   state: data?.state !== undefined ? data.state : {},
   containerID: data?.containerID !== undefined ? data.containerID : '',
   image: data?.image !== undefined ? data.image : '',
   restartCount: data?.restartCount !== undefined ? data.restartCount : 0,
   allocatedResources: data?.allocatedResources !== undefined ? data.allocatedResources : {},
   imageID: data?.imageID !== undefined ? data.imageID : '',
   resources: data?.resources !== undefined ? data.resources : {},
   started: data?.started !== undefined ? data.started : false,
 };
}
