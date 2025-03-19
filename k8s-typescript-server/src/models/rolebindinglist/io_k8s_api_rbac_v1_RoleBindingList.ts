/**
* RoleBindingList is a collection of RoleBindings
* @resourceType rolebindinglist
* @kind RolebindingList
*/
export interface io_k8s_api_rbac_v1_RoleBindingList {
/**
* Items is a list of RoleBindings
* @required
* @isArray
* @references io.k8s.api.rbac.v1.RoleBinding
*/
items: io_k8s_api_rbac_v1_RoleBinding[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new RolebindingList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_RoleBindingList instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_RoleBindingList(data?: Partial<io_k8s_api_rbac_v1_RoleBindingList>): io_k8s_api_rbac_v1_RoleBindingList {
 return {
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_api_rbac_v1_RoleBinding, createio_k8s_api_rbac_v1_RoleBinding } from '../rolebinding/io_k8s_api_rbac_v1_RoleBinding';
