/**
* SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
* @resourceType selfsubjectrulesreview
* @kind Selfsubjectrulesreview
*/
export interface io_k8s_api_authorization_v1_SelfSubjectRulesReview {
/**
* SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
* @isObject
*/
status?: { evaluationError?: string; incomplete: boolean; nonResourceRules: Array<{ nonResourceURLs?: string[]; verbs: string[] }>; resourceRules: Array<{ apiGroups?: string[]; resourceNames?: string[]; resources?: string[]; verbs: string[] }> };
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
metadata?: { deletionTimestamp?: Date; generation?: number; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; resourceVersion?: string; creationTimestamp?: Date; finalizers?: string[]; name?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; selfLink?: string; uid?: string; generateName?: string; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; annotations?: Record<string, any> };
/**
* SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.
* @required
* @isObject
*/
spec: { namespace?: string };
}

/**
* Create a new Selfsubjectrulesreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SelfSubjectRulesReview instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SelfSubjectRulesReview(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectRulesReview>): io_k8s_api_authorization_v1_SelfSubjectRulesReview {
 return {
   status: data?.status !== undefined ? data.status : { incomplete: false, nonResourceRules: [], resourceRules: [] },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
