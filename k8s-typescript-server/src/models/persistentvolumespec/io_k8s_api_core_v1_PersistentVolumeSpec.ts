/**
* PersistentVolumeSpec is the specification of a persistent volume.
* @resourceType persistentvolumespec
* @kind Persistentvolumespec
*/
export interface io_k8s_api_core_v1_PersistentVolumeSpec {
/**
* Represents storage that is managed by an external CSI volume driver
* @isObject
*/
csi?: { controllerExpandSecretRef?: { name?: string; namespace?: string }; driver: string; readOnly?: boolean; controllerPublishSecretRef?: { name?: string; namespace?: string }; fsType?: string; nodeExpandSecretRef?: { name?: string; namespace?: string }; nodePublishSecretRef?: { name?: string; namespace?: string }; nodeStageSecretRef?: { name?: string; namespace?: string }; volumeAttributes?: Record<string, any>; volumeHandle: string };
/**
* volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.

Possible enum values:
 - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
 - `"Filesystem"` means the volume will be or is formatted with a filesystem.
*/
volumeMode?: 'Block' | 'Filesystem';
/**
* Represents a Photon Controller persistent disk resource.
* @isObject
*/
photonPersistentDisk?: { fsType?: string; pdID: string };
/**
* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
* @isObject
*/
azureDisk?: { readOnly?: boolean; cachingMode?: 'None' | 'ReadOnly' | 'ReadWrite'; diskName: string; diskURI: string; fsType?: string; kind?: 'Dedicated' | 'Managed' | 'Shared' };
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @isObject
*/
claimRef?: { fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string };
/**
* Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
* @isObject
*/
gcePersistentDisk?: { fsType?: string; partition?: number; pdName: string; readOnly?: boolean };
/**
* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
* @isObject
*/
rbd?: { monitors: string[]; pool?: string; readOnly?: boolean; secretRef?: { name?: string; namespace?: string }; user?: string; fsType?: string; image: string; keyring?: string };
/**
* Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
* @isObject
*/
awsElasticBlockStore?: { fsType?: string; partition?: number; readOnly?: boolean; volumeID: string };
/**
* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
hostPath?: { path: string; type?: '' | 'BlockDevice' | 'CharDevice' | 'Directory' | 'DirectoryOrCreate' | 'File' | 'FileOrCreate' | 'Socket' };
/**
* ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
* @isObject
*/
iscsi?: { chapAuthDiscovery?: boolean; chapAuthSession?: boolean; fsType?: string; iqn: string; iscsiInterface?: string; lun: number; portals?: string[]; targetPortal: string; initiatorName?: string; readOnly?: boolean; secretRef?: { name?: string; namespace?: string } };
/**
* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
quobyte?: { registry: string; tenant?: string; user?: string; volume: string; group?: string; readOnly?: boolean };
/**
* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
glusterfs?: { endpoints: string; endpointsNamespace?: string; path: string; readOnly?: boolean };
/**
* Represents a vSphere volume resource.
* @isObject
*/
vsphereVolume?: { fsType?: string; storagePolicyID?: string; storagePolicyName?: string; volumePath: string };
/**
* storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
*/
storageClassName?: string;
/**
* Represents a StorageOS persistent volume resource.
* @isObject
*/
storageos?: { volumeNamespace?: string; fsType?: string; readOnly?: boolean; secretRef?: { resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string }; volumeName?: string };
/**
* Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is a beta field and requires enabling VolumeAttributesClass feature (off by default).
*/
volumeAttributesClassName?: string;
/**
* PortworxVolumeSource represents a Portworx volume resource.
* @isObject
*/
portworxVolume?: { volumeID: string; fsType?: string; readOnly?: boolean };
/**
* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
* @isObject
*/
cinder?: { secretRef?: { name?: string; namespace?: string }; volumeID: string; fsType?: string; readOnly?: boolean };
/**
* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
* @isObject
*/
flexVolume?: { readOnly?: boolean; secretRef?: { name?: string; namespace?: string }; driver: string; fsType?: string; options?: Record<string, any> };
/**
* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
flocker?: { datasetUUID?: string; datasetName?: string };
/**
* Local represents directly-attached storage with node affinity
* @isObject
*/
local?: { fsType?: string; path: string };
/**
* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
nfs?: { path: string; readOnly?: boolean; server: string };
/**
* persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming

Possible enum values:
 - `"Delete"` means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.
 - `"Recycle"` means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.
 - `"Retain"` means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain.
*/
persistentVolumeReclaimPolicy?: 'Delete' | 'Recycle' | 'Retain';
/**
* ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
* @isObject
*/
scaleIO?: { fsType?: string; protectionDomain?: string; sslEnabled?: boolean; storagePool?: string; system: string; volumeName?: string; gateway: string; readOnly?: boolean; secretRef: { namespace?: string; name?: string }; storageMode?: string };
/**
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
cephfs?: { path?: string; readOnly?: boolean; secretFile?: string; secretRef?: { namespace?: string; name?: string }; user?: string; monitors: string[] };
/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
* @isObject
*/
azureFile?: { readOnly?: boolean; secretName: string; secretNamespace?: string; shareName: string };
/**
* capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
*/
capacity?: Record<string, any>;
/**
* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
* @isObject
*/
fc?: { lun?: number; readOnly?: boolean; targetWWNs?: string[]; wwids?: string[]; fsType?: string };
/**
* mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
* @isArray
*/
mountOptions?: string[];
/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
* @isObject
*/
nodeAffinity?: { required?: { nodeSelectorTerms: Array<{ matchExpressions?: Array<{ operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[]; key: string }>; matchFields?: Array<{ operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[]; key: string }> }> } };
/**
* accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
* @isArray
*/
accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[];
}

