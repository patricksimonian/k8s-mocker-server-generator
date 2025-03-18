/**
* SelfSubjectRulesReviewSpec defines the specification for SelfSubjectRulesReview.
*/
export interface io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec {
/**
* Namespace to evaluate rules for. Required.
*/
namespace?: string;
}

/**
* Create a new io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec with default values
*/
export function createio_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec>): io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec {
  return {
    namespace: data?.namespace !== undefined ? data.namespace : '',
  };
}
