/**
* Spec to control the desired behavior of daemon set rolling update.
* @resourceType rollingupdatedaemonset
* @kind Rollingupdatedaemonset
*/
export interface io_k8s_api_apps_v1_RollingUpdateDaemonSet {
/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
*/
maxSurge?: string;
/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
*/
maxUnavailable?: string;
}

/**
* Create a new Rollingupdatedaemonset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_RollingUpdateDaemonSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_RollingUpdateDaemonSet(data?: Partial<io_k8s_api_apps_v1_RollingUpdateDaemonSet>): io_k8s_api_apps_v1_RollingUpdateDaemonSet {
 return {
   maxSurge: data?.maxSurge !== undefined ? data.maxSurge : '',
   maxUnavailable: data?.maxUnavailable !== undefined ? data.maxUnavailable : '',
 };
}
