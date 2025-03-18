/**
* CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
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
*/
metadata?: { creationTimestamp?: Date; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; deletionTimestamp?: Date; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; finalizers?: string[]; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; resourceVersion?: string; generateName?: string; generation?: number; name?: string; namespace?: string; selfLink?: string; uid?: string };
/**
* CustomResourceDefinitionSpec describes how a user wants their resource to appear
*/
spec: { conversion?: { strategy: string; webhook?: { clientConfig?: { caBundle?: string; service?: { namespace: string; path?: string; port?: number; name: string }; url?: string }; conversionReviewVersions: string[] } }; group: string; names: { listKind?: string; plural: string; shortNames?: string[]; singular?: string; categories?: string[]; kind: string }; preserveUnknownFields?: boolean; scope: string; versions: Array<{ additionalPrinterColumns?: Array<{ description?: string; format?: string; jsonPath: string; name: string; priority?: number; type: string }>; deprecated?: boolean; deprecationWarning?: string; schema?: { openAPIV3Schema?: Record<string, any> }; selectableFields?: Array<{ jsonPath: string }>; served: boolean; subresources?: { scale?: { labelSelectorPath?: string; specReplicasPath: string; statusReplicasPath: string }; status?: Record<string, any> }; name: string; storage: boolean }> };
/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
*/
status?: { acceptedNames?: { categories?: string[]; kind: string; listKind?: string; plural: string; shortNames?: string[]; singular?: string }; conditions?: Array<{ reason?: string; status: string; type: string; lastTransitionTime?: Date; message?: string }>; storedVersions?: string[] };
}

/**
* Create a new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition with default values
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { group: '', names: { kind: '', plural: '' }, scope: '', versions: [] },
    status: data?.status !== undefined ? data.status : {},
  };
}
