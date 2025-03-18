/**
* NodeRuntimeHandler is a set of runtime handler information.
* @resourceType noderuntimehandler
* @kind Noderuntimehandler
*/
export interface io_k8s_api_core_v1_NodeRuntimeHandler {
/**
* NodeRuntimeHandlerFeatures is a set of features implemented by the runtime handler.
* @isObject
*/
features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean };
/**
* Runtime handler name. Empty for the default runtime handler.
*/
name?: string;
}

/**
* Create a new Noderuntimehandler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeRuntimeHandler instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeRuntimeHandler(data?: Partial<io_k8s_api_core_v1_NodeRuntimeHandler>): io_k8s_api_core_v1_NodeRuntimeHandler {
 return {
   features: data?.features !== undefined ? data.features : {},
   name: data?.name !== undefined ? data.name : '',
 };
}
