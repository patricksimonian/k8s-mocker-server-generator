/**
* The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
*/
export interface io_k8s_api_core_v1_WeightedPodAffinityTerm {
/**
* Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
*/
podAffinityTerm: { namespaces?: string[]; topologyKey: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
/**
* weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
*/
weight: number;
}

/**
* Create a new io_k8s_api_core_v1_WeightedPodAffinityTerm with default values
*/
export function createio_k8s_api_core_v1_WeightedPodAffinityTerm(data?: Partial<io_k8s_api_core_v1_WeightedPodAffinityTerm>): io_k8s_api_core_v1_WeightedPodAffinityTerm {
  return {
    podAffinityTerm: data?.podAffinityTerm !== undefined ? data.podAffinityTerm : { topologyKey: '' },
    weight: data?.weight !== undefined ? data.weight : 0,
  };
}
