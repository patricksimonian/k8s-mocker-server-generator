/**
* ModifyVolumeStatus represents the status object of ControllerModifyVolume operation
*/
export interface io_k8s_api_core_v1_ModifyVolumeStatus {
/**
* status is the status of the ControllerModifyVolume operation. It can be in any of following states:
 - Pending
   Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as
   the specified VolumeAttributesClass not existing.
 - InProgress
   InProgress indicates that the volume is being modified.
 - Infeasible
  Infeasible indicates that the request has been rejected as invalid by the CSI driver. To
	  resolve the error, a valid VolumeAttributesClass needs to be specified.
Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.

Possible enum values:
 - `"InProgress"` InProgress indicates that the volume is being modified
 - `"Infeasible"` Infeasible indicates that the request has been rejected as invalid by the CSI driver. To resolve the error, a valid VolumeAttributesClass needs to be specified
 - `"Pending"` Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as the specified VolumeAttributesClass not existing
*/
status: 'InProgress' | 'Infeasible' | 'Pending';
/**
* targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
*/
targetVolumeAttributesClassName?: string;
}

/**
* Create a new io_k8s_api_core_v1_ModifyVolumeStatus with default values
*/
export function createio_k8s_api_core_v1_ModifyVolumeStatus(data?: Partial<io_k8s_api_core_v1_ModifyVolumeStatus>): io_k8s_api_core_v1_ModifyVolumeStatus {
  return {
    status: data?.status !== undefined ? data.status : '',
    targetVolumeAttributesClassName: data?.targetVolumeAttributesClassName !== undefined ? data.targetVolumeAttributesClassName : '',
  };
}
