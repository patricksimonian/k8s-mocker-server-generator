/**
* ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { deletionGracePeriodSeconds?: number; generation?: number; annotations?: Record<string, any>; labels?: Record<string, any>; name?: string; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; uid?: string; generateName?: string; deletionTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; resourceVersion?: string; creationTimestamp?: Date; selfLink?: string };
/**
* ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
*/
spec?: { auditAnnotations?: Array<{ key: string; valueExpression: string }>; failurePolicy?: 'Fail' | 'Ignore'; matchConditions?: Array<{ expression: string; name: string }>; matchConstraints?: { matchPolicy?: 'Equivalent' | 'Exact'; namespaceSelector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> }; objectSelector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ values?: string[]; key: string; operator: string }> }; resourceRules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[]; scope?: string }>; excludeResourceRules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[]; scope?: string }> }; paramKind?: { apiVersion?: string; kind?: string }; validations?: Array<{ expression: string; message?: string; messageExpression?: string; reason?: string }>; variables?: Array<{ expression: string; name: string }> };
/**
* ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
*/
status?: { conditions?: Array<{ observedGeneration?: number; reason: string; status: string; type: string; lastTransitionTime: Date; message: string }>; observedGeneration?: number; typeChecking?: { expressionWarnings?: Array<{ fieldRef: string; warning: string }> } };
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
* Create a new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy with default values
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
