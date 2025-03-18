/**
* NonResourceRule holds information that describes a rule for the non-resource
*/
export interface io_k8s_api_authorization_v1_NonResourceRule {
/**
* NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.
*/
nonResourceURLs?: string[];
/**
* Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.
*/
verbs: string[];
}

/**
* Create a new io_k8s_api_authorization_v1_NonResourceRule with default values
*/
export function createio_k8s_api_authorization_v1_NonResourceRule(data?: Partial<io_k8s_api_authorization_v1_NonResourceRule>): io_k8s_api_authorization_v1_NonResourceRule {
  return {
    nonResourceURLs: data?.nonResourceURLs !== undefined ? data.nonResourceURLs : [],
    verbs: data?.verbs !== undefined ? data.verbs : [],
  };
}
