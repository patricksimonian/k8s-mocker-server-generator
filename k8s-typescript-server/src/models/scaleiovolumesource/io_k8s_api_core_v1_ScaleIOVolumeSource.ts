/**
* ScaleIOVolumeSource represents a persistent ScaleIO volume
* @resourceType scaleiovolumesource
* @kind Scaleiovolumesource
*/
export interface io_k8s_api_core_v1_ScaleIOVolumeSource {
/**
* readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* sslEnabled Flag enable/disable SSL communication with Gateway, default false
*/
sslEnabled?: boolean;
/**
* storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
*/
storageMode?: string;
/**
* storagePool is the ScaleIO Storage Pool associated with the protection domain.
*/
storagePool?: string;
/**
* volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
*/
volumeName?: string;
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".
*/
fsType?: string;
/**
* gateway is the host address of the ScaleIO API Gateway.
* @required
*/
gateway: string;
/**
* protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
*/
protectionDomain?: string;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
* @required
* @isObject
*/
secretRef: { name?: string };
/**
* system is the name of the storage system as configured in ScaleIO.
* @required
*/
system: string;
}

/**
* Create a new Scaleiovolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ScaleIOVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ScaleIOVolumeSource(data?: Partial<io_k8s_api_core_v1_ScaleIOVolumeSource>): io_k8s_api_core_v1_ScaleIOVolumeSource {
 return {
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   sslEnabled: data?.sslEnabled !== undefined ? data.sslEnabled : false,
   storageMode: data?.storageMode !== undefined ? data.storageMode : '',
   storagePool: data?.storagePool !== undefined ? data.storagePool : '',
   volumeName: data?.volumeName !== undefined ? data.volumeName : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   gateway: data?.gateway !== undefined ? data.gateway : '',
   protectionDomain: data?.protectionDomain !== undefined ? data.protectionDomain : '',
   secretRef: data?.secretRef !== undefined ? data.secretRef : {},
   system: data?.system !== undefined ? data.system : '',
 };
}
