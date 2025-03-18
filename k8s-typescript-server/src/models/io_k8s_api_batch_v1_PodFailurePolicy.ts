/**
* PodFailurePolicy describes how failed pods influence the backoffLimit.
*/
export interface io_k8s_api_batch_v1_PodFailurePolicy {
/**
* A list of pod failure policy rules. The rules are evaluated in order. Once a rule matches a Pod failure, the remaining of the rules are ignored. When no rule matches the Pod failure, the default handling applies - the counter of pod failures is incremented and it is checked against the backoffLimit. At most 20 elements are allowed.
*/
rules: Array<{ onExitCodes?: { containerName?: string; operator: 'In' | 'NotIn'; values: number[] }; onPodConditions?: Array<{ type: string; status: string }>; action: 'Count' | 'FailIndex' | 'FailJob' | 'Ignore' }>;
}

/**
* Create a new io_k8s_api_batch_v1_PodFailurePolicy with default values
*/
export function createio_k8s_api_batch_v1_PodFailurePolicy(data?: Partial<io_k8s_api_batch_v1_PodFailurePolicy>): io_k8s_api_batch_v1_PodFailurePolicy {
  return {
    rules: data?.rules !== undefined ? data.rules : [],
  };
}
