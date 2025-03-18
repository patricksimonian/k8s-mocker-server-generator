/**
* Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
*/
export interface io_k8s_api_core_v1_Event {
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
*/
involvedObject: { kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string };
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
*/
related?: { namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string };
/**
* Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
*/
reportingComponent?: string;
/**
* EventSource contains information for an event.
*/
source?: { component?: string; host?: string };
/**
* What action was taken/failed regarding to the Regarding object.
*/
action?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTimestamp?: Date;
/**
* A human-readable description of the status of this operation.
*/
message?: string;
/**
* This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
*/
reason?: string;
/**
* Type of this event (Normal, Warning), new types could be added in the future
*/
type?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
firstTimestamp?: Date;
/**
* MicroTime is version of Time with microsecond level precision.
*/
eventTime?: Date;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata: { uid?: string; creationTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; name?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; generateName?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; annotations?: Record<string, any>; generation?: number; namespace?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; resourceVersion?: string; selfLink?: string };
/**
* The number of times this event has occurred.
*/
count?: number;
/**
* ID of the controller instance, e.g. `kubelet-xyzf`.
*/
reportingInstance?: string;
/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
*/
series?: { count?: number; lastObservedTime?: Date };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_core_v1_Event with default values
*/
export function createio_k8s_api_core_v1_Event(data?: Partial<io_k8s_api_core_v1_Event>): io_k8s_api_core_v1_Event {
  return {
    involvedObject: data?.involvedObject !== undefined ? data.involvedObject : {},
    related: data?.related !== undefined ? data.related : {},
    reportingComponent: data?.reportingComponent !== undefined ? data.reportingComponent : '',
    source: data?.source !== undefined ? data.source : {},
    action: data?.action !== undefined ? data.action : '',
    kind: data?.kind !== undefined ? data.kind : '',
    lastTimestamp: data?.lastTimestamp !== undefined ? data.lastTimestamp : '',
    message: data?.message !== undefined ? data.message : '',
    reason: data?.reason !== undefined ? data.reason : '',
    type: data?.type !== undefined ? data.type : '',
    firstTimestamp: data?.firstTimestamp !== undefined ? data.firstTimestamp : '',
    eventTime: data?.eventTime !== undefined ? data.eventTime : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    count: data?.count !== undefined ? data.count : 0,
    reportingInstance: data?.reportingInstance !== undefined ? data.reportingInstance : '',
    series: data?.series !== undefined ? data.series : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
