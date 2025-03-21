/**
* Volume represents a named volume in a pod that may be accessed by any container in the pod.
* @resourceType volume
* @kind Volume
*/
export interface io_k8s_api_core_v1_Volume {
/**
* Adapts a ConfigMap into a volume.

The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
* @isObject
*/
configMap?: { optional?: boolean; defaultMode?: number; items?: Array<{ key: string; mode?: number; path: string }>; name?: string };
/**
* ImageVolumeSource represents a image volume resource.
* @isObject
*/
image?: { pullPolicy?: 'Always' | 'IfNotPresent' | 'Never'; reference?: string };
/**
* Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
* @isObject
*/
iscsi?: { iscsiInterface?: string; portals?: string[]; secretRef?: { name?: string }; targetPortal: string; chapAuthDiscovery?: boolean; chapAuthSession?: boolean; fsType?: string; iqn: string; initiatorName?: string; lun: number; readOnly?: boolean };
/**
* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
nfs?: { path: string; readOnly?: boolean; server: string };
/**
* Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
* @isObject
*/
awsElasticBlockStore?: { fsType?: string; partition?: number; readOnly?: boolean; volumeID: string };
/**
* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
flocker?: { datasetName?: string; datasetUUID?: string };
/**
* Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
* @isObject
*/
gcePersistentDisk?: { fsType?: string; partition?: number; pdName: string; readOnly?: boolean };
/**
* PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
* @isObject
*/
persistentVolumeClaim?: { claimName: string; readOnly?: boolean };
/**
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
cephfs?: { secretRef?: { name?: string }; user?: string; monitors: string[]; path?: string; readOnly?: boolean; secretFile?: string };
/**
* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
* @isObject
*/
cinder?: { secretRef?: { name?: string }; volumeID: string; fsType?: string; readOnly?: boolean };
/**
* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
* @isObject
*/
downwardAPI?: { defaultMode?: number; items?: Array<{ mode?: number; path: string; resourceFieldRef?: { resource: string; containerName?: string; divisor?: string }; fieldRef?: { apiVersion?: string; fieldPath: string } }> };
/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
* @isObject
*/
azureFile?: { readOnly?: boolean; secretName: string; shareName: string };
/**
* FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
* @isObject
*/
flexVolume?: { driver: string; fsType?: string; options?: Record<string, any>; readOnly?: boolean; secretRef?: { name?: string } };
/**
* Represents a projected volume source
* @isObject
*/
projected?: { defaultMode?: number; sources?: Array<{ clusterTrustBundle?: { signerName?: string; labelSelector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ values?: string[]; key: string; operator: string }> }; name?: string; optional?: boolean; path: string }; configMap?: { name?: string; optional?: boolean; items?: Array<{ key: string; mode?: number; path: string }> }; downwardAPI?: { items?: Array<{ fieldRef?: { apiVersion?: string; fieldPath: string }; mode?: number; path: string; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string } }> }; secret?: { items?: Array<{ key: string; mode?: number; path: string }>; name?: string; optional?: boolean }; serviceAccountToken?: { audience?: string; expirationSeconds?: number; path: string } }> };
/**
* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
* @isObject
*/
rbd?: { readOnly?: boolean; secretRef?: { name?: string }; user?: string; fsType?: string; image: string; keyring?: string; monitors: string[]; pool?: string };
/**
* Represents a StorageOS persistent volume resource.
* @isObject
*/
storageos?: { secretRef?: { name?: string }; volumeName?: string; volumeNamespace?: string; fsType?: string; readOnly?: boolean };
/**
* Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
* @isObject
*/
emptyDir?: { medium?: string; sizeLimit?: string };
/**
* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
* @isObject
*/
fc?: { lun?: number; readOnly?: boolean; targetWWNs?: string[]; wwids?: string[]; fsType?: string };
/**
* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
glusterfs?: { endpoints: string; path: string; readOnly?: boolean };
/**
* name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
* @required
*/
name: string;
/**
* PortworxVolumeSource represents a Portworx volume resource.
* @isObject
*/
portworxVolume?: { fsType?: string; readOnly?: boolean; volumeID: string };
/**
* ScaleIOVolumeSource represents a persistent ScaleIO volume
* @isObject
*/
scaleIO?: { protectionDomain?: string; secretRef: { name?: string }; sslEnabled?: boolean; fsType?: string; gateway: string; readOnly?: boolean; storageMode?: string; storagePool?: string; system: string; volumeName?: string };
/**
* Represents a vSphere volume resource.
* @isObject
*/
vsphereVolume?: { storagePolicyID?: string; storagePolicyName?: string; volumePath: string; fsType?: string };
/**
* Represents a source location of a volume to mount, managed by an external CSI driver
* @isObject
*/
csi?: { volumeAttributes?: Record<string, any>; driver: string; fsType?: string; nodePublishSecretRef?: { name?: string }; readOnly?: boolean };
/**
* Represents an ephemeral volume that is handled by a normal storage driver.
* @isObject
*/
ephemeral?: { volumeClaimTemplate?: { metadata?: { generation?: number; namespace?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; resourceVersion?: string; annotations?: Record<string, any>; finalizers?: string[]; selfLink?: string; labels?: Record<string, any>; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; uid?: string; deletionTimestamp?: Date; generateName?: string }; spec: { volumeMode?: 'Block' | 'Filesystem'; volumeName?: string; dataSourceRef?: { namespace?: string; apiGroup?: string; kind: string; name: string }; dataSource?: { apiGroup?: string; kind: string; name: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; storageClassName?: string; volumeAttributesClassName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[] } } };
/**
* Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.

DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
* @isObject
*/
gitRepo?: { revision?: string; directory?: string; repository: string };
/**
* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
* @isObject
*/
azureDisk?: { kind?: 'Dedicated' | 'Managed' | 'Shared'; readOnly?: boolean; cachingMode?: 'None' | 'ReadOnly' | 'ReadWrite'; diskName: string; diskURI: string; fsType?: string };
/**
* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
hostPath?: { path: string; type?: '' | 'BlockDevice' | 'CharDevice' | 'Directory' | 'DirectoryOrCreate' | 'File' | 'FileOrCreate' | 'Socket' };
/**
* Represents a Photon Controller persistent disk resource.
* @isObject
*/
photonPersistentDisk?: { fsType?: string; pdID: string };
/**
* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
quobyte?: { group?: string; readOnly?: boolean; registry: string; tenant?: string; user?: string; volume: string };
/**
* Adapts a Secret into a volume.

The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
* @isObject
*/
secret?: { defaultMode?: number; items?: Array<{ key: string; mode?: number; path: string }>; optional?: boolean; secretName?: string };
}

