/**
* FlowSchemaStatus represents the current state of a FlowSchema.
* @resourceType flowschemastatus
* @kind Flowschemastatus
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchemaStatus {
/**
* `conditions` is a list of the current states of FlowSchema.
* @isArray
*/
conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status?: string; type?: string }>;
}

/**
* Create a new Flowschemastatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_FlowSchemaStatus instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchemaStatus(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchemaStatus>): io_k8s_api_flowcontrol_v1_FlowSchemaStatus {
 return {
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
