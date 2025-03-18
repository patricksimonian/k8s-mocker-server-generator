/**
* ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
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
*/
metadata?: { finalizers?: string[]; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; resourceVersion?: string; creationTimestamp?: Date; generation?: number; name?: string; namespace?: string; selfLink?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generateName?: string };
/**
* Webhooks is a list of webhooks and the affected resources and operations.
*/
webhooks?: Array<{ failurePolicy?: 'Fail' | 'Ignore'; matchConditions?: Array<{ expression: string; name: string }>; matchPolicy?: 'Equivalent' | 'Exact'; name: string; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; rules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string }>; sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown'; admissionReviewVersions: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; timeoutSeconds?: number; clientConfig: { caBundle?: string; service?: { path?: string; port?: number; name: string; namespace: string }; url?: string } }>;
}

/**
* Create a new io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration with default values
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration>): io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    webhooks: data?.webhooks !== undefined ? data.webhooks : [],
  };
}
