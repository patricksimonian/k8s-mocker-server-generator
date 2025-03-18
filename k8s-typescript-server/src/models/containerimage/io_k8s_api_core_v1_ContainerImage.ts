/**
* Describe a container image
* @resourceType containerimage
* @kind Containerimage
*/
export interface io_k8s_api_core_v1_ContainerImage {
/**
* Names by which this image is known. e.g. ["kubernetes.example/hyperkube:v1.0.7", "cloud-vendor.registry.example/cloud-vendor/hyperkube:v1.0.7"]
* @isArray
*/
names?: string[];
/**
* The size of the image in bytes.
*/
sizeBytes?: number;
}

/**
* Create a new Containerimage with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerImage instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerImage(data?: Partial<io_k8s_api_core_v1_ContainerImage>): io_k8s_api_core_v1_ContainerImage {
 return {
   names: data?.names !== undefined ? data.names : [],
   sizeBytes: data?.sizeBytes !== undefined ? data.sizeBytes : 0,
 };
}
