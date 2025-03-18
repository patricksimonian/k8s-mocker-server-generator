/**
* Volume represents a named volume in a pod that may be accessed by any container in the pod.
*/
export interface io_k8s_api_core_v1_Volume {
/**
* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
*/
azureDisk?: { fsType?: string; kind?: 'Dedicated' | 'Managed' | 'Shared'; readOnly?: boolean; cachingMode?: 'None' | 'ReadOnly' | 'ReadWrite'; diskName: string; diskURI: string };
/**
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
*/
cephfs?: { monitors: string[]; path?: string; readOnly?: boolean; secretFile?: string; secretRef?: { name?: string }; user?: string };
/**
* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
*/
rbd?: { fsType?: string; image: string; keyring?: string; monitors: string[]; pool?: string; readOnly?: boolean; secretRef?: { name?: string }; user?: string };
/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
*/
azureFile?: { readOnly?: boolean; secretName: string; shareName: string };
/**
* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
*/
glusterfs?: { endpoints: string; path: string; readOnly?: boolean };
/**
* PortworxVolumeSource represents a Portworx volume resource.
*/
portworxVolume?: { fsType?: string; readOnly?: boolean; volumeID: string };
/**
* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
*/
downwardAPI?: { defaultMode?: number; items?: Array<{ fieldRef?: { apiVersion?: string; fieldPath: string }; mode?: number; path: string; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string } }> };
/**
* Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
*/
gcePersistentDisk?: { readOnly?: boolean; fsType?: string; partition?: number; pdName: string };
/**
* Represents a Photon Controller persistent disk resource.
*/
photonPersistentDisk?: { fsType?: string; pdID: string };
/**
* Represents a projected volume source
*/
projected?: { sources?: Array<{ serviceAccountToken?: { expirationSeconds?: number; path: string; audience?: string }; clusterTrustBundle?: { path: string; signerName?: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name?: string; optional?: boolean }; configMap?: { optional?: boolean; items?: Array<{ key: string; mode?: number; path: string }>; name?: string }; downwardAPI?: { items?: Array<{ path: string; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string }; fieldRef?: { apiVersion?: string; fieldPath: string }; mode?: number }> }; secret?: { items?: Array<{ key: string; mode?: number; path: string }>; name?: string; optional?: boolean } }>; defaultMode?: number };
/**
* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
*/
quobyte?: { group?: string; readOnly?: boolean; registry: string; tenant?: string; user?: string; volume: string };
/**
* Represents an ephemeral volume that is handled by a normal storage driver.
*/
ephemeral?: { volumeClaimTemplate?: { metadata?: { resourceVersion?: string; uid?: string; deletionGracePeriodSeconds?: number; generation?: number; labels?: Record<string, any>; namespace?: string; selfLink?: string; creationTimestamp?: Date; generateName?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; annotations?: Record<string, any>; name?: string; deletionTimestamp?: Date; finalizers?: string[]; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }> }; spec: { dataSourceRef?: { kind: string; name: string; namespace?: string; apiGroup?: string }; volumeAttributesClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSource?: { apiGroup?: string; kind: string; name: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; selector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; storageClassName?: string } } };
/**
* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
*/
fc?: { fsType?: string; lun?: number; readOnly?: boolean; targetWWNs?: string[]; wwids?: string[] };
/**
* FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
*/
flexVolume?: { fsType?: string; options?: Record<string, any>; readOnly?: boolean; secretRef?: { name?: string }; driver: string };
/**
* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
*/
hostPath?: { path: string; type?: '' | 'BlockDevice' | 'CharDevice' | 'Directory' | 'DirectoryOrCreate' | 'File' | 'FileOrCreate' | 'Socket' };
/**
* ImageVolumeSource represents a image volume resource.
*/
image?: { reference?: string; pullPolicy?: 'Always' | 'IfNotPresent' | 'Never' };
/**
* Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
*/
iscsi?: { lun: number; readOnly?: boolean; secretRef?: { name?: string }; chapAuthDiscovery?: boolean; initiatorName?: string; iqn: string; portals?: string[]; targetPortal: string; chapAuthSession?: boolean; fsType?: string; iscsiInterface?: string };
/**
* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
*/
nfs?: { path: string; readOnly?: boolean; server: string };
/**
* ScaleIOVolumeSource represents a persistent ScaleIO volume
*/
scaleIO?: { readOnly?: boolean; storagePool?: string; system: string; fsType?: string; protectionDomain?: string; secretRef: { name?: string }; sslEnabled?: boolean; storageMode?: string; volumeName?: string; gateway: string };
/**
* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
*/
cinder?: { fsType?: string; readOnly?: boolean; secretRef?: { name?: string }; volumeID: string };
/**
* Adapts a ConfigMap into a volume.

The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
*/
configMap?: { optional?: boolean; defaultMode?: number; items?: Array<{ key: string; mode?: number; path: string }>; name?: string };
/**
* Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.

DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
*/
gitRepo?: { directory?: string; repository: string; revision?: string };
/**
* Represents a vSphere volume resource.
*/
vsphereVolume?: { fsType?: string; storagePolicyID?: string; storagePolicyName?: string; volumePath: string };
/**
* Represents a source location of a volume to mount, managed by an external CSI driver
*/
csi?: { driver: string; fsType?: string; nodePublishSecretRef?: { name?: string }; readOnly?: boolean; volumeAttributes?: Record<string, any> };
/**
* Adapts a Secret into a volume.

The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
*/
secret?: { secretName?: string; defaultMode?: number; items?: Array<{ key: string; mode?: number; path: string }>; optional?: boolean };
/**
* Represents a StorageOS persistent volume resource.
*/
storageos?: { volumeName?: string; volumeNamespace?: string; fsType?: string; readOnly?: boolean; secretRef?: { name?: string } };
/**
* name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
*/
name: string;
/**
* PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
*/
persistentVolumeClaim?: { readOnly?: boolean; claimName: string };
/**
* Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
*/
awsElasticBlockStore?: { fsType?: string; partition?: number; readOnly?: boolean; volumeID: string };
/**
* Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
*/
emptyDir?: { medium?: string; sizeLimit?: string };
/**
* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
*/
flocker?: { datasetName?: string; datasetUUID?: string };
}

