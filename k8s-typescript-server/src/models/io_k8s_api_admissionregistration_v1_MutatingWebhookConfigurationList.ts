/**
* MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
*/
export interface io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of MutatingWebhookConfiguration.
*/
items: Array<{ webhooks?: Array<{ objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; reinvocationPolicy?: 'IfNeeded' | 'Never'; admissionReviewVersions: string[]; failurePolicy?: 'Fail' | 'Ignore'; matchPolicy?: 'Equivalent' | 'Exact'; namespaceSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; rules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string }>; sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown'; timeoutSeconds?: number; clientConfig: { caBundle?: string; service?: { port?: number; name: string; namespace: string; path?: string }; url?: string }; matchConditions?: Array<{ expression: string; name: string }>; name: string }>; apiVersion?: string; kind?: string; metadata?: { name?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; uid?: string; creationTimestamp?: Date; finalizers?: string[]; generateName?: string; labels?: Record<string, any>; resourceVersion?: string; selfLink?: string; deletionTimestamp?: Date; deletionGracePeriodSeconds?: number; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; annotations?: Record<string, any>; namespace?: string } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList with default values
*/
export function createio_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList(data?: Partial<io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList>): io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
