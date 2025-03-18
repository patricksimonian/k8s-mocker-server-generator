/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
* @resourceType subjectaccessreviewspec
* @kind Subjectaccessreviewspec
*/
export interface io_k8s_api_authorization_v1_SubjectAccessReviewSpec {
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
* @isArray
*/
groups?: string[];
/**
* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
* @isObject
*/
nonResourceAttributes?: { verb?: string; path?: string };
/**
* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
* @isObject
*/
resourceAttributes?: { resource?: string; subresource?: string; version?: string; group?: string; name?: string; namespace?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; labelSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; verb?: string };
}

/**
* Create a new Subjectaccessreviewspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SubjectAccessReviewSpec instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SubjectAccessReviewSpec(data?: Partial<io_k8s_api_authorization_v1_SubjectAccessReviewSpec>): io_k8s_api_authorization_v1_SubjectAccessReviewSpec {
 return {
   uid: data?.uid !== undefined ? data.uid : '',
   user: data?.user !== undefined ? data.user : '',
   extra: data?.extra !== undefined ? data.extra : {},
   groups: data?.groups !== undefined ? data.groups : [],
   nonResourceAttributes: data?.nonResourceAttributes !== undefined ? data.nonResourceAttributes : {},
   resourceAttributes: data?.resourceAttributes !== undefined ? data.resourceAttributes : {},
 };
}
