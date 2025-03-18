/**
* Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
* @resourceType event
* @kind Event
*/
export interface io_k8s_api_core_v1_Event {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @required
* @isObject
*/
metadata: { managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; name?: string; selfLink?: string; finalizers?: string[]; generateName?: string; namespace?: string; creationTimestamp?: Date; generation?: number; labels?: Record<string, any>; resourceVersion?: string; uid?: string };
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @isObject
*/
related?: { kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string };
/**
* ID of the controller instance, e.g. `kubelet-xyzf`.
*/
reportingInstance?: string;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* MicroTime is version of Time with microsecond level precision.
*/
eventTime?: Date;
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @required
* @isObject
*/
involvedObject: { uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string };
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTimestamp?: Date;
/**
* A human-readable description of the status of this operation.
*/
message?: string;
/**
* Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
*/
reportingComponent?: string;
/**
* Type of this event (Normal, Warning), new types could be added in the future
*/
type?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
firstTimestamp?: Date;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
* @isObject
*/
series?: { count?: number; lastObservedTime?: Date };
/**
* EventSource contains information for an event.
* @isObject
*/
source?: { host?: string; component?: string };
/**
* What action was taken/failed regarding to the Regarding object.
*/
action?: string;
/**
* The number of times this event has occurred.
*/
count?: number;
/**
* This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
*/
reason?: string;
}

/**
* Create a new Event with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Event instance with defaults applied
*/
export function createio_k8s_api_core_v1_Event(data?: Partial<io_k8s_api_core_v1_Event>): io_k8s_api_core_v1_Event {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   related: data?.related !== undefined ? data.related : {},
   reportingInstance: data?.reportingInstance !== undefined ? data.reportingInstance : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   eventTime: data?.eventTime !== undefined ? data.eventTime : '',
   involvedObject: data?.involvedObject !== undefined ? data.involvedObject : {},
   lastTimestamp: data?.lastTimestamp !== undefined ? data.lastTimestamp : '',
   message: data?.message !== undefined ? data.message : '',
   reportingComponent: data?.reportingComponent !== undefined ? data.reportingComponent : '',
   type: data?.type !== undefined ? data.type : '',
   firstTimestamp: data?.firstTimestamp !== undefined ? data.firstTimestamp : '',
   kind: data?.kind !== undefined ? data.kind : '',
   series: data?.series !== undefined ? data.series : {},
   source: data?.source !== undefined ? data.source : {},
   action: data?.action !== undefined ? data.action : '',
   count: data?.count !== undefined ? data.count : 0,
   reason: data?.reason !== undefined ? data.reason : '',
 };
}
