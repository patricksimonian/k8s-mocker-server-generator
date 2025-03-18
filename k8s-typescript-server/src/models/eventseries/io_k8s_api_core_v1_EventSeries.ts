/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
* @resourceType eventseries
* @kind Eventseries
*/
export interface io_k8s_api_core_v1_EventSeries {
/**
* Number of occurrences in this series up to the last heartbeat time
*/
count?: number;
/**
* MicroTime is version of Time with microsecond level precision.
*/
lastObservedTime?: Date;
}

/**
* Create a new Eventseries with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EventSeries instance with defaults applied
*/
export function createio_k8s_api_core_v1_EventSeries(data?: Partial<io_k8s_api_core_v1_EventSeries>): io_k8s_api_core_v1_EventSeries {
 return {
   count: data?.count !== undefined ? data.count : 0,
   lastObservedTime: data?.lastObservedTime !== undefined ? data.lastObservedTime : '',
 };
}
