/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
* @resourceType intorstring
* @kind Intorstring
*/
export interface io_k8s_apimachinery_pkg_util_intstr_IntOrString {
}

/**
* Create a new Intorstring with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_util_intstr_IntOrString instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_util_intstr_IntOrString(data?: Partial<io_k8s_apimachinery_pkg_util_intstr_IntOrString>): io_k8s_apimachinery_pkg_util_intstr_IntOrString {
 return {
 };
}
