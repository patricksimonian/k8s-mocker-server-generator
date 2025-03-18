/**
* APIServiceList is a list of APIService objects.
* @resourceType apiservicelist
* @kind ApiserviceList
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is the list of APIService
* @required
* @isArray
* @references io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService
*/
items: io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new ApiserviceList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList instance with defaults applied
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService, createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService } from '../apiservice/io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService';
