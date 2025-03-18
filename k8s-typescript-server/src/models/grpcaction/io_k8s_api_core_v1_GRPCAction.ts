/**
* GRPCAction specifies an action involving a GRPC service.
* @resourceType grpcaction
* @kind Grpcaction
*/
export interface io_k8s_api_core_v1_GRPCAction {
/**
* Port number of the gRPC service. Number must be in the range 1 to 65535.
* @required
*/
port: number;
/**
* Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).

If this is not specified, the default behavior is defined by gRPC.
*/
service?: string;
}

/**
* Create a new Grpcaction with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_GRPCAction instance with defaults applied
*/
export function createio_k8s_api_core_v1_GRPCAction(data?: Partial<io_k8s_api_core_v1_GRPCAction>): io_k8s_api_core_v1_GRPCAction {
 return {
   port: data?.port !== undefined ? data.port : 0,
   service: data?.service !== undefined ? data.service : '',
 };
}
