/**
* PodFailurePolicyRule describes how a pod failure is handled when the requirements are met. One of onExitCodes and onPodConditions, but not both, can be used in each rule.
*/
export interface io_k8s_api_batch_v1_PodFailurePolicyRule {
/**
* Specifies the action taken on a pod failure when the requirements are satisfied. Possible values are:

- FailJob: indicates that the pod's job is marked as Failed and all
  running pods are terminated.
- FailIndex: indicates that the pod's index is marked as Failed and will
  not be restarted.
  This value is beta-level. It can be used when the
  `JobBackoffLimitPerIndex` feature gate is enabled (enabled by default).
- Ignore: indicates that the counter towards the .backoffLimit is not
  incremented and a replacement pod is created.
- Count: indicates that the pod is handled in the default way - the
  counter towards the .backoffLimit is incremented.
Additional values are considered to be added in the future. Clients should react to an unknown action by skipping the rule.

Possible enum values:
 - `"Count"` This is an action which might be taken on a pod failure - the pod failure is handled in the default way - the counter towards .backoffLimit, represented by the job's .status.failed field, is incremented.
 - `"FailIndex"` This is an action which might be taken on a pod failure - mark the Job's index as failed to avoid restarts within this index. This action can only be used when backoffLimitPerIndex is set. This value is beta-level.
 - `"FailJob"` This is an action which might be taken on a pod failure - mark the pod's job as Failed and terminate all running pods.
 - `"Ignore"` This is an action which might be taken on a pod failure - the counter towards .backoffLimit, represented by the job's .status.failed field, is not incremented and a replacement pod is created.
*/
action: 'Count' | 'FailIndex' | 'FailJob' | 'Ignore';
/**
* PodFailurePolicyOnExitCodesRequirement describes the requirement for handling a failed pod based on its container exit codes. In particular, it lookups the .state.terminated.exitCode for each app container and init container status, represented by the .status.containerStatuses and .status.initContainerStatuses fields in the Pod status, respectively. Containers completed with success (exit code 0) are excluded from the requirement check.
*/
onExitCodes?: { containerName?: string; operator: 'In' | 'NotIn'; values: number[] };
/**
* Represents the requirement on the pod conditions. The requirement is represented as a list of pod condition patterns. The requirement is satisfied if at least one pattern matches an actual pod condition. At most 20 elements are allowed.
*/
onPodConditions?: Array<{ status: string; type: string }>;
}

/**
* Create a new io_k8s_api_batch_v1_PodFailurePolicyRule with default values
*/
export function createio_k8s_api_batch_v1_PodFailurePolicyRule(data?: Partial<io_k8s_api_batch_v1_PodFailurePolicyRule>): io_k8s_api_batch_v1_PodFailurePolicyRule {
  return {
    action: data?.action !== undefined ? data.action : '',
    onExitCodes: data?.onExitCodes !== undefined ? data.onExitCodes : { operator: '', values: [] },
    onPodConditions: data?.onPodConditions !== undefined ? data.onPodConditions : [],
  };
}
