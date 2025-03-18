/**
* ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
*/
export interface io_k8s_api_core_v1_ISCSIPersistentVolumeSource {
/**
* chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
*/
chapAuthDiscovery?: boolean;
/**
* chapAuthSession defines whether support iSCSI Session CHAP authentication
*/
chapAuthSession?: boolean;
/**
* iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
*/
iscsiInterface?: string;
/**
* lun is iSCSI Target Lun number.
*/
lun: number;
/**
* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
*/
readOnly?: boolean;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
*/
secretRef?: { name?: string; namespace?: string };
/**
* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
*/
fsType?: string;
/**
* initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
*/
initiatorName?: string;
/**
* iqn is Target iSCSI Qualified Name.
*/
iqn: string;
/**
* portals is the iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
*/
portals?: string[];
/**
* targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
*/
targetPortal: string;
}

/**
* Create a new io_k8s_api_core_v1_ISCSIPersistentVolumeSource with default values
*/
export function createio_k8s_api_core_v1_ISCSIPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_ISCSIPersistentVolumeSource>): io_k8s_api_core_v1_ISCSIPersistentVolumeSource {
  return {
    chapAuthDiscovery: data?.chapAuthDiscovery !== undefined ? data.chapAuthDiscovery : false,
    chapAuthSession: data?.chapAuthSession !== undefined ? data.chapAuthSession : false,
    iscsiInterface: data?.iscsiInterface !== undefined ? data.iscsiInterface : '',
    lun: data?.lun !== undefined ? data.lun : 0,
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
    secretRef: data?.secretRef !== undefined ? data.secretRef : {},
    fsType: data?.fsType !== undefined ? data.fsType : '',
    initiatorName: data?.initiatorName !== undefined ? data.initiatorName : '',
    iqn: data?.iqn !== undefined ? data.iqn : '',
    portals: data?.portals !== undefined ? data.portals : [],
    targetPortal: data?.targetPortal !== undefined ? data.targetPortal : '',
  };
}
