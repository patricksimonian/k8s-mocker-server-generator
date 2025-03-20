/**
* ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) either (d1) the request does not specify a namespace (i.e., `Namespace==""`) and clusterScope is true or (d2) the request specifies a namespace and least one member of namespaces matches the request's namespace.
* @resourceType resourcepolicyrule
* @kind Resourcepolicyrule
*/
export interface io_k8s_api_flowcontrol_v1_ResourcePolicyRule {
/**
* `apiGroups` is a list of matching API groups and may not be empty. "*" matches all API groups and, if present, must be the only entry. Required.
* @required
* @isArray
*/
apiGroups: string[];
/**
* `clusterScope` indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the `namespaces` field must contain a non-empty list.
*/
clusterScope?: boolean;
/**
* `namespaces` is a list of target namespaces that restricts matches.  A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains "*".  Note that "*" matches any specified namespace but does not match a request that _does not specify_ a namespace (see the `clusterScope` field for that). This list may be empty, but only if `clusterScope` is true.
* @isArray
*/
namespaces?: string[];
/**
* `resources` is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource.  For example, [ "services", "nodes/status" ].  This list may not be empty. "*" matches all resources and, if present, must be the only entry. Required.
* @required
* @isArray
*/
resources: string[];
/**
* `verbs` is a list of matching verbs and may not be empty. "*" matches all verbs and, if present, must be the only entry. Required.
* @required
* @isArray
*/
verbs: string[];
}

/**
* Create a new Resourcepolicyrule with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_ResourcePolicyRule instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_ResourcePolicyRule(data?: Partial<io_k8s_api_flowcontrol_v1_ResourcePolicyRule>): io_k8s_api_flowcontrol_v1_ResourcePolicyRule {
 return {
   apiGroups: data?.apiGroups !== undefined ? data.apiGroups : [],
   clusterScope: data?.clusterScope !== undefined ? data.clusterScope : false,
   namespaces: data?.namespaces !== undefined ? data.namespaces : [],
   resources: data?.resources !== undefined ? data.resources : [],
   verbs: data?.verbs !== undefined ? data.verbs : [],
 };
}
