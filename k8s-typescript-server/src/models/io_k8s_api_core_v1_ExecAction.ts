/**
* ExecAction describes a "run in container" action.
*/
export interface io_k8s_api_core_v1_ExecAction {
/**
* Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
*/
command?: string[];
}

/**
* Create a new io_k8s_api_core_v1_ExecAction with default values
*/
export function createio_k8s_api_core_v1_ExecAction(data?: Partial<io_k8s_api_core_v1_ExecAction>): io_k8s_api_core_v1_ExecAction {
  return {
    command: data?.command !== undefined ? data.command : [],
  };
}
