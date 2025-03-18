/**
* ResourceQuotaList is a list of ResourceQuota items.
* @resourceType resourcequotalist
* @kind Resourcequotalist
*/
export interface io_k8s_api_core_v1_ResourceQuotaList {
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is a list of ResourceQuota objects. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
* @required
* @isArray
*/
items: Array<{ spec?: { scopeSelector?: { matchExpressions?: Array<{ values?: string[]; operator: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn'; scopeName: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating' }> }; scopes?: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'[]; hard?: Record<string, any> }; status?: { hard?: Record<string, any>; used?: Record<string, any> }; apiVersion?: string; kind?: string; metadata?: { deletionTimestamp?: Date; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; uid?: string; resourceVersion?: string; generation?: number; name?: string; namespace?: string; selfLink?: string; finalizers?: string[]; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }> } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Resourcequotalist with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ResourceQuotaList instance with defaults applied
*/
export function createio_k8s_api_core_v1_ResourceQuotaList(data?: Partial<io_k8s_api_core_v1_ResourceQuotaList>): io_k8s_api_core_v1_ResourceQuotaList {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : [],
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
