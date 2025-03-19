/**
* Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
* @resourceType node
* @kind Node
*/
export interface io_k8s_api_core_v1_Node {
/**
* NodeStatus is information about the current status of a node.
* @isObject
*/
status?: { config?: { active?: { configMap?: { resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string; namespace: string } }; assigned?: { configMap?: { name: string; namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string } }; error?: string; lastKnownGood?: { configMap?: { namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string } } }; images?: Array<{ names?: string[]; sizeBytes?: number }>; nodeInfo?: { containerRuntimeVersion: string; kernelVersion: string; kubeProxyVersion: string; machineID: string; operatingSystem: string; architecture: string; bootID: string; systemUUID: string; kubeletVersion: string; osImage: string }; phase?: 'Pending' | 'Running' | 'Terminated'; volumesAttached?: Array<{ name: string; devicePath: string }>; volumesInUse?: string[]; allocatable?: Record<string, any>; capacity?: Record<string, any>; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string; lastHeartbeatTime?: Date }>; daemonEndpoints?: { kubeletEndpoint?: { Port: number } }; features?: { supplementalGroupsPolicy?: boolean }; runtimeHandlers?: Array<{ features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean }; name?: string }>; addresses?: Array<{ address: string; type: string }> };
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
metadata?: { ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; annotations?: Record<string, any>; finalizers?: string[]; generation?: number; name?: string; uid?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; labels?: Record<string, any>; namespace?: string; creationTimestamp?: Date; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; selfLink?: string; generateName?: string };
/**
* NodeSpec describes the attributes that a node is created with.
* @isObject
*/
spec?: { podCIDR?: string; podCIDRs?: string[]; providerID?: string; taints?: Array<{ key: string; timeAdded?: Date; value?: string; effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule' }>; unschedulable?: boolean; configSource?: { configMap?: { namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string } }; externalID?: string };
}

/**
* Create a new Node with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Node instance with defaults applied
*/
export function createio_k8s_api_core_v1_Node(data?: Partial<io_k8s_api_core_v1_Node>): io_k8s_api_core_v1_Node {
 return {
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
