/**
* NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed
*/
export interface io_k8s_api_networking_v1_NetworkPolicyPeer {
/**
* IPBlock describes a particular CIDR (Ex. "192.168.1.0/24","2001:db8::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
*/
ipBlock?: { cidr: string; except?: string[] };
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
*/
namespaceSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> };
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
*/
podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
}

/**
* Create a new io_k8s_api_networking_v1_NetworkPolicyPeer with default values
*/
export function createio_k8s_api_networking_v1_NetworkPolicyPeer(data?: Partial<io_k8s_api_networking_v1_NetworkPolicyPeer>): io_k8s_api_networking_v1_NetworkPolicyPeer {
  return {
    ipBlock: data?.ipBlock !== undefined ? data.ipBlock : { cidr: '' },
    namespaceSelector: data?.namespaceSelector !== undefined ? data.namespaceSelector : {},
    podSelector: data?.podSelector !== undefined ? data.podSelector : {},
  };
}
