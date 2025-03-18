/**
* EventSource contains information for an event.
*/
export interface io_k8s_api_core_v1_EventSource {
/**
* Component from which the event is generated.
*/
component?: string;
/**
* Node name on which the event is generated.
*/
host?: string;
}

/**
* Create a new io_k8s_api_core_v1_EventSource with default values
*/
export function createio_k8s_api_core_v1_EventSource(data?: Partial<io_k8s_api_core_v1_EventSource>): io_k8s_api_core_v1_EventSource {
  return {
    component: data?.component !== undefined ? data.component : '',
    host: data?.host !== undefined ? data.host : '',
  };
}
