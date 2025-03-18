/**
* SleepAction describes a "sleep" action.
* @resourceType sleepaction
* @kind Sleepaction
*/
export interface io_k8s_api_core_v1_SleepAction {
/**
* Seconds is the number of seconds to sleep.
* @required
*/
seconds: number;
}

/**
* Create a new Sleepaction with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_SleepAction instance with defaults applied
*/
export function createio_k8s_api_core_v1_SleepAction(data?: Partial<io_k8s_api_core_v1_SleepAction>): io_k8s_api_core_v1_SleepAction {
 return {
   seconds: data?.seconds !== undefined ? data.seconds : 0,
 };
}
