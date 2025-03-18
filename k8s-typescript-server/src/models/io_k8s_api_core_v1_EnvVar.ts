/**
* EnvVar represents an environment variable present in a Container.
*/
export interface io_k8s_api_core_v1_EnvVar {
/**
* Name of the environment variable. Must be a C_IDENTIFIER.
*/
name: string;
/**
* Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
*/
value?: string;
/**
* EnvVarSource represents a source for the value of an EnvVar.
*/
valueFrom?: { configMapKeyRef?: { key: string; name?: string; optional?: boolean }; fieldRef?: { apiVersion?: string; fieldPath: string }; resourceFieldRef?: { resource: string; containerName?: string; divisor?: string }; secretKeyRef?: { name?: string; optional?: boolean; key: string } };
}

/**
* Create a new io_k8s_api_core_v1_EnvVar with default values
*/
export function createio_k8s_api_core_v1_EnvVar(data?: Partial<io_k8s_api_core_v1_EnvVar>): io_k8s_api_core_v1_EnvVar {
  return {
    name: data?.name !== undefined ? data.name : '',
    value: data?.value !== undefined ? data.value : '',
    valueFrom: data?.valueFrom !== undefined ? data.valueFrom : {},
  };
}
