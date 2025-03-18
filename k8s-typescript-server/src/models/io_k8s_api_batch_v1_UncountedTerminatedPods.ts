/**
* UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
*/
export interface io_k8s_api_batch_v1_UncountedTerminatedPods {
/**
* failed holds UIDs of failed Pods.
*/
failed?: string[];
/**
* succeeded holds UIDs of succeeded Pods.
*/
succeeded?: string[];
}

/**
* Create a new io_k8s_api_batch_v1_UncountedTerminatedPods with default values
*/
export function createio_k8s_api_batch_v1_UncountedTerminatedPods(data?: Partial<io_k8s_api_batch_v1_UncountedTerminatedPods>): io_k8s_api_batch_v1_UncountedTerminatedPods {
  return {
    failed: data?.failed !== undefined ? data.failed : [],
    succeeded: data?.succeeded !== undefined ? data.succeeded : [],
  };
}
