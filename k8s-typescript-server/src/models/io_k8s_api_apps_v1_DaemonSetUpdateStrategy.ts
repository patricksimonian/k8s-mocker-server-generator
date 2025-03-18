/**
* DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
*/
export interface io_k8s_api_apps_v1_DaemonSetUpdateStrategy {
/**
* Spec to control the desired behavior of daemon set rolling update.
*/
rollingUpdate?: { maxSurge?: string; maxUnavailable?: string };
/**
* Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.

Possible enum values:
 - `"OnDelete"` Replace the old daemons only when it's killed
 - `"RollingUpdate"` Replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.
*/
type?: 'OnDelete' | 'RollingUpdate';
}

/**
* Create a new io_k8s_api_apps_v1_DaemonSetUpdateStrategy with default values
*/
export function createio_k8s_api_apps_v1_DaemonSetUpdateStrategy(data?: Partial<io_k8s_api_apps_v1_DaemonSetUpdateStrategy>): io_k8s_api_apps_v1_DaemonSetUpdateStrategy {
  return {
    rollingUpdate: data?.rollingUpdate !== undefined ? data.rollingUpdate : {},
    type: data?.type !== undefined ? data.type : '',
  };
}
