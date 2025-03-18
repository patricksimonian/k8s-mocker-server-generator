/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
*/
export interface io_k8s_api_core_v1_LifecycleHandler {
/**
* ExecAction describes a "run in container" action.
*/
exec?: { command?: string[] };
/**
* HTTPGetAction describes an action based on HTTP Get requests.
*/
httpGet?: { port: string; scheme?: 'HTTP' | 'HTTPS'; host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string };
/**
* SleepAction describes a "sleep" action.
*/
sleep?: { seconds: number };
/**
* TCPSocketAction describes an action based on opening a socket
*/
tcpSocket?: { host?: string; port: string };
}

/**
* Create a new io_k8s_api_core_v1_LifecycleHandler with default values
*/
export function createio_k8s_api_core_v1_LifecycleHandler(data?: Partial<io_k8s_api_core_v1_LifecycleHandler>): io_k8s_api_core_v1_LifecycleHandler {
  return {
    exec: data?.exec !== undefined ? data.exec : {},
    httpGet: data?.httpGet !== undefined ? data.httpGet : { port: '' },
    sleep: data?.sleep !== undefined ? data.sleep : { seconds: 0 },
    tcpSocket: data?.tcpSocket !== undefined ? data.tcpSocket : { port: '' },
  };
}
