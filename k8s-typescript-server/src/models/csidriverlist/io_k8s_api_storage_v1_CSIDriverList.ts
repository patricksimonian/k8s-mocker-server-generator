/**
* CSIDriverList is a collection of CSIDriver objects.
* @resourceType csidriverlist
* @kind CsidriverList
*/
export interface io_k8s_api_storage_v1_CSIDriverList {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of CSIDriver
* @required
* @isArray
* @references io.k8s.api.storage.v1.CSIDriver
*/
items: io_k8s_api_storage_v1_CSIDriver[];
}

/**
* Create a new CsidriverList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_CSIDriverList instance with defaults applied
*/
export function createio_k8s_api_storage_v1_CSIDriverList(data?: Partial<io_k8s_api_storage_v1_CSIDriverList>): io_k8s_api_storage_v1_CSIDriverList {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
 };
}
// Required imports
import { io_k8s_api_storage_v1_CSIDriver, createio_k8s_api_storage_v1_CSIDriver } from '../csidriver/io_k8s_api_storage_v1_CSIDriver';
