/**
* SleepAction describes a "sleep" action.
*/
export interface io_k8s_api_core_v1_SleepAction {
/**
* Seconds is the number of seconds to sleep.
*/
seconds: number;
}

/**
* Create a new io_k8s_api_core_v1_SleepAction with default values
*/
export function createio_k8s_api_core_v1_SleepAction(data?: Partial<io_k8s_api_core_v1_SleepAction>): io_k8s_api_core_v1_SleepAction {
  return {
    seconds: data?.seconds !== undefined ? data.seconds : 0,
  };
}
