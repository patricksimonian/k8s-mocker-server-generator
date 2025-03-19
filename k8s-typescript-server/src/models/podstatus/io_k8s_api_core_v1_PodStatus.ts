/**
* PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
* @resourceType podstatus
* @kind Podstatus
*/
export interface io_k8s_api_core_v1_PodStatus {
/**
* Statuses of containers in this pod. Each container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
* @isArray
*/
containerStatuses?: Array<{ allocatedResourcesStatus?: Array<{ name: string; resources?: Array<{ health?: string; resourceID: string }> }>; resources?: { claims?: Array<{ request?: string; name: string }>; limits?: Record<string, any>; requests?: Record<string, any> }; image: string; name: string; state?: { terminated?: { exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date; containerID?: string }; waiting?: { message?: string; reason?: string }; running?: { startedAt?: Date } }; allocatedResources?: Record<string, any>; lastState?: { running?: { startedAt?: Date }; terminated?: { finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date; containerID?: string; exitCode: number }; waiting?: { message?: string; reason?: string } }; ready: boolean; started?: boolean; user?: { linux?: { gid: number; supplementalGroups?: number[]; uid: number } }; containerID?: string; imageID: string; restartCount: number; volumeMounts?: Array<{ mountPath: string; name: string; readOnly?: boolean; recursiveReadOnly?: string }> }>;
/**
* Statuses for any ephemeral containers that have run in this pod. Each ephemeral container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
* @isArray
*/
ephemeralContainerStatuses?: Array<{ allocatedResourcesStatus?: Array<{ name: string; resources?: Array<{ health?: string; resourceID: string }> }>; image: string; ready: boolean; user?: { linux?: { gid: number; supplementalGroups?: number[]; uid: number } }; allocatedResources?: Record<string, any>; containerID?: string; started?: boolean; resources?: { claims?: Array<{ name: string; request?: string }>; limits?: Record<string, any>; requests?: Record<string, any> }; volumeMounts?: Array<{ mountPath: string; name: string; readOnly?: boolean; recursiveReadOnly?: string }>; imageID: string; lastState?: { running?: { startedAt?: Date }; terminated?: { containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date }; waiting?: { message?: string; reason?: string } }; name: string; restartCount: number; state?: { waiting?: { message?: string; reason?: string }; running?: { startedAt?: Date }; terminated?: { signal?: number; startedAt?: Date; containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string } } }>;
/**
* The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#quality-of-service-classes

Possible enum values:
 - `"BestEffort"` is the BestEffort qos class.
 - `"Burstable"` is the Burstable qos class.
 - `"Guaranteed"` is the Guaranteed qos class.
*/
qosClass?: 'BestEffort' | 'Burstable' | 'Guaranteed';
/**
* Status of resource claims.
* @isArray
*/
resourceClaimStatuses?: Array<{ name: string; resourceClaimName?: string }>;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
startTime?: Date;
/**
* hostIPs holds the IP addresses allocated to the host. If this field is specified, the first entry must match the hostIP field. This list is empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns means that HostIPs will not be updated even if there is a node is assigned to this pod.
* @isArray
*/
hostIPs?: Array<{ ip: string }>;
/**
* A human readable message indicating details about why the pod is in this condition.
*/
message?: string;
/**
* podIP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
*/
podIP?: string;
/**
* A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted'
*/
reason?: string;
/**
* Status of resources resize desired for pod's containers. It is empty if no resources resize is pending. Any changes to container resources will automatically set this to "Proposed"
*/
resize?: string;
/**
* Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
* @isArray
*/
conditions?: Array<{ lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>;
/**
* Statuses of init containers in this pod. The most recent successful non-restartable init container will have ready = true, the most recently started container will have startTime set. Each init container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-and-container-status
* @isArray
*/
initContainerStatuses?: Array<{ lastState?: { running?: { startedAt?: Date }; terminated?: { signal?: number; startedAt?: Date; containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string }; waiting?: { message?: string; reason?: string } }; resources?: { claims?: Array<{ name: string; request?: string }>; limits?: Record<string, any>; requests?: Record<string, any> }; restartCount: number; started?: boolean; state?: { running?: { startedAt?: Date }; terminated?: { containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date }; waiting?: { message?: string; reason?: string } }; allocatedResourcesStatus?: Array<{ name: string; resources?: Array<{ health?: string; resourceID: string }> }>; containerID?: string; ready: boolean; allocatedResources?: Record<string, any>; image: string; imageID: string; name: string; user?: { linux?: { gid: number; supplementalGroups?: number[]; uid: number } }; volumeMounts?: Array<{ name: string; readOnly?: boolean; recursiveReadOnly?: string; mountPath: string }> }>;
/**
* The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod's status. There are five possible phase values:

Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.

More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase

Possible enum values:
 - `"Failed"` means that all containers in the pod have terminated, and at least one container has terminated in a failure (exited with a non-zero exit code or was stopped by the system).
 - `"Pending"` means the pod has been accepted by the system, but one or more of the containers has not been started. This includes time before being bound to a node, as well as time spent pulling images onto the host.
 - `"Running"` means the pod has been bound to a node and all of the containers have been started. At least one container is still running or is in the process of being restarted.
 - `"Succeeded"` means that all containers in the pod have voluntarily terminated with a container exit code of 0, and the system is not going to restart any of these containers.
 - `"Unknown"` means that for some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod. Deprecated: It isn't being set since 2015 (74da3b14b0c0f658b3bb8d2def5094686d0e9095)
*/
phase?: 'Failed' | 'Pending' | 'Running' | 'Succeeded' | 'Unknown';
/**
* hostIP holds the IP address of the host to which the pod is assigned. Empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns mean that HostIP will not be updated even if there is a node is assigned to pod
*/
hostIP?: string;
/**
* nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
*/
nominatedNodeName?: string;
/**
* podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet.
* @isArray
*/
podIPs?: Array<{ ip: string }>;
}

/**
* Create a new Podstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodStatus(data?: Partial<io_k8s_api_core_v1_PodStatus>): io_k8s_api_core_v1_PodStatus {
 return {
   containerStatuses: data?.containerStatuses !== undefined ? data.containerStatuses : [],
   ephemeralContainerStatuses: data?.ephemeralContainerStatuses !== undefined ? data.ephemeralContainerStatuses : [],
   qosClass: data?.qosClass !== undefined ? data.qosClass : '',
   resourceClaimStatuses: data?.resourceClaimStatuses !== undefined ? data.resourceClaimStatuses : [],
   startTime: data?.startTime !== undefined ? data.startTime : '',
   hostIPs: data?.hostIPs !== undefined ? data.hostIPs : [],
   message: data?.message !== undefined ? data.message : '',
   podIP: data?.podIP !== undefined ? data.podIP : '',
   reason: data?.reason !== undefined ? data.reason : '',
   resize: data?.resize !== undefined ? data.resize : '',
   conditions: data?.conditions !== undefined ? data.conditions : [],
   initContainerStatuses: data?.initContainerStatuses !== undefined ? data.initContainerStatuses : [],
   phase: data?.phase !== undefined ? data.phase : '',
   hostIP: data?.hostIP !== undefined ? data.hostIP : '',
   nominatedNodeName: data?.nominatedNodeName !== undefined ? data.nominatedNodeName : '',
   podIPs: data?.podIPs !== undefined ? data.podIPs : [],
 };
}
