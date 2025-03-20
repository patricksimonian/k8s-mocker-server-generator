/**
* PersistentVolumeSpec is the specification of a persistent volume.
* @resourceType persistentvolumespec
* @kind Persistentvolumespec
*/
export interface io_k8s_api_core_v1_PersistentVolumeSpec {
/**
* capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
*/
capacity?: Record<string, any>;
/**
* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
glusterfs?: { endpoints: string; endpointsNamespace?: string; path: string; readOnly?: boolean };
/**
* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
hostPath?: { path: string; type?: '' | 'BlockDevice' | 'CharDevice' | 'Directory' | 'DirectoryOrCreate' | 'File' | 'FileOrCreate' | 'Socket' };
/**
* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
quobyte?: { volume: string; group?: string; readOnly?: boolean; registry: string; tenant?: string; user?: string };
/**
* storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
*/
storageClassName?: string;
/**
* Represents storage that is managed by an external CSI volume driver
* @isObject
*/
csi?: { driver: string; nodeStageSecretRef?: { name?: string; namespace?: string }; readOnly?: boolean; volumeAttributes?: Record<string, any>; volumeHandle: string; controllerExpandSecretRef?: { name?: string; namespace?: string }; controllerPublishSecretRef?: { namespace?: string; name?: string }; fsType?: string; nodeExpandSecretRef?: { name?: string; namespace?: string }; nodePublishSecretRef?: { namespace?: string; name?: string } };
/**
* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
* @isObject
*/
flexVolume?: { driver: string; fsType?: string; options?: Record<string, any>; readOnly?: boolean; secretRef?: { name?: string; namespace?: string } };
/**
* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
* @isObject
*/
fc?: { lun?: number; readOnly?: boolean; targetWWNs?: string[]; wwids?: string[]; fsType?: string };
/**
* Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
* @isObject
*/
gcePersistentDisk?: { fsType?: string; partition?: number; pdName: string; readOnly?: boolean };
/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
* @isObject
*/
nodeAffinity?: { required?: { nodeSelectorTerms: Array<{ matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }> } };
/**
* ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
* @isObject
*/
scaleIO?: { sslEnabled?: boolean; system: string; volumeName?: string; fsType?: string; gateway: string; secretRef: { name?: string; namespace?: string }; storageMode?: string; storagePool?: string; protectionDomain?: string; readOnly?: boolean };
/**
* Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is a beta field and requires enabling VolumeAttributesClass feature (off by default).
*/
volumeAttributesClassName?: string;
/**
* volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.

Possible enum values:
 - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
 - `"Filesystem"` means the volume will be or is formatted with a filesystem.
*/
volumeMode?: 'Block' | 'Filesystem';
/**
* Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
* @isObject
*/
awsElasticBlockStore?: { fsType?: string; partition?: number; readOnly?: boolean; volumeID: string };
/**
* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
* @isObject
*/
azureDisk?: { diskName: string; diskURI: string; fsType?: string; kind?: 'Dedicated' | 'Managed' | 'Shared'; readOnly?: boolean; cachingMode?: 'None' | 'ReadOnly' | 'ReadWrite' };
/**
* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
flocker?: { datasetName?: string; datasetUUID?: string };
/**
* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
nfs?: { readOnly?: boolean; server: string; path: string };
/**
* Represents a Photon Controller persistent disk resource.
* @isObject
*/
photonPersistentDisk?: { fsType?: string; pdID: string };
/**
* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
* @isObject
*/
rbd?: { readOnly?: boolean; secretRef?: { name?: string; namespace?: string }; user?: string; fsType?: string; image: string; keyring?: string; monitors: string[]; pool?: string };
/**
* accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
* @isArray
*/
accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[];
/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
* @isObject
*/
azureFile?: { readOnly?: boolean; secretName: string; secretNamespace?: string; shareName: string };
/**
* Represents a StorageOS persistent volume resource.
* @isObject
*/
storageos?: { volumeName?: string; volumeNamespace?: string; fsType?: string; readOnly?: boolean; secretRef?: { name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string } };
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @isObject
*/
claimRef?: { namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string };
/**
* ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
* @isObject
*/
iscsi?: { readOnly?: boolean; chapAuthSession?: boolean; fsType?: string; initiatorName?: string; iqn: string; iscsiInterface?: string; portals?: string[]; chapAuthDiscovery?: boolean; lun: number; secretRef?: { name?: string; namespace?: string }; targetPortal: string };
/**
* persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming

Possible enum values:
 - `"Delete"` means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.
 - `"Recycle"` means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.
 - `"Retain"` means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain.
*/
persistentVolumeReclaimPolicy?: 'Delete' | 'Recycle' | 'Retain';
/**
* Local represents directly-attached storage with node affinity
* @isObject
*/
local?: { fsType?: string; path: string };
/**
* mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
* @isArray
*/
mountOptions?: string[];
/**
* PortworxVolumeSource represents a Portworx volume resource.
* @isObject
*/
portworxVolume?: { fsType?: string; readOnly?: boolean; volumeID: string };
/**
* Represents a vSphere volume resource.
* @isObject
*/
vsphereVolume?: { fsType?: string; storagePolicyID?: string; storagePolicyName?: string; volumePath: string };
/**
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
cephfs?: { user?: string; monitors: string[]; path?: string; readOnly?: boolean; secretFile?: string; secretRef?: { name?: string; namespace?: string } };
/**
* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
* @isObject
*/
cinder?: { fsType?: string; readOnly?: boolean; secretRef?: { name?: string; namespace?: string }; volumeID: string };
}

