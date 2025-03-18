/**
* SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
* @resourceType subjectrulesreviewstatus
* @kind Subjectrulesreviewstatus
*/
export interface io_k8s_api_authorization_v1_SubjectRulesReviewStatus {
/**
* ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
* @required
* @isArray
*/
resourceRules: Array<{ apiGroups?: string[]; resourceNames?: string[]; resources?: string[]; verbs: string[] }>;
/**
* EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
*/
evaluationError?: string;
/**
* Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
* @required
*/
incomplete: boolean;
/**
* NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
* @required
* @isArray
*/
nonResourceRules: Array<{ nonResourceURLs?: string[]; verbs: string[] }>;
}

/**
* Create a new Subjectrulesreviewstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SubjectRulesReviewStatus instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SubjectRulesReviewStatus(data?: Partial<io_k8s_api_authorization_v1_SubjectRulesReviewStatus>): io_k8s_api_authorization_v1_SubjectRulesReviewStatus {
 return {
   resourceRules: data?.resourceRules !== undefined ? data.resourceRules : [],
   evaluationError: data?.evaluationError !== undefined ? data.evaluationError : '',
   incomplete: data?.incomplete !== undefined ? data.incomplete : false,
   nonResourceRules: data?.nonResourceRules !== undefined ? data.nonResourceRules : [],
 };
}
