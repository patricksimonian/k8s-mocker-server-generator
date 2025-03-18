/**
* SuccessPolicy describes when a Job can be declared as succeeded based on the success of some indexes.
*/
export interface io_k8s_api_batch_v1_SuccessPolicy {
/**
* rules represents the list of alternative rules for the declaring the Jobs as successful before `.status.succeeded >= .spec.completions`. Once any of the rules are met, the "SucceededCriteriaMet" condition is added, and the lingering pods are removed. The terminal state for such a Job has the "Complete" condition. Additionally, these rules are evaluated in order; Once the Job meets one of the rules, other rules are ignored. At most 20 elements are allowed.
*/
rules: Array<{ succeededCount?: number; succeededIndexes?: string }>;
}

/**
* Create a new io_k8s_api_batch_v1_SuccessPolicy with default values
*/
export function createio_k8s_api_batch_v1_SuccessPolicy(data?: Partial<io_k8s_api_batch_v1_SuccessPolicy>): io_k8s_api_batch_v1_SuccessPolicy {
  return {
    rules: data?.rules !== undefined ? data.rules : [],
  };
}
