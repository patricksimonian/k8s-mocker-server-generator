/**
* ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
* @resourceType validatingadmissionpolicy
* @kind Validatingadmissionpolicy
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { annotations?: Record<string, any>; generateName?: string; selfLink?: string; uid?: string; creationTimestamp?: Date; generation?: number; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; name?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; resourceVersion?: string };
/**
* ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
* @isObject
*/
spec?: { variables?: Array<{ expression: string; name: string }>; auditAnnotations?: Array<{ key: string; valueExpression: string }>; failurePolicy?: 'Fail' | 'Ignore'; matchConditions?: Array<{ expression: string; name: string }>; matchConstraints?: { excludeResourceRules?: Array<{ apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[]; scope?: string; apiGroups?: string[] }>; matchPolicy?: 'Equivalent' | 'Exact'; namespaceSelector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> }; objectSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; resourceRules?: Array<{ resources?: string[]; scope?: string; apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[] }> }; paramKind?: { kind?: string; apiVersion?: string }; validations?: Array<{ expression: string; message?: string; messageExpression?: string; reason?: string }> };
/**
* ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
* @isObject
*/
status?: { conditions?: Array<{ lastTransitionTime: Date; message: string; observedGeneration?: number; reason: string; status: string; type: string }>; observedGeneration?: number; typeChecking?: { expressionWarnings?: Array<{ fieldRef: string; warning: string }> } };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Validatingadmissionpolicy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
