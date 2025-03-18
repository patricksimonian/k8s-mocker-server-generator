/**
* NodeList is the whole list of all Nodes which have been registered with master.
*/
export interface io_k8s_api_core_v1_NodeList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of nodes
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { uid?: string; creationTimestamp?: Date; labels?: Record<string, any>; name?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; selfLink?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; resourceVersion?: string; deletionGracePeriodSeconds?: number; generateName?: string; generation?: number; namespace?: string }; spec?: { podCIDR?: string; podCIDRs?: string[]; providerID?: string; taints?: Array<{ key: string; timeAdded?: Date; value?: string; effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule' }>; unschedulable?: boolean; configSource?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; externalID?: string }; status?: { phase?: 'Pending' | 'Running' | 'Terminated'; addresses?: Array<{ address: string; type: string }>; capacity?: Record<string, any>; conditions?: Array<{ type: string; lastHeartbeatTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string }>; daemonEndpoints?: { kubeletEndpoint?: { Port: number } }; features?: { supplementalGroupsPolicy?: boolean }; images?: Array<{ names?: string[]; sizeBytes?: number }>; nodeInfo?: { operatingSystem: string; systemUUID: string; architecture: string; bootID: string; containerRuntimeVersion: string; kernelVersion: string; kubeProxyVersion: string; kubeletVersion: string; machineID: string; osImage: string }; runtimeHandlers?: Array<{ features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean }; name?: string }>; volumesAttached?: Array<{ devicePath: string; name: string }>; volumesInUse?: string[]; allocatable?: Record<string, any>; config?: { active?: { configMap?: { resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string; namespace: string } }; assigned?: { configMap?: { resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string; namespace: string } }; error?: string; lastKnownGood?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } } } } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new io_k8s_api_core_v1_NodeList with default values
*/
export function createio_k8s_api_core_v1_NodeList(data?: Partial<io_k8s_api_core_v1_NodeList>): io_k8s_api_core_v1_NodeList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
