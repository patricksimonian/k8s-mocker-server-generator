/**
* NodeSpec describes the attributes that a node is created with.
*/
export interface io_k8s_api_core_v1_NodeSpec {
/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
*/
configSource?: { configMap?: { namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string } };
/**
* Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
*/
externalID?: string;
/**
* PodCIDR represents the pod IP range assigned to the node.
*/
podCIDR?: string;
/**
* podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
*/
podCIDRs?: string[];
/**
* ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
*/
providerID?: string;
/**
* If specified, the node's taints.
*/
taints?: Array<{ timeAdded?: Date; value?: string; effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key: string }>;
/**
* Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
*/
unschedulable?: boolean;
}

/**
* Create a new io_k8s_api_core_v1_NodeSpec with default values
*/
export function createio_k8s_api_core_v1_NodeSpec(data?: Partial<io_k8s_api_core_v1_NodeSpec>): io_k8s_api_core_v1_NodeSpec {
  return {
    configSource: data?.configSource !== undefined ? data.configSource : {},
    externalID: data?.externalID !== undefined ? data.externalID : '',
    podCIDR: data?.podCIDR !== undefined ? data.podCIDR : '',
    podCIDRs: data?.podCIDRs !== undefined ? data.podCIDRs : [],
    providerID: data?.providerID !== undefined ? data.providerID : '',
    taints: data?.taints !== undefined ? data.taints : [],
    unschedulable: data?.unschedulable !== undefined ? data.unschedulable : false,
  };
}
