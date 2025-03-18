/**
* SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
*/
export interface io_k8s_api_authentication_v1_SelfSubjectReviewStatus {
/**
* UserInfo holds the information about the user needed to implement the user.Info interface.
*/
userInfo?: { groups?: string[]; uid?: string; username?: string; extra?: Record<string, any> };
}

/**
* Create a new io_k8s_api_authentication_v1_SelfSubjectReviewStatus with default values
*/
export function createio_k8s_api_authentication_v1_SelfSubjectReviewStatus(data?: Partial<io_k8s_api_authentication_v1_SelfSubjectReviewStatus>): io_k8s_api_authentication_v1_SelfSubjectReviewStatus {
  return {
    userInfo: data?.userInfo !== undefined ? data.userInfo : {},
  };
}
