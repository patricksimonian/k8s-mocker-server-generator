/**
* FlowDistinguisherMethod specifies the method of a flow distinguisher.
*/
export interface io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod {
/**
* `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.
*/
type: string;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod with default values
*/
export function createio_k8s_api_flowcontrol_v1_FlowDistinguisherMethod(data?: Partial<io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod>): io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod {
  return {
    type: data?.type !== undefined ? data.type : '',
  };
}
