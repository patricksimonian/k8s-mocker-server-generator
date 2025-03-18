/**
* DeploymentSpec is the specification of the desired behavior of the Deployment.
* @resourceType deploymentspec
* @kind Deploymentspec
*/
export interface io_k8s_api_apps_v1_DeploymentSpec {
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @required
* @isObject
*/
selector: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> };
/**
* DeploymentStrategy describes how to replace existing pods with new ones.
* @isObject
*/
strategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'Recreate' | 'RollingUpdate' };
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @required
* @isObject
*/
template: { metadata?: { selfLink?: string; annotations?: Record<string, any>; generation?: number; creationTimestamp?: Date; resourceVersion?: string; labels?: Record<string, any>; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; namespace?: string; uid?: string; finalizers?: string[]; generateName?: string; name?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date }; spec?: Record<string, any> };
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
}

/**
* Create a new Deploymentspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DeploymentSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DeploymentSpec(data?: Partial<io_k8s_api_apps_v1_DeploymentSpec>): io_k8s_api_apps_v1_DeploymentSpec {
 return {
   selector: data?.selector !== undefined ? data.selector : {},
   strategy: data?.strategy !== undefined ? data.strategy : {},
   template: data?.template !== undefined ? data.template : {},
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   paused: data?.paused !== undefined ? data.paused : false,
   progressDeadlineSeconds: data?.progressDeadlineSeconds !== undefined ? data.progressDeadlineSeconds : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   revisionHistoryLimit: data?.revisionHistoryLimit !== undefined ? data.revisionHistoryLimit : 0,
 };
}
