/**
* Information about the condition of a component.
*/
export interface io_k8s_api_core_v1_ComponentCondition {
/**
* Condition error code for a component. For example, a health check error code.
*/
error?: string;
/**
* Message about the condition for a component. For example, information about a health check.
*/
message?: string;
/**
* Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown".
*/
status: string;
/**
* Type of condition for a component. Valid value: "Healthy"
*/
type: string;
}

/**
* Create a new io_k8s_api_core_v1_ComponentCondition with default values
*/
export function createio_k8s_api_core_v1_ComponentCondition(data?: Partial<io_k8s_api_core_v1_ComponentCondition>): io_k8s_api_core_v1_ComponentCondition {
  return {
    error: data?.error !== undefined ? data.error : '',
    message: data?.message !== undefined ? data.message : '',
    status: data?.status !== undefined ? data.status : '',
    type: data?.type !== undefined ? data.type : '',
  };
}
