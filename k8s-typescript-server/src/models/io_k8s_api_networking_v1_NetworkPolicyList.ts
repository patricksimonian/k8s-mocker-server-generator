/**
* NetworkPolicyList is a list of NetworkPolicy objects.
*/
export interface io_k8s_api_networking_v1_NetworkPolicyList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is a list of schema objects.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string; generation?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; resourceVersion?: string; name?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; labels?: Record<string, any>; namespace?: string }; spec?: { podSelector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; policyTypes?: 'Egress' | 'Ingress'[]; egress?: Array<{ to?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }>; ports?: Array<{ protocol?: 'SCTP' | 'TCP' | 'UDP'; endPort?: number; port?: string }> }>; ingress?: Array<{ from?: Array<{ ipBlock?: { cidr: string; except?: string[] }; namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; podSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }>; ports?: Array<{ port?: string; protocol?: 'SCTP' | 'TCP' | 'UDP'; endPort?: number }> }> } }>;
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
* Create a new io_k8s_api_networking_v1_NetworkPolicyList with default values
*/
export function createio_k8s_api_networking_v1_NetworkPolicyList(data?: Partial<io_k8s_api_networking_v1_NetworkPolicyList>): io_k8s_api_networking_v1_NetworkPolicyList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
