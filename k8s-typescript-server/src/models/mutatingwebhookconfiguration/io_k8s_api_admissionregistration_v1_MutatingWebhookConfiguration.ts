/**
* MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
* @resourceType mutatingwebhookconfiguration
* @kind Mutatingwebhookconfiguration
*/
export interface io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration {
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
metadata?: { labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; finalizers?: string[]; name?: string; resourceVersion?: string; uid?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generateName?: string; generation?: number; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; annotations?: Record<string, any>; selfLink?: string };
/**
* Webhooks is a list of webhooks and the affected resources and operations.
* @isArray
*/
webhooks?: Array<{ admissionReviewVersions: string[]; failurePolicy?: 'Fail' | 'Ignore'; matchConditions?: Array<{ name: string; expression: string }>; matchPolicy?: 'Equivalent' | 'Exact'; name: string; sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown'; clientConfig: { caBundle?: string; service?: { name: string; namespace: string; path?: string; port?: number }; url?: string }; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; reinvocationPolicy?: 'IfNeeded' | 'Never'; rules?: Array<{ apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string; apiGroups?: string[] }>; timeoutSeconds?: number }>;
}

/**
* Create a new Mutatingwebhookconfiguration with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration(data?: Partial<io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration>): io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   webhooks: data?.webhooks !== undefined ? data.webhooks : [],
 };
}
