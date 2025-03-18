/**
* Namespace provides a scope for Names. Use of multiple namespaces is optional.
*/
export interface io_k8s_api_core_v1_Namespace {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { creationTimestamp?: Date; annotations?: Record<string, any>; deletionTimestamp?: Date; generation?: number; resourceVersion?: string; selfLink?: string; uid?: string; finalizers?: string[]; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; name?: string; namespace?: string };
/**
* NamespaceSpec describes the attributes on a Namespace.
*/
spec?: { finalizers?: string[] };
/**
* NamespaceStatus is information about the current status of a Namespace.
*/
status?: { conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; phase?: 'Active' | 'Terminating' };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_core_v1_Namespace with default values
*/
export function createio_k8s_api_core_v1_Namespace(data?: Partial<io_k8s_api_core_v1_Namespace>): io_k8s_api_core_v1_Namespace {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
    status: data?.status !== undefined ? data.status : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
