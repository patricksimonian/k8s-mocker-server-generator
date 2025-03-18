/**
* Describe a container image
*/
export interface io_k8s_api_core_v1_ContainerImage {
/**
* Names by which this image is known. e.g. ["kubernetes.example/hyperkube:v1.0.7", "cloud-vendor.registry.example/cloud-vendor/hyperkube:v1.0.7"]
*/
names?: string[];
/**
* The size of the image in bytes.
*/
sizeBytes?: number;
}

/**
* Create a new io_k8s_api_core_v1_ContainerImage with default values
*/
export function createio_k8s_api_core_v1_ContainerImage(data?: Partial<io_k8s_api_core_v1_ContainerImage>): io_k8s_api_core_v1_ContainerImage {
  return {
    names: data?.names !== undefined ? data.names : [],
    sizeBytes: data?.sizeBytes !== undefined ? data.sizeBytes : 0,
  };
}
