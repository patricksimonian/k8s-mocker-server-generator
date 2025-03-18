/**
* SessionAffinityConfig represents the configurations of session affinity.
*/
export interface io_k8s_api_core_v1_SessionAffinityConfig {
/**
* ClientIPConfig represents the configurations of Client IP based session affinity.
*/
clientIP?: { timeoutSeconds?: number };
}

/**
* Create a new io_k8s_api_core_v1_SessionAffinityConfig with default values
*/
export function createio_k8s_api_core_v1_SessionAffinityConfig(data?: Partial<io_k8s_api_core_v1_SessionAffinityConfig>): io_k8s_api_core_v1_SessionAffinityConfig {
  return {
    clientIP: data?.clientIP !== undefined ? data.clientIP : {},
  };
}
