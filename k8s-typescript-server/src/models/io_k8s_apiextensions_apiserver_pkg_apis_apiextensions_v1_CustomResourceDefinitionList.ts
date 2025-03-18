/**
* CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items list individual CustomResourceDefinition objects
*/
items: Array<{ apiVersion?: string; kind?: string; metadata?: { annotations?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; generateName?: string; generation?: number; labels?: Record<string, any>; uid?: string; deletionTimestamp?: Date; finalizers?: string[]; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; name?: string; selfLink?: string }; spec: { scope: string; versions: Array<{ served: boolean; subresources?: { scale?: { labelSelectorPath?: string; specReplicasPath: string; statusReplicasPath: string }; status?: Record<string, any> }; schema?: { openAPIV3Schema?: Record<string, any> }; selectableFields?: Array<{ jsonPath: string }>; deprecationWarning?: string; name: string; storage: boolean; additionalPrinterColumns?: Array<{ name: string; priority?: number; type: string; description?: string; format?: string; jsonPath: string }>; deprecated?: boolean }>; conversion?: { strategy: string; webhook?: { clientConfig?: { caBundle?: string; service?: { namespace: string; path?: string; port?: number; name: string }; url?: string }; conversionReviewVersions: string[] } }; group: string; names: { shortNames?: string[]; singular?: string; categories?: string[]; kind: string; listKind?: string; plural: string }; preserveUnknownFields?: boolean }; status?: { acceptedNames?: { categories?: string[]; kind: string; listKind?: string; plural: string; shortNames?: string[]; singular?: string }; conditions?: Array<{ type: string; lastTransitionTime?: Date; message?: string; reason?: string; status: string }>; storedVersions?: string[] } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
}

/**
* Create a new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList with default values
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    items: data?.items !== undefined ? data.items : [],
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
  };
}
