/**
* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { creationTimestamp?: Date; deletionTimestamp?: Date; generation?: number; generateName?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; namespace?: string; selfLink?: string; annotations?: Record<string, any>; finalizers?: string[]; name?: string; uid?: string };
/**
* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
*/
spec?: { maxReplicas: number; metrics?: Array<{ containerResource?: { container: string; name: string; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; external?: { metric: { name: string; selector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> } }; target: { type: string; value?: string; averageUtilization?: number; averageValue?: string } }; object?: { target: { value?: string; averageUtilization?: number; averageValue?: string; type: string }; describedObject: { apiVersion?: string; kind: string; name: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; pods?: { metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; resource?: { name: string; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; type: string }>; minReplicas?: number; scaleTargetRef: { apiVersion?: string; kind: string; name: string }; behavior?: { scaleDown?: { policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string; stabilizationWindowSeconds?: number }; scaleUp?: { policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string; stabilizationWindowSeconds?: number } } };
/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
*/
status?: { currentReplicas?: number; desiredReplicas: number; lastScaleTime?: Date; observedGeneration?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; currentMetrics?: Array<{ containerResource?: { container: string; current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string }; external?: { current: { value?: string; averageUtilization?: number; averageValue?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; object?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; describedObject: { apiVersion?: string; kind: string; name: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; pods?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; resource?: { name: string; current: { averageUtilization?: number; averageValue?: string; value?: string } }; type: string }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler with default values
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscaler(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
  return {
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { scaleTargetRef: { kind: '', name: '' }, maxReplicas: 0 },
    status: data?.status !== undefined ? data.status : { desiredReplicas: 0 },
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
  };
}