/**
* Create a new Persistentvolumespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeSpec(data?: Partial<io_k8s_api_core_v1_PersistentVolumeSpec>): io_k8s_api_core_v1_PersistentVolumeSpec {
 return {
   capacity: data?.capacity !== undefined ? data.capacity : {},
   glusterfs: data?.glusterfs !== undefined ? data.glusterfs : { path: '', endpoints: '' },
   hostPath: data?.hostPath !== undefined ? data.hostPath : { path: '' },
   quobyte: data?.quobyte !== undefined ? data.quobyte : { registry: '', volume: '' },
   storageClassName: data?.storageClassName !== undefined ? data.storageClassName : '',
   csi: data?.csi !== undefined ? data.csi : { driver: '', volumeHandle: '' },
   flexVolume: data?.flexVolume !== undefined ? data.flexVolume : { driver: '' },
   fc: data?.fc !== undefined ? data.fc : {},
   gcePersistentDisk: data?.gcePersistentDisk !== undefined ? data.gcePersistentDisk : { pdName: '' },
   nodeAffinity: data?.nodeAffinity !== undefined ? data.nodeAffinity : {},
   scaleIO: data?.scaleIO !== undefined ? data.scaleIO : { secretRef: {}, gateway: '', system: '' },
   volumeAttributesClassName: data?.volumeAttributesClassName !== undefined ? data.volumeAttributesClassName : '',
   volumeMode: data?.volumeMode !== undefined ? data.volumeMode : '',
   awsElasticBlockStore: data?.awsElasticBlockStore !== undefined ? data.awsElasticBlockStore : { volumeID: '' },
   azureDisk: data?.azureDisk !== undefined ? data.azureDisk : { diskName: '', diskURI: '' },
   flocker: data?.flocker !== undefined ? data.flocker : {},
   nfs: data?.nfs !== undefined ? data.nfs : { server: '', path: '' },
   photonPersistentDisk: data?.photonPersistentDisk !== undefined ? data.photonPersistentDisk : { pdID: '' },
   rbd: data?.rbd !== undefined ? data.rbd : { image: '', monitors: [] },
   accessModes: data?.accessModes !== undefined ? data.accessModes : [],
   azureFile: data?.azureFile !== undefined ? data.azureFile : { secretName: '', shareName: '' },
   storageos: data?.storageos !== undefined ? data.storageos : {},
   claimRef: data?.claimRef !== undefined ? data.claimRef : {},
   iscsi: data?.iscsi !== undefined ? data.iscsi : { lun: 0, targetPortal: '', iqn: '' },
   persistentVolumeReclaimPolicy: data?.persistentVolumeReclaimPolicy !== undefined ? data.persistentVolumeReclaimPolicy : '',
   local: data?.local !== undefined ? data.local : { path: '' },
   mountOptions: data?.mountOptions !== undefined ? data.mountOptions : [],
   portworxVolume: data?.portworxVolume !== undefined ? data.portworxVolume : { volumeID: '' },
   vsphereVolume: data?.vsphereVolume !== undefined ? data.vsphereVolume : { volumePath: '' },
   cephfs: data?.cephfs !== undefined ? data.cephfs : { monitors: [] },
   cinder: data?.cinder !== undefined ? data.cinder : { volumeID: '' },
 };
}
