/**
* EnvFromSource represents the source of a set of ConfigMaps
* @resourceType envfromsource
* @kind Envfromsource
*/
export interface io_k8s_api_core_v1_EnvFromSource {
/**
* ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.

The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
* @isObject
*/
configMapRef?: { optional?: boolean; name?: string };
/**
* An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
*/
prefix?: string;
/**
* SecretEnvSource selects a Secret to populate the environment variables with.

The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
* @isObject
*/
secretRef?: { name?: string; optional?: boolean };
}

/**
* Create a new Envfromsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EnvFromSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_EnvFromSource(data?: Partial<io_k8s_api_core_v1_EnvFromSource>): io_k8s_api_core_v1_EnvFromSource {
 return {
   configMapRef: data?.configMapRef !== undefined ? data.configMapRef : {},
   prefix: data?.prefix !== undefined ? data.prefix : '',
   secretRef: data?.secretRef !== undefined ? data.secretRef : {},
 };
}