/**
* Create a new Volume with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Volume instance with defaults applied
*/
export function createio_k8s_api_core_v1_Volume(data?: Partial<io_k8s_api_core_v1_Volume>): io_k8s_api_core_v1_Volume {
 return {
   configMap: data?.configMap !== undefined ? data.configMap : {},
   image: data?.image !== undefined ? data.image : {},
   iscsi: data?.iscsi !== undefined ? data.iscsi : { lun: 0, targetPortal: '', iqn: '' },
   nfs: data?.nfs !== undefined ? data.nfs : { path: '', server: '' },
   awsElasticBlockStore: data?.awsElasticBlockStore !== undefined ? data.awsElasticBlockStore : { volumeID: '' },
   flocker: data?.flocker !== undefined ? data.flocker : {},
   gcePersistentDisk: data?.gcePersistentDisk !== undefined ? data.gcePersistentDisk : { pdName: '' },
   persistentVolumeClaim: data?.persistentVolumeClaim !== undefined ? data.persistentVolumeClaim : { claimName: '' },
   cephfs: data?.cephfs !== undefined ? data.cephfs : { monitors: [] },
   cinder: data?.cinder !== undefined ? data.cinder : { volumeID: '' },
   downwardAPI: data?.downwardAPI !== undefined ? data.downwardAPI : {},
   azureFile: data?.azureFile !== undefined ? data.azureFile : { secretName: '', shareName: '' },
   flexVolume: data?.flexVolume !== undefined ? data.flexVolume : { driver: '' },
   projected: data?.projected !== undefined ? data.projected : {},
   rbd: data?.rbd !== undefined ? data.rbd : { monitors: [], image: '' },
   storageos: data?.storageos !== undefined ? data.storageos : {},
   emptyDir: data?.emptyDir !== undefined ? data.emptyDir : {},
   fc: data?.fc !== undefined ? data.fc : {},
   glusterfs: data?.glusterfs !== undefined ? data.glusterfs : { path: '', endpoints: '' },
   name: data?.name !== undefined ? data.name : '',
   portworxVolume: data?.portworxVolume !== undefined ? data.portworxVolume : { volumeID: '' },
   scaleIO: data?.scaleIO !== undefined ? data.scaleIO : { secretRef: {}, gateway: '', system: '' },
   vsphereVolume: data?.vsphereVolume !== undefined ? data.vsphereVolume : { volumePath: '' },
   csi: data?.csi !== undefined ? data.csi : { driver: '' },
   ephemeral: data?.ephemeral !== undefined ? data.ephemeral : {},
   gitRepo: data?.gitRepo !== undefined ? data.gitRepo : { repository: '' },
   azureDisk: data?.azureDisk !== undefined ? data.azureDisk : { diskName: '', diskURI: '' },
   hostPath: data?.hostPath !== undefined ? data.hostPath : { path: '' },
   photonPersistentDisk: data?.photonPersistentDisk !== undefined ? data.photonPersistentDisk : { pdID: '' },
   quobyte: data?.quobyte !== undefined ? data.quobyte : { registry: '', volume: '' },
   secret: data?.secret !== undefined ? data.secret : {},
 };
}
