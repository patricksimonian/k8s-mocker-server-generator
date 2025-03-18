/**
* ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration
*/
export interface io_k8s_api_core_v1_ConfigMapNodeConfigSource {
/**
* Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
*/
name: string;
/**
* Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
*/
namespace: string;
/**
* ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
*/
resourceVersion?: string;
/**
* UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
*/
uid?: string;
/**
* KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
*/
kubeletConfigKey: string;
}

/**
* Create a new io_k8s_api_core_v1_ConfigMapNodeConfigSource with default values
*/
export function createio_k8s_api_core_v1_ConfigMapNodeConfigSource(data?: Partial<io_k8s_api_core_v1_ConfigMapNodeConfigSource>): io_k8s_api_core_v1_ConfigMapNodeConfigSource {
  return {
    name: data?.name !== undefined ? data.name : '',
    namespace: data?.namespace !== undefined ? data.namespace : '',
    resourceVersion: data?.resourceVersion !== undefined ? data.resourceVersion : '',
    uid: data?.uid !== undefined ? data.uid : '',
    kubeletConfigKey: data?.kubeletConfigKey !== undefined ? data.kubeletConfigKey : '',
  };
}
