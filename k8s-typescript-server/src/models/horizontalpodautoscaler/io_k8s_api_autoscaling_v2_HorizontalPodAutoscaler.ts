/**
* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
* @resourceType horizontalpodautoscaler
* @kind Horizontalpodautoscaler
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionTimestamp?: Date; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; resourceVersion?: string; selfLink?: string; finalizers?: string[]; generateName?: string; generation?: number; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; namespace?: string; creationTimestamp?: Date; name?: string };
/**
* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
* @isObject
*/
spec?: { behavior?: { scaleDown?: { policies?: Array<{ type: string; value: number; periodSeconds: number }>; selectPolicy?: string; stabilizationWindowSeconds?: number }; scaleUp?: { stabilizationWindowSeconds?: number; policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string } }; maxReplicas: number; metrics?: Array<{ resource?: { name: string; target: { type: string; value?: string; averageUtilization?: number; averageValue?: string } }; type: string; containerResource?: { container: string; name: string; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; external?: { metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; object?: { describedObject: { apiVersion?: string; kind: string; name: string }; metric: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name: string }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; pods?: { target: { type: string; value?: string; averageUtilization?: number; averageValue?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } } }>; minReplicas?: number; scaleTargetRef: { apiVersion?: string; kind: string; name: string } };
/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
* @isObject
*/
status?: { observedGeneration?: number; conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }>; currentMetrics?: Array<{ resource?: { current: { value?: string; averageUtilization?: number; averageValue?: string }; name: string }; type: string; containerResource?: { container: string; current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string }; external?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name: string } }; object?: { metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; current: { averageUtilization?: number; averageValue?: string; value?: string }; describedObject: { apiVersion?: string; kind: string; name: string } }; pods?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> } } } }>; currentReplicas?: number; desiredReplicas: number; lastScaleTime?: Date };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Horizontalpodautoscaler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscaler(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { maxReplicas: 0, scaleTargetRef: { name: '', kind: '' } },
   status: data?.status !== undefined ? data.status : { desiredReplicas: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
