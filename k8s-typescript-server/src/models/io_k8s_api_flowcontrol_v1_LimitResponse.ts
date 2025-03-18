/**
* LimitResponse defines how to handle requests that can not be executed right now.
*/
export interface io_k8s_api_flowcontrol_v1_LimitResponse {
/**
* QueuingConfiguration holds the configuration parameters for queuing
*/
queuing?: { handSize?: number; queueLengthLimit?: number; queues?: number };
/**
* `type` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.
*/
type: string;
}

/**
* Create a new io_k8s_api_flowcontrol_v1_LimitResponse with default values
*/
export function createio_k8s_api_flowcontrol_v1_LimitResponse(data?: Partial<io_k8s_api_flowcontrol_v1_LimitResponse>): io_k8s_api_flowcontrol_v1_LimitResponse {
  return {
    queuing: data?.queuing !== undefined ? data.queuing : {},
    type: data?.type !== undefined ? data.type : '',
  };
}
