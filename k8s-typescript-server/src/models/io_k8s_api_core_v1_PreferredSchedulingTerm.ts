/**
* An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
*/
export interface io_k8s_api_core_v1_PreferredSchedulingTerm {
/**
* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
*/
preference: { matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> };
/**
* Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
*/
weight: number;
}

/**
* Create a new io_k8s_api_core_v1_PreferredSchedulingTerm with default values
*/
export function createio_k8s_api_core_v1_PreferredSchedulingTerm(data?: Partial<io_k8s_api_core_v1_PreferredSchedulingTerm>): io_k8s_api_core_v1_PreferredSchedulingTerm {
  return {
    preference: data?.preference !== undefined ? data.preference : {},
    weight: data?.weight !== undefined ? data.weight : 0,
  };
}
