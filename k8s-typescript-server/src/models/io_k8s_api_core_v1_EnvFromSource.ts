/**
* EnvFromSource represents the source of a set of ConfigMaps
*/
export interface io_k8s_api_core_v1_EnvFromSource {
/**
* An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
*/
prefix?: string;
/**
* SecretEnvSource selects a Secret to populate the environment variables with.

The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
*/
secretRef?: { name?: string; optional?: boolean };
/**
* ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.

The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
*/
configMapRef?: { name?: string; optional?: boolean };
}

/**
* Create a new io_k8s_api_core_v1_EnvFromSource with default values
*/
export function createio_k8s_api_core_v1_EnvFromSource(data?: Partial<io_k8s_api_core_v1_EnvFromSource>): io_k8s_api_core_v1_EnvFromSource {
  return {
    prefix: data?.prefix !== undefined ? data.prefix : '',
    secretRef: data?.secretRef !== undefined ? data.secretRef : {},
    configMapRef: data?.configMapRef !== undefined ? data.configMapRef : {},
  };
}
