/**
* Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
*/
export interface io_k8s_api_core_v1_ISCSIVolumeSource {
/**
* iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
*/
iscsiInterface?: string;
/**
* portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
*/
portals?: string[];
/**
* targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
*/
targetPortal: string;
/**
* chapAuthSession defines whether support iSCSI Session CHAP authentication
*/
chapAuthSession?: boolean;
/**
* initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
*/
initiatorName?: string;
/**
* iqn is the target iSCSI Qualified Name.
*/
iqn: string;
/**
* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
*/
readOnly?: boolean;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
*/
secretRef?: { name?: string };
/**
* chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
*/
chapAuthDiscovery?: boolean;
/**
* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
*/
fsType?: string;
/**
* lun represents iSCSI Target Lun number.
*/
lun: number;
}

/**
* Create a new io_k8s_api_core_v1_ISCSIVolumeSource with default values
*/
export function createio_k8s_api_core_v1_ISCSIVolumeSource(data?: Partial<io_k8s_api_core_v1_ISCSIVolumeSource>): io_k8s_api_core_v1_ISCSIVolumeSource {
  return {
    iscsiInterface: data?.iscsiInterface !== undefined ? data.iscsiInterface : '',
    portals: data?.portals !== undefined ? data.portals : [],
    targetPortal: data?.targetPortal !== undefined ? data.targetPortal : '',
    chapAuthSession: data?.chapAuthSession !== undefined ? data.chapAuthSession : false,
    initiatorName: data?.initiatorName !== undefined ? data.initiatorName : '',
    iqn: data?.iqn !== undefined ? data.iqn : '',
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
    secretRef: data?.secretRef !== undefined ? data.secretRef : {},
    chapAuthDiscovery: data?.chapAuthDiscovery !== undefined ? data.chapAuthDiscovery : false,
    fsType: data?.fsType !== undefined ? data.fsType : '',
    lun: data?.lun !== undefined ? data.lun : 0,
  };
}
