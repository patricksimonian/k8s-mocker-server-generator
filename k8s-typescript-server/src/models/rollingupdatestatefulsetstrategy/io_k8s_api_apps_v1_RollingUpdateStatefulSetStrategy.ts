/**
* RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
* @resourceType rollingupdatestatefulsetstrategy
* @kind Rollingupdatestatefulsetstrategy
*/
export interface io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy {
/**
* Partition indicates the ordinal at which the StatefulSet should be partitioned for updates. During a rolling update, all pods from ordinal Replicas-1 to Partition are updated. All pods from ordinal Partition-1 to 0 remain untouched. This is helpful in being able to do a canary based deployment. The default value is 0.
*/
partition?: number;
/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
*/
maxUnavailable?: string;
}

/**
* Create a new Rollingupdatestatefulsetstrategy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy instance with defaults applied
*/
export function createio_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy(data?: Partial<io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy>): io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy {
 return {
   partition: data?.partition !== undefined ? data.partition : 0,
   maxUnavailable: data?.maxUnavailable !== undefined ? data.maxUnavailable : '',
 };
}
