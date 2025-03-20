/**
* DeploymentSpec is the specification of the desired behavior of the Deployment.
* @resourceType deploymentspec
* @kind Deploymentspec
*/
export interface io_k8s_api_apps_v1_DeploymentSpec {
/**
* DeploymentStrategy describes how to replace existing pods with new ones.
* @isObject
*/
strategy?: { type?: 'Recreate' | 'RollingUpdate'; rollingUpdate?: { maxSurge?: string; maxUnavailable?: string } };
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @required
* @isObject
*/
template: { metadata?: { creationTimestamp?: Date; deletionGracePeriodSeconds?: number; namespace?: string; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; generation?: number; labels?: Record<string, any>; name?: string; generateName?: string; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; selfLink?: string }; spec?: Record<string, any> };
/**
* Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
*/
minReadySeconds?: number;
/**
* Indicates that the deployment is paused.
*/
paused?: boolean;
/**
* The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
*/
progressDeadlineSeconds?: number;
/**
* Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
*/
replicas?: number;
/**
* The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
*/
revisionHistoryLimit?: number;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @required
* @isObject
*/
selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
}

/**
* Create a new Deploymentspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DeploymentSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DeploymentSpec(data?: Partial<io_k8s_api_apps_v1_DeploymentSpec>): io_k8s_api_apps_v1_DeploymentSpec {
 return {
   strategy: data?.strategy !== undefined ? data.strategy : {},
   template: data?.template !== undefined ? data.template : {},
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   paused: data?.paused !== undefined ? data.paused : false,
   progressDeadlineSeconds: data?.progressDeadlineSeconds !== undefined ? data.progressDeadlineSeconds : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   revisionHistoryLimit: data?.revisionHistoryLimit !== undefined ? data.revisionHistoryLimit : 0,
   selector: data?.selector !== undefined ? data.selector : {},
 };
}
