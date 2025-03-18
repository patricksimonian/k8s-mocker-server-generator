/**
* GRPCAction specifies an action involving a GRPC service.
*/
export interface io_k8s_api_core_v1_GRPCAction {
/**
* Port number of the gRPC service. Number must be in the range 1 to 65535.
*/
port: number;
/**
* Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).

If this is not specified, the default behavior is defined by gRPC.
*/
service?: string;
}

/**
* Create a new io_k8s_api_core_v1_GRPCAction with default values
*/
export function createio_k8s_api_core_v1_GRPCAction(data?: Partial<io_k8s_api_core_v1_GRPCAction>): io_k8s_api_core_v1_GRPCAction {
  return {
    port: data?.port !== undefined ? data.port : 0,
    service: data?.service !== undefined ? data.service : '',
  };
}
