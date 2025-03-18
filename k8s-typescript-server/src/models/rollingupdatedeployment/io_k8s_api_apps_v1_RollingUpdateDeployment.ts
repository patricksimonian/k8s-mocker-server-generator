/**
* Spec to control the desired behavior of rolling update.
* @resourceType rollingupdatedeployment
* @kind Rollingupdatedeployment
*/
export interface io_k8s_api_apps_v1_RollingUpdateDeployment {
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
* Create a new Rollingupdatedeployment with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_RollingUpdateDeployment instance with defaults applied
*/
export function createio_k8s_api_apps_v1_RollingUpdateDeployment(data?: Partial<io_k8s_api_apps_v1_RollingUpdateDeployment>): io_k8s_api_apps_v1_RollingUpdateDeployment {
 return {
   maxSurge: data?.maxSurge !== undefined ? data.maxSurge : '',
   maxUnavailable: data?.maxUnavailable !== undefined ? data.maxUnavailable : '',
 };
}
