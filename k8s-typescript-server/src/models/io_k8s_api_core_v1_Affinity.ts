/**
* Affinity is a group of affinity scheduling rules.
*/
export interface io_k8s_api_core_v1_Affinity {
/**
* Node affinity is a group of node affinity scheduling rules.
*/
nodeAffinity?: { preferredDuringSchedulingIgnoredDuringExecution?: Array<{ preference: { matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }; weight: number }>; requiredDuringSchedulingIgnoredDuringExecution?: { nodeSelectorTerms: Array<{ matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }> } };
/**
* Pod affinity is a group of inter pod affinity scheduling rules.
*/
podAffinity?: { requiredDuringSchedulingIgnoredDuringExecution?: Array<{ topologyKey: string; labelSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[] }>; preferredDuringSchedulingIgnoredDuringExecution?: Array<{ podAffinityTerm: { topologyKey: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[] }; weight: number }> };
/**
* Pod anti affinity is a group of inter pod anti affinity scheduling rules.
*/
podAntiAffinity?: { preferredDuringSchedulingIgnoredDuringExecution?: Array<{ weight: number; podAffinityTerm: { topologyKey: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[] } }>; requiredDuringSchedulingIgnoredDuringExecution?: Array<{ topologyKey: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[] }> };
}

/**
* Create a new io_k8s_api_core_v1_Affinity with default values
*/
export function createio_k8s_api_core_v1_Affinity(data?: Partial<io_k8s_api_core_v1_Affinity>): io_k8s_api_core_v1_Affinity {
  return {
    nodeAffinity: data?.nodeAffinity !== undefined ? data.nodeAffinity : {},
    podAffinity: data?.podAffinity !== undefined ? data.podAffinity : {},
    podAntiAffinity: data?.podAntiAffinity !== undefined ? data.podAntiAffinity : {},
  };
}
