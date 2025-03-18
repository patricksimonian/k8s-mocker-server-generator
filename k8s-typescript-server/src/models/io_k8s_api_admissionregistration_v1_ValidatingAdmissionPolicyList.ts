/**
* ValidatingAdmissionPolicyList is a list of ValidatingAdmissionPolicy.
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of ValidatingAdmissionPolicy.
*/
items: Array<{ status?: { conditions?: Array<{ lastTransitionTime: Date; message: string; observedGeneration?: number; reason: string; status: string; type: string }>; observedGeneration?: number; typeChecking?: { expressionWarnings?: Array<{ fieldRef: string; warning: string }> } }; apiVersion?: string; kind?: string; metadata?: { generateName?: string; labels?: Record<string, any>; selfLink?: string; finalizers?: string[]; generation?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; namespace?: string; resourceVersion?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; uid?: string; deletionTimestamp?: Date; name?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }> }; spec?: { variables?: Array<{ name: string; expression: string }>; auditAnnotations?: Array<{ key: string; valueExpression: string }>; failurePolicy?: 'Fail' | 'Ignore'; matchConditions?: Array<{ expression: string; name: string }>; matchConstraints?: { excludeResourceRules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[]; scope?: string }>; matchPolicy?: 'Equivalent' | 'Exact'; namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; objectSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; resourceRules?: Array<{ resourceNames?: string[]; resources?: string[]; scope?: string; apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[] }> }; paramKind?: { apiVersion?: string; kind?: string }; validations?: Array<{ messageExpression?: string; reason?: string; expression: string; message?: string }> } }>;
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
* Create a new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyList with default values
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyList(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyList>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
