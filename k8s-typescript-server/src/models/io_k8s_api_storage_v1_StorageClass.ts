/**
* StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
*/
export interface io_k8s_api_storage_v1_StorageClass {
/**
* parameters holds the parameters for the provisioner that should create volumes of this storage class.
*/
parameters?: Record<string, any>;
/**
* provisioner indicates the type of the provisioner.
*/
provisioner: string;
/**
* reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete.

Possible enum values:
 - `"Delete"` means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.
 - `"Recycle"` means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.
 - `"Retain"` means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain.
*/
reclaimPolicy?: 'Delete' | 'Recycle' | 'Retain';
/**
* allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
*/
allowedTopologies?: Array<{ matchLabelExpressions?: Array<{ values: string[]; key: string }> }>;
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
metadata?: { managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; selfLink?: string; finalizers?: string[]; uid?: string; deletionGracePeriodSeconds?: number; creationTimestamp?: Date; deletionTimestamp?: Date; generateName?: string; generation?: number; name?: string; annotations?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; labels?: Record<string, any> };
/**
* mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
*/
mountOptions?: string[];
/**
* volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.

Possible enum values:
 - `"Immediate"` indicates that PersistentVolumeClaims should be immediately provisioned and bound. This is the default mode.
 - `"WaitForFirstConsumer"` indicates that PersistentVolumeClaims should not be provisioned and bound until the first Pod is created that references the PeristentVolumeClaim. The volume provisioning and binding will occur during Pod scheduing.
*/
volumeBindingMode?: 'Immediate' | 'WaitForFirstConsumer';
/**
* allowVolumeExpansion shows whether the storage class allow volume expand.
*/
allowVolumeExpansion?: boolean;
}

/**
* Create a new io_k8s_api_storage_v1_StorageClass with default values
*/
export function createio_k8s_api_storage_v1_StorageClass(data?: Partial<io_k8s_api_storage_v1_StorageClass>): io_k8s_api_storage_v1_StorageClass {
  return {
    parameters: data?.parameters !== undefined ? data.parameters : {},
    provisioner: data?.provisioner !== undefined ? data.provisioner : '',
    reclaimPolicy: data?.reclaimPolicy !== undefined ? data.reclaimPolicy : '',
    allowedTopologies: data?.allowedTopologies !== undefined ? data.allowedTopologies : [],
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    mountOptions: data?.mountOptions !== undefined ? data.mountOptions : [],
    volumeBindingMode: data?.volumeBindingMode !== undefined ? data.volumeBindingMode : '',
    allowVolumeExpansion: data?.allowVolumeExpansion !== undefined ? data.allowVolumeExpansion : false,
  };
}
