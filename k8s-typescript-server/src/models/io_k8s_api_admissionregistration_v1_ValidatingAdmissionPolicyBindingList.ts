/**
* ValidatingAdmissionPolicyBindingList is a list of ValidatingAdmissionPolicyBinding.
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of PolicyBinding.
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { labels?: Record<string, any>; namespace?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; generateName?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generation?: number; resourceVersion?: string; uid?: string; deletionTimestamp?: Date; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }> }; spec?: { matchResources?: { resourceRules?: Array<{ scope?: string; apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[] }>; excludeResourceRules?: Array<{ resources?: string[]; scope?: string; apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[] }>; matchPolicy?: 'Equivalent' | 'Exact'; namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; paramRef?: { name?: string; namespace?: string; parameterNotFoundAction?: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; policyName?: string; validationActions?: 'Audit' | 'Deny' | 'Warn'[] } }>;
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
* Create a new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList with default values
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
