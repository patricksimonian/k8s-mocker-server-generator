/**
* Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
* @resourceType event
* @kind Event
*/
export interface io_k8s_api_events_v1_Event {
/**
* reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters.
*/
reason?: string;
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @isObject
*/
related?: { kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string };
/**
* reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
*/
reportingInstance?: string;
/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations.
* @isObject
*/
series?: { count: number; lastObservedTime: Date };
/**
* MicroTime is version of Time with microsecond level precision.
* @required
*/
eventTime: Date;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; uid?: string; finalizers?: string[]; resourceVersion?: string; annotations?: Record<string, any>; generateName?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; namespace?: string };
/**
* note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
*/
note?: string;
/**
* deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
*/
deprecatedCount?: number;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
deprecatedLastTimestamp?: Date;
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @isObject
*/
regarding?: { apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string };
/**
* reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
*/
reportingController?: string;
/**
* action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters.
*/
action?: string;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* EventSource contains information for an event.
* @isObject
*/
deprecatedSource?: { component?: string; host?: string };
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
deprecatedFirstTimestamp?: Date;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events.
*/
type?: string;
}

/**
* Create a new Event with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_events_v1_Event instance with defaults applied
*/
export function createio_k8s_api_events_v1_Event(data?: Partial<io_k8s_api_events_v1_Event>): io_k8s_api_events_v1_Event {
 return {
   reason: data?.reason !== undefined ? data.reason : '',
   related: data?.related !== undefined ? data.related : {},
   reportingInstance: data?.reportingInstance !== undefined ? data.reportingInstance : '',
   series: data?.series !== undefined ? data.series : { lastObservedTime: '', count: 0 },
   eventTime: data?.eventTime !== undefined ? data.eventTime : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   note: data?.note !== undefined ? data.note : '',
   deprecatedCount: data?.deprecatedCount !== undefined ? data.deprecatedCount : 0,
   deprecatedLastTimestamp: data?.deprecatedLastTimestamp !== undefined ? data.deprecatedLastTimestamp : '',
   regarding: data?.regarding !== undefined ? data.regarding : {},
   reportingController: data?.reportingController !== undefined ? data.reportingController : '',
   action: data?.action !== undefined ? data.action : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   deprecatedSource: data?.deprecatedSource !== undefined ? data.deprecatedSource : {},
   deprecatedFirstTimestamp: data?.deprecatedFirstTimestamp !== undefined ? data.deprecatedFirstTimestamp : '',
   kind: data?.kind !== undefined ? data.kind : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
