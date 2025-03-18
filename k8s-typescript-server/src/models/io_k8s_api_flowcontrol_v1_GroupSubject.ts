/**
* GroupSubject holds detailed information for group-kind subject.
*/
export interface io_k8s_api_flowcontrol_v1_GroupSubject {
/**
* name is the user group that matches, or "*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.
*/
name: string;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_GroupSubject with default values
*/
export function createio_k8s_api_flowcontrol_v1_GroupSubject(data?: Partial<io_k8s_api_flowcontrol_v1_GroupSubject>): io_k8s_api_flowcontrol_v1_GroupSubject {
  return {
    name: data?.name !== undefined ? data.name : '',
  };
}
