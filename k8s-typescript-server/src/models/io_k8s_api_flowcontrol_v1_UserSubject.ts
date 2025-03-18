/**
* UserSubject holds detailed information for user-kind subject.
*/
export interface io_k8s_api_flowcontrol_v1_UserSubject {
/**
* `name` is the username that matches, or "*" to match all usernames. Required.
*/
name: string;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_UserSubject with default values
*/
export function createio_k8s_api_flowcontrol_v1_UserSubject(data?: Partial<io_k8s_api_flowcontrol_v1_UserSubject>): io_k8s_api_flowcontrol_v1_UserSubject {
  return {
    name: data?.name !== undefined ? data.name : '',
  };
}
