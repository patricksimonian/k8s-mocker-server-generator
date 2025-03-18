/**
* PriorityLevelConfiguration represents the configuration of a priority level.
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration {
/**
* PriorityLevelConfigurationStatus represents the current state of a "request-priority".
*/
status?: { conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status?: string; type?: string }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { resourceVersion?: string; uid?: string; annotations?: Record<string, any>; generation?: number; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; labels?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; name?: string; namespace?: string; selfLink?: string; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }> };
/**
* PriorityLevelConfigurationSpec specifies the configuration of a priority level.
*/
spec?: { exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number }; limited?: { nominalConcurrencyShares?: number; borrowingLimitPercent?: number; lendablePercent?: number; limitResponse?: { queuing?: { handSize?: number; queueLengthLimit?: number; queues?: number }; type: string } }; type: string };
}

/**
* Create a new io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration with default values
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfiguration(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration>): io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration {
  return {
    status: data?.status !== undefined ? data.status : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { type: '' },
  };
}
