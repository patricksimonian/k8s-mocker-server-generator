/**
* SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.
* @resourceType selfsubjectrulesreviewspec
* @kind Selfsubjectrulesreviewspec
*/
export interface io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec {
/**
* Namespace to evaluate rules for. Required.
*/
namespace?: string;
}

/**
* Create a new Selfsubjectrulesreviewspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec>): io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec {
 return {
   namespace: data?.namespace !== undefined ? data.namespace : '',
 };
}
