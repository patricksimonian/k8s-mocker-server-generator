/**
* Adapts a ConfigMap into a projected volume.

The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
*/
export interface io_k8s_api_core_v1_ConfigMapProjection {
/**
* items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
*/
items?: Array<{ key: string; mode?: number; path: string }>;
/**
* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
*/
name?: string;
/**
* optional specify whether the ConfigMap or its keys must be defined
*/
optional?: boolean;
}

/**
* Create a new io_k8s_api_core_v1_ConfigMapProjection with default values
*/
export function createio_k8s_api_core_v1_ConfigMapProjection(data?: Partial<io_k8s_api_core_v1_ConfigMapProjection>): io_k8s_api_core_v1_ConfigMapProjection {
  return {
    items: data?.items !== undefined ? data.items : [],
    name: data?.name !== undefined ? data.name : '',
    optional: data?.optional !== undefined ? data.optional : false,
  };
}
