/**
* PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference {
/**
* `name` is the name of the priority level configuration being referenced Required.
*/
name: string;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference with default values
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference>): io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference {
  return {
    name: data?.name !== undefined ? data.name : '',
  };
}
