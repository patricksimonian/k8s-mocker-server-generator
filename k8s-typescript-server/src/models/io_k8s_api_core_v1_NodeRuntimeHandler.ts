/**
* NodeRuntimeHandler is a set of runtime handler information.
*/
export interface io_k8s_api_core_v1_NodeRuntimeHandler {
/**
* NodeRuntimeHandlerFeatures is a set of features implemented by the runtime handler.
*/
features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean };
/**
* Runtime handler name. Empty for the default runtime handler.
*/
name?: string;
}

/**
* Create a new io_k8s_api_core_v1_NodeRuntimeHandler with default values
*/
export function createio_k8s_api_core_v1_NodeRuntimeHandler(data?: Partial<io_k8s_api_core_v1_NodeRuntimeHandler>): io_k8s_api_core_v1_NodeRuntimeHandler {
  return {
    features: data?.features !== undefined ? data.features : {},
    name: data?.name !== undefined ? data.name : '',
  };
}
