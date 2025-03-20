/**
* NetworkPolicy describes what network traffic is allowed for a set of Pods
* @resourceType networkpolicy
* @kind Networkpolicy
*/
export interface io_k8s_api_networking_v1_NetworkPolicy {
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
metadata?: { labels?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; annotations?: Record<string, any>; generateName?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; selfLink?: string; uid?: string; deletionGracePeriodSeconds?: number; generation?: number; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; creationTimestamp?: Date; name?: string };
/**
* NetworkPolicySpec provides the specification of a NetworkPolicy
* @isObject
*/
spec?: { egress?: Array<{ ports?: Array<{ protocol?: 'SCTP' | 'TCP' | 'UDP'; endPort?: number; port?: string }>; to?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ operator: string; values?: string[]; key: string }> }; podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }> }>; ingress?: Array<{ from?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }>; ports?: Array<{ endPort?: number; port?: string; protocol?: 'SCTP' | 'TCP' | 'UDP' }> }>; podSelector: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> }; policyTypes?: 'Egress' | 'Ingress'[] };
}

/**
* Create a new Networkpolicy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_NetworkPolicy instance with defaults applied
*/
export function createio_k8s_api_networking_v1_NetworkPolicy(data?: Partial<io_k8s_api_networking_v1_NetworkPolicy>): io_k8s_api_networking_v1_NetworkPolicy {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { podSelector: {} },
 };
}
