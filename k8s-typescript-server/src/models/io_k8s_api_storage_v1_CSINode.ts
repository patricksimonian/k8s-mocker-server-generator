/**
* CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.
*/
export interface io_k8s_api_storage_v1_CSINode {
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
metadata?: { resourceVersion?: string; uid?: string; name?: string; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionGracePeriodSeconds?: number; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string; selfLink?: string; annotations?: Record<string, any>; generation?: number; labels?: Record<string, any>; namespace?: string; finalizers?: string[] };
/**
* CSINodeSpec holds information about the specification of all CSI drivers installed on a node
*/
spec: { drivers: Array<{ allocatable?: { count?: number }; name: string; nodeID: string; topologyKeys?: string[] }> };
}

/**
* Create a new io_k8s_api_storage_v1_CSINode with default values
*/
export function createio_k8s_api_storage_v1_CSINode(data?: Partial<io_k8s_api_storage_v1_CSINode>): io_k8s_api_storage_v1_CSINode {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { drivers: [] },
  };
}
