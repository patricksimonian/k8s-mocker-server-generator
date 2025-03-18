/**
* MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
*/
export interface io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { generateName?: string; labels?: Record<string, any>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; selfLink?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; name?: string; namespace?: string; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionTimestamp?: Date; generation?: number };
/**
* Webhooks is a list of webhooks and the affected resources and operations.
*/
webhooks?: Array<{ clientConfig: { url?: string; caBundle?: string; service?: { name: string; namespace: string; path?: string; port?: number } }; failurePolicy?: 'Fail' | 'Ignore'; matchPolicy?: 'Equivalent' | 'Exact'; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; reinvocationPolicy?: 'IfNeeded' | 'Never'; sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown'; timeoutSeconds?: number; admissionReviewVersions: string[]; matchConditions?: Array<{ expression: string; name: string }>; name: string; rules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string }> }>;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration with default values
*/
export function createio_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration(data?: Partial<io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration>): io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    webhooks: data?.webhooks !== undefined ? data.webhooks : [],
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
