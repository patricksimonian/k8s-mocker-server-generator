/**
* StatefulSetOrdinals describes the policy used for replica ordinal assignment in this StatefulSet.
* @resourceType statefulsetordinal
* @kind Statefulsetordinal
*/
export interface io_k8s_api_apps_v1_StatefulSetOrdinals {
/**
* start is the number representing the first replica's index. It may be used to number replicas from an alternate index (eg: 1-indexed) over the default 0-indexed names, or to orchestrate progressive movement of replicas from one StatefulSet to another. If set, replica indices will be in the range:
  [.spec.ordinals.start, .spec.ordinals.start + .spec.replicas).
If unset, defaults to 0. Replica indices will be in the range:
  [0, .spec.replicas).
*/
start?: number;
}

/**
* Create a new Statefulsetordinal with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSetOrdinals instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSetOrdinals(data?: Partial<io_k8s_api_apps_v1_StatefulSetOrdinals>): io_k8s_api_apps_v1_StatefulSetOrdinals {
 return {
   start: data?.start !== undefined ? data.start : 0,
 };
}
