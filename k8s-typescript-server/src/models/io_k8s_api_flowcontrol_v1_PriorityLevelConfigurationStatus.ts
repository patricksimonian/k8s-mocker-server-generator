/**
* PriorityLevelConfigurationStatus represents the current state of a "request-priority".
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus {
/**
* `conditions` is the current state of "request-priority".
*/
conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status?: string; type?: string }>;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus with default values
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus>): io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus {
  return {
    conditions: data?.conditions !== undefined ? data.conditions : [],
  };
}
