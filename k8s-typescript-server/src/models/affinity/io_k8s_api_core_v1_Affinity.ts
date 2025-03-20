/**
* Affinity is a group of affinity scheduling rules.
* @resourceType affinity
* @kind Affinity
*/
export interface io_k8s_api_core_v1_Affinity {
/**
* Pod anti affinity is a group of inter pod anti affinity scheduling rules.
* @isObject
*/
podAntiAffinity?: { preferredDuringSchedulingIgnoredDuringExecution?: Array<{ podAffinityTerm: { labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; namespaces?: string[]; topologyKey: string }; weight: number }>; requiredDuringSchedulingIgnoredDuringExecution?: Array<{ labelSelector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[]; topologyKey: string }> };
/**
* Node affinity is a group of node affinity scheduling rules.
* @isObject
*/
nodeAffinity?: { preferredDuringSchedulingIgnoredDuringExecution?: Array<{ preference: { matchExpressions?: Array<{ operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[]; key: string }>; matchFields?: Array<{ operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[]; key: string }> }; weight: number }>; requiredDuringSchedulingIgnoredDuringExecution?: { nodeSelectorTerms: Array<{ matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }> } };
/**
* Pod affinity is a group of inter pod affinity scheduling rules.
* @isObject
*/
podAffinity?: { preferredDuringSchedulingIgnoredDuringExecution?: Array<{ podAffinityTerm: { topologyKey: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[] }; weight: number }>; requiredDuringSchedulingIgnoredDuringExecution?: Array<{ labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[]; topologyKey: string }> };
}

/**
* Create a new Affinity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Affinity instance with defaults applied
*/
export function createio_k8s_api_core_v1_Affinity(data?: Partial<io_k8s_api_core_v1_Affinity>): io_k8s_api_core_v1_Affinity {
 return {
   podAntiAffinity: data?.podAntiAffinity !== undefined ? data.podAntiAffinity : {},
   nodeAffinity: data?.nodeAffinity !== undefined ? data.nodeAffinity : {},
   podAffinity: data?.podAffinity !== undefined ? data.podAffinity : {},
 };
}
