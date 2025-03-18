/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
*/
export interface io_k8s_api_authorization_v1_SubjectAccessReviewSpec {
/**
* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
*/
resourceAttributes?: { resource?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; group?: string; namespace?: string; subresource?: string; verb?: string; version?: string; labelSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; name?: string };
/**
* UID information about the requesting user.
*/
uid?: string;
/**
* User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups
*/
user?: string;
/**
* Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
*/
extra?: Record<string, any>;
/**
* Groups is the groups you're testing for.
*/
groups?: string[];
/**
* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
*/
nonResourceAttributes?: { path?: string; verb?: string };
}

/**
* Create a new io_k8s_api_authorization_v1_SubjectAccessReviewSpec with default values
*/
export function createio_k8s_api_authorization_v1_SubjectAccessReviewSpec(data?: Partial<io_k8s_api_authorization_v1_SubjectAccessReviewSpec>): io_k8s_api_authorization_v1_SubjectAccessReviewSpec {
  return {
    resourceAttributes: data?.resourceAttributes !== undefined ? data.resourceAttributes : {},
    uid: data?.uid !== undefined ? data.uid : '',
    user: data?.user !== undefined ? data.user : '',
    extra: data?.extra !== undefined ? data.extra : {},
    groups: data?.groups !== undefined ? data.groups : [],
    nonResourceAttributes: data?.nonResourceAttributes !== undefined ? data.nonResourceAttributes : {},
  };
}
