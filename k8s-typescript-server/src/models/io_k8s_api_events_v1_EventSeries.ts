/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations.
*/
export interface io_k8s_api_events_v1_EventSeries {
/**
* count is the number of occurrences in this series up to the last heartbeat time.
*/
count: number;
/**
* MicroTime is version of Time with microsecond level precision.
*/
lastObservedTime: Date;
}

/**
* Create a new io_k8s_api_events_v1_EventSeries with default values
*/
export function createio_k8s_api_events_v1_EventSeries(data?: Partial<io_k8s_api_events_v1_EventSeries>): io_k8s_api_events_v1_EventSeries {
  return {
    count: data?.count !== undefined ? data.count : 0,
    lastObservedTime: data?.lastObservedTime !== undefined ? data.lastObservedTime : '',
  };
}
