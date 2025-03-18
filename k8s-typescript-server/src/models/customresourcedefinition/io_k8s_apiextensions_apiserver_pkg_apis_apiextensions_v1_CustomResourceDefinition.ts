/**
* CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
* @resourceType customresourcedefinition
* @kind Customresourcedefinition
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { creationTimestamp?: Date; generation?: number; labels?: Record<string, any>; deletionTimestamp?: Date; generateName?: string; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; finalizers?: string[]; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; uid?: string };
/**
* CustomResourceDefinitionSpec describes how a user wants their resource to appear
* @required
* @isObject
*/
spec: { scope: string; versions: Array<{ subresources?: { scale?: { statusReplicasPath: string; labelSelectorPath?: string; specReplicasPath: string }; status?: Record<string, any> }; deprecationWarning?: string; schema?: { openAPIV3Schema?: Record<string, any> }; served: boolean; storage: boolean; additionalPrinterColumns?: Array<{ description?: string; format?: string; jsonPath: string; name: string; priority?: number; type: string }>; deprecated?: boolean; name: string; selectableFields?: Array<{ jsonPath: string }> }>; conversion?: { strategy: string; webhook?: { clientConfig?: { caBundle?: string; service?: { name: string; namespace: string; path?: string; port?: number }; url?: string }; conversionReviewVersions: string[] } }; group: string; names: { singular?: string; categories?: string[]; kind: string; listKind?: string; plural: string; shortNames?: string[] }; preserveUnknownFields?: boolean };
/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
* @isObject
*/
status?: { acceptedNames?: { categories?: string[]; kind: string; listKind?: string; plural: string; shortNames?: string[]; singular?: string }; conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }>; storedVersions?: string[] };
}

/**
* Create a new Customresourcedefinition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { scope: '', versions: [], group: '', names: { kind: '', plural: '' } },
   status: data?.status !== undefined ? data.status : {},
 };
}
