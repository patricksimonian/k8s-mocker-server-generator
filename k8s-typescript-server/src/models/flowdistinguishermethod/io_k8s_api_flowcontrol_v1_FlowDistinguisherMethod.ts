/**
* FlowDistinguisherMethod specifies the method of a flow distinguisher.
* @resourceType flowdistinguishermethod
* @kind Flowdistinguishermethod
*/
export interface io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod {
/**
* `type` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.
* @required
*/
type: string;
}

/**
* Create a new Flowdistinguishermethod with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_FlowDistinguisherMethod(data?: Partial<io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod>): io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod {
 return {
   type: data?.type !== undefined ? data.type : '',
 };
}
