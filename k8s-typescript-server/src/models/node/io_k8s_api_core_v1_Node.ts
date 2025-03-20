/**
* Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
* @resourceType node
* @kind Node
*/
export interface io_k8s_api_core_v1_Node {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionGracePeriodSeconds?: number; name?: string; namespace?: string; selfLink?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; uid?: string; generateName?: string; generation?: number; labels?: Record<string, any>; resourceVersion?: string; annotations?: Record<string, any>; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }> };
/**
* NodeSpec describes the attributes that a node is created with.
* @isObject
*/
spec?: { configSource?: { configMap?: { name: string; namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string } }; externalID?: string; podCIDR?: string; podCIDRs?: string[]; providerID?: string; taints?: Array<{ key: string; timeAdded?: Date; value?: string; effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule' }>; unschedulable?: boolean };
/**
* NodeStatus is information about the current status of a node.
* @isObject
*/
status?: { volumesInUse?: string[]; allocatable?: Record<string, any>; capacity?: Record<string, any>; config?: { lastKnownGood?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; active?: { configMap?: { uid?: string; kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string } }; assigned?: { configMap?: { uid?: string; kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string } }; error?: string }; images?: Array<{ names?: string[]; sizeBytes?: number }>; phase?: 'Pending' | 'Running' | 'Terminated'; volumesAttached?: Array<{ devicePath: string; name: string }>; addresses?: Array<{ address: string; type: string }>; conditions?: Array<{ lastHeartbeatTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; daemonEndpoints?: { kubeletEndpoint?: { Port: number } }; features?: { supplementalGroupsPolicy?: boolean }; nodeInfo?: { kubeletVersion: string; systemUUID: string; kernelVersion: string; bootID: string; containerRuntimeVersion: string; kubeProxyVersion: string; machineID: string; operatingSystem: string; osImage: string; architecture: string }; runtimeHandlers?: Array<{ features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean }; name?: string }> };
}

/**
* Create a new Node with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Node instance with defaults applied
*/
export function createio_k8s_api_core_v1_Node(data?: Partial<io_k8s_api_core_v1_Node>): io_k8s_api_core_v1_Node {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
 };
}
