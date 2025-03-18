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
metadata?: { generation?: number; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; selfLink?: string; finalizers?: string[]; deletionGracePeriodSeconds?: number; creationTimestamp?: Date; deletionTimestamp?: Date; resourceVersion?: string; uid?: string; annotations?: Record<string, any>; name?: string; generateName?: string };
/**
* NodeSpec describes the attributes that a node is created with.
* @isObject
*/
spec?: { taints?: Array<{ effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key: string; timeAdded?: Date; value?: string }>; unschedulable?: boolean; configSource?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; externalID?: string; podCIDR?: string; podCIDRs?: string[]; providerID?: string };
/**
* NodeStatus is information about the current status of a node.
* @isObject
*/
status?: { features?: { supplementalGroupsPolicy?: boolean }; images?: Array<{ names?: string[]; sizeBytes?: number }>; phase?: 'Pending' | 'Running' | 'Terminated'; runtimeHandlers?: Array<{ name?: string; features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean } }>; addresses?: Array<{ address: string; type: string }>; capacity?: Record<string, any>; config?: { active?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; assigned?: { configMap?: { name: string; namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string } }; error?: string; lastKnownGood?: { configMap?: { resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string; namespace: string } } }; daemonEndpoints?: { kubeletEndpoint?: { Port: number } }; volumesInUse?: string[]; allocatable?: Record<string, any>; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string; lastHeartbeatTime?: Date }>; nodeInfo?: { bootID: string; kernelVersion: string; kubeProxyVersion: string; kubeletVersion: string; osImage: string; systemUUID: string; architecture: string; containerRuntimeVersion: string; machineID: string; operatingSystem: string }; volumesAttached?: Array<{ devicePath: string; name: string }> };
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
