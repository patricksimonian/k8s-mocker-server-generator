/**
* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
*/
export interface io_k8s_api_core_v1_SecurityContext {
/**
* Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
*/
readOnlyRootFilesystem?: boolean;
/**
* The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
*/
runAsGroup?: number;
/**
* Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
*/
runAsNonRoot?: boolean;
/**
* SELinuxOptions are the labels to be applied to the container
*/
seLinuxOptions?: { role?: string; type?: string; user?: string; level?: string };
/**
* AppArmorProfile defines a pod or container's AppArmor settings.
*/
appArmorProfile?: { localhostProfile?: string; type: 'Localhost' | 'RuntimeDefault' | 'Unconfined' };
/**
* Adds and removes POSIX capabilities from running containers.
*/
capabilities?: { add?: string[]; drop?: string[] };
/**
* Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
*/
privileged?: boolean;
/**
* procMount denotes the type of proc mount to use for the containers. The default value is Default which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.

Possible enum values:
 - `"Default"` uses the container runtime defaults for readonly and masked paths for /proc. Most container runtimes mask certain paths in /proc to avoid accidental security exposure of special devices or information.
 - `"Unmasked"` bypasses the default masking behavior of the container runtime and ensures the newly created /proc the container stays in tact with no modifications.
*/
procMount?: 'Default' | 'Unmasked';
/**
* AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
*/
allowPrivilegeEscalation?: boolean;
/**
* The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
*/
runAsUser?: number;
/**
* SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.
*/
seccompProfile?: { localhostProfile?: string; type: 'Localhost' | 'RuntimeDefault' | 'Unconfined' };
/**
* WindowsSecurityContextOptions contain Windows-specific options and credentials.
*/
windowsOptions?: { gmsaCredentialSpec?: string; gmsaCredentialSpecName?: string; hostProcess?: boolean; runAsUserName?: string };
}

/**
* Create a new io_k8s_api_core_v1_SecurityContext with default values
*/
export function createio_k8s_api_core_v1_SecurityContext(data?: Partial<io_k8s_api_core_v1_SecurityContext>): io_k8s_api_core_v1_SecurityContext {
  return {
    readOnlyRootFilesystem: data?.readOnlyRootFilesystem !== undefined ? data.readOnlyRootFilesystem : false,
    runAsGroup: data?.runAsGroup !== undefined ? data.runAsGroup : 0,
    runAsNonRoot: data?.runAsNonRoot !== undefined ? data.runAsNonRoot : false,
    seLinuxOptions: data?.seLinuxOptions !== undefined ? data.seLinuxOptions : {},
    appArmorProfile: data?.appArmorProfile !== undefined ? data.appArmorProfile : { type: '' },
    capabilities: data?.capabilities !== undefined ? data.capabilities : {},
    privileged: data?.privileged !== undefined ? data.privileged : false,
    procMount: data?.procMount !== undefined ? data.procMount : '',
    allowPrivilegeEscalation: data?.allowPrivilegeEscalation !== undefined ? data.allowPrivilegeEscalation : false,
    runAsUser: data?.runAsUser !== undefined ? data.runAsUser : 0,
    seccompProfile: data?.seccompProfile !== undefined ? data.seccompProfile : { type: '' },
    windowsOptions: data?.windowsOptions !== undefined ? data.windowsOptions : {},
  };
}
