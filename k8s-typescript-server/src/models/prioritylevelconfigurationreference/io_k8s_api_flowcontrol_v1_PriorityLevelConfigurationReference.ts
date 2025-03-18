/**
* PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
* @resourceType prioritylevelconfigurationreference
* @kind Prioritylevelconfigurationreference
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference {
/**
* `name` is the name of the priority level configuration being referenced Required.
* @required
*/
name: string;
}

/**
* Create a new Prioritylevelconfigurationreference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference>): io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference {
 return {
   name: data?.name !== undefined ? data.name : '',
 };
}
