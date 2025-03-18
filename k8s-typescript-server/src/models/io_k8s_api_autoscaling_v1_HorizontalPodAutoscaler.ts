/**
* configuration of a horizontal pod autoscaler.
*/
export interface io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler {
/**
* current status of a horizontal pod autoscaler
*/
status?: { currentCPUUtilizationPercentage?: number; currentReplicas: number; desiredReplicas: number; lastScaleTime?: Date; observedGeneration?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
*/
metadata?: { deletionTimestamp?: Date; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; name?: string; resourceVersion?: string; selfLink?: string; finalizers?: string[]; generateName?: string; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; annotations?: Record<string, any>; creationTimestamp?: Date; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string };
/**
* specification of a horizontal pod autoscaler.
*/
spec?: { maxReplicas: number; minReplicas?: number; scaleTargetRef: { apiVersion?: string; kind: string; name: string }; targetCPUUtilizationPercentage?: number };
}

/**
* Create a new io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler with default values
*/
export function createio_k8s_api_autoscaling_v1_HorizontalPodAutoscaler(data?: Partial<io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler>): io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler {
  return {
    status: data?.status !== undefined ? data.status : { currentReplicas: 0, desiredReplicas: 0 },
    apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
    kind: data?.kind !== undefined ? data.kind : '',
    metadata: data?.metadata !== undefined ? data.metadata : {},
    spec: data?.spec !== undefined ? data.spec : { maxReplicas: 0, scaleTargetRef: { kind: '', name: '' } },
  };
}
