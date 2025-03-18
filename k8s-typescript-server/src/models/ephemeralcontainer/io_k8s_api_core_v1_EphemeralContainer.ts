/**
* An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.

To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
* @resourceType ephemeralcontainer
* @kind Ephemeralcontainer
*/
export interface io_k8s_api_core_v1_EphemeralContainer {
/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
* @isObject
*/
lifecycle?: { postStart?: { exec?: { command?: string[] }; httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; sleep?: { seconds: number }; tcpSocket?: { port: string; host?: string } }; preStop?: { tcpSocket?: { host?: string; port: string }; exec?: { command?: string[] }; httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; sleep?: { seconds: number } } };
/**
* Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
*/
stdinOnce?: boolean;
/**
* Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
*/
workingDir?: string;
/**
* Entrypoint array. Not executed within a shell. The image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
command?: string[];
/**
* Resources resize policy for the container.
* @isArray
*/
resizePolicy?: Array<{ resourceName: string; restartPolicy: string }>;
/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @isObject
*/
startupProbe?: { failureThreshold?: number; grpc?: { service?: string; port: number }; httpGet?: { httpHeaders?: Array<{ value: string; name: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS'; host?: string }; periodSeconds?: number; timeoutSeconds?: number; exec?: { command?: string[] }; initialDelaySeconds?: number; successThreshold?: number; tcpSocket?: { host?: string; port: string }; terminationGracePeriodSeconds?: number };
/**
* volumeDevices is the list of block devices to be used by the container.
* @isArray
*/
volumeDevices?: Array<{ devicePath: string; name: string }>;
/**
* Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated.
* @isArray
*/
volumeMounts?: Array<{ subPathExpr?: string; mountPath: string; mountPropagation?: 'Bidirectional' | 'HostToContainer' | 'None'; name: string; readOnly?: boolean; recursiveReadOnly?: string; subPath?: string }>;
/**
* Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
*/
stdin?: boolean;
/**
* If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.

The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
*/
targetContainerName?: string;
/**
* Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
*/
tty?: boolean;
/**
* Arguments to the entrypoint. The image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
args?: string[];
/**
* List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
* @isArray
*/
envFrom?: Array<{ configMapRef?: { name?: string; optional?: boolean }; prefix?: string; secretRef?: { name?: string; optional?: boolean } }>;
/**
* Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images

Possible enum values:
 - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
 - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
 - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
*/
imagePullPolicy?: 'Always' | 'IfNotPresent' | 'Never';
/**
* Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.
* @required
*/
name: string;
/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @isObject
*/
readinessProbe?: { exec?: { command?: string[] }; grpc?: { port: number; service?: string }; initialDelaySeconds?: number; successThreshold?: number; tcpSocket?: { host?: string; port: string }; terminationGracePeriodSeconds?: number; failureThreshold?: number; httpGet?: { httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS'; host?: string }; periodSeconds?: number; timeoutSeconds?: number };
/**
* Restart policy for the container to manage the restart behavior of each container within a pod. This may only be set for init containers. You cannot set this field on ephemeral containers.
*/
restartPolicy?: string;
/**
* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
* @isObject
*/
securityContext?: { procMount?: 'Default' | 'Unmasked'; readOnlyRootFilesystem?: boolean; runAsNonRoot?: boolean; runAsUser?: number; seLinuxOptions?: { role?: string; type?: string; user?: string; level?: string }; capabilities?: { add?: string[]; drop?: string[] }; privileged?: boolean; runAsGroup?: number; seccompProfile?: { localhostProfile?: string; type: 'Localhost' | 'RuntimeDefault' | 'Unconfined' }; windowsOptions?: { runAsUserName?: string; gmsaCredentialSpec?: string; gmsaCredentialSpecName?: string; hostProcess?: boolean }; allowPrivilegeEscalation?: boolean; appArmorProfile?: { localhostProfile?: string; type: 'Localhost' | 'RuntimeDefault' | 'Unconfined' } };
/**
* Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
*/
terminationMessagePath?: string;
/**
* List of environment variables to set in the container. Cannot be updated.
* @isArray
*/
env?: Array<{ value?: string; valueFrom?: { configMapKeyRef?: { name?: string; optional?: boolean; key: string }; fieldRef?: { apiVersion?: string; fieldPath: string }; resourceFieldRef?: { resource: string; containerName?: string; divisor?: string }; secretKeyRef?: { key: string; name?: string; optional?: boolean } }; name: string }>;
/**
* Container image name. More info: https://kubernetes.io/docs/concepts/containers/images
*/
image?: string;
/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @isObject
*/
livenessProbe?: { failureThreshold?: number; httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; initialDelaySeconds?: number; timeoutSeconds?: number; terminationGracePeriodSeconds?: number; exec?: { command?: string[] }; grpc?: { port: number; service?: string }; periodSeconds?: number; successThreshold?: number; tcpSocket?: { host?: string; port: string } };
/**
* Ports are not allowed for ephemeral containers.
* @isArray
*/
ports?: Array<{ containerPort: number; hostIP?: string; hostPort?: number; name?: string; protocol?: 'SCTP' | 'TCP' | 'UDP' }>;
/**
* ResourceRequirements describes the compute resource requirements.
* @isObject
*/
resources?: { claims?: Array<{ name: string; request?: string }>; limits?: Record<string, any>; requests?: Record<string, any> };
/**
* Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.

Possible enum values:
 - `"FallbackToLogsOnError"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.
 - `"File"` is the default behavior and will set the container status message to the contents of the container's terminationMessagePath when the container exits.
*/
terminationMessagePolicy?: 'FallbackToLogsOnError' | 'File';
}

/**
* Create a new Ephemeralcontainer with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EphemeralContainer instance with defaults applied
*/
export function createio_k8s_api_core_v1_EphemeralContainer(data?: Partial<io_k8s_api_core_v1_EphemeralContainer>): io_k8s_api_core_v1_EphemeralContainer {
 return {
   lifecycle: data?.lifecycle !== undefined ? data.lifecycle : {},
   stdinOnce: data?.stdinOnce !== undefined ? data.stdinOnce : false,
   workingDir: data?.workingDir !== undefined ? data.workingDir : '',
   command: data?.command !== undefined ? data.command : [],
   resizePolicy: data?.resizePolicy !== undefined ? data.resizePolicy : [],
   startupProbe: data?.startupProbe !== undefined ? data.startupProbe : {},
   volumeDevices: data?.volumeDevices !== undefined ? data.volumeDevices : [],
   volumeMounts: data?.volumeMounts !== undefined ? data.volumeMounts : [],
   stdin: data?.stdin !== undefined ? data.stdin : false,
   targetContainerName: data?.targetContainerName !== undefined ? data.targetContainerName : '',
   tty: data?.tty !== undefined ? data.tty : false,
   args: data?.args !== undefined ? data.args : [],
   envFrom: data?.envFrom !== undefined ? data.envFrom : [],
   imagePullPolicy: data?.imagePullPolicy !== undefined ? data.imagePullPolicy : '',
   name: data?.name !== undefined ? data.name : '',
   readinessProbe: data?.readinessProbe !== undefined ? data.readinessProbe : {},
   restartPolicy: data?.restartPolicy !== undefined ? data.restartPolicy : '',
   securityContext: data?.securityContext !== undefined ? data.securityContext : {},
   terminationMessagePath: data?.terminationMessagePath !== undefined ? data.terminationMessagePath : '',
   env: data?.env !== undefined ? data.env : [],
   image: data?.image !== undefined ? data.image : '',
   livenessProbe: data?.livenessProbe !== undefined ? data.livenessProbe : {},
   ports: data?.ports !== undefined ? data.ports : [],
   resources: data?.resources !== undefined ? data.resources : {},
   terminationMessagePolicy: data?.terminationMessagePolicy !== undefined ? data.terminationMessagePolicy : '',
 };
}
