/**
* PodResourceClaimStatus is stored in the PodStatus for each PodResourceClaim which references a ResourceClaimTemplate. It stores the generated name for the corresponding ResourceClaim.
*/
export interface io_k8s_api_core_v1_PodResourceClaimStatus {
/**
* Name uniquely identifies this resource claim inside the pod. This must match the name of an entry in pod.spec.resourceClaims, which implies that the string must be a DNS_LABEL.
*/
name: string;
/**
* ResourceClaimName is the name of the ResourceClaim that was generated for the Pod in the namespace of the Pod. If this is unset, then generating a ResourceClaim was not necessary. The pod.spec.resourceClaims entry can be ignored in this case.
*/
resourceClaimName?: string;
}

/**
* Create a new io_k8s_api_core_v1_PodResourceClaimStatus with default values
*/
export function createio_k8s_api_core_v1_PodResourceClaimStatus(data?: Partial<io_k8s_api_core_v1_PodResourceClaimStatus>): io_k8s_api_core_v1_PodResourceClaimStatus {
  return {
    name: data?.name !== undefined ? data.name : '',
    resourceClaimName: data?.resourceClaimName !== undefined ? data.resourceClaimName : '',
  };
}
