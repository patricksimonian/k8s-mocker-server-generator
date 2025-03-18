/**
* PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList {
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* `items` is a list of request-priorities.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; selfLink?: string; namespace?: string; finalizers?: string[]; generation?: number; name?: string; creationTimestamp?: Date; deletionTimestamp?: Date; labels?: Record<string, any>; resourceVersion?: string; generateName?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }> }; spec?: { limited?: { borrowingLimitPercent?: number; lendablePercent?: number; limitResponse?: { queuing?: { handSize?: number; queueLengthLimit?: number; queues?: number }; type: string }; nominalConcurrencyShares?: number }; type: string; exempt?: { lendablePercent?: number; nominalConcurrencyShares?: number } }; status?: { conditions?: Array<{ type?: string; lastTransitionTime?: Date; message?: string; reason?: string; status?: string }> } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList with default values
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList>): io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
