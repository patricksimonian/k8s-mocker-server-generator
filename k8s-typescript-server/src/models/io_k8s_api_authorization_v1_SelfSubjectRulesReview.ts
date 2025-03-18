/**
* SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
*/
export interface io_k8s_api_authorization_v1_SelfSubjectRulesReview {
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
metadata?: { generation?: number; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; name?: string; namespace?: string; deletionTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; resourceVersion?: string; annotations?: Record<string, any>; generateName?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; uid?: string };
/**
* SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.
*/
spec: { namespace?: string };
/**
* SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
*/
status?: { evaluationError?: string; incomplete: boolean; nonResourceRules: Array<{ nonResourceURLs?: string[]; verbs: string[] }>; resourceRules: Array<{ verbs: string[]; apiGroups?: string[]; resourceNames?: string[]; resources?: string[] }> };
}

/**
* Create a new io_k8s_api_authorization_v1_SelfSubjectRulesReview with default values
*/
export function createio_k8s_api_authorization_v1_SelfSubjectRulesReview(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectRulesReview>): io_k8s_api_authorization_v1_SelfSubjectRulesReview {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : { incomplete: false, nonResourceRules: [], resourceRules: [] },
  };
}
