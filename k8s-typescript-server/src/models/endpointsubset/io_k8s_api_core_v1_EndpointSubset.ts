/**
* EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:

	{
	  Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
	  Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
	}

The resulting set of endpoints can be viewed as:

	a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
	b: [ 10.10.1.1:309, 10.10.2.2:309 ]
* @resourceType endpointsubset
* @kind Endpointsubset
*/
export interface io_k8s_api_core_v1_EndpointSubset {
/**
* IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
* @isArray
*/
notReadyAddresses?: Array<{ targetRef?: { namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string }; hostname?: string; ip: string; nodeName?: string }>;
/**
* Port numbers available on the related IP addresses.
* @isArray
*/
ports?: Array<{ appProtocol?: string; name?: string; port: number; protocol?: 'SCTP' | 'TCP' | 'UDP' }>;
/**
* IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
* @isArray
*/
addresses?: Array<{ ip: string; nodeName?: string; targetRef?: { apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string }; hostname?: string }>;
}

/**
* Create a new Endpointsubset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EndpointSubset instance with defaults applied
*/
export function createio_k8s_api_core_v1_EndpointSubset(data?: Partial<io_k8s_api_core_v1_EndpointSubset>): io_k8s_api_core_v1_EndpointSubset {
 return {
   notReadyAddresses: data?.notReadyAddresses !== undefined ? data.notReadyAddresses : [],
   ports: data?.ports !== undefined ? data.ports : [],
   addresses: data?.addresses !== undefined ? data.addresses : [],
 };
}
