/**
* NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.
* @resourceType networkpolicyingressrule
* @kind Networkpolicyingressrule
*/
export interface io_k8s_api_networking_v1_NetworkPolicyIngressRule {
/**
* from is a list of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the from list.
* @isArray
*/
from?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }>;
/**
* ports is a list of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
* @isArray
*/
ports?: Array<{ endPort?: number; port?: string; protocol?: 'SCTP' | 'TCP' | 'UDP' }>;
}

/**
* Create a new Networkpolicyingressrule with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_NetworkPolicyIngressRule instance with defaults applied
*/
export function createio_k8s_api_networking_v1_NetworkPolicyIngressRule(data?: Partial<io_k8s_api_networking_v1_NetworkPolicyIngressRule>): io_k8s_api_networking_v1_NetworkPolicyIngressRule {
 return {
   from: data?.from !== undefined ? data.from : [],
   ports: data?.ports !== undefined ? data.ports : [],
 };
}
