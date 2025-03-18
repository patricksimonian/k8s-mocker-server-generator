/**
* ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingWebhookConfigurationList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of ValidatingWebhookConfiguration.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { generation?: number; namespace?: string; uid?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; resourceVersion?: string; selfLink?: string; generateName?: string; labels?: Record<string, any> }; webhooks?: Array<{ namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown'; timeoutSeconds?: number; admissionReviewVersions: string[]; clientConfig: { caBundle?: string; service?: { name: string; namespace: string; path?: string; port?: number }; url?: string }; failurePolicy?: 'Fail' | 'Ignore'; name: string; matchConditions?: Array<{ expression: string; name: string }>; matchPolicy?: 'Equivalent' | 'Exact'; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; rules?: Array<{ apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string; apiGroups?: string[] }> }> }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
}

/**
* Create a new io_k8s_api_admissionregistration_v1_ValidatingWebhookConfigurationList with default values
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingWebhookConfigurationList(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingWebhookConfigurationList>): io_k8s_api_admissionregistration_v1_ValidatingWebhookConfigurationList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
