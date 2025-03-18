/**
* ObjectFieldSelector selects an APIVersioned field of an object.
*/
export interface io_k8s_api_core_v1_ObjectFieldSelector {
/**
* Version of the schema the FieldPath is written in terms of, defaults to "v1".
*/
apiVersion?: string;
/**
* Path of the field to select in the specified API version.
*/
fieldPath: string;
}

/**
* Create a new io_k8s_api_core_v1_ObjectFieldSelector with default values
*/
export function createio_k8s_api_core_v1_ObjectFieldSelector(data?: Partial<io_k8s_api_core_v1_ObjectFieldSelector>): io_k8s_api_core_v1_ObjectFieldSelector {
  return {
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    fieldPath: data?.fieldPath !== undefined ? data.fieldPath : '',
  };
}
