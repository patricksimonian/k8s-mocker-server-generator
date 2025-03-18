/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
*/
export interface io_k8s_api_core_v1_SecretReference {
/**
* name is unique within a namespace to reference a secret resource.
*/
name?: string;
/**
* namespace defines the space within which the secret name must be unique.
*/
namespace?: string;
}

/**
* Create a new io_k8s_api_core_v1_SecretReference with default values
*/
export function createio_k8s_api_core_v1_SecretReference(data?: Partial<io_k8s_api_core_v1_SecretReference>): io_k8s_api_core_v1_SecretReference {
  return {
    name: data?.name !== undefined ? data.name : '',
    namespace: data?.namespace !== undefined ? data.namespace : '',
  };
}
