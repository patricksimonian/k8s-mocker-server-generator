/**
* Endpoints is a collection of endpoints that implement the actual service. Example:

	 Name: "mysvc",
	 Subsets: [
	   {
	     Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
	     Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
	   },
	   {
	     Addresses: [{"ip": "10.10.3.3"}],
	     Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
	   },
	]
*/
export interface io_k8s_api_core_v1_Endpoints {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { resourceVersion?: string; annotations?: Record<string, any>; generation?: number; labels?: Record<string, any>; namespace?: string; selfLink?: string; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; uid?: string; creationTimestamp?: Date; finalizers?: string[]; deletionTimestamp?: Date; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }> };
/**
* The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
*/
subsets?: Array<{ addresses?: Array<{ nodeName?: string; targetRef?: { kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string }; hostname?: string; ip: string }>; notReadyAddresses?: Array<{ targetRef?: { apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string }; hostname?: string; ip: string; nodeName?: string }>; ports?: Array<{ appProtocol?: string; name?: string; port: number; protocol?: 'SCTP' | 'TCP' | 'UDP' }> }>;
}

/**
* Create a new io_k8s_api_core_v1_Endpoints with default values
*/
export function createio_k8s_api_core_v1_Endpoints(data?: Partial<io_k8s_api_core_v1_Endpoints>): io_k8s_api_core_v1_Endpoints {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    subsets: data?.subsets !== undefined ? data.subsets : [],
  };
}
