/**
* EnvVarSource represents a source for the value of an EnvVar.
*/
export interface io_k8s_api_core_v1_EnvVarSource {
/**
* SecretKeySelector selects a key of a Secret.
*/
secretKeyRef?: { key: string; name?: string; optional?: boolean };
/**
* Selects a key from a ConfigMap.
*/
configMapKeyRef?: { optional?: boolean; key: string; name?: string };
/**
* ObjectFieldSelector selects an APIVersioned field of an object.
*/
fieldRef?: { apiVersion?: string; fieldPath: string };
/**
* ResourceFieldSelector represents container resources (cpu, memory) and their output format
*/
resourceFieldRef?: { containerName?: string; divisor?: string; resource: string };
}

/**
* Create a new io_k8s_api_core_v1_EnvVarSource with default values
*/
export function createio_k8s_api_core_v1_EnvVarSource(data?: Partial<io_k8s_api_core_v1_EnvVarSource>): io_k8s_api_core_v1_EnvVarSource {
  return {
    secretKeyRef: data?.secretKeyRef !== undefined ? data.secretKeyRef : { key: '' },
    configMapKeyRef: data?.configMapKeyRef !== undefined ? data.configMapKeyRef : { key: '' },
    fieldRef: data?.fieldRef !== undefined ? data.fieldRef : { fieldPath: '' },
    resourceFieldRef: data?.resourceFieldRef !== undefined ? data.resourceFieldRef : { resource: '' },
  };
}
