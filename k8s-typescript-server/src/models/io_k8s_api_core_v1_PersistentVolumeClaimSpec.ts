/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaimSpec {
/**
* volumeName is the binding reference to the PersistentVolume backing this claim.
*/
volumeName?: string;
/**
* VolumeResourceRequirements describes the storage resource requirements for a volume.
*/
resources?: { limits?: Record<string, any>; requests?: Record<string, any> };
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
*/
selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> };
/**
* volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.

Possible enum values:
 - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
 - `"Filesystem"` means the volume will be or is formatted with a filesystem.
*/
volumeMode?: 'Block' | 'Filesystem';
/**
* storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
*/
storageClassName?: string;
/**
* volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
*/
volumeAttributesClassName?: string;
/**
* accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
*/
accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[];
/**
* TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
*/
dataSource?: { apiGroup?: string; kind: string; name: string };
/**
* TypedObjectReference contains enough information to let you locate the typed referenced object
*/
dataSourceRef?: { kind: string; name: string; namespace?: string; apiGroup?: string };
}

/**
* Create a new io_k8s_api_core_v1_PersistentVolumeClaimSpec with default values
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaimSpec(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaimSpec>): io_k8s_api_core_v1_PersistentVolumeClaimSpec {
  return {
    volumeName: data?.volumeName !== undefined ? data.volumeName : '',
    resources: data?.resources !== undefined ? data.resources : {},
    selector: data?.selector !== undefined ? data.selector : {},
    volumeMode: data?.volumeMode !== undefined ? data.volumeMode : '',
    storageClassName: data?.storageClassName !== undefined ? data.storageClassName : '',
    volumeAttributesClassName: data?.volumeAttributesClassName !== undefined ? data.volumeAttributesClassName : '',
    accessModes: data?.accessModes !== undefined ? data.accessModes : [],
    dataSource: data?.dataSource !== undefined ? data.dataSource : { kind: '', name: '' },
    dataSourceRef: data?.dataSourceRef !== undefined ? data.dataSourceRef : { kind: '', name: '' },
  };
}
