/**
* AppArmorProfile defines a pod or container's AppArmor settings.
* @resourceType apparmorprofile
* @kind Apparmorprofile
*/
export interface io_k8s_api_core_v1_AppArmorProfile {
/**
* type indicates which kind of AppArmor profile will be applied. Valid options are:
  Localhost - a profile pre-loaded on the node.
  RuntimeDefault - the container runtime's default profile.
  Unconfined - no AppArmor enforcement.

Possible enum values:
 - `"Localhost"` indicates that a profile pre-loaded on the node should be used.
 - `"RuntimeDefault"` indicates that the container runtime's default AppArmor profile should be used.
 - `"Unconfined"` indicates that no AppArmor profile should be enforced.
* @required
*/
type: 'Localhost' | 'RuntimeDefault' | 'Unconfined';
/**
* localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is "Localhost".
*/
localhostProfile?: string;
}

/**
* Create a new Apparmorprofile with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_AppArmorProfile instance with defaults applied
*/
export function createio_k8s_api_core_v1_AppArmorProfile(data?: Partial<io_k8s_api_core_v1_AppArmorProfile>): io_k8s_api_core_v1_AppArmorProfile {
 return {
   type: data?.type !== undefined ? data.type : '',
   localhostProfile: data?.localhostProfile !== undefined ? data.localhostProfile : '',
 };
}
