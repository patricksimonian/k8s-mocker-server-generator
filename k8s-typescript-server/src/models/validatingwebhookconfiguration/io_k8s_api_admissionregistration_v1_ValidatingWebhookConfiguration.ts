/**
* ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
* @resourceType validatingwebhookconfiguration
* @kind Validatingwebhookconfiguration
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration {
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
metadata?: { annotations?: Record<string, any>; creationTimestamp?: Date; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; deletionGracePeriodSeconds?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; name?: string; namespace?: string; uid?: string; generateName?: string; generation?: number; labels?: Record<string, any>; selfLink?: string; deletionTimestamp?: Date; finalizers?: string[] };
/**
* Webhooks is a list of webhooks and the affected resources and operations.
* @isArray
*/
webhooks?: Array<{ admissionReviewVersions: string[]; failurePolicy?: 'Fail' | 'Ignore'; name: string; objectSelector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> }; sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown'; clientConfig: { service?: { port?: number; name: string; namespace: string; path?: string }; url?: string; caBundle?: string }; matchConditions?: Array<{ expression: string; name: string }>; matchPolicy?: 'Equivalent' | 'Exact'; namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; rules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string }>; timeoutSeconds?: number }>;
}

/**
* Create a new Validatingwebhookconfiguration with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration>): io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   webhooks: data?.webhooks !== undefined ? data.webhooks : [],
 };
}
