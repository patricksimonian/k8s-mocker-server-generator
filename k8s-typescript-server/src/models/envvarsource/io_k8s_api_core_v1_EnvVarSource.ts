/**
* EnvVarSource represents a source for the value of an EnvVar.
* @resourceType envvarsource
* @kind Envvarsource
*/
export interface io_k8s_api_core_v1_EnvVarSource {
/**
* Selects a key from a ConfigMap.
* @isObject
*/
configMapKeyRef?: { key: string; name?: string; optional?: boolean };
/**
* ObjectFieldSelector selects an APIVersioned field of an object.
* @isObject
*/
fieldRef?: { apiVersion?: string; fieldPath: string };
/**
* ResourceFieldSelector represents container resources (cpu, memory) and their output format
* @isObject
*/
resourceFieldRef?: { containerName?: string; divisor?: string; resource: string };
/**
* SecretKeySelector selects a key of a Secret.
* @isObject
*/
secretKeyRef?: { key: string; name?: string; optional?: boolean };
}

/**
* Create a new Envvarsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EnvVarSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_EnvVarSource(data?: Partial<io_k8s_api_core_v1_EnvVarSource>): io_k8s_api_core_v1_EnvVarSource {
 return {
   configMapKeyRef: data?.configMapKeyRef !== undefined ? data.configMapKeyRef : { key: '' },
   fieldRef: data?.fieldRef !== undefined ? data.fieldRef : { fieldPath: '' },
   resourceFieldRef: data?.resourceFieldRef !== undefined ? data.resourceFieldRef : { resource: '' },
   secretKeyRef: data?.secretKeyRef !== undefined ? data.secretKeyRef : { key: '' },
 };
}
