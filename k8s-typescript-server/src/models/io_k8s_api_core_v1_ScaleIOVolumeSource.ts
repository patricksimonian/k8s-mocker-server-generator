/**
* ScaleIOVolumeSource represents a persistent ScaleIO volume
*/
export interface io_k8s_api_core_v1_ScaleIOVolumeSource {
/**
* system is the name of the storage system as configured in ScaleIO.
*/
system: string;
/**
* volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
*/
volumeName?: string;
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".
*/
fsType?: string;
/**
* sslEnabled Flag enable/disable SSL communication with Gateway, default false
*/
sslEnabled?: boolean;
/**
* storagePool is the ScaleIO Storage Pool associated with the protection domain.
*/
storagePool?: string;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
*/
secretRef: { name?: string };
/**
* storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
*/
storageMode?: string;
/**
* gateway is the host address of the ScaleIO API Gateway.
*/
gateway: string;
/**
* protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
*/
protectionDomain?: string;
/**
* readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
}

/**
* Create a new io_k8s_api_core_v1_ScaleIOVolumeSource with default values
*/
export function createio_k8s_api_core_v1_ScaleIOVolumeSource(data?: Partial<io_k8s_api_core_v1_ScaleIOVolumeSource>): io_k8s_api_core_v1_ScaleIOVolumeSource {
  return {
    system: data?.system !== undefined ? data.system : '',
    volumeName: data?.volumeName !== undefined ? data.volumeName : '',
    fsType: data?.fsType !== undefined ? data.fsType : '',
    sslEnabled: data?.sslEnabled !== undefined ? data.sslEnabled : false,
    storagePool: data?.storagePool !== undefined ? data.storagePool : '',
    secretRef: data?.secretRef !== undefined ? data.secretRef : {},
    storageMode: data?.storageMode !== undefined ? data.storageMode : '',
    gateway: data?.gateway !== undefined ? data.gateway : '',
    protectionDomain: data?.protectionDomain !== undefined ? data.protectionDomain : '',
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
  };
}
