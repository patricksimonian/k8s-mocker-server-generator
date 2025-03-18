/**
* PersistentVolumeClaimCondition contains details about state of pvc
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaimCondition {
/**
* message is the human-readable message indicating details about last transition.
*/
message?: string;
/**
* reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "Resizing" that means the underlying persistent volume is being resized.
*/
reason?: string;
/**
* Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=state%20of%20pvc-,conditions.status,-(string)%2C%20required
*/
status: string;
/**
* Type is the type of the condition. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=set%20to%20%27ResizeStarted%27.-,PersistentVolumeClaimCondition,-contains%20details%20about
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastProbeTime?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
}

/**
* Create a new io_k8s_api_core_v1_PersistentVolumeClaimCondition with default values
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaimCondition(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaimCondition>): io_k8s_api_core_v1_PersistentVolumeClaimCondition {
  return {
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
    status: data?.status !== undefined ? data.status : '',
    type: data?.type !== undefined ? data.type : '',
    lastProbeTime: data?.lastProbeTime !== undefined ? data.lastProbeTime : '',
    lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
  };
}
