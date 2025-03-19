/**
* MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
* @resourceType mutatingwebhookconfiguration
* @kind Mutatingwebhookconfiguration
*/
export interface io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionTimestamp?: Date; generateName?: string; generation?: number; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; name?: string; namespace?: string; annotations?: Record<string, any>; uid?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }> };
/**
* Webhooks is a list of webhooks and the affected resources and operations.
* @isArray
*/
webhooks?: Array<{ admissionReviewVersions: string[]; clientConfig: { caBundle?: string; service?: { port?: number; name: string; namespace: string; path?: string }; url?: string }; rules?: Array<{ apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string; apiGroups?: string[] }>; timeoutSeconds?: number; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; reinvocationPolicy?: 'IfNeeded' | 'Never'; sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown'; failurePolicy?: 'Fail' | 'Ignore'; matchConditions?: Array<{ expression: string; name: string }>; matchPolicy?: 'Equivalent' | 'Exact'; name: string; namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> } }>;
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
* Create a new Mutatingwebhookconfiguration with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration(data?: Partial<io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration>): io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   webhooks: data?.webhooks !== undefined ? data.webhooks : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
