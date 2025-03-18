/**
* UserSubject holds detailed information for user-kind subject.
* @resourceType usersubject
* @kind Usersubject
*/
export interface io_k8s_api_flowcontrol_v1_UserSubject {
/**
* `name` is the username that matches, or "*" to match all usernames. Required.
* @required
*/
name: string;
}

/**
* Create a new Usersubject with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_UserSubject instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_UserSubject(data?: Partial<io_k8s_api_flowcontrol_v1_UserSubject>): io_k8s_api_flowcontrol_v1_UserSubject {
 return {
   name: data?.name !== undefined ? data.name : '',
 };
}
