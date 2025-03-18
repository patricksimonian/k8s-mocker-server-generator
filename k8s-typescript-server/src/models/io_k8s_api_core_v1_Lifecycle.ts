/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
*/
export interface io_k8s_api_core_v1_Lifecycle {
/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
*/
postStart?: { exec?: { command?: string[] }; httpGet?: { httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS'; host?: string }; sleep?: { seconds: number }; tcpSocket?: { host?: string; port: string } };
/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
*/
preStop?: { tcpSocket?: { host?: string; port: string }; exec?: { command?: string[] }; httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; sleep?: { seconds: number } };
}

/**
* Create a new io_k8s_api_core_v1_Lifecycle with default values
*/
export function createio_k8s_api_core_v1_Lifecycle(data?: Partial<io_k8s_api_core_v1_Lifecycle>): io_k8s_api_core_v1_Lifecycle {
  return {
    postStart: data?.postStart !== undefined ? data.postStart : {},
    preStop: data?.preStop !== undefined ? data.preStop : {},
  };
}
