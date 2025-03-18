/**
* ClientIPConfig represents the configurations of Client IP based session affinity.
* @resourceType clientipconfig
* @kind Clientipconfig
*/
export interface io_k8s_api_core_v1_ClientIPConfig {
/**
* timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
*/
timeoutSeconds?: number;
}

/**
* Create a new Clientipconfig with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ClientIPConfig instance with defaults applied
*/
export function createio_k8s_api_core_v1_ClientIPConfig(data?: Partial<io_k8s_api_core_v1_ClientIPConfig>): io_k8s_api_core_v1_ClientIPConfig {
 return {
   timeoutSeconds: data?.timeoutSeconds !== undefined ? data.timeoutSeconds : 0,
 };
}
