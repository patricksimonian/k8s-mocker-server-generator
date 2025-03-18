/**
* EndpointConditions represents the current condition of an endpoint.
*/
export interface io_k8s_api_discovery_v1_EndpointConditions {
/**
* ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be "true" for terminating endpoints, except when the normal readiness behavior is being explicitly overridden, for example when the associated Service has set the publishNotReadyAddresses flag.
*/
ready?: boolean;
/**
* serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition.
*/
serving?: boolean;
/**
* terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating.
*/
terminating?: boolean;
}

/**
* Create a new io_k8s_api_discovery_v1_EndpointConditions with default values
*/
export function createio_k8s_api_discovery_v1_EndpointConditions(data?: Partial<io_k8s_api_discovery_v1_EndpointConditions>): io_k8s_api_discovery_v1_EndpointConditions {
  return {
    ready: data?.ready !== undefined ? data.ready : false,
    serving: data?.serving !== undefined ? data.serving : false,
    terminating: data?.terminating !== undefined ? data.terminating : false,
  };
}
