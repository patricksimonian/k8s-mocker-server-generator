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
metadata?: { labels?: Record<string, any>; generation?: number; name?: string; uid?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generateName?: string; namespace?: string; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; annotations?: Record<string, any> };
/**
* CustomResourceDefinitionSpec describes how a user wants their resource to appear
* @required
* @isObject
*/
spec: { conversion?: { strategy: string; webhook?: { clientConfig?: { url?: string; caBundle?: string; service?: { name: string; namespace: string; path?: string; port?: number } }; conversionReviewVersions: string[] } }; group: string; names: { listKind?: string; plural: string; shortNames?: string[]; singular?: string; categories?: string[]; kind: string }; preserveUnknownFields?: boolean; scope: string; versions: Array<{ additionalPrinterColumns?: Array<{ description?: string; format?: string; jsonPath: string; name: string; priority?: number; type: string }>; name: string; schema?: { openAPIV3Schema?: Record<string, any> }; selectableFields?: Array<{ jsonPath: string }>; served: boolean; deprecated?: boolean; deprecationWarning?: string; storage: boolean; subresources?: { scale?: { specReplicasPath: string; statusReplicasPath: string; labelSelectorPath?: string }; status?: Record<string, any> } }> };
/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
* @isObject
*/
status?: { acceptedNames?: { categories?: string[]; kind: string; listKind?: string; plural: string; shortNames?: string[]; singular?: string }; conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }>; storedVersions?: string[] };
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
   spec: data?.spec !== undefined ? data.spec : { scope: '', versions: [], group: '', names: { plural: '', kind: '' } },
   status: data?.status !== undefined ? data.status : {},
 };
}
