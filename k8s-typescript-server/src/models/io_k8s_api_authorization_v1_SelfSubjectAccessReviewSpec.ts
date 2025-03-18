/**
* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
export interface io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec {
/**
* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
*/
nonResourceAttributes?: { path?: string; verb?: string };
/**
* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
*/
resourceAttributes?: { group?: string; labelSelector?: { rawSelector?: string; requirements?: Array<{ values?: string[]; key: string; operator: string }> }; namespace?: string; subresource?: string; version?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ operator: string; values?: string[]; key: string }> }; name?: string; resource?: string; verb?: string };
}

/**
* Create a new io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec with default values
*/
export function createio_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec>): io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec {
  return {
    nonResourceAttributes: data?.nonResourceAttributes !== undefined ? data.nonResourceAttributes : {},
    resourceAttributes: data?.resourceAttributes !== undefined ? data.resourceAttributes : {},
  };
}
