/**
* PriorityLevelConfiguration represents the configuration of a priority level.
* @resourceType prioritylevelconfiguration
* @kind Prioritylevelconfiguration
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration {
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
* @isObject
*/
metadata?: { namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionTimestamp?: Date; name?: string; selfLink?: string; finalizers?: string[]; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; uid?: string; annotations?: Record<string, any>; generateName?: string; generation?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; resourceVersion?: string; creationTimestamp?: Date };
/**
* PriorityLevelConfigurationSpec specifies the configuration of a priority level.
* @isObject
*/
spec?: { exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number }; limited?: { borrowingLimitPercent?: number; lendablePercent?: number; limitResponse?: { queuing?: { handSize?: number; queueLengthLimit?: number; queues?: number }; type: string }; nominalConcurrencyShares?: number }; type: string };
/**
* PriorityLevelConfigurationStatus represents the current state of a "request-priority".
* @isObject
*/
status?: { conditions?: Array<{ type?: string; lastTransitionTime?: Date; message?: string; reason?: string; status?: string }> };
}

/**
* Create a new Prioritylevelconfiguration with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfiguration(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration>): io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { type: '' },
   status: data?.status !== undefined ? data.status : {},
 };
}
