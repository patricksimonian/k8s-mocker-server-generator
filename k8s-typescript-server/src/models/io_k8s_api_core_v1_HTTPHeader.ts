/**
* HTTPHeader describes a custom header to be used in HTTP probes
*/
export interface io_k8s_api_core_v1_HTTPHeader {
/**
* The header field value
*/
value: string;
/**
* The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
*/
name: string;
}

/**
* Create a new io_k8s_api_core_v1_HTTPHeader with default values
*/
export function createio_k8s_api_core_v1_HTTPHeader(data?: Partial<io_k8s_api_core_v1_HTTPHeader>): io_k8s_api_core_v1_HTTPHeader {
  return {
    value: data?.value !== undefined ? data.value : '',
    name: data?.name !== undefined ? data.name : '',
  };
}
