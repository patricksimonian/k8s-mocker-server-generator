/**
* SELinuxOptions are the labels to be applied to the container
*/
export interface io_k8s_api_core_v1_SELinuxOptions {
/**
* Level is SELinux level label that applies to the container.
*/
level?: string;
/**
* Role is a SELinux role label that applies to the container.
*/
role?: string;
/**
* Type is a SELinux type label that applies to the container.
*/
type?: string;
/**
* User is a SELinux user label that applies to the container.
*/
user?: string;
}

/**
* Create a new io_k8s_api_core_v1_SELinuxOptions with default values
*/
export function createio_k8s_api_core_v1_SELinuxOptions(data?: Partial<io_k8s_api_core_v1_SELinuxOptions>): io_k8s_api_core_v1_SELinuxOptions {
  return {
    level: data?.level !== undefined ? data.level : '',
    role: data?.role !== undefined ? data.role : '',
    type: data?.type !== undefined ? data.type : '',
    user: data?.user !== undefined ? data.user : '',
  };
}
