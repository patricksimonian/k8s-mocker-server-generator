/**
* A single application container that you want to run within a pod.
* @resourceType container
* @kind Container
*/
export interface io_k8s_api_core_v1_Container {
/**
* List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
* @isArray
*/
envFrom?: Array<{ configMapRef?: { name?: string; optional?: boolean }; prefix?: string; secretRef?: { name?: string; optional?: boolean } }>;
/**
* Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
*/
image?: string;
/**
* Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images

Possible enum values:
 - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
 - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
 - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
*/
imagePullPolicy?: 'Always' | 'IfNotPresent' | 'Never';
/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @isObject
*/
readinessProbe?: { terminationGracePeriodSeconds?: number; exec?: { command?: string[] }; periodSeconds?: number; httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; initialDelaySeconds?: number; successThreshold?: number; tcpSocket?: { host?: string; port: string }; timeoutSeconds?: number; failureThreshold?: number; grpc?: { port: number; service?: string } };
/**
* RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is "Always". For non-init containers or when this field is not specified, the restart behavior is defined by the Pod's restart policy and the container type. Setting the RestartPolicy as "Always" for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy "Always" will be shut down. This lifecycle differs from normal init containers and is often referred to as a "sidecar" container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.
*/
restartPolicy?: string;
/**
* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
* @isObject
*/
securityContext?: { seLinuxOptions?: { user?: string; level?: string; role?: string; type?: string }; seccompProfile?: { localhostProfile?: string; type: 'Localhost' | 'RuntimeDefault' | 'Unconfined' }; windowsOptions?: { runAsUserName?: string; gmsaCredentialSpec?: string; gmsaCredentialSpecName?: string; hostProcess?: boolean }; appArmorProfile?: { localhostProfile?: string; type: 'Localhost' | 'RuntimeDefault' | 'Unconfined' }; capabilities?: { add?: string[]; drop?: string[] }; readOnlyRootFilesystem?: boolean; runAsNonRoot?: boolean; runAsUser?: number; allowPrivilegeEscalation?: boolean; privileged?: boolean; procMount?: 'Default' | 'Unmasked'; runAsGroup?: number };
/**
* Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
*/
stdin?: boolean;
/**
* Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
*/
stdinOnce?: boolean;
/**
* volumeDevices is the list of block devices to be used by the container.
* @isArray
*/
volumeDevices?: Array<{ devicePath: string; name: string }>;
/**
* Pod volumes to mount into the container's filesystem. Cannot be updated.
* @isArray
*/
volumeMounts?: Array<{ subPathExpr?: string; mountPath: string; mountPropagation?: 'Bidirectional' | 'HostToContainer' | 'None'; name: string; readOnly?: boolean; recursiveReadOnly?: string; subPath?: string }>;
/**
* Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
*/
workingDir?: string;
/**
* List of environment variables to set in the container. Cannot be updated.
* @isArray
*/
env?: Array<{ name: string; value?: string; valueFrom?: { configMapKeyRef?: { key: string; name?: string; optional?: boolean }; fieldRef?: { apiVersion?: string; fieldPath: string }; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string }; secretKeyRef?: { key: string; name?: string; optional?: boolean } } }>;
/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @isObject
*/
livenessProbe?: { timeoutSeconds?: number; exec?: { command?: string[] }; httpGet?: { host?: string; httpHeaders?: Array<{ value: string; name: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; periodSeconds?: number; tcpSocket?: { host?: string; port: string }; terminationGracePeriodSeconds?: number; failureThreshold?: number; grpc?: { port: number; service?: string }; initialDelaySeconds?: number; successThreshold?: number };
/**
* List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
* @isArray
*/
ports?: Array<{ protocol?: 'SCTP' | 'TCP' | 'UDP'; containerPort: number; hostIP?: string; hostPort?: number; name?: string }>;
/**
* Resources resize policy for the container.
* @isArray
*/
resizePolicy?: Array<{ resourceName: string; restartPolicy: string }>;
/**
* ResourceRequirements describes the compute resource requirements.
* @isObject
*/
resources?: { requests?: Record<string, any>; claims?: Array<{ name: string; request?: string }>; limits?: Record<string, any> };
/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @isObject
*/
startupProbe?: { terminationGracePeriodSeconds?: number; failureThreshold?: number; initialDelaySeconds?: number; httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; periodSeconds?: number; successThreshold?: number; tcpSocket?: { host?: string; port: string }; timeoutSeconds?: number; exec?: { command?: string[] }; grpc?: { port: number; service?: string } };
/**
* Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
args?: string[];
/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
* @isObject
*/
lifecycle?: { postStart?: { exec?: { command?: string[] }; httpGet?: { port: string; scheme?: 'HTTP' | 'HTTPS'; host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string }; sleep?: { seconds: number }; tcpSocket?: { host?: string; port: string } }; preStop?: { exec?: { command?: string[] }; httpGet?: { path?: string; port: string; scheme?: 'HTTP' | 'HTTPS'; host?: string; httpHeaders?: Array<{ name: string; value: string }> }; sleep?: { seconds: number }; tcpSocket?: { port: string; host?: string } } };
/**
* Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.

Possible enum values:
 - `"FallbackToLogsOnError"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.
 - `"File"` is the default behavior and will set the container status message to the contents of the container's terminationMessagePath when the container exits.
*/
terminationMessagePolicy?: 'FallbackToLogsOnError' | 'File';
/**
* Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
*/
tty?: boolean;
/**
* Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
command?: string[];
/**
* Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
* @required
*/
name: string;
/**
* Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
*/
terminationMessagePath?: string;
}

/**
* Create a new Container with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Container instance with defaults applied
*/
export function createio_k8s_api_core_v1_Container(data?: Partial<io_k8s_api_core_v1_Container>): io_k8s_api_core_v1_Container {
 return {
   envFrom: data?.envFrom !== undefined ? data.envFrom : [],
   image: data?.image !== undefined ? data.image : '',
   imagePullPolicy: data?.imagePullPolicy !== undefined ? data.imagePullPolicy : '',
   readinessProbe: data?.readinessProbe !== undefined ? data.readinessProbe : {},
   restartPolicy: data?.restartPolicy !== undefined ? data.restartPolicy : '',
   securityContext: data?.securityContext !== undefined ? data.securityContext : {},
   stdin: data?.stdin !== undefined ? data.stdin : false,
   stdinOnce: data?.stdinOnce !== undefined ? data.stdinOnce : false,
   volumeDevices: data?.volumeDevices !== undefined ? data.volumeDevices : [],
   volumeMounts: data?.volumeMounts !== undefined ? data.volumeMounts : [],
   workingDir: data?.workingDir !== undefined ? data.workingDir : '',
   env: data?.env !== undefined ? data.env : [],
   livenessProbe: data?.livenessProbe !== undefined ? data.livenessProbe : {},
   ports: data?.ports !== undefined ? data.ports : [],
   resizePolicy: data?.resizePolicy !== undefined ? data.resizePolicy : [],
   resources: data?.resources !== undefined ? data.resources : {},
   startupProbe: data?.startupProbe !== undefined ? data.startupProbe : {},
   args: data?.args !== undefined ? data.args : [],
   lifecycle: data?.lifecycle !== undefined ? data.lifecycle : {},
   terminationMessagePolicy: data?.terminationMessagePolicy !== undefined ? data.terminationMessagePolicy : '',
   tty: data?.tty !== undefined ? data.tty : false,
   command: data?.command !== undefined ? data.command : [],
   name: data?.name !== undefined ? data.name : '',
   terminationMessagePath: data?.terminationMessagePath !== undefined ? data.terminationMessagePath : '',
 };
}
