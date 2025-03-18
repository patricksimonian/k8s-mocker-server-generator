/**
* ResourceQuota sets aggregate quota restrictions enforced per namespace
*/
export interface io_k8s_api_core_v1_ResourceQuota {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; finalizers?: string[]; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generateName?: string; generation?: number; labels?: Record<string, any>; namespace?: string; resourceVersion?: string; annotations?: Record<string, any>; uid?: string; creationTimestamp?: Date };
/**
* ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
*/
spec?: { hard?: Record<string, any>; scopeSelector?: { matchExpressions?: Array<{ operator: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn'; scopeName: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'; values?: string[] }> }; scopes?: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'[] };
/**
* ResourceQuotaStatus defines the enforced hard limits and observed use.
*/
status?: { hard?: Record<string, any>; used?: Record<string, any> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_core_v1_ResourceQuota with default values
*/
export function createio_k8s_api_core_v1_ResourceQuota(data?: Partial<io_k8s_api_core_v1_ResourceQuota>): io_k8s_api_core_v1_ResourceQuota {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
