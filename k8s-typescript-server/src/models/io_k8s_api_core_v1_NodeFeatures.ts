/**
* NodeFeatures describes the set of features implemented by the CRI implementation. The features contained in the NodeFeatures should depend only on the cri implementation independent of runtime handlers.
*/
export interface io_k8s_api_core_v1_NodeFeatures {
/**
* SupplementalGroupsPolicy is set to true if the runtime supports SupplementalGroupsPolicy and ContainerUser.
*/
supplementalGroupsPolicy?: boolean;
}

/**
* Create a new io_k8s_api_core_v1_NodeFeatures with default values
*/
export function createio_k8s_api_core_v1_NodeFeatures(data?: Partial<io_k8s_api_core_v1_NodeFeatures>): io_k8s_api_core_v1_NodeFeatures {
  return {
    supplementalGroupsPolicy: data?.supplementalGroupsPolicy !== undefined ? data.supplementalGroupsPolicy : false,
  };
}
