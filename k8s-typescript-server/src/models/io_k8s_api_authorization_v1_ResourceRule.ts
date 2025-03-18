/**
* ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
*/
export interface io_k8s_api_authorization_v1_ResourceRule {
/**
* APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "*" means all.
*/
apiGroups?: string[];
/**
* ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "*" means all.
*/
resourceNames?: string[];
/**
* Resources is a list of resources this rule applies to.  "*" means all in the specified apiGroups.
 "*\/foo" represents the subresource 'foo' for all resources in the specified apiGroups.
*/
resources?: string[];
/**
* Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "*" means all.
*/
verbs: string[];
}

/**
* Create a new io_k8s_api_authorization_v1_ResourceRule with default values
*/
export function createio_k8s_api_authorization_v1_ResourceRule(data?: Partial<io_k8s_api_authorization_v1_ResourceRule>): io_k8s_api_authorization_v1_ResourceRule {
  return {
    apiGroups: data?.apiGroups !== undefined ? data.apiGroups : [],
    resourceNames: data?.resourceNames !== undefined ? data.resourceNames : [],
    resources: data?.resources !== undefined ? data.resources : [],
    verbs: data?.verbs !== undefined ? data.verbs : [],
  };
}