/**
* Create a new io_k8s_api_core_v1_Volume with default values
*/
export function createio_k8s_api_core_v1_Volume(data?: Partial<io_k8s_api_core_v1_Volume>): io_k8s_api_core_v1_Volume {
  return {
    azureDisk: data?.azureDisk !== undefined ? data.azureDisk : { diskName: '', diskURI: '' },
    cephfs: data?.cephfs !== undefined ? data.cephfs : { monitors: [] },
    rbd: data?.rbd !== undefined ? data.rbd : { image: '', monitors: [] },
    azureFile: data?.azureFile !== undefined ? data.azureFile : { secretName: '', shareName: '' },
    glusterfs: data?.glusterfs !== undefined ? data.glusterfs : { endpoints: '', path: '' },
    portworxVolume: data?.portworxVolume !== undefined ? data.portworxVolume : { volumeID: '' },
    downwardAPI: data?.downwardAPI !== undefined ? data.downwardAPI : {},
    gcePersistentDisk: data?.gcePersistentDisk !== undefined ? data.gcePersistentDisk : { pdName: '' },
    photonPersistentDisk: data?.photonPersistentDisk !== undefined ? data.photonPersistentDisk : { pdID: '' },
    projected: data?.projected !== undefined ? data.projected : {},
    quobyte: data?.quobyte !== undefined ? data.quobyte : { volume: '', registry: '' },
    ephemeral: data?.ephemeral !== undefined ? data.ephemeral : {},
    fc: data?.fc !== undefined ? data.fc : {},
    flexVolume: data?.flexVolume !== undefined ? data.flexVolume : { driver: '' },
    hostPath: data?.hostPath !== undefined ? data.hostPath : { path: '' },
    image: data?.image !== undefined ? data.image : {},
    iscsi: data?.iscsi !== undefined ? data.iscsi : { targetPortal: '', lun: 0, iqn: '' },
    nfs: data?.nfs !== undefined ? data.nfs : { path: '', server: '' },
    scaleIO: data?.scaleIO !== undefined ? data.scaleIO : { system: '', secretRef: {}, gateway: '' },
    cinder: data?.cinder !== undefined ? data.cinder : { volumeID: '' },
    configMap: data?.configMap !== undefined ? data.configMap : {},
    gitRepo: data?.gitRepo !== undefined ? data.gitRepo : { repository: '' },
    vsphereVolume: data?.vsphereVolume !== undefined ? data.vsphereVolume : { volumePath: '' },
    csi: data?.csi !== undefined ? data.csi : { driver: '' },
    secret: data?.secret !== undefined ? data.secret : {},
    storageos: data?.storageos !== undefined ? data.storageos : {},
    name: data?.name !== undefined ? data.name : '',
    persistentVolumeClaim: data?.persistentVolumeClaim !== undefined ? data.persistentVolumeClaim : { claimName: '' },
    awsElasticBlockStore: data?.awsElasticBlockStore !== undefined ? data.awsElasticBlockStore : { volumeID: '' },
    emptyDir: data?.emptyDir !== undefined ? data.emptyDir : {},
    flocker: data?.flocker !== undefined ? data.flocker : {},
  };
}
