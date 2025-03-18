/**
* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
*/
export interface io_k8s_api_authorization_v1_NonResourceAttributes {
/**
* Path is the URL path of the request
*/
path?: string;
/**
* Verb is the standard HTTP verb
*/
verb?: string;
}

/**
* Create a new io_k8s_api_authorization_v1_NonResourceAttributes with default values
*/
export function createio_k8s_api_authorization_v1_NonResourceAttributes(data?: Partial<io_k8s_api_authorization_v1_NonResourceAttributes>): io_k8s_api_authorization_v1_NonResourceAttributes {
  return {
    path: data?.path !== undefined ? data.path : '',
    verb: data?.verb !== undefined ? data.verb : '',
  };
}
