/**
* ServiceAccountSubject holds detailed information for service-account-kind subject.
*/
export interface io_k8s_api_flowcontrol_v1_ServiceAccountSubject {
/**
* `name` is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required.
*/
name: string;
/**
* `namespace` is the namespace of matching ServiceAccount objects. Required.
*/
namespace: string;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_ServiceAccountSubject with default values
*/
export function createio_k8s_api_flowcontrol_v1_ServiceAccountSubject(data?: Partial<io_k8s_api_flowcontrol_v1_ServiceAccountSubject>): io_k8s_api_flowcontrol_v1_ServiceAccountSubject {
  return {
    name: data?.name !== undefined ? data.name : '',
    namespace: data?.namespace !== undefined ? data.namespace : '',
  };
}
