/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
* @resourceType lifecyclehandler
* @kind Lifecyclehandler
*/
export interface io_k8s_api_core_v1_LifecycleHandler {
/**
* TCPSocketAction describes an action based on opening a socket
* @isObject
*/
tcpSocket?: { host?: string; port: string };
/**
* ExecAction describes a "run in container" action.
* @isObject
*/
exec?: { command?: string[] };
/**
* HTTPGetAction describes an action based on HTTP Get requests.
* @isObject
*/
httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' };
/**
* SleepAction describes a "sleep" action.
* @isObject
*/
sleep?: { seconds: number };
}

/**
* Create a new Lifecyclehandler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LifecycleHandler instance with defaults applied
*/
export function createio_k8s_api_core_v1_LifecycleHandler(data?: Partial<io_k8s_api_core_v1_LifecycleHandler>): io_k8s_api_core_v1_LifecycleHandler {
 return {
   tcpSocket: data?.tcpSocket !== undefined ? data.tcpSocket : { port: '' },
   exec: data?.exec !== undefined ? data.exec : {},
   httpGet: data?.httpGet !== undefined ? data.httpGet : { port: '' },
   sleep: data?.sleep !== undefined ? data.sleep : { seconds: 0 },
 };
}
