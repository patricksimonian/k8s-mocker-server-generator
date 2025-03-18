/**
* ClientIPConfig represents the configurations of Client IP based session affinity.
*/
export interface io_k8s_api_core_v1_ClientIPConfig {
/**
* timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
*/
timeoutSeconds?: number;
}

/**
* Create a new io_k8s_api_core_v1_ClientIPConfig with default values
*/
export function createio_k8s_api_core_v1_ClientIPConfig(data?: Partial<io_k8s_api_core_v1_ClientIPConfig>): io_k8s_api_core_v1_ClientIPConfig {
  return {
    timeoutSeconds: data?.timeoutSeconds !== undefined ? data.timeoutSeconds : 0,
  };
}
