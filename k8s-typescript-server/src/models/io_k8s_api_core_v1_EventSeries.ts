/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
*/
export interface io_k8s_api_core_v1_EventSeries {
/**
* MicroTime is version of Time with microsecond level precision.
*/
lastObservedTime?: Date;
/**
* Number of occurrences in this series up to the last heartbeat time
*/
count?: number;
}

/**
* Create a new io_k8s_api_core_v1_EventSeries with default values
*/
export function createio_k8s_api_core_v1_EventSeries(data?: Partial<io_k8s_api_core_v1_EventSeries>): io_k8s_api_core_v1_EventSeries {
  return {
    lastObservedTime: data?.lastObservedTime !== undefined ? data.lastObservedTime : '',
    count: data?.count !== undefined ? data.count : 0,
  };
}
