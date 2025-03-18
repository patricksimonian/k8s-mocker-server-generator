/**
* WindowsSecurityContextOptions contain Windows-specific options and credentials.
*/
export interface io_k8s_api_core_v1_WindowsSecurityContextOptions {
/**
* GMSACredentialSpecName is the name of the GMSA credential spec to use.
*/
gmsaCredentialSpecName?: string;
/**
* HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
*/
hostProcess?: boolean;
/**
* The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
*/
runAsUserName?: string;
/**
* GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
*/
gmsaCredentialSpec?: string;
}

/**
* Create a new io_k8s_api_core_v1_WindowsSecurityContextOptions with default values
*/
export function createio_k8s_api_core_v1_WindowsSecurityContextOptions(data?: Partial<io_k8s_api_core_v1_WindowsSecurityContextOptions>): io_k8s_api_core_v1_WindowsSecurityContextOptions {
  return {
    gmsaCredentialSpecName: data?.gmsaCredentialSpecName !== undefined ? data.gmsaCredentialSpecName : '',
    hostProcess: data?.hostProcess !== undefined ? data.hostProcess : false,
    runAsUserName: data?.runAsUserName !== undefined ? data.runAsUserName : '',
    gmsaCredentialSpec: data?.gmsaCredentialSpec !== undefined ? data.gmsaCredentialSpec : '',
  };
}
