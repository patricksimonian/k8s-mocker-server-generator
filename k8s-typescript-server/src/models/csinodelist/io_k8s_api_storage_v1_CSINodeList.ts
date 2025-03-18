/**
* CSINodeList is a collection of CSINode objects.
* @resourceType csinodelist
* @kind CsinodeList
*/
export interface io_k8s_api_storage_v1_CSINodeList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of CSINode
* @required
* @isArray
* @references io.k8s.api.storage.v1.CSINode
*/
items: io_k8s_api_storage_v1_CSINode[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { remainingItemCount?: number; resourceVersion?: string; selfLink?: string; continue?: string };
}

/**
* Create a new CsinodeList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_CSINodeList instance with defaults applied
*/
export function createio_k8s_api_storage_v1_CSINodeList(data?: Partial<io_k8s_api_storage_v1_CSINodeList>): io_k8s_api_storage_v1_CSINodeList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_storage_v1_CSINode, createio_k8s_api_storage_v1_CSINode } from '../csinode/io_k8s_api_storage_v1_CSINode';
