/**
* EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:

	{
	  Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
	  Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
	}

The resulting set of endpoints can be viewed as:

	a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
	b: [ 10.10.1.1:309, 10.10.2.2:309 ]
*/
export interface io_k8s_api_core_v1_EndpointSubset {
/**
* IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
*/
addresses?: Array<{ hostname?: string; ip: string; nodeName?: string; targetRef?: { apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string } }>;
/**
* IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
*/
notReadyAddresses?: Array<{ hostname?: string; ip: string; nodeName?: string; targetRef?: { fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string } }>;
/**
* Port numbers available on the related IP addresses.
*/
ports?: Array<{ protocol?: 'SCTP' | 'TCP' | 'UDP'; appProtocol?: string; name?: string; port: number }>;
}

/**
* Create a new io_k8s_api_core_v1_EndpointSubset with default values
*/
export function createio_k8s_api_core_v1_EndpointSubset(data?: Partial<io_k8s_api_core_v1_EndpointSubset>): io_k8s_api_core_v1_EndpointSubset {
  return {
    addresses: data?.addresses !== undefined ? data.addresses : [],
    notReadyAddresses: data?.notReadyAddresses !== undefined ? data.notReadyAddresses : [],
    ports: data?.ports !== undefined ? data.ports : [],
  };
}