/**
* Create a new Persistentvolumespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeSpec(data?: Partial<io_k8s_api_core_v1_PersistentVolumeSpec>): io_k8s_api_core_v1_PersistentVolumeSpec {
 return {
   csi: data?.csi !== undefined ? data.csi : { volumeHandle: '', driver: '' },
   volumeMode: data?.volumeMode !== undefined ? data.volumeMode : '',
   photonPersistentDisk: data?.photonPersistentDisk !== undefined ? data.photonPersistentDisk : { pdID: '' },
   azureDisk: data?.azureDisk !== undefined ? data.azureDisk : { diskName: '', diskURI: '' },
   claimRef: data?.claimRef !== undefined ? data.claimRef : {},
   gcePersistentDisk: data?.gcePersistentDisk !== undefined ? data.gcePersistentDisk : { pdName: '' },
   rbd: data?.rbd !== undefined ? data.rbd : { image: '', monitors: [] },
   awsElasticBlockStore: data?.awsElasticBlockStore !== undefined ? data.awsElasticBlockStore : { volumeID: '' },
   hostPath: data?.hostPath !== undefined ? data.hostPath : { path: '' },
   iscsi: data?.iscsi !== undefined ? data.iscsi : { lun: 0, targetPortal: '', iqn: '' },
   quobyte: data?.quobyte !== undefined ? data.quobyte : { volume: '', registry: '' },
   glusterfs: data?.glusterfs !== undefined ? data.glusterfs : { endpoints: '', path: '' },
   vsphereVolume: data?.vsphereVolume !== undefined ? data.vsphereVolume : { volumePath: '' },
   storageClassName: data?.storageClassName !== undefined ? data.storageClassName : '',
   storageos: data?.storageos !== undefined ? data.storageos : {},
   volumeAttributesClassName: data?.volumeAttributesClassName !== undefined ? data.volumeAttributesClassName : '',
   portworxVolume: data?.portworxVolume !== undefined ? data.portworxVolume : { volumeID: '' },
   cinder: data?.cinder !== undefined ? data.cinder : { volumeID: '' },
   flexVolume: data?.flexVolume !== undefined ? data.flexVolume : { driver: '' },
   flocker: data?.flocker !== undefined ? data.flocker : {},
   local: data?.local !== undefined ? data.local : { path: '' },
   nfs: data?.nfs !== undefined ? data.nfs : { path: '', server: '' },
   persistentVolumeReclaimPolicy: data?.persistentVolumeReclaimPolicy !== undefined ? data.persistentVolumeReclaimPolicy : '',
   scaleIO: data?.scaleIO !== undefined ? data.scaleIO : { system: '', gateway: '', secretRef: {} },
   cephfs: data?.cephfs !== undefined ? data.cephfs : { monitors: [] },
   azureFile: data?.azureFile !== undefined ? data.azureFile : { secretName: '', shareName: '' },
   capacity: data?.capacity !== undefined ? data.capacity : {},
   fc: data?.fc !== undefined ? data.fc : {},
   mountOptions: data?.mountOptions !== undefined ? data.mountOptions : [],
   nodeAffinity: data?.nodeAffinity !== undefined ? data.nodeAffinity : {},
   accessModes: data?.accessModes !== undefined ? data.accessModes : [],
 };
}
