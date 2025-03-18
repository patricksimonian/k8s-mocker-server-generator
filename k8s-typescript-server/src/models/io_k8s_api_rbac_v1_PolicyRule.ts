/**
* PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
*/
export interface io_k8s_api_rbac_v1_PolicyRule {
/**
* Resources is a list of resources this rule applies to. '*' represents all resources.
*/
resources?: string[];
/**
* Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. '*' represents all verbs.
*/
verbs: string[];
/**
* APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. "" represents the core API group and "*" represents all API groups.
*/
apiGroups?: string[];
/**
* NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
*/
nonResourceURLs?: string[];
/**
* ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
*/
resourceNames?: string[];
}

/**
* Create a new io_k8s_api_rbac_v1_PolicyRule with default values
*/
export function createio_k8s_api_rbac_v1_PolicyRule(data?: Partial<io_k8s_api_rbac_v1_PolicyRule>): io_k8s_api_rbac_v1_PolicyRule {
  return {
    resources: data?.resources !== undefined ? data.resources : [],
    verbs: data?.verbs !== undefined ? data.verbs : [],
    apiGroups: data?.apiGroups !== undefined ? data.apiGroups : [],
    nonResourceURLs: data?.nonResourceURLs !== undefined ? data.nonResourceURLs : [],
    resourceNames: data?.resourceNames !== undefined ? data.resourceNames : [],
  };
}
