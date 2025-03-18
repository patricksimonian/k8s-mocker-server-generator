/**
* CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
*/
export interface io_k8s_api_storage_v1_CSIDriver {
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
metadata?: { annotations?: Record<string, any>; deletionTimestamp?: Date; name?: string; generation?: number; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; finalizers?: string[]; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }> };
/**
* CSIDriverSpec is the specification of a CSIDriver.
*/
spec: { volumeLifecycleModes?: string[]; attachRequired?: boolean; fsGroupPolicy?: string; podInfoOnMount?: boolean; requiresRepublish?: boolean; seLinuxMount?: boolean; storageCapacity?: boolean; tokenRequests?: Array<{ audience: string; expirationSeconds?: number }> };
}

/**
* Create a new io_k8s_api_storage_v1_CSIDriver with default values
*/
export function createio_k8s_api_storage_v1_CSIDriver(data?: Partial<io_k8s_api_storage_v1_CSIDriver>): io_k8s_api_storage_v1_CSIDriver {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : {},
  };
}
