/**
* ServiceBackendPort is the service port being referenced.
*/
export interface io_k8s_api_networking_v1_ServiceBackendPort {
/**
* name is the name of the port on the Service. This is a mutually exclusive setting with "Number".
*/
name?: string;
/**
* number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".
*/
number?: number;
}

/**
* Create a new io_k8s_api_networking_v1_ServiceBackendPort with default values
*/
export function createio_k8s_api_networking_v1_ServiceBackendPort(data?: Partial<io_k8s_api_networking_v1_ServiceBackendPort>): io_k8s_api_networking_v1_ServiceBackendPort {
  return {
    name: data?.name !== undefined ? data.name : '',
    number: data?.number !== undefined ? data.number : 0,
  };
}
