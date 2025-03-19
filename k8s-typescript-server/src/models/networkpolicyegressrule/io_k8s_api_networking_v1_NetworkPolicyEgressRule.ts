/**
* NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8
* @resourceType networkpolicyegressrule
* @kind Networkpolicyegressrule
*/
export interface io_k8s_api_networking_v1_NetworkPolicyEgressRule {
/**
* ports is a list of destination ports for outgoing traffic. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
* @isArray
*/
ports?: Array<{ endPort?: number; port?: string; protocol?: 'SCTP' | 'TCP' | 'UDP' }>;
/**
* to is a list of destinations for outgoing traffic of pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all destinations (traffic not restricted by destination). If this field is present and contains at least one item, this rule allows traffic only if the traffic matches at least one item in the to list.
* @isArray
*/
to?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }>;
}

/**
* Create a new Networkpolicyegressrule with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_NetworkPolicyEgressRule instance with defaults applied
*/
export function createio_k8s_api_networking_v1_NetworkPolicyEgressRule(data?: Partial<io_k8s_api_networking_v1_NetworkPolicyEgressRule>): io_k8s_api_networking_v1_NetworkPolicyEgressRule {
 return {
   ports: data?.ports !== undefined ? data.ports : [],
   to: data?.to !== undefined ? data.to : [],
 };
}
