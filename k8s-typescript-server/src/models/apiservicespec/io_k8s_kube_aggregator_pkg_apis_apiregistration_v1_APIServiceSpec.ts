/**
* APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
* @resourceType apiservicespec
* @kind Apiservicespec
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec {
/**
* ServiceReference holds a reference to Service.legacy.k8s.io
* @isObject
*/
service?: { name?: string; namespace?: string; port?: number };
/**
* Version is the API version this server hosts.  For example, "v1"
*/
version?: string;
/**
* VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
* @required
*/
versionPriority: number;
/**
* CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
*/
caBundle?: string;
/**
* Group is the API group name this server hosts
*/
group?: string;
/**
* GroupPriorityMinimum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMinimum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
* @required
*/
groupPriorityMinimum: number;
/**
* InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
*/
insecureSkipTLSVerify?: boolean;
}

/**
* Create a new Apiservicespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec instance with defaults applied
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec {
 return {
   service: data?.service !== undefined ? data.service : {},
   version: data?.version !== undefined ? data.version : '',
   versionPriority: data?.versionPriority !== undefined ? data.versionPriority : 0,
   caBundle: data?.caBundle !== undefined ? data.caBundle : '',
   group: data?.group !== undefined ? data.group : '',
   groupPriorityMinimum: data?.groupPriorityMinimum !== undefined ? data.groupPriorityMinimum : 0,
   insecureSkipTLSVerify: data?.insecureSkipTLSVerify !== undefined ? data.insecureSkipTLSVerify : false,
 };
}
