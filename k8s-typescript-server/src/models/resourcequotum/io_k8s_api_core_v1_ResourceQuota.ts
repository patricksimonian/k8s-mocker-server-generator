/**
* ResourceQuota sets aggregate quota restrictions enforced per namespace
* @resourceType resourcequotum
* @kind Resourcequotum
*/
export interface io_k8s_api_core_v1_ResourceQuota {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { labels?: Record<string, any>; name?: string; resourceVersion?: string; deletionTimestamp?: Date; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; selfLink?: string; uid?: string; annotations?: Record<string, any>; finalizers?: string[]; generation?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; namespace?: string; generateName?: string };
/**
* ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
* @isObject
*/
spec?: { hard?: Record<string, any>; scopeSelector?: { matchExpressions?: Array<{ operator: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn'; scopeName: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'; values?: string[] }> }; scopes?: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'[] };
/**
* ResourceQuotaStatus defines the enforced hard limits and observed use.
* @isObject
*/
status?: { hard?: Record<string, any>; used?: Record<string, any> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Resourcequotum with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ResourceQuota instance with defaults applied
*/
export function createio_k8s_api_core_v1_ResourceQuota(data?: Partial<io_k8s_api_core_v1_ResourceQuota>): io_k8s_api_core_v1_ResourceQuota {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
