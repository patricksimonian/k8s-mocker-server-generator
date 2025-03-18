/**
* RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/
*/
export interface io_k8s_api_node_v1_RuntimeClass {
/**
* handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.
*/
handler: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { generation?: number; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; resourceVersion?: string; generateName?: string; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; finalizers?: string[]; name?: string; selfLink?: string; uid?: string; annotations?: Record<string, any> };
/**
* Overhead structure represents the resource overhead associated with running a pod.
*/
overhead?: { podFixed?: Record<string, any> };
/**
* Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
*/
scheduling?: { nodeSelector?: Record<string, any>; tolerations?: Array<{ key?: string; operator?: 'Equal' | 'Exists'; tolerationSeconds?: number; value?: string; effect?: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule' }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new io_k8s_api_node_v1_RuntimeClass with default values
*/
export function createio_k8s_api_node_v1_RuntimeClass(data?: Partial<io_k8s_api_node_v1_RuntimeClass>): io_k8s_api_node_v1_RuntimeClass {
  return {
    handler: data?.handler !== undefined ? data.handler : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    overhead: data?.overhead !== undefined ? data.overhead : {},
    scheduling: data?.scheduling !== undefined ? data.scheduling : {},
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
  };
}
