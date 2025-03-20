/**
* ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
* @resourceType validatingadmissionpolicy
* @kind Validatingadmissionpolicy
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy {
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
metadata?: { deletionTimestamp?: Date; generateName?: string; name?: string; namespace?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; creationTimestamp?: Date; finalizers?: string[]; generation?: number; uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; resourceVersion?: string; selfLink?: string; labels?: Record<string, any> };
/**
* ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
* @isObject
*/
spec?: { variables?: Array<{ expression: string; name: string }>; auditAnnotations?: Array<{ valueExpression: string; key: string }>; failurePolicy?: 'Fail' | 'Ignore'; matchConditions?: Array<{ expression: string; name: string }>; matchConstraints?: { excludeResourceRules?: Array<{ apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[]; scope?: string; apiGroups?: string[] }>; matchPolicy?: 'Equivalent' | 'Exact'; namespaceSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; resourceRules?: Array<{ apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[]; scope?: string; apiGroups?: string[] }> }; paramKind?: { kind?: string; apiVersion?: string }; validations?: Array<{ expression: string; message?: string; messageExpression?: string; reason?: string }> };
/**
* ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
* @isObject
*/
status?: { conditions?: Array<{ status: string; type: string; lastTransitionTime: Date; message: string; observedGeneration?: number; reason: string }>; observedGeneration?: number; typeChecking?: { expressionWarnings?: Array<{ fieldRef: string; warning: string }> } };
}

/**
* Create a new Validatingadmissionpolicy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
 };
}
