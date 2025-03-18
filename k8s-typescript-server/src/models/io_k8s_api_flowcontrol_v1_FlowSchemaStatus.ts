/**
* FlowSchemaStatus represents the current state of a FlowSchema.
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchemaStatus {
/**
* `conditions` is a list of the current states of FlowSchema.
*/
conditions?: Array<{ type?: string; lastTransitionTime?: Date; message?: string; reason?: string; status?: string }>;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_FlowSchemaStatus with default values
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchemaStatus(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchemaStatus>): io_k8s_api_flowcontrol_v1_FlowSchemaStatus {
  return {
    conditions: data?.conditions !== undefined ? data.conditions : [],
  };
}
