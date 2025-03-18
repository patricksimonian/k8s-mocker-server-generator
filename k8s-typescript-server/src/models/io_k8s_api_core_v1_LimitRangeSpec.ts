/**
* LimitRangeSpec defines a min/max usage limit for resources that match on kind.
*/
export interface io_k8s_api_core_v1_LimitRangeSpec {
/**
* Limits is the list of LimitRangeItem objects that are enforced.
*/
limits: Array<{ max?: Record<string, any>; maxLimitRequestRatio?: Record<string, any>; min?: Record<string, any>; type: string; default?: Record<string, any>; defaultRequest?: Record<string, any> }>;
}

/**
* Create a new io_k8s_api_core_v1_LimitRangeSpec with default values
*/
export function createio_k8s_api_core_v1_LimitRangeSpec(data?: Partial<io_k8s_api_core_v1_LimitRangeSpec>): io_k8s_api_core_v1_LimitRangeSpec {
  return {
    limits: data?.limits !== undefined ? data.limits : [],
  };
}
