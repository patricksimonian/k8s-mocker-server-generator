/**
* HTTPHeader describes a custom header to be used in HTTP probes
* @resourceType httpheader
* @kind Httpheader
*/
export interface io_k8s_api_core_v1_HTTPHeader {
/**
* The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
* @required
*/
name: string;
/**
* The header field value
* @required
*/
value: string;
}

/**
* Create a new Httpheader with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_HTTPHeader instance with defaults applied
*/
export function createio_k8s_api_core_v1_HTTPHeader(data?: Partial<io_k8s_api_core_v1_HTTPHeader>): io_k8s_api_core_v1_HTTPHeader {
 return {
   name: data?.name !== undefined ? data.name : '',
   value: data?.value !== undefined ? data.value : '',
 };
}
