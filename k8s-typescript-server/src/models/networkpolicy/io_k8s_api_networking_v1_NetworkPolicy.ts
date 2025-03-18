/**
* NetworkPolicy describes what network traffic is allowed for a set of Pods
* @resourceType networkpolicy
* @kind Networkpolicy
*/
export interface io_k8s_api_networking_v1_NetworkPolicy {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { annotations?: Record<string, any>; generateName?: string; name?: string; selfLink?: string; generation?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; finalizers?: string[]; namespace?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; labels?: Record<string, any>; resourceVersion?: string; uid?: string };
/**
* NetworkPolicySpec provides the specification of a NetworkPolicy
* @isObject
*/
spec?: { egress?: Array<{ ports?: Array<{ endPort?: number; port?: string; protocol?: 'SCTP' | 'TCP' | 'UDP' }>; to?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }> }>; ingress?: Array<{ ports?: Array<{ port?: string; protocol?: 'SCTP' | 'TCP' | 'UDP'; endPort?: number }>; from?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }> }>; podSelector: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; policyTypes?: 'Egress' | 'Ingress'[] };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Networkpolicy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_NetworkPolicy instance with defaults applied
*/
export function createio_k8s_api_networking_v1_NetworkPolicy(data?: Partial<io_k8s_api_networking_v1_NetworkPolicy>): io_k8s_api_networking_v1_NetworkPolicy {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { podSelector: {} },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
