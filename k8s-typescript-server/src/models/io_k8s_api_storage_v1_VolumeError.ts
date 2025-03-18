/**
* VolumeError captures an error encountered during a volume operation.
*/
export interface io_k8s_api_storage_v1_VolumeError {
/**
* message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
*/
message?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
time?: Date;
}

/**
* Create a new io_k8s_api_storage_v1_VolumeError with default values
*/
export function createio_k8s_api_storage_v1_VolumeError(data?: Partial<io_k8s_api_storage_v1_VolumeError>): io_k8s_api_storage_v1_VolumeError {
  return {
    message: data?.message !== undefined ? data.message : '',
    time: data?.time !== undefined ? data.time : '',
  };
}
