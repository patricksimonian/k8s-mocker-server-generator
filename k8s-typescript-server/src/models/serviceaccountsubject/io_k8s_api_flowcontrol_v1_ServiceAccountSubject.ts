/**
* ServiceAccountSubject holds detailed information for service-account-kind subject.
* @resourceType serviceaccountsubject
* @kind Serviceaccountsubject
*/
export interface io_k8s_api_flowcontrol_v1_ServiceAccountSubject {
/**
* `name` is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required.
* @required
*/
name: string;
/**
* `namespace` is the namespace of matching ServiceAccount objects. Required.
* @required
*/
namespace: string;
}

/**
* Create a new Serviceaccountsubject with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_ServiceAccountSubject instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_ServiceAccountSubject(data?: Partial<io_k8s_api_flowcontrol_v1_ServiceAccountSubject>): io_k8s_api_flowcontrol_v1_ServiceAccountSubject {
 return {
   name: data?.name !== undefined ? data.name : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
 };
}
