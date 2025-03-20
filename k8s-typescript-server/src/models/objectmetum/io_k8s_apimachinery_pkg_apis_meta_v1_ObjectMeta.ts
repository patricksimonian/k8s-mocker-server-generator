/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @resourceType objectmetum
* @kind Objectmetum
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta {
/**
* Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
*/
annotations?: Record<string, any>;
/**
* Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
*/
deletionGracePeriodSeconds?: number;
/**
* ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
* @isArray
*/
managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>;
/**
* Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
*/
selfLink?: string;
/**
* Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
* @isArray
*/
finalizers?: string[];
/**
* A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
*/
generation?: number;
/**
* Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
*/
labels?: Record<string, any>;
/**
* An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
*/
resourceVersion?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
creationTimestamp?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
deletionTimestamp?: Date;
/**
* Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
*/
name?: string;
/**
* Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
*/
namespace?: string;
/**
* List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
* @isArray
*/
ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>;
/**
* GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.

If this field is specified and the generated name exists, the server will return a 409.

Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
*/
generateName?: string;
/**
* UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
*/
uid?: string;
}

/**
* Create a new Objectmetum with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta>): io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta {
 return {
   annotations: data?.annotations !== undefined ? data.annotations : {},
   deletionGracePeriodSeconds: data?.deletionGracePeriodSeconds !== undefined ? data.deletionGracePeriodSeconds : 0,
   managedFields: data?.managedFields !== undefined ? data.managedFields : [],
   selfLink: data?.selfLink !== undefined ? data.selfLink : '',
   finalizers: data?.finalizers !== undefined ? data.finalizers : [],
   generation: data?.generation !== undefined ? data.generation : 0,
   labels: data?.labels !== undefined ? data.labels : {},
   resourceVersion: data?.resourceVersion !== undefined ? data.resourceVersion : '',
   creationTimestamp: data?.creationTimestamp !== undefined ? data.creationTimestamp : '',
   deletionTimestamp: data?.deletionTimestamp !== undefined ? data.deletionTimestamp : '',
   name: data?.name !== undefined ? data.name : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
   ownerReferences: data?.ownerReferences !== undefined ? data.ownerReferences : [],
   generateName: data?.generateName !== undefined ? data.generateName : '',
   uid: data?.uid !== undefined ? data.uid : '',
 };
}
