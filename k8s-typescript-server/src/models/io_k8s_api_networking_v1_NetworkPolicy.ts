/**
* NetworkPolicy describes what network traffic is allowed for a set of Pods
*/
export interface io_k8s_api_networking_v1_NetworkPolicy {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { resourceVersion?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; generation?: number; labels?: Record<string, any>; name?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; annotations?: Record<string, any>; creationTimestamp?: Date; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; deletionTimestamp?: Date; generateName?: string; selfLink?: string; uid?: string; namespace?: string };
/**
* NetworkPolicySpec provides the specification of a NetworkPolicy
*/
spec?: { egress?: Array<{ ports?: Array<{ protocol?: 'SCTP' | 'TCP' | 'UDP'; endPort?: number; port?: string }>; to?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; podSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> } }> }>; ingress?: Array<{ from?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }>; ports?: Array<{ endPort?: number; port?: string; protocol?: 'SCTP' | 'TCP' | 'UDP' }> }>; podSelector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; policyTypes?: 'Egress' | 'Ingress'[] };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_networking_v1_NetworkPolicy with default values
*/
export function createio_k8s_api_networking_v1_NetworkPolicy(data?: Partial<io_k8s_api_networking_v1_NetworkPolicy>): io_k8s_api_networking_v1_NetworkPolicy {
  return {
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { podSelector: {} },
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
