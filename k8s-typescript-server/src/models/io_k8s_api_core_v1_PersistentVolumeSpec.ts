/**
* PersistentVolumeSpec is the specification of a persistent volume.
*/
export interface io_k8s_api_core_v1_PersistentVolumeSpec {
/**
* ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
*/
scaleIO?: { fsType?: string; gateway: string; storageMode?: string; storagePool?: string; volumeName?: string; protectionDomain?: string; readOnly?: boolean; secretRef: { name?: string; namespace?: string }; sslEnabled?: boolean; system: string };
/**
* Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
*/
gcePersistentDisk?: { fsType?: string; partition?: number; pdName: string; readOnly?: boolean };
/**
* ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
*/
iscsi?: { chapAuthDiscovery?: boolean; chapAuthSession?: boolean; iqn: string; iscsiInterface?: string; lun: number; readOnly?: boolean; fsType?: string; initiatorName?: string; portals?: string[]; secretRef?: { name?: string; namespace?: string }; targetPortal: string };
/**
* Local represents directly-attached storage with node affinity
*/
local?: { fsType?: string; path: string };
/**
* accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
*/
accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[];
/**
* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
*/
azureDisk?: { kind?: 'Dedicated' | 'Managed' | 'Shared'; readOnly?: boolean; cachingMode?: 'None' | 'ReadOnly' | 'ReadWrite'; diskName: string; diskURI: string; fsType?: string };
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
*/
claimRef?: { fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string };
/**
* Represents a StorageOS persistent volume resource.
*/
storageos?: { fsType?: string; readOnly?: boolean; secretRef?: { fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string }; volumeName?: string; volumeNamespace?: string };
/**
* capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
*/
capacity?: Record<string, any>;
/**
* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
*/
cinder?: { fsType?: string; readOnly?: boolean; secretRef?: { name?: string; namespace?: string }; volumeID: string };
/**
* Represents a Photon Controller persistent disk resource.
*/
photonPersistentDisk?: { fsType?: string; pdID: string };
/**
* storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
*/
storageClassName?: string;
/**
* Represents storage that is managed by an external CSI volume driver
*/
csi?: { volumeAttributes?: Record<string, any>; controllerPublishSecretRef?: { name?: string; namespace?: string }; fsType?: string; nodePublishSecretRef?: { name?: string; namespace?: string }; nodeStageSecretRef?: { name?: string; namespace?: string }; readOnly?: boolean; volumeHandle: string; controllerExpandSecretRef?: { name?: string; namespace?: string }; driver: string; nodeExpandSecretRef?: { name?: string; namespace?: string } };
/**
* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
*/
glusterfs?: { endpoints: string; endpointsNamespace?: string; path: string; readOnly?: boolean };
/**
* persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming

Possible enum values:
 - `"Delete"` means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.
 - `"Recycle"` means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.
 - `"Retain"` means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain.
*/
persistentVolumeReclaimPolicy?: 'Delete' | 'Recycle' | 'Retain';
/**
* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
*/
quobyte?: { group?: string; readOnly?: boolean; registry: string; tenant?: string; user?: string; volume: string };
/**
* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
*/
nfs?: { path: string; readOnly?: boolean; server: string };
/**
* Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is a beta field and requires enabling VolumeAttributesClass feature (off by default).
*/
volumeAttributesClassName?: string;
/**
* Represents a vSphere volume resource.
*/
vsphereVolume?: { fsType?: string; storagePolicyID?: string; storagePolicyName?: string; volumePath: string };
/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
*/
azureFile?: { shareName: string; readOnly?: boolean; secretName: string; secretNamespace?: string };
/**
* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
*/
flocker?: { datasetName?: string; datasetUUID?: string };
/**
* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
*/
flexVolume?: { secretRef?: { name?: string; namespace?: string }; driver: string; fsType?: string; options?: Record<string, any>; readOnly?: boolean };
/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
*/
nodeAffinity?: { required?: { nodeSelectorTerms: Array<{ matchFields?: Array<{ values?: string[]; key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn' }>; matchExpressions?: Array<{ operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[]; key: string }> }> } };
/**
* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
*/
rbd?: { user?: string; fsType?: string; image: string; keyring?: string; monitors: string[]; pool?: string; readOnly?: boolean; secretRef?: { name?: string; namespace?: string } };
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
*/
awsElasticBlockStore?: { fsType?: string; partition?: number; readOnly?: boolean; volumeID: string };
/**
* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
*/
fc?: { lun?: number; readOnly?: boolean; targetWWNs?: string[]; wwids?: string[]; fsType?: string };
/**
* mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
*/
mountOptions?: string[];
/**
* PortworxVolumeSource represents a Portworx volume resource.
*/
portworxVolume?: { readOnly?: boolean; volumeID: string; fsType?: string };
/**
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
*/
cephfs?: { monitors: string[]; path?: string; readOnly?: boolean; secretFile?: string; secretRef?: { name?: string; namespace?: string }; user?: string };
/**
* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
*/
hostPath?: { type?: '' | 'BlockDevice' | 'CharDevice' | 'Directory' | 'DirectoryOrCreate' | 'File' | 'FileOrCreate' | 'Socket'; path: string };
}

/**
* Create a new io_k8s_api_core_v1_PersistentVolumeSpec with default values
*/
export function createio_k8s_api_core_v1_PersistentVolumeSpec(data?: Partial<io_k8s_api_core_v1_PersistentVolumeSpec>): io_k8s_api_core_v1_PersistentVolumeSpec {
  return {
    scaleIO: data?.scaleIO !== undefined ? data.scaleIO : { gateway: '', secretRef: {}, system: '' },
    gcePersistentDisk: data?.gcePersistentDisk !== undefined ? data.gcePersistentDisk : { pdName: '' },
    iscsi: data?.iscsi !== undefined ? data.iscsi : { targetPortal: '', iqn: '', lun: 0 },
    local: data?.local !== undefined ? data.local : { path: '' },
    accessModes: data?.accessModes !== undefined ? data.accessModes : [],
    azureDisk: data?.azureDisk !== undefined ? data.azureDisk : { diskName: '', diskURI: '' },
    claimRef: data?.claimRef !== undefined ? data.claimRef : {},
    storageos: data?.storageos !== undefined ? data.storageos : {},
    capacity: data?.capacity !== undefined ? data.capacity : {},
    cinder: data?.cinder !== undefined ? data.cinder : { volumeID: '' },
    photonPersistentDisk: data?.photonPersistentDisk !== undefined ? data.photonPersistentDisk : { pdID: '' },
    storageClassName: data?.storageClassName !== undefined ? data.storageClassName : '',
    csi: data?.csi !== undefined ? data.csi : { driver: '', volumeHandle: '' },
    glusterfs: data?.glusterfs !== undefined ? data.glusterfs : { endpoints: '', path: '' },
    persistentVolumeReclaimPolicy: data?.persistentVolumeReclaimPolicy !== undefined ? data.persistentVolumeReclaimPolicy : '',
    quobyte: data?.quobyte !== undefined ? data.quobyte : { registry: '', volume: '' },
    nfs: data?.nfs !== undefined ? data.nfs : { path: '', server: '' },
    volumeAttributesClassName: data?.volumeAttributesClassName !== undefined ? data.volumeAttributesClassName : '',
    vsphereVolume: data?.vsphereVolume !== undefined ? data.vsphereVolume : { volumePath: '' },
    azureFile: data?.azureFile !== undefined ? data.azureFile : { secretName: '', shareName: '' },
    flocker: data?.flocker !== undefined ? data.flocker : {},
    flexVolume: data?.flexVolume !== undefined ? data.flexVolume : { driver: '' },
    nodeAffinity: data?.nodeAffinity !== undefined ? data.nodeAffinity : {},
    rbd: data?.rbd !== undefined ? data.rbd : { monitors: [], image: '' },
    volumeMode: data?.volumeMode !== undefined ? data.volumeMode : '',
    awsElasticBlockStore: data?.awsElasticBlockStore !== undefined ? data.awsElasticBlockStore : { volumeID: '' },
    fc: data?.fc !== undefined ? data.fc : {},
    mountOptions: data?.mountOptions !== undefined ? data.mountOptions : [],
    portworxVolume: data?.portworxVolume !== undefined ? data.portworxVolume : { volumeID: '' },
    cephfs: data?.cephfs !== undefined ? data.cephfs : { monitors: [] },
    hostPath: data?.hostPath !== undefined ? data.hostPath : { path: '' },
  };
}
