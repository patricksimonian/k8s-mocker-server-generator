/**
* Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
*/
export interface io_k8s_api_core_v1_Node {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; name?: string; selfLink?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; generation?: number; labels?: Record<string, any>; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; uid?: string; annotations?: Record<string, any>; namespace?: string; resourceVersion?: string };
/**
* NodeSpec describes the attributes that a node is created with.
*/
spec?: { configSource?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; externalID?: string; podCIDR?: string; podCIDRs?: string[]; providerID?: string; taints?: Array<{ timeAdded?: Date; value?: string; effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key: string }>; unschedulable?: boolean };
/**
* NodeStatus is information about the current status of a node.
*/
status?: { capacity?: Record<string, any>; conditions?: Array<{ lastHeartbeatTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; runtimeHandlers?: Array<{ name?: string; features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean } }>; phase?: 'Pending' | 'Running' | 'Terminated'; addresses?: Array<{ address: string; type: string }>; allocatable?: Record<string, any>; config?: { lastKnownGood?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; active?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; assigned?: { configMap?: { name: string; namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string } }; error?: string }; daemonEndpoints?: { kubeletEndpoint?: { Port: number } }; features?: { supplementalGroupsPolicy?: boolean }; images?: Array<{ names?: string[]; sizeBytes?: number }>; nodeInfo?: { osImage: string; systemUUID: string; architecture: string; bootID: string; kernelVersion: string; kubeProxyVersion: string; kubeletVersion: string; machineID: string; containerRuntimeVersion: string; operatingSystem: string }; volumesAttached?: Array<{ devicePath: string; name: string }>; volumesInUse?: string[] };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_core_v1_Node with default values
*/
export function createio_k8s_api_core_v1_Node(data?: Partial<io_k8s_api_core_v1_Node>): io_k8s_api_core_v1_Node {
  return {
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
